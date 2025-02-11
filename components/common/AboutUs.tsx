import Image from 'next/image'

function AboutUs() {
  return (
    <div className='w-full flex flex-col px-[10%] items-center lg:justify-between xl:flex-row gap-12 min-h-screen md:min-h-0'>
      <div className='w-1/2  h-[12vh] md:h-[25vh]  lg:w-[30%] relative'>
        <Image
          src={'/images/logo.png'}
          alt='logo'
          fill
          className='object-fill overflow-hidden'
        />
      </div>
      <div className='w-full xl:w-3/5 flex flex-col items-center justify-center gap-4'>
        <h1 className='uppercase text-left  text-xl lg:text-2xl xl:text-3xl font-bold text-primary/80'>
          Sobre Nosotros.
        </h1>
        <p className='text-left text-lg lg:text-xl leading-7 font-semibold'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
          justo eget urna posuere aliquam. Duis ornare ultricies dui sit amet
          posuere. Aliquam a ullamcorper diam, in mollis nisl. Donec commodo
          tincidunt ligula eu porttitor. Nullam in nulla vel dolor faucibus
          facilisis. Sed pretium non dui ut vehicula. Nunc turpis libero,
          ultricies finibus varius quis, dapibus non augue. Integer et felis
          volutpat, vestibulum mi vel, cursus mauris. Pellentesque felis ligula,
          mattis a nisi at, lacinia mollis nibh. Integer non suscipit justo. Ut
          porta ac urna in gravida. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </p>
      </div>
    </div>
  )
}

export default AboutUs
