'use client'
import { servicios } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowBigRight } from 'lucide-react'
import { motion } from 'framer-motion'

function ServicesBanner() {
  return (
    <>
      <div className='flex flex-col items-center justify-center my-16 w-full sm:p-[10%] md:p-0'>
        <h1 className='text-primary text-2xl md:text-4xl uppercase text-center font-bold'>
          Lo que te ofrecemos!
        </h1>
        <section className='w-full xl:w-[80%] h-fit text-white bg-black/10 flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row items-center justify-between  gap-12 py-16'>
          {servicios.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: (index + 1) / 4,
                ease: 'easeIn',
              }}
              viewport={{ once: true }}
              key={index}
              className={`px-8 w-full h-full xl:w-1/3 flex  flex-col gap-2 items-center justify-between  text-white ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div className='w-full h-[250px] xl:h-[300px] relative '>
                <Image
                  src={item.images[0]}
                  alt='image'
                  fill
                  className='object-fill object-center rounded-xl'
                />
              </div>
              <motion.div className=' w-full py-4 text-xl h-fit uppercase'>
                <Link
                  href={item.href}
                  className='flex justify-between items-center'
                >
                  <h1 className='w-full'>{item.title}</h1>
                  <div className='py-1 px-2 text-primary/70 hover:text-white/80  bg-black/70 hover:bg-primary/90  rounded-xl transition-all duration-300'>
                    <ArrowBigRight size={48} />
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </section>
      </div>
    </>
  )
}

export default ServicesBanner
