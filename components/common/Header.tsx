import Image from 'next/image'

function Header() {
  return (
    <header className='maxh-screen overflow-hidden top-0 w-full'>
      <div className='bg-black/70 h-screen relative'>
        <Image
          src='/images/banner.jpg'
          alt='banner'
          fill
          className='object-fill object-top grayscale -z-50 overflow-hidden'
        />
        <section className='pt-16 flex flex-col lg:flex-row items-center justify-center lg:justify-start lg:mx-[10%] lg:pt-[10%] gap-8 text-black z-50 rounded-lg py-8'>
          <div className='relative w-96 h-80 flex items-center justify-center  overflow-hidden'>
            <Image
              src={'/images/logo.png'}
              alt='Logo'
              fill
              className='obcover object-center'
            />
          </div>

          <div className='flex flex-col gap-2  uppercase text-white text-justify'>
            <h1 className='text-7xl  font-extralight italic text-left px-3'>
              el cambio
            </h1>
            <span className='bg-primary text-7xl text-black px-6 font-medium '>
              comienza
            </span>
            <span className='text-[12rem] leading-[0.7] text-primary font-bold ]'>
              hoy
            </span>
          </div>
        </section>
      </div>
    </header>
  )
}

export default Header
