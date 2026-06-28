// src/components/Testimonials.jsx
import { useState, useEffect, useRef } from 'react'
import useReveal from '../hooks/useReveal'

const testimonials = [
  {
    text: 'Linet completely transformed our social media presence. Her data driven approach meant every piece of content had purpose, and the results spoke for themselves tripled engagement in just three months.',
    name: 'Sarah Mitchell',
    role: 'CEO, Luxe Fashion House',
    img: 'https://picsum.photos/seed/client-sarah-5/100/100.jpg'
  },
  {
    text: "What sets Linet apart is her ability to translate complex analytics into clear strategy. She doesn't just post content she builds ecosystems that drive real business outcomes.",
    name: 'James Okafor',
    role: 'Founder, NovaTech',
    img: 'https://picsum.photos/seed/client-james-5/100/100.jpg'
  },
  {
    text: 'Incredible attention to brand voice and platform nuance. Linet understood our audience better than we did, and her TikTok campaigns consistently went viral. Absolute game changer.',
    name: 'Maria Chen',
    role: 'Marketing Director, Glow Beauty Co.',
    img: 'https://picsum.photos/seed/client-maria-5/100/100.jpg'
  },
]

export default function Testimonials() {
  const headRef = useReveal()
  const contentRef = useReveal()
  const [active, setActive] = useState(0)
  const [key, setKey] = useState(0)
  const authorRef = useRef(null)
  const intervalRef = useRef(null)

  const set = (i) => {
    setActive(i)
    setKey(k => k + 1)
    if (authorRef.current) authorRef.current.style.opacity = '0'
    setTimeout(() => {
      if (authorRef.current) authorRef.current.style.opacity = '1'
    }, 80)
    clearInterval(intervalRef.current)
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive(a => {
        const next = (a + 1) % testimonials.length
        setKey(k => k + 1)
        if (authorRef.current) authorRef.current.style.opacity = '0'
        setTimeout(() => {
          if (authorRef.current) authorRef.current.style.opacity = '1'
        }, 80)
        return next
      })
    }, 6000)
    return () => clearInterval(intervalRef.current)
  }, [])

  const t = testimonials[active]

  return (
    <section className="py-24 sm:py-32 bg-nude-50">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={headRef} className="reveal text-center mb-16">
          <h2 className="font-girly font-normal text-dark leading-tight text-4xl md:text-5xl lg:text-6xl">
            Kind Words
          </h2>
          {/* Removed the section-divider dash */}
        </div>

        <div ref={contentRef} className="reveal">
          <div className="testimonial-card text-center">
            <div key={key} className="testimonial-enter">
              <p className="font-tech text-lg sm:text-xl text-dark leading-relaxed mb-8 italic font-light">
                {t.text}
              </p>
            </div>
            <div
              ref={authorRef}
              className="flex items-center justify-center gap-4 transition-opacity duration-300"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-gold-400/20"
              />
              <div className="text-left">
                <div className="font-girly text-2xl text-dark font-semibold">
                  {t.name}
                </div>
                <div className="text-xs tracking-wider text-dark-lighter font-tech">
                  {t.role}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => set(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-400 ${
                  i === active
                    ? 'bg-gold-500 w-8'
                    : 'bg-nude-300 hover:bg-nude-400 w-2.5'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}