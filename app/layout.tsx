import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prabhim Technologies',
  description: 'Custom Software Solutions | Expert-Led Training in Programming, CAD & Testing',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
