
"use client"
import { useState } from "react"
import { runPrompt } from "../../../lib/openai"

export default function Tool() {
  const [out, setOut] = useState("")

  return (
    <div>
      <button onClick={async () => setOut(await runPrompt("Write product copy to boost online store sales"))}>
        Generate
      </button>
      <pre>{out}</pre>
    </div>
  )
}
