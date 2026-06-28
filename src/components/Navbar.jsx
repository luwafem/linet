// src/components/Navbar.jsx
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const close = () => { setOpen(false); document.body.style.overflow = '' }
  const toggle = () => {
    const n = !open
    setOpen(n)
    document.body.style.overflow = n ? 'hidden' : ''
  }

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Process', href: '#process' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-nude-50/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo – now using cursive font */}
        <a
          href="#hero"
          className="font-girly text-2xl md:text-3xl tracking-wide text-dark font-normal hover:opacity-70 transition-opacity z-50 relative"
        >
          Linet
        </a>

        {/* Desktop links + Contact button */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.7rem] tracking-[0.15em] uppercase text-dark-lighter font-light hover:text-dark transition-colors duration-300 relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2 text-sm font-light tracking-[0.1em] uppercase text-white bg-gold-500 rounded-lg hover:bg-gold-600 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Contact
          </a>
        </div>

        {/* Mobile toggle – fixed X animation */}
        <button
          onClick={toggle}
          className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 z-50 relative"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-dark transition-all duration-300 origin-center ${
              open ? 'rotate-45 translate-y-[3px]' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-dark transition-all duration-300 origin-center ${
              open ? '-rotate-45 -translate-y-[3px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu – cursive links */}
      <div
        className={`fixed inset-0 z-40 bg-nude-50/95 backdrop-blur-md transition-all duration-500 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {[...links, { label: 'Contact', href: '#contact' }].map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="text-3xl font-girly font-normal text-dark hover:text-gold-500 transition-colors duration-300 tracking-wider"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}