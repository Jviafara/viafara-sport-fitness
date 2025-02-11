'use client'
import { servicios } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ArrowBigDown } from 'lucide-react'
import Image from 'next/image'

function Services() {
  const goTo = (id: string) => {
    console.log(id)
  }
  return (
    <div className='w-full flex flex-col items-center justify-normal'>
      <h1 className='text-3xl text-primary/80 font-bold text-center'>
        ¿Que te ofrecemos?
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
                src={item.img}
                alt='image'
                fill
                className='object-fill object-center rounded-xl'
              />
            </div>
            <div className=' w-full py-4 text-xl h-fit uppercase'>
              <button
                onClick={() => goTo(item.href.split('#')[1])}
                className='flex justify-between items-center w-full'
              >
                <h1>{item.title}</h1>
                <div className='py-1 px-2 text-primary/70 hover:text-white/80  bg-black/70 hover:bg-primary/90  rounded-xl transition-all duration-300'>
                  <ArrowBigDown size={48} />
                </div>
              </button>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  )
}

export default Services
