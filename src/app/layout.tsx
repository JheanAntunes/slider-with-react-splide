import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SplideJsPratica',
  description: 'Projeto para aprender sobre a biblioteca de slider'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body
        className={
          inter.className +
          ' bg-gradient-to-tl from-slate-900 via-slate-800 to-gray-900'
        }
      >
        {children}
      </body>
    </html>
  )
}
