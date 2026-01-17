"use client"
import { useState } from "react"
import { runPrompt } from "../../../lib/openai"

export default function Tool() {
  const [out, setOut] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function generate() {
    setLoading(true)
    setError("")
    setOut("")

    try {
      const text = await runPrompt("Write a high converting ad script")

      if (!text) {
        setError("No response returned")
      } else {
        setOut(text)
      }
    } catch (e) {
      setError("Generation failed")
    }

    setLoading(false)
  }

  return (
    <div>
      <button onClick={generate} disabled={loading}>
        {loading ? "Generating..." : "Generate"}
      </button>

      {error && <p>{error}</p>}
      {out && <pre>{out}</pre>}
    </div>
  )
}
