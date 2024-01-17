/* eslint-disable @next/next/no-sync-scripts */
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { Providers } from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next"
const cloudSoft = localFont({
  src: [
    {
      path: './fonts/CloudSoft/Cloud-Soft-Light.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/CloudSoft/Cloud-Soft-Bold.otf',
      weight: '700',
      style: 'normal',
    },

  ],
})
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ชุ่มฉ่ำ branding ตัวจริงต้องมีที่ยืน',
  description: 'ชุ่มฉ่ำ branding ตัวจริงต้องมีที่ยืน',
  authors: [{ name: 'Choomcham branding' }],
  keywords: ['Choomcham', 'Choomcham Branding', 'branding', 'courses', 'personal branding', 'marketing', ' brand identity']

}





export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">

      <body className={cloudSoft.className}>
        <Providers>
          {children}
          <SpeedInsights />
        </Providers>
      </body>
      {/* <body className={inter.className}>{children}</body> */}

      {/* <script src='app.js'></script> */}
    </html>

  )
}
