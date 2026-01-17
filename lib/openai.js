
import OpenAI from "openai"

export async function runPrompt(prompt) {
  const key = localStorage.getItem("OPENAI_API_KEY")
  const client = new OpenAI({
    apiKey: key,
    dangerouslyAllowBrowser: true
  })

  const res = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }]
  })

  return res.choices[0].message.content
}
