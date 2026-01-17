
"use client"
import { useState } from "react"
import { runPrompt } from "../../../lib/openai"

export default function Tool() {
  const [out, setOut] = useState("")

  return (
    <div>
      <button onClick={async () => setOut(await runPrompt("Generate optimized AI prompts"))}>
        Generate
      </button>
      <pre>{out}</pre>
    </div>
  )
}
