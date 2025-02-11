'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'
import Link from 'next/link'
import { ArrowBigRight } from 'lucide-react'

function Header() {
  return (
    <header className='max-h-screen overflow-hidden top-0  w-full'>
      <div className='relative min-h-screen bg-gradient-to-b from-transparent to-[#1a1a1b]'>
        <Image
          src='/images/banner.jpg'
          alt='banner'
          fill
          className='object-fill object-top grayscale -z-50 overflow-hidden'
        />
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className='pt-16 flex flex-col lg:flex-row items-center justify-center lg:justify-start lg:mx-[10%] lg:pt-[10%] gap-16 text-black z-50 rounded-lg py-8 '
        >
          <div className='flex flex-col gap-4 '>
            <div className='relative w-48 h-40 flex items-center justify-center  overflow-hidden'>
              <Image
                src={'/images/logo.png'}
                alt='Logo'
                fill
                className='obcover object-center'
              />
            </div>
            <div className='flex flex-col gap-2  uppercase text-white text-justify'>
              <h1 className='text-3xl -mb-2 font-extrabold italic px-3 w-full text-center'>
                el cambio
              </h1>
              <span className='bg-primary rounded-md text-3xl text-black text-center px-4 font-semibold'>
                comienza
              </span>
              <span className='text-[5rem] leading-[0.7] text-primary text-center font-extrabold font-stretch-[50%]'>
                hoy
              </span>
            </div>
          </div>
        </motion.section>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className='flex flex-col gap-4 items-center justify-center hover:cursor-pointer lg:absolute lg:bottom-[10%] lg:right-[10%]'
        >
          <div className='flex text-4xl text-primary gap-1 md:gap-4 px-[5%] md:px-0'>
            <RiDoubleQuotesL />
            <div className='text-xl md:text-3xl text-center text-white uppercase font-semibold'>
              <h1 className='outline-1 outline-primary'>
                Recuerda que eres el{' '}
                <span className='text-2xl md:text-4xl font-bold text-primary/80'>
                  ingeniero
                </span>
              </h1>
              <h1>de tu propia construccion</h1>
            </div>
            <RiDoubleQuotesR />
          </div>
          <Link
            href='/about'
            className='text-black bg-primary rounded-full px-2 py-1 text-xl md:text-2xl  font font-semibold flex gap-2 items-center '
          >
            Conoce mas sobre nosotros{' '}
            <ArrowBigRight
              size={24}
              className='animate-wiggle-more animate-infinite animate-ease-in-out animate-duration-300'
            />
          </Link>
        </motion.div>
      </div>
    </header>
  )
}

export default Header
