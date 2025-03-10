import Image from 'next/image'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'

function AboutUs() {
  return (
    <div className='w-full flex flex-col px-[10%] items-center lg:justify-between xl:flex-row gap-12'>
      <div className='w-1/2  h-[12vh] md:h-[25vh]  lg:w-[30%] relative'>
        <Image
          src={'/images/logo.png'}
          alt='logo'
          fill
          className='object-fill overflow-hidden'
        />
      </div>
      <div className='w-full xl:w-3/5 flex flex-col items-center justify-center gap-4'>
        <h1 className='uppercase text-left  text-xl lg:text-2xl  font-bold text-primary/80'>
          Sobre Nosotros.
        </h1>
        <p className='text-left md:text-lg lg:text-xl leading-7 font-semibold'>
          Viafara Sport fitness es un centro de acondicionamiento físico, que
          fue fundada en 2021 con la intención de contribuir en la mejora de la
          salud, el bienestar físico y mental de las personas a través del
          ejercicio físico. Gracias a un grupo de personas lideradas por{' '}
          <span className='text-primary/80 uppercase'>EDINSON VIAFARA</span>{' '}
          quienes en plena pandemia decidieron realizar actividades que les
          permitiera sentirse activos y dinámicos a través del ejercicio. Poco a
          poco el grupo se fue fortaleciendo dia a dia creciendo más hasta
          lograr consolidar una idea y un nombre llamado:
        </p>
        <p className='text-primary uppercase flex gap-1 md:text-lg lg:text-xl leading-7 font-semibold'>
          <RiDoubleQuotesL />
          CENTRO DE ACONDICIONAMIENTO FISICO VIAFARA SPORT FITNESS
          <RiDoubleQuotesR />
        </p>
        <p className='text-left md:text-lg lg:text-xl leading-7 font-semibold'>
          La marca se caracteriza por tener un amplio catálogo de servicios, que
          incluye entrenamiento funcional, fortalecimiento muscular,
          entrenamiento crossfit etc. Viafara Sport fitness hoy por hoy se
          conoce como uno de los Gimnasios con mayor proyección en el Municipio
          de Fonseca. Está ubicado en la{' '}
          <span className='text-primary/80'>calle 17#13-06</span> en el
          Municipio de Fonseca Departamento de la Guajira. En el 2024 fue
          beneficiado por el fondo emprender a través del Sena quien a través de
          capacitaciones y apoyo lograron formalizar la empresa generando empleo
          y prometiendo a sus clientes profesionalismo, bienestar y salud a
          través del ejerció.
        </p>
      </div>
    </div>
  )
}

export default AboutUs
