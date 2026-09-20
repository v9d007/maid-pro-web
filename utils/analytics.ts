"use client";

export interface LeadPayload {
  name: string;
  phone: string;
  service: string;
  locality?: string;
  homeSize?: string;
  shift?: string;
  notes?: string;
  source?: string;
}

export interface AnalyticsEvent {
  event: string;
  [key: string]: any;
}

// Global window type for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Log custom interaction events across Google Analytics (if configured)
 * and the internal logging endpoint.
 */
export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  try {
    const payload = {
      event: eventName,
      ...params,
      timestamp: new Date().toISOString(),
      url: typeof window !== "undefined" ? window.location.href : "",
    };

    // 1. Google Analytics 4 (if loaded)
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }

    // 2. Dispatch to serverless tracking endpoint (fire-and-forget)
    if (typeof window !== "undefined" && typeof fetch === "function") {
      fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(() => {
        // Silently catch network errors so UI is never interrupted
      });
    }

    // 3. Dev log
    if (process.env.NODE_ENV === "development") {
      console.log(`[Track Event] ${eventName}:`, params);
    }
  } catch (err) {
    // Non-blocking
  }
}

/**
 * Submit lead enquiry to Google Sheets through Next.js serverless API
 */
export async function submitLeadToSheet(lead: LeadPayload): Promise<{ success: boolean; id?: string }> {
  try {
    // Track conversion event first
    trackEvent("lead_form_submitted", {
      service: lead.service,
      locality: lead.locality || "Agra",
    });

    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...lead,
        timestamp: new Date().toISOString(),
        source: lead.source || "Website Booking Form",
      }),
      keepalive: true,
    });

    if (res.ok) {
      const data = await res.json();
      return { success: true, id: data.id };
    }
    return { success: false };
  } catch (error) {
    console.error("Failed to capture lead to Google Sheet:", error);
    return { success: false };
  }
}
