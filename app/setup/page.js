
"use client"
export default function Setup() {
  return (
    <div>
      <h2>OpenAI API Setup</h2>
      <input id="k" placeholder="sk-..." />
      <button onClick={() => {
        localStorage.setItem("OPENAI_API_KEY", document.getElementById("k").value)
        alert("API Key Saved")
      }}>Save</button>
    </div>
  )
}
