import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Khushwant Parihar | 3D Portfolio',
  description: 'B.E CSE AI & ML Student | Full Stack Developer | Google Student Ambassador',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}