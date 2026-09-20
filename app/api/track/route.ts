import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { event, timestamp, url, ...details } = body;

    if (process.env.NODE_ENV === "development") {
      console.log(`📊 [Analytics Event] ${event}:`, details);
    }

    // Optional: Can forward critical events to Google Sheets or telemetry service here if desired

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
