import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const navigationItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Nosotro', href: '/about' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Contacto', href: '/contacto' },
]

export const servicios = [
  {
    title: 'Entrenamiento y Fortalecimiento Múscular',
    href: '/servicios#strength',
    img: '/images/strength.jpg',
  },
  {
    title: 'Cardio Boxing',
    href: '/servicios#boxing',
    img: '/images/cardiobox.jpg',
  },
  {
    title: 'Entrenamiento Funcional',
    href: '/servicios#funcional',
    img: '/images/functionaltraining.jpg',
  },
]
