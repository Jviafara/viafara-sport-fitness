'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { navigationItems } from '@/lib/utils'
import SideMenu from './SideMenu'
import { usePathname } from 'next/navigation'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

function Navbar() {
  const pathName = usePathname()

  const [mainNav, setMainNav] = useState<boolean>(true)
  const onScroll = () => {
    const { scrollY } = window
    if (scrollY > window.innerHeight * 0.5) {
      setMainNav(false)
    } else {
      setMainNav(true)
    }
  }
  useEffect(() => {
    //add eventlistener to window
    if (window.scrollY > window.innerHeight * 0.5) {
      setMainNav(false)
    }
    window.addEventListener('scroll', onScroll)
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      {mainNav ? (
        <div className='text-white bg-black/80'>
          <div className='flex justify-between h-16 items-center relative mx-[10%]'>
            <div className='relative ml-4 flex lg:ml-0 h-full items-center hover:-translate-y-1 hover:scale-110'>
              {/* Logo for Small devices */}
              <Link
                href='/'
                className='md:hidden'
              >
                <Image
                  src='/images/logo-graphics.png'
                  alt='logo'
                  width={80}
                  height={80}
                  className='rounded-md overflow-hidden'
                />
              </Link>
              {/* Logo For bigger devices */}
              <Link
                href='/'
                className='hidden md:block'
              >
                <Image
                  src='/images/logoText.png'
                  alt='logo'
                  width={150}
                  height={35}
                  className='rounded-md overflow-hidden'
                />
              </Link>
            </div>

            <div className='ml-auto flex items-center justify-end md:justify-center flex-grow'>
              <nav className='font-medium text-pretty text-lg lg:text-xl uppercase '>
                <ul className='hidden gap-5 md:flex'>
                  {navigationItems.map(link => (
                    <li
                      key={link.name}
                      className={`hover:text-primary ${
                        pathName === link.href && 'text-primary'
                      } cursor-pointer hover:scale-105 hover:font-semibold hover:-translate-y-1 `}
                    >
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
                <div className='ml-4 flow-root lg:ml-6 md:hidden'>
                  <SideMenu />
                </div>
              </nav>
            </div>

            <div className='gap-4 text-white hidden md:inline-flex'>
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
        </div>
      ) : (
        <div className='bg-black/80 sticky inset-y-0 z-50 text-white  animate-fade-down animate-once animate-ease-linear animate-duration-300'>
          <div className='flex h-16 items-center relative mx-[10%]'>
            <div className='relative ml-4 flex lg:ml-0 h-full items-center hover:-translate-y-1 hover:scale-110'>
              {/* Logo for Small devices */}
              <Link
                href='/'
                className='md:hidden'
              >
                <Image
                  src='/images/logo-graphics.png'
                  alt='logo'
                  width={80}
                  height={80}
                  className='rounded-md overflow-hidden '
                />
              </Link>
              {/* Logo For bigger devices */}
              <Link
                href='/'
                className='hidden md:block'
              >
                <Image
                  src='/images/logoText.png'
                  alt='logo'
                  width={150}
                  height={35}
                  className='rounded-md overflow-hidden'
                />
              </Link>
            </div>

            <div className='ml-auto flex items-center justify-end lg:justify-center flex-grow'>
              <nav className='font-medium text-pretty text-lg lg:text-xl uppercase '>
                <ul className='hidden gap-5 md:flex'>
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
                <div className='ml-4 flow-root lg:ml-6 md:hidden'>
                  <SideMenu />
                </div>
              </nav>
            </div>

            <div className='gap-4 text-white hidden lg:inline-flex'>
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
        </div>
      )}
    </>
  )
}

export default Navbar
