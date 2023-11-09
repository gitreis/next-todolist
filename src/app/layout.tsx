import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Todo List',
  description: 'Criado por Rafael Reis Costa.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className="bg-my-bg antialiased">{children}</body>
    </html>
  )
}
