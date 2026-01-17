import OpenAI from "openai"
import { NextResponse } from "next/server"

export async function POST(req) {
  try {
    const { prompt, apiKey } = await req.json()

    const client = new OpenAI({ apiKey })

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }]
    })

    const text =
      response.choices?.[0]?.message?.content ??
      ""
console.log(response)

    return NextResponse.json({ text })
  } catch (e) {
    return NextResponse.json(
      { error: e.message },
      { status: 500 }
    )
  }
}

