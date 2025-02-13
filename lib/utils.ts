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
    images: ['/images/strength.jpg', ''],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus eget nulla sit amet tincidunt. Cras aliquet egestas nunc eu imperdiet. Donec efficitur, ex quis tempor eleifend, magna libero vehicula ipsum, a feugiat ipsum sapien a sem. Sed convallis vitae orci eget ultricies. Nullam eu congue dolor, nec facilisis ipsum.',
  },
  {
    title: 'Cardio Boxing',
    href: '/servicios#boxing',
    images: ['/images/cardiobox.jpg', ''],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus eget nulla sit amet tincidunt. Cras aliquet egestas nunc eu imperdiet. Donec efficitur, ex quis tempor eleifend, magna libero vehicula ipsum, a feugiat ipsum sapien a sem. Sed convallis vitae orci eget ultricies. Nullam eu congue dolor, nec facilisis ipsum.',
  },
  {
    title: 'Entrenamiento Funcional',
    href: '/servicios#funcional',
    images: ['/images/functionaltraining.jpg', ''],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus eget nulla sit amet tincidunt. Cras aliquet egestas nunc eu imperdiet. Donec efficitur, ex quis tempor eleifend, magna libero vehicula ipsum, a feugiat ipsum sapien a sem. Sed convallis vitae orci eget ultricies. Nullam eu congue dolor, nec facilisis ipsum.',
  },
]
