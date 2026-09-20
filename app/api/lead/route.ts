import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, service, locality, homeSize, shift, notes, source } = body;

    // Strict validation: Require real Name and 10+ digit Phone
    const trimmedName = typeof name === "string" ? name.trim() : "";
    const cleanPhone = typeof phone === "string" ? phone.replace(/\D/g, "") : "";

    if (!trimmedName || trimmedName.length < 2 || !cleanPhone || cleanPhone.length < 10) {
      return NextResponse.json(
        { error: "Valid client name and 10-digit phone number are required." },
        { status: 400 }
      );
    }

    const webhookUrl =
      process.env.GOOGLE_SHEET_WEBHOOK_URL ||
      "https://script.google.com/macros/s/AKfycbyQ8P4ADx07Q5r8K435kUTjZ8ojXLeh56RqMc620Kh6eEw0zhizp5ttZeLhowZF-QKM/exec";
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
            service: service || "House Maid Service",
            locality: locality || "Agra",
            homeSize: homeSize || "",
            shift: shift || "",
            notes: notes || `Source: ${source || "Website Callback Form"}`,
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
