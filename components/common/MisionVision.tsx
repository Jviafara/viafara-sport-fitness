function MisionVision() {
  return (
    <div className='w-full flex flex-col md:flex-row px-[10%] items-center md:items-start lg:justify-evenly gap-12 my-16 '>
      <div className='md:w-1/2'>
        <h1 className='uppercase md:text-center  text-xl lg:text-2xl  font-bold text-primary/80'>
          Misión
        </h1>
        <p className='lg:text-lg leading-7 font-semibold md:text-center '>
          Ofrecer un lugar para desarrollar actividades físicas, equipados con
          los mejores equipos y personal capacitado, dando un trato sumamente
          especializado y un contexto de constante motivación. Hacer de nuestras
          instalaciones un espacio de paz que permita que nuestros clientes lo
          vean como un lugar para la convivencia, la recreación, la lúdica y la
          sana socialización.
        </p>
      </div>
      <div className='md:w-1/2'>
        <h1 className='uppercase md:text-center  text-xl lg:text-2xl font-bold text-primary/80'>
          Visión
        </h1>
        <p className='lg:text-lg leading-7 font-semibold md:text-center '>
          Aspiramos a convertirnos en la empresa Nº1 de nuestro Municipio.
          Desarrollar planes de actividad física que basados en la teoría del
          entrenamiento deportivo, permitan al cliente poder cumplir sus
          objetivos de manera eficaz y saludable a través del ejercicio.
        </p>
      </div>
    </div>
  )
}

export default MisionVision
