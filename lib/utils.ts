import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const navigationItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Nosotro', href: '/nosotros' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Contacto', href: '/contacto' },
]
