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
      <div className='flex flex-col lg:flex-row gap-4 w-full h-full  p-2 '>
        <p className='align-text-top w-full  lg:w-1/3'>{description}</p>
        <div className='relative w-full grid grid-cols-2 gap-2 '>
          {images.map((image, index) => (
            <div
              key={index}
              className='relative w-full h-[25vh]  '
            >
              <Image
                src={image}
                alt='img'
                fill
                className='object-cover overflow-hidden'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
