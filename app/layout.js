
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <nav>
          <a href="/">Dashboard</a> |
          <a href="/setup">API Setup</a>
        </nav>
        {children}
      </body>
    </html>
  )
}
