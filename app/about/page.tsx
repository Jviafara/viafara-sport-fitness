import AboutUs from '@/components/common/AboutUs'
import TrainerCard from '@/components/common/TrainerCard'
import ReasonsCard from '@/components/common/ReasonsSection'
import MisionVision from '@/components/common/MisionVision'

const trainers = [
  {
    name: 'EDINSON ALEXIS VIAFARA CUELLO',
    cargo: 'Gerente',
    estudios:
      'Lic. En educación física y deportes, Esp. En administración deportiva',
    imgUrl: '/images/strength.jpg',
  },
  {
    name: 'ARLENIS DEL CARMEN TORRES LONDOÑO',
    cargo: 'Entrenador deportivo',
    imgUrl: '/images/strength.jpg',
    estudios: '',
  },
  {
    name: 'CARLOS DUVÁN CORREA PÉREZ',
    cargo: 'Entrenador deportivo',
    imgUrl: '/images/strength.jpg',
    estudios: '',
  },
]

function About() {
  return (
    <main className='min-h-screen w-full md:mt-16 bg-gradient-to-b from-black to-[#1a1a1b] text-white flex flex-col items-center animate-fade'>
      <AboutUs />
      <MisionVision />
      <div className='w-full py-16 flex flex-col justify-center items-center gap-12 bg-gradient-to-b from-transparent  to-[#1a1a1b]'>
        <h1 className='text-primary/80 text-2xl lg:text-3xl'>
          Entrena con profecionales!
        </h1>
        <div className='flex flex-col items-center justify-between md:grid md:grid-cols-2 md:justify-center w-full px-[10%] lg:flex lg:flex-row  gap-12'>
          {trainers.map((trainer, index) => (
            <TrainerCard
              key={index}
              name={trainer.name}
              cargo={trainer.cargo}
              estudios={trainer.estudios}
              imgUrl={trainer.imgUrl}
            />
          ))}
        </div>
      </div>

      <ReasonsCard />
    </main>
  )
}

export default About
