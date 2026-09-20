import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { event, timestamp, url, ...details } = body;

    const webhookUrl =
      process.env.GOOGLE_SHEET_WEBHOOK_URL ||
      "https://script.google.com/macros/s/AKfycbyQ8P4ADx07Q5r8K435kUTjZ8ojXLeh56RqMc620Kh6eEw0zhizp5ttZeLhowZF-QKM/exec";
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
