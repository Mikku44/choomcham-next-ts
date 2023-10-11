/* eslint-disable @next/next/no-sync-scripts */
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ชุ่มฉ่ำ branding ตัวจริงต้องมีที่ยืน',
  description: 'ชุ่มฉ่ำ branding ตัวจริงต้องมีที่ยืน',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <body className='overflow-x-hidden'>{children}</body>
      {/* <body className={inter.className}>{children}</body> */}
   
    <script src='app.js'></script>
    </html>
  
  )
}
