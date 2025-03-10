'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { navigationItems } from '@/lib/utils'
import { usePathname } from 'next/navigation'

function Footer() {
  const pathName = usePathname()
  return (
    <footer className='bg-gradient-to-b from-[#1a1a1b] to-black w-full h-full flex flex-col gap-8 items-center justify-center pt-16 '>
      <div className='flex flex-col md:flex-row gap-8 md:items-start md:justify-evenly h-full px-12 lg:w-[80%]'>
        <div className='text-white md:w-1/2 flex flex-col gap-8 items-center justify-center text-center'>
          <Link
            href='/'
            className='flex items-center justify-center w-full'
          >
            <Image
              src='/images/logoText.png'
              alt='logo'
              width={200}
              height={50}
              className='rounded-md overflow-hidden'
            />
          </Link>
          <p>
            Centro de Acondicionamiento Físico &quot;Viafara-Sport-Fitness&quot;
            <br />
            Gym/Physical Fitness Center <br />
            🏋🏽- Entrenamiento y Fortalecimient Múscular.
            <br /> 🥊-Cardio Box. <br /> 💪🏼-Entrenamiento Funcional.
          </p>
          <div className='flex gap-4 text-primary'>
            <Link
              href={'https://www.facebook.com/profile.php?id=61559235454874'}
              target='_blank'
            >
              <FaFacebook size={28} />
            </Link>
            <Link
              href={'https://www.instagram.com/viafarasportfitness/'}
              target='_blank'
            >
              <FaInstagram size={28} />
            </Link>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-4 md:w-1/2 text-xl text-center text-white'>
          <Link href='/'>
            <Image
              src='/images/logo-graphics.png'
              alt='logo'
              width={80}
              height={80}
              className='rounded-md overflow-hidden'
            />
          </Link>
          <nav className=''>
            <ul className='flex flex-col gap-4'>
              {navigationItems.map(link => (
                <li
                  key={link.name}
                  className={`hover:text-primary ${
                    pathName === link.href && 'text-primary'
                  } cursor-pointer hover:scale-105 hover:font-semibold hover:-translate-y-1`}
                >
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <h1 className='text-slate-500 text-center'>
        Copyright ©2025 Todos los Derechos reservados{' '}
        <span className='hidden md:inline-block'> | </span>{' '}
        <br className='md:hidden' />
        Sitio web desarrollado por Jesús Viafara
      </h1>
    </footer>
  )
}

export default Footer
