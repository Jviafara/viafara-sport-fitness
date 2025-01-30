import Image from 'next/image'

function Header() {
  return (
    <header className='max-h-screen overflow-hidden top-0 -z-50 w-full'>
      <div className='bg-black/60 h-screen relative'>
        <Image
          src='/images/banner.jpg'
          alt='banner'
          fill
          className='object-fill object-top grayscale -z-50 overflow-hidden'
        />
        <section className='pt-16 flex flex-col lg:flex-row items-center justify-center lg:justify-start lg:mx-[10%] lg:pt-[10%] gap-16 text-black z-50 rounded-lg py-8  animate-fade-up animate-ease-linear animate-duration-500'>
          <div className='relative w-96 h-80 flex items-center justify-center  overflow-hidden'>
            <Image
              src={'/images/logo.png'}
              alt='Logo'
              fill
              className='obcover object-center'
            />
          </div>

          <div className='flex flex-col gap-2  uppercase text-white text-justify'>
            <h1 className='text-7xl  font-extralight italic px-3 w-full text-center'>
              el cambio
            </h1>
            <span className='bg-primary rounded-md text-7xl text-black px-6 pb-2 font-medium'>
              comienza
            </span>
            <span className='text-[12rem] leading-[0.7] text-primary font-bold font-stretch-[50%]'>
              hoy
            </span>
          </div>
        </section>
      </div>
    </header>
  )
}

export default Header
