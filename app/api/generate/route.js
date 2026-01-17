import OpenAI from "openai"
import { NextResponse } from "next/server"

export async function POST(req) {
  try {
    const { prompt, apiKey } = await req.json()

    const client = new OpenAI({
      apiKey
    })

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }]
    })

    return NextResponse.json({
      text: completion.choices[0].message.content
    })
  } catch (e) {
    return NextResponse.json(
      { error: e.message },
      { status: 500 }
    )
  }
}
