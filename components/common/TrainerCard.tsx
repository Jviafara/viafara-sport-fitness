'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = { name: string; cargo: string; imgUrl: string; estudios: string }

function TrainerCard({ name, cargo, imgUrl, estudios }: Props) {
  return (
    <motion.div className='text-white border border-primary rounded-[50px] w-full  p-4 flex flex-col justify-center items-center'>
      <div className='relative w-48 h-48 overflow-hidden'>
        <Image
          src={imgUrl}
          alt='profile pic'
          fill
          className=' overflow-hidden '
        />
      </div>
      <div className='text-center flex flex-col gap-2 uppercase '>
        <h1 className='text-white font-semibold line-clamp-1'>{name}</h1>
        <hr />
        <span className='font-bold'>{cargo}</span>
        {estudios ? (
          <p className='font-extralight font-serif text-center text-sm text-wrap line-clamp-2'>
            {estudios}
          </p>
        ) : (
          <p>
            <br />
          </p>
        )}
      </div>
    </motion.div>
  )
}

export default TrainerCard
