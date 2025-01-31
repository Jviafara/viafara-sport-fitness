'use client'

import { Dumbbell } from 'lucide-react'
import { GiWeightLiftingUp } from 'react-icons/gi'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'
import { TbTreadmill } from 'react-icons/tb'
import { motion } from 'framer-motion'

const reasonsItems = [
  {
    title: 'Maquinaria Moderna',
    icon: <TbTreadmill size={38} />,
    description:
      'Contamos con maquinas y equipamento modenerdo y de alta calidad para garantizar un mejor rndimiento en el entrenamienbto y evitatr lesiones.',
  },
  {
    title: 'Plan de entrenamiento Profecional',
    icon: <Dumbbell size={38} />,
    description:
      'Con la ayuda del equipo de entrenamiento deportivo se crearon planes de entrenamientos efectivos y accecibles para todo tipo de personas.',
  },
  {
    title: 'Entrenamiento Personalizado',
    icon: <GiWeightLiftingUp size={38} />,
    description:
      'Con la guia de nuestros entrenadores crea y sigue un plan de entrenamiento diseñádo especialmente para tus necesidades y metas.',
  },
]

function ReasonsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
      viewport={{ once: true }}
      className='w-full bg-gradient-to-b from-[#1a1a1b] to-bg-blak h-fit py-8 md:py-16 lg:py-28  px-2 md:px-8 lg:px-16 text-white flex flex-col items-center justify-center gap-12'
    >
      <p className='text-center text-primary/80 text-base md:text-xl lg:text-2xl -mb-4 uppercase'>
        Porque entrenar con nosotros?
      </p>
      <div className='flex text-4xl text-primary'>
        <RiDoubleQuotesL />
        <h1 className='text-xl md:text-3xl text-center text-white uppercase'>
          Recuerda que eres el ingeniero de tu propia construccion
        </h1>
        <RiDoubleQuotesR />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className='flex flex-col md:flex-row mx-4 md:mx-0 lg:w-[80%] items-center justify-between gap-4 lg:gap-12'
      >
        {reasonsItems.map(item => (
          <div
            key={item.title}
            className='flex flex-col justify-between items-center gap-4 text-center py-4 md:py-8 xl:px-12 h-full w-full'
          >
            <hr className='w-full md:hidden  text-primary' />
            <h1 className='md:text-lg lg:text-xl text-center uppercase'>
              {item.title}
            </h1>
            <div className='text-primary  bg-white/30 hover:bg-primary/60 w-fit h-fit p-4 md:p-8 rounded-full hover:scale-110  hover:transition-all hover:duration-500 hover:ease-in-out hover:text-white'>
              {item.icon}
            </div>
            <p className='text-gray-400 lg:text-lg'>{item.description}</p>
          </div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default ReasonsSection
