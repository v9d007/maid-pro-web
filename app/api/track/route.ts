import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { event, timestamp, url, ...details } = body;

    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (webhookUrl) {
      // Forward to Google Sheet asynchronously
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "event",
          event,
          url,
          timestamp: timestamp || new Date().toISOString(),
          ...details,
        }),
      }).catch(() => {
        // Non-blocking catch
      });
    }

    if (process.env.NODE_ENV === "development") {
      console.log(`📊 [Analytics Event] ${event}:`, details);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
