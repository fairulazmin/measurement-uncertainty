import './globals.css'

export const metadata = {
  title: 'MYSA | Measurement Uncertainty',
  description: 'Measurement uncertainty calculator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
