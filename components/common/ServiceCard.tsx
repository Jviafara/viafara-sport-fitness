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
      className='w-full flex flex-col gap-4 items-start first:pt-16'
    >
      <h1 className='text-2xl text-primary font-semibold'>{title}</h1>
      <div className='flex flex-col md:flex-row gap-4  w-full h-full p-2 '>
        <p className='align-text-top w-1/4'>{description}</p>
        <div className='relative w-[450px] h-48 flex-grow'>
          <Image
            src={images[0]}
            alt='img'
            fill
            className='object-contain'
          />
          <Image
            src={images[0]}
            alt='img'
            fill
            className='object-contain'
          />
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
