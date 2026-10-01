import { NextRequest, NextResponse } from "next/server";

const templates: Record<string, { sections: string[] }> = {
  "corporate": {
    sections: [
      "08:00 — Venue handover / site check",
      "09:00 — Speaker rehearsal (Green Room A)",
      "10:00 — Guest arrival / registration opens",
      "10:30 — Welcome coffee & networking",
      "11:00 — Keynote address",
      "11:45 — Panel discussion (moderated)",
      "12:30 — Networking lunch",
      "14:00 — Breakout sessions (3 tracks)",
      "15:30 — Afternoon keynote",
      "16:15 — Closing remarks",
      "16:30 — Cocktail reception",
      "18:00 — Event close / load-out begins",
    ],
  },
  "product-launch": {
    sections: [
      "16:00 — Venue ready / tech rehearsal",
      "17:00 — Press preview (invite-only)",
      "18:00 — Guest arrival / champagne bar",
      "18:30 — Welcome from host",
      "18:45 — Product reveal (main stage)",
      "19:15 — Live demo / interactive experience",
      "19:45 — Open experience / product trials",
      "20:00 — DJ set / cocktail hour",
      "21:00 — After-party begins",
      "23:00 — Event close",
    ],
  },
  "festival": {
    sections: [
      "09:00 — Site opens / vendor load-in",
      "10:00 — Gates open / box office live",
      "10:30 — Opening act (Main Stage)",
      "12:00 — Second stage programming begins",
      "13:00 — Headliner soundcheck",
      "14:00 — Interactive zone opens",
      "16:00 — Main Stage headline set",
      "17:30 — Sunset session (DJ)",
      "19:00 — Evening headliner",
      "20:30 — Festival close / curfew",
      "21:00 — Load-out commences",
    ],
  },
  "gala": {
    sections: [
      "17:00 — Venue ready / red carpet set",
      "18:00 — Guest arrival / red carpet photos",
      "18:30 — Champagne reception (terrace)",
      "19:00 — Guests seated for dinner",
      "19:15 — Welcome remarks & toast",
      "19:30 — First course served",
      "20:00 — Live auction / paddle raise",
      "20:45 — Entertainment (live performance)",
      "21:15 — Dessert & coffee service",
      "21:30 — Open bar / dancing",
      "22:30 — Program close",
      "23:00 — Event ends / late-night transport",
    ],
  },
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const eventType = body.eventType || "corporate";
    const guestCount = body.guestCount || 100;
    const startTime = body.startTime || "morning";

    const template = templates[eventType] || templates["corporate"];

    // Deterministic adjustments based on guest count
    const adjustedSections = template.sections.map((s, i) => {
      if (guestCount > 500 && s.includes("registration")) {
        return s.replace("opens", "opens (express lanes active)");
      }
      if (guestCount > 1000 && s.includes("lunch")) {
        return s.replace("lunch", "lunch (buffet: 3 stations)");
      }
      return s;
    });

    const runOfShow = {
      title: `${eventType.replace("-", " ").toUpperCase()} — Run of Show`,
      guestCount,
      generatedAt: new Date().toISOString(),
      timeline: adjustedSections.map((timeSlot, idx) => ({
        order: idx + 1,
        timeSlot,
      })),
      notes: [
        "All times are subject to change based on creative walkthrough",
        "Catering & bar setup must be complete 45 min prior to guest arrival",
        "AV lock-down 30 min before doors",
        guestCount > 500 ? "Recommend dedicated production coordinator per zone" : "Single production coordinator sufficient",
        "Weather contingency plan should be confirmed 72h prior",
      ],
    };

    return NextResponse.json(runOfShow, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}