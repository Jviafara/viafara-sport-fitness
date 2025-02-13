'use client'
import { BsFillArrowUpSquareFill } from 'react-icons/bs'

function ScrollUpButton() {
  return (
    <div className='fixed bottom-10 right-4 md:right-10 z-10 text-primary'>
      <button
        type='button'
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }
        className='hidden md:inline-flex cursor-pointer'
      >
        <BsFillArrowUpSquareFill size={45} />
      </button>
      <button
        type='button'
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }
        className='md:hidden inline-flex cursor-pointer'
      >
        <BsFillArrowUpSquareFill size={32} />
      </button>
    </div>
  )
}

export default ScrollUpButton
