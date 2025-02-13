import ServiceCard from '@/components/common/ServiceCard'
import Services from '@/components/common/Services'
import { servicios } from '@/lib/utils'

function Servicios() {
  return (
    <main className='min-h-screen w-full mt-16 bg-gradient-to-b from-black to-[#1a1a1b] text-white flex flex-col items-center animate-fade'>
      <Services />
      <div className='w-[95%] md:w-[85%] flex flex-col gap-12'>
        {servicios.map(servicio => (
          <ServiceCard
            key={servicio.title}
            href={servicio.href}
            description={servicio.description}
            title={servicio.title}
            images={servicio.images}
          />
        ))}
      </div>
    </main>
  )
}

export default Servicios
