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
    images: [
      '/images/fortalecimiento/1.jpg',
      '/images/fortalecimiento/2.jpg',
      '/images/fortalecimiento/3.jpg',
      '/images/fortalecimiento/4.jpg',
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus eget nulla sit amet tincidunt. Cras aliquet egestas nunc eu imperdiet. Donec efficitur, ex quis tempor eleifend, magna libero vehicula ipsum, a feugiat ipsum sapien a sem. Sed convallis vitae orci eget ultricies. Nullam eu congue dolor, nec facilisis ipsum.',
  },
  {
    title: 'Cardio Boxing',
    href: '/servicios#boxing',
    images: [
      '/images/cardio boxing/1.jpg',
      '/images/cardio boxing/2.jpg',
      '/images/cardio boxing/3.jpg',
      // '/images/cardio boxing/4.jpg',
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus eget nulla sit amet tincidunt. Cras aliquet egestas nunc eu imperdiet. Donec efficitur, ex quis tempor eleifend, magna libero vehicula ipsum, a feugiat ipsum sapien a sem. Sed convallis vitae orci eget ultricies. Nullam eu congue dolor, nec facilisis ipsum.',
  },
  {
    title: 'Entrenamiento Funcional',
    href: '/servicios#funcional',
    images: [
      '/images/functional training/1.jpg',
      '/images/functional training/2.jpg',
      '/images/functional training/3.jpg',
      '/images/functional training/4.jpg',
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus eget nulla sit amet tincidunt. Cras aliquet egestas nunc eu imperdiet. Donec efficitur, ex quis tempor eleifend, magna libero vehicula ipsum, a feugiat ipsum sapien a sem. Sed convallis vitae orci eget ultricies. Nullam eu congue dolor, nec facilisis ipsum.',
  },
]
