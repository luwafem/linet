// src/components/BackToTop.jsx
import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const fn = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`
        back-to-top fixed bottom-8 right-8 z-40 
        w-12 h-12 rounded-full 
        bg-gold-500 text-white 
        flex items-center justify-center 
        shadow-lg hover:shadow-xl 
        hover:scale-110 hover:bg-gold-600 
        transition-all duration-300 
        ring-2 ring-transparent hover:ring-gold-400/30
        ${show ? 'show' : ''}
      `}
    >
      <i className="fa-solid fa-arrow-up text-sm" />
    </button>
  )
}