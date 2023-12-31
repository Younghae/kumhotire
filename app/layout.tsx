import './globals.css'
import type { Metadata } from 'next'
import ThemeRegistry from '@/theme/ThemeRegistry'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import { NextAuthProvider } from './login/_app'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kumhotire TCI System ',
  description: 'TCI Total Monitoring System',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode

}) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <NextAuthProvider>
      <body className={inter.className}>
        <header>
          <Header />
        </header>
        {children}
        </body>
        </NextAuthProvider>
      </ThemeRegistry>
    </html>
  )
}
