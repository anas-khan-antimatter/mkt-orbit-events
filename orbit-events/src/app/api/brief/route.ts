import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, org, type, guests, city, budget, description } = body;

    // Log the brief (in production this would write to a CRM/DB)
    console.log("[BRIEF]", { name, email, org, type, guests, city, budget, description: description?.slice(0, 100) });

    // Deterministic fallback response — no external API key required
    const response = {
      status: "received",
      message: "Your event brief has been received. Our team will review and respond within 24 hours with a creative direction proposal and a rough budget band.",
      referenceId: `BRF-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`,
      estimatedResponse: "24 hours",
    };

    return NextResponse.json(response, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}