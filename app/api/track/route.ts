import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { event, ...details } = body;

    if (process.env.NODE_ENV === "development") {
      console.log(`📊 [Analytics Event] ${event}:`, details);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
