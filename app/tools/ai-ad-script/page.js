
"use client"
import { useState } from "react"
import { runPrompt } from "../../../lib/openai"

export default function Tool() {
  const [out, setOut] = useState("")

  return (
    <div>
      <button onClick={async () => setOut(await runPrompt("Write a high converting ad script"))}>
        Generate
      </button>
      <pre>{out}</pre>
    </div>
  )
}
