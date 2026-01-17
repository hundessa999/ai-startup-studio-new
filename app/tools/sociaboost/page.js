
"use client"
import { useState } from "react"
import { runPrompt } from "../../../lib/openai"

export default function Tool() {
  const [out, setOut] = useState("")

  return (
    <div>
      <button onClick={async () => setOut(await runPrompt("Generate social media growth ideas"))}>
        Generate
      </button>
      <pre>{out}</pre>
    </div>
  )
}
