import { NextResponse } from "next/server";
import { geminiClient, GEMINI_MODEL } from "@/lib/ai";

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    if (!text) {
      return NextResponse.json({ error: "No text provided" }, { status: 400 });
    }

    const systemPrompt = `
    You are a dual-mode career identity engine.
    You must perform three tasks on the user's input (Bio/Resume/Profile URL):
    1. ROAST: Be a toxic Silicon Valley recruiter / Gordon Ramsay hybrid. Brutally roast their resume. Use caps, sarcasm, and tech slang. Be savage but funny.
    2. GLOW-UP: Be a top-tier Executive Brand Strategist. Rewrite their bio to be clean, premium, and impactful. Apple-style marketing copy.
    3. IDENTITY_AGENT: Extract structured data for a "faceless identity" platform.

    Return ONLY a JSON object with this structure:
    {
      "roast": "string (markdown allowed)",
      "glowUp": "string (markdown allowed)",
      "identity": {
        "skills": ["string"],
        "experience_years": "string",
        "role_match": "string",
        "key_achievements": ["string"]
      }
    }
    `;

    const response = await geminiClient.models.generateContent({
      model: GEMINI_MODEL,
      contents: `${systemPrompt}\n\nUser Input:\n${text}`,
      config: {
        responseMimeType: "application/json",
      },
    });

    const content = response.text;
    const data = content ? JSON.parse(content) : null;

    if (!data) {
      throw new Error("Failed to parse AI response");
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Analyze API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
