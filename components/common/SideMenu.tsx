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

export default function SideMenu() {
  return (
    <Sheet>
      <SheetTrigger className='flex items-center p-2'>
        <IoMdMenu
          aria-hidden='true'
          size={28}
          className='hover:text-primary/80 hover:scale-x-110 hover:-translate-y-1'
        />
      </SheetTrigger>
      <SheetContent className='bg-black/80  border-none text-white font-medium  text-2xl uppercase animate-fade-left animate-duration-300'>
        <SheetHeader>
          <SheetTitle className='hidden'>Navigation Menu</SheetTitle>
          <Link href='/'>
            <Image
              src='/images/logoText.png'
              alt='logo'
              width={150}
              height={35}
              className='rounded-md overflow-hidden'
            />
          </Link>
        </SheetHeader>

        <div className='felx w-full pr-6 py-12'>
          <nav className=''>
            <ul className='flex flex-col gap-4'>
              {navigationItems.map(link => (
                <li
                  key={link.name}
                  className='text-white hover:text-primary cursor-pointer hover:scale-105 hover:font-semibold hover:-translate-y-1'
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
