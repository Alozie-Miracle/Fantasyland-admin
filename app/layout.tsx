import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from "next/font/google";

const inter = Poppins({ weight: "600", preload: false });

export const metadata: Metadata = {
  title: 'FANTASY ISLAND ADMIN',
  description: 'Welcome to fantasy island',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
