'use client'
import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { IoMdMenu } from 'react-icons/io'
import Link from 'next/link'
import { navigationItems } from '@/lib/utils'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

export default function SideMenu() {
  const pathName = usePathname()

  return (
    <Sheet>
      <SheetTrigger className='flex items-center p-2'>
        <IoMdMenu
          aria-hidden='true'
          size={28}
          className='hover:text-primary/80 hover:scale-x-110 hover:-translate-y-1'
        />
      </SheetTrigger>
      <SheetContent className='bg-black/80  border-none text-white font-medium flex flex-col gap-8 text-2xl uppercase animate-fade-left animate-duration-300'>
        <SheetHeader className='flex gap-4'>
          <SheetTitle className='hidden'>Navigation Menu</SheetTitle>
          <Link
            href='/'
            className='w-fit p-4'
          >
            <Image
              src='/images/logoText.png'
              alt='logo'
              width={150}
              height={35}
              className='rounded-md overflow-hidden'
            />
          </Link>
          <div className='gap-4 text-white flex'>
            <Link
              href={'https://www.facebook.com/profile.php?id=61559235454874'}
              target='_blank'
              className='hover:text-primary'
            >
              <FaFacebook size={28} />
            </Link>
            <Link
              href={'https://www.instagram.com/viafarasportfitness/'}
              target='_blank'
              className='hover:text-primary'
            >
              <FaInstagram size={28} />
            </Link>
          </div>
        </SheetHeader>

        <div className='felx w-full pr-6'>
          <nav className=''>
            <ul className='flex flex-col gap-4'>
              {navigationItems.map(link => (
                <li
                  key={link.name}
                  className={`hover:text-primary ${
                    pathName === link.href && 'text-primary'
                  } cursor-pointer hover:scale-105 hover:font-semibold hover:-translate-y-1`}
                >
                  <SheetClose asChild>
                    <Link href={link.href}>{link.name}</Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}
