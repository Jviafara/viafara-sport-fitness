import { planes } from '@/lib/utils'

function Planes() {
  return (
    <div
      id='planes'
      className='w-full flex flex-col gap-8 items-center justify-normal'
    >
      <h1 className='text-3xl lg:text-4xl text-primary/80 font-bold text-center'>
        Precios y Planes
      </h1>
      <div className='w-[85%] flex flex-wrap justify-center md:justify-center items-center gap-8'>
        {planes.map((plan, index) => (
          <div
            id={plan.name}
            key={index}
            className='flex flex-col md:gap-4 py-4 px-2 sm:px-4 md:px-16 bg-white/30 md:skew-x-[-20deg] text-center rounded-xl'
          >
            <h1 className='text-xl font-bold'>{plan.name}</h1>
            <p className='font-mono text-lg text-primary'>${plan.price} cop</p>
            <p className=''>
              Cupos:{' '}
              <span className='text-primary font-semibold'>{plan.cupos}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Planes
