import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Touch Wood Technical Services L.L.C | Expert Technical Services in Dubai',
  description: 'Expert technical services in Dubai since 2011. Carpentry, electrical maintenance, building cleaning, AC installation, painting, tiling, and wallpaper fixing.',
  keywords: ['Dubai construction', 'maintenance services', 'carpentry Dubai', 'electrical maintenance', 'AC installation Dubai'],
}

export const viewport: Viewport = {
  themeColor: '#5a4a3a',
}

import { PageAnimationWrapper } from "@/components/page-animation-wrapper"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased text-balance`}>
        <PageAnimationWrapper>
          {children}
        </PageAnimationWrapper>
        <Analytics />
      </body>
    </html>
  )
}
