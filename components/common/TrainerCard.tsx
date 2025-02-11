'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = { name: string; cargo: string; imgUrl: string }

function TrainerCard({ name, cargo, imgUrl }: Props) {
  return (
    <motion.div className='text-white xl:w-fit  border border-primary rounded-[50px] p-8 flex flex-col justify-center items-center'>
      <div className='relative w-48 h-48 overflow-hidden'>
        <Image
          src={imgUrl}
          alt='profile pic'
          fill
          className=' overflow-hidden '
        />
      </div>
      <div className='text-center flex flex-col gap-2 uppercase'>
        <h1 className='text-white font-semibold'>{name}</h1>
        <hr />
        <span className='font-bold'>{cargo}</span>
      </div>
    </motion.div>
  )
}

export default TrainerCard
