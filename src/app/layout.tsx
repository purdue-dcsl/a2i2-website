'use client';

import './globals.css'
import Navbar from "./navbar"
import { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google'

const font = Noto_Sans({ weight: ['400'], subsets: ['cyrillic'] })

export const metadata: Metadata = {
  title: 'A2I2',
  description: 'A2I2',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  )
}
