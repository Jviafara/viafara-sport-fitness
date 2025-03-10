import Link from 'next/link'
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'

function Contacto() {
  return (
    <main className='text-white flex flex-col items-center min-h-screen mt-16 bg-gradient-to-b from-black to-[#1a1a1b]'>
      <div className='w-[90%] flex flex-col gap-8'>
        <h1 className='text-3xl text-primary font-bold text-center uppercase'>
          Contactanos.
        </h1>
        <div className='flex flex-col lg:flex-row justify-between gap-12 w-full'>
          <div className='relative flex flex-col items-start md:gap-4'>
            <Link
              href={'https://wa.me/3135245168'}
              target='_blank'
              className='flex gap-4 p-4'
            >
              <BsWhatsapp
                className='text-primary'
                size={32}
              />
              <p className='text-lg md:text-2xl font-semibold'>
                (+57) 301-468-8593
              </p>
            </Link>
            <Link
              href={'https://www.instagram.com/viafarasportfitness/'}
              target='_blank'
              className='flex gap-4 p-4'
            >
              <BsInstagram
                className='text-primary'
                size={28}
              />
              <p className='text-lg md:text-2xl font-semibold'>
                @viafarasportfitness
              </p>
            </Link>
            <Link
              href={'https://www.facebook.com/profile.php?id=61559235454874'}
              target='_blank'
              className='flex gap-4 p-4'
            >
              <BsFacebook
                className='text-primary'
                size={28}
              />
              <p className='text-lg  md:text-2xl font-semibold'>
                Viafara Sport Fitness
              </p>
            </Link>
          </div>
          <div className='flex-grow'>
            <div className='w-full'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d346.3063100063421!2d-72.84476772260982!3d10.886946690309555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8b03006b3e11e7%3A0x52621b5c463495e4!2sViafara%20Sport%20Fitness!5e0!3m2!1ses!2sco!4v1739478919562!5m2!1ses!2sco'
                loading='lazy'
                className='border-none w-full h-[75vh]'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contacto
