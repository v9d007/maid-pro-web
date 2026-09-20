import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, service, locality, homeSize, shift, notes, source } = body;

    // Basic validation
    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone number are required." },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    let externalId = `MP-${Date.now().toString().slice(-6)}`;

    if (webhookUrl) {
      try {
        const sheetResponse = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            phone,
            service: service || "General Maid/Cleaning Inquiry",
            locality: locality || "Agra",
            homeSize: homeSize || "Standard Home",
            shift: shift || "Flexible Shift",
            notes: notes || `Source: ${source || "Web"}`,
          }),
        });

        if (sheetResponse.ok) {
          const result = await sheetResponse.json().catch(() => null);
          if (result && result.id) {
            externalId = result.id;
          }
        }
      } catch (sheetError) {
        console.error("Error forwarding lead to Google Sheet webhook:", sheetError);
      }
    } else {
      console.log("[Lead Captured (Local/Dev)]:", {
        id: externalId,
        name,
        phone,
        service,
        locality,
        time: new Date().toISOString(),
      });
    }

    return NextResponse.json({
      success: true,
      id: externalId,
      message: "Lead recorded successfully",
    });
  } catch (error) {
    console.error("Failed to process lead:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
