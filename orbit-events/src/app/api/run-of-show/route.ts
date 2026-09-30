import { NextRequest, NextResponse } from "next/server";

// Fallback run-of-show templates when no AI API key is configured
const fallbackTemplates: Record<string, { title: string; time: string; items: { time: string; activity: string; notes: string }[] }> = {
  corporate: {
    title: "Corporate Conference — Run of Show",
    time: "08:00 – 18:00",
    items: [
      { time: "08:00", activity: "Venue opens / Crew call", notes: "AV tech check, lighting cue verification, stage walk-through" },
      { time: "09:00", activity: "Registration & Badge Pickup", notes: "2 stations, coffee & light refreshments available" },
      { time: "10:00", activity: "Opening Keynote", notes: "CEO welcome address, 20 min + Q&A" },
      { time: "10:45", activity: "Panel Discussion", notes: "Moderator + 3 panelists, 35 min" },
      { time: "11:30", activity: "Networking Break", notes: "Coffee, tea, light snacks — 30 min" },
      { time: "12:00", activity: "Workshop Sessions (Breakouts)", notes: "3 concurrent tracks, 60 min" },
      { time: "13:00", activity: "Lunch", notes: "Buffet service, networking" },
      { time: "14:00", activity: "Afternoon Keynote", notes: "Guest speaker, 25 min + Q&A" },
      { time: "14:45", activity: "Product Demo / Fireside Chat", notes: "30 min" },
      { time: "15:30", activity: "Afternoon Break", notes: "Refreshments, 20 min" },
      { time: "16:00", activity: "Closing Session & Awards", notes: "Recap, recognitions, closing remarks — 45 min" },
      { time: "17:00", activity: "Cocktail Reception", notes: "Bar opens, hors d'oeuvres, networking" },
      { time: "18:00", activity: "Venue doors close", notes: "Crew strike begins" },
    ],
  },
  gala: {
    title: "Annual Gala — Run of Show",
    time: "17:00 – 23:00",
    items: [
      { time: "17:00", activity: "Venue opens / Crew call", notes: "Lighting, AV, stage final checks" },
      { time: "18:00", activity: "Cocktail Hour / Reception", notes: "Welcome drinks, silent auction open, live jazz trio" },
      { time: "19:00", activity: "Doors open / Seating", notes: "Guests move to dinner tables" },
      { time: "19:30", activity: "Welcome & Dinner Service", notes: "Master of ceremonies welcome, appetizer course" },
      { time: "20:15", activity: "Entr&eacute;e Service", notes: "Wine pairing" },
      { time: "20:45", activity: "Live Auction", notes: "Auctioneer-led, 8 lots" },
      { time: "21:30", activity: "Dessert & Entertainment", notes: "Featured performance or keynote" },
      { time: "22:00", activity: "Fundraising Appeal", notes: "Paddle raise / donation push" },
      { time: "22:30", activity: "Closing Remarks & After-Party", notes: "DJ set, late-night bites" },
      { time: "23:00", activity: "Venue curfew", notes: "Crew strike" },
    ],
  },
  festival: {
    title: "Music Festival — Run of Show (Day)",
    time: "10:00 – 23:00",
    items: [
      { time: "08:00", activity: "Site opens / Crew call", notes: "Stage sound checks, vendor setup, safety briefing" },
      { time: "10:00", activity: "Gates open", notes: "Security check, wristband scanning" },
      { time: "10:30", activity: "Opening Set — Small Stage", notes: "Local opener, 45 min" },
      { time: "11:30", activity: "Main Stage — Act 1", notes: "Mid-tier artist, 60 min" },
      { time: "12:30", activity: "Wellness / Workshop Zone open", notes: "Yoga, sound bath, art workshops" },
      { time: "13:00", activity: "F&B peak service", notes: "All vendors open, hydration stations" },
      { time: "14:00", activity: "Main Stage — Headliner Prep", notes: "Line check, guest green room" },
      { time: "15:00", activity: "Main Stage — Act 2", notes: "Featured artist, 75 min" },
      { time: "17:00", activity: "Silent Disco opens", notes: "Two-channel experience" },
      { time: "19:00", activity: "Main Stage — Evening Headliner", notes: "Headliner, 90 min" },
      { time: "21:00", activity: "Late-night Stage opens", notes: "DJ sets until close" },
      { time: "23:00", activity: "Site curfew", notes: "Music ends, crowd egress, cleanup begins" },
    ],
  },
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { eventType, guestCount, date, description } = body;

    // If no API key, return deterministic fallback
    if (!process.env.OPENAI_API_KEY && !process.env.ANTHROPIC_API_KEY) {
      const normalizedType = (eventType ?? "").toLowerCase();
      let template = fallbackTemplates.corporate;
      if (normalizedType.includes("gala") || normalizedType.includes("fundraiser")) {
        template = fallbackTemplates.gala;
      } else if (normalizedType.includes("festival") || normalizedType.includes("concert")) {
        template = fallbackTemplates.festival;
      }

      return NextResponse.json({
        success: true,
        source: "fallback",
        data: {
          title: template.title,
          totalDuration: template.time,
          eventType: eventType || "corporate",
          guestCount: guestCount || "N/A",
          date: date || "TBD",
          items: template.items,
        },
      });
    }

    // AI-powered generation (when API key is available)
    const prompt = `Generate a detailed run-of-show timeline for the following event:
- Event type: ${eventType || "Corporate Event"}
- Estimated guests: ${guestCount || "N/A"}
- Date: ${date || "TBD"}
- Description: ${description || "Standard format"}

Return a JSON object with: title, totalDuration, items (array of { time, activity, notes }).`;

    const llmResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are an expert event producer. Output valid JSON only — no markdown, no code fences.",
          },
          { role: "user", content: prompt },
        ],
        temperature: 0.7,
      }),
    });

    if (!llmResponse.ok) {
      throw new Error(`LLM API error: ${llmResponse.status}`);
    }

    const llmData = await llmResponse.json();
    const parsed = JSON.parse(llmData.choices?.[0]?.message?.content ?? "{}");

    return NextResponse.json({
      success: true,
      source: "ai",
      data: {
        title: parsed.title || "Generated Run of Show",
        totalDuration: parsed.totalDuration || "TBD",
        eventType: eventType || "corporate",
        guestCount: guestCount || "N/A",
        date: date || "TBD",
        items: parsed.items || [],
      },
    });
  } catch (err) {
    console.error("Run of show error:", err);
    // Return fallback on any error
    return NextResponse.json({
      success: true,
      source: "fallback",
      data: {
        title: fallbackTemplates.corporate.title,
        totalDuration: fallbackTemplates.corporate.time,
        eventType: "corporate",
        guestCount: "N/A",
        date: "TBD",
        items: fallbackTemplates.corporate.items,
      },
    });
  }
}