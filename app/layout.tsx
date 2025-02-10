import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/common/Navbar'
import ScrollUpButton from '@/components/common/ScrollUpButton'
import Footer from '@/components/common/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Viafara Sport Fitness',
  description:
    'Pagina web de Viafara Sport Fitness, Centro de Acondicionamiento Físico "Viafara-Sport-Fitness" ubicado en Fonseca, La Guajira, Colombia.',
  icons: { icon: { url: '/images/icon.png' } },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'relative h-full font-sans antialiased bg-black animate-fade',
          inter.className
        )}
      >
        <main className='relative flex flex-col min-h-screen'>
          <Navbar />
          <div className='flex-grow flex-1'>{children}</div>
          <ScrollUpButton />
        </main>

        <Footer />
      </body>
    </html>
  )
}
