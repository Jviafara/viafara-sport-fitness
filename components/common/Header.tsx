import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

type Props = { className?: string; children: ReactNode }

function Header({ className, children }: Props) {
  return (
    <div className='h-svh'>
      <header className={cn('', className)}>{children}</header>
    </div>
  )
}

export default Header
