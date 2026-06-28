// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="py-16 bg-nude-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Brand name – now cursive and title case */}
          <a
            href="#hero"
            className="font-girly text-4xl tracking-wide text-dark font-normal hover:opacity-70 transition-opacity"
          >
            Linet
          </a>

          {/* Navigation links – techy font, clean */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {['About', 'Services', 'Portfolio', 'Process', 'Contact'].map(l => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-xs tracking-[.15em] uppercase text-dark-lighter hover:text-gold-500 transition-colors duration-300 font-tech font-light"
              >
                {l}
              </a>
            ))}
          </div>

          {/* Removed the decorative gold line */}

          {/* Copyright – techy font */}
          <div className="text-xs tracking-wider text-nude-500 font-tech font-light">
            © {new Date().getFullYear()} Linet. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}