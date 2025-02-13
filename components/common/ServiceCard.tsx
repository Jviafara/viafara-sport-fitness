import Image from 'next/image'

type Props = {
  title: string
  images: string[]
  description: string
  href: string
}

function ServiceCard({ title, images, description, href }: Props) {
  const link = href.split('#')[1]

  return (
    <div
      id={link}
      className='w-full flex flex-col gap-4 items-center pt-16'
    >
      <h1 className='text-2xl text-primary text-center font-semibold'>
        {title}
      </h1>
      <div className='flex flex-col md:flex-row gap-4  w-full h-full p-2 '>
        <p className='align-text-top  w-1/3 h-[50vh]'>{description}</p>
        <div className='relative w-full grid grid-cols-2 gap-2 '>
          {images.map((image, index) => (
            <div
              key={index}
              className='relative'
            >
              <Image
                src={image}
                alt='img'
                fill
                className='object-cover'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
