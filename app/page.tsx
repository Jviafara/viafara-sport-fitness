import Contactbanner from '@/components/common/Contactbanner'
import Header from '@/components/common/Header'
import ReasonsCard from '@/components/common/ReasonsSection'
import ServicesBanner from '@/components/common/ServicesBanner'

export default function Home() {
  return (
    <div className='w-full min-h-screen -mt-16 flex flex-col items-center'>
      <Header />
      <ReasonsCard />
      <ServicesBanner />
      <Contactbanner />
    </div>
  )
}
