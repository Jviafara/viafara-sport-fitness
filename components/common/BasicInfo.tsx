import { MapPin } from 'lucide-react'
import Link from 'next/link'
import { BsWhatsapp } from 'react-icons/bs'

function BasicInfo() {
  return (
    <section className='bg-[#1a1a1b] w-full px-[10%] text-white flex flex-col md:flex-row justify-center gap-16 text-2xl'>
      <Link
        href='https://maps.app.goo.gl/uCKthpe9gH42i9QG6'
        target='_blank'
        className='flex gap-8 items-center justify-center'
      >
        <MapPin
          size={38}
          className='text-primary  animate-bounce animate-infinite animate-ease-in-out animate-duration-300'
        />
        <div>
          <h1>calle 17# 13-06</h1>
          <h1>Fonseca, La Guajira</h1>
        </div>
      </Link>
      <Link
        href='https://wa.me/3135245168'
        target='_blank'
        className='flex gap-8 items-center justify-center'
      >
        <BsWhatsapp
          size={32}
          className='text-primary animate-bounce animate-infinite animate-ease-in-out animate-duration-300'
        />
        <h1>(+57) 313-5245168</h1>
      </Link>
    </section>
  )
}

export default BasicInfo
