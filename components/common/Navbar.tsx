'use client'
import React, { useEffect, useState } from 'react'
import MaxWidthWraper from './MaxWidthWraper'
import Image from 'next/image'
import Link from 'next/link'
import { navigationItems } from '@/lib/utils'
import SideMenu from './SideMenu'

function Navbar() {
  const [mainNav, setMainNav] = useState<boolean>(true)
  const onScroll = () => {
    const { scrollY } = window
    if (scrollY > window.innerHeight / 2) {
      setMainNav(false)
    } else {
      setMainNav(true)
    }
  }
  useEffect(() => {
    //add eventlistener to window
    window.addEventListener('scroll', onScroll, { passive: true })
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      {mainNav ? (
        <MaxWidthWraper className=' text-black'>
          <div className='flex h-16 items-center relative'>
            <div className='relative ml-4 flex lg:ml-0 h-full items-center hover:-translate-y-1 hover:scale-110'>
              {/* Logo for Small devices */}
              <Link
                href='/'
                className='lg:hidden'
              >
                <Image
                  src='/images/logo-graphics.png'
                  alt='logo'
                  width={80}
                  height={80}
                  className='rounded-md overflow-hidden -translate-y-2'
                />
              </Link>
              {/* Logo For bigger devices */}
              <Link
                href='/'
                className='hidden lg:block'
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

            <div className='ml-auto flex items-center'>
              <nav className='font-medium text-pretty text-xl uppercase '>
                <ul className='hidden gap-5 md:flex'>
                  {navigationItems.map(link => (
                    <li
                      key={link.name}
                      className='hover:text-primary cursor-pointer hover:scale-105 hover:font-semibold hover:-translate-y-1'
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
          </div>
        </MaxWidthWraper>
      ) : (
        <MaxWidthWraper className='sticky z-50 top-0 inset-y-0 text-white bg-black/80 animate-fade-down animate-once animate-ease-linear animate-duration-300'>
          <div className='flex h-16 items-center relative '>
            <div className='relative ml-4 flex lg:ml-0 h-full items-center hover:-translate-y-1 hover:scale-110'>
              {/* Logo for Small devices */}
              <Link
                href='/'
                className='lg:hidden'
              >
                <Image
                  src='/images/logo-graphics.png'
                  alt='logo'
                  width={80}
                  height={80}
                  className='rounded-md overflow-hidden -translate-y-2'
                />
              </Link>
              {/* Logo For bigger devices */}
              <Link
                href='/'
                className='hidden lg:block'
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

            <div className='ml-auto flex items-center'>
              <nav className='font-medium text-pretty text-xl uppercase '>
                <ul className='hidden gap-5 md:flex'>
                  {navigationItems.map(link => (
                    <li
                      key={link.name}
                      className='hover:text-primary cursor-pointer hover:scale-105 hover:font-semibold hover:-translate-y-1'
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
          </div>
        </MaxWidthWraper>
      )}
    </>
  )
}

export default Navbar
