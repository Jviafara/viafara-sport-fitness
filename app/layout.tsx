import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/common/Navbar'
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
    <html
      lang='en'
      className='h-full'
    >
      <body
        className={cn(
          'relative h-full font-sans antialiased bg-white',
          inter.className
        )}
      >
        <main className='relative flex flex-col min-h-screen'>
          <header className='absolute inset-0 z-20 h-fit'>
            <Navbar />
          </header>
          <div className='flex-grow flex-1'>{children}</div>
        </main>
      </body>
    </html>
  )
}
