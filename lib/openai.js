export async function runPrompt(prompt) {
  const apiKey = localStorage.getItem("OPENAI_API_KEY")

  const res = await fetch("/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    cache: "no-store",
    body: JSON.stringify({
      prompt,
      apiKey
    })
  })

  const data = await res.json()
  return data.text
}

