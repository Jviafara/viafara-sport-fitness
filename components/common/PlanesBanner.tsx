'use client'
import { planes } from '@/lib/utils'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

function Planesbanner() {
  return (
    <section className='relative w-full  text-white text-center bg-gradient-to-b from-black via-transparent to-[#1a1a1b] flex flex-col items-center justify-between gap-8 py-16'>
      <Image
        src={'/images/contactBanner.png'}
        alt='banner'
        fill
        className='hidden lg:block relative object-cover overflow-hidden object-center -z-50 '
      />
      <h1 className='text-4xl font-semibold text-primary my-16'>
        Planes Basicos
      </h1>
      <div className='w-full h-full flex flex-col lg:flex-row px-[10%] items-center justify-evenly gap-8'>
        {planes.slice(0, 3).map(plan => (
          <Link
            href={`/servicios#${plan.name}`}
            key={plan.name}
            className='w-full'
          >
            <motion.div
              initial={{ opacity: 0, backdropFilter: 'blur(0PX)' }}
              whileInView={{ opacity: 1, backdropFilter: 'blur(10px)' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className='relative skew-x-[-10deg] -rotate-6 py-12 px-4 border-1 border-primary flex flex-col items-center gap-4 group hover:bg-primary/70 hover:text-[#1a1a1b] bg-white/20'
            >
              <h1 className='text-xl md:text-2xl lg:text-3xl uppercase rotate-6'>
                {plan.name}
              </h1>
              <p className='text-lg md:text-xl lg:text-2xl font-serif font-bold rotate-6'>
                $ {plan.price} cop
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
      <div className='flex gap-16'>
        <Link
          href={'/servicios#planes'}
          className='uppercase w-fit my-16 bg-primary/70 text-[#1a1a1b] font-bold p-4 rounded-xl hover:bg-[#1a1a1b] hover:text-white text-xl'
        >
          Todos los planes
        </Link>
        <Link
          href={'/contacto'}
          className='uppercase w-fit my-16 bg-primary/70 text-[#1a1a1b] font-bold p-4 rounded-xl hover:bg-[#1a1a1b] hover:text-white text-xl'
        >
          Contactanos
        </Link>
      </div>
    </section>
  )
}

export default Planesbanner
