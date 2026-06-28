// src/components/Contact.jsx
import { useState } from 'react'
import useReveal from '../hooks/useReveal'

export default function Contact() {
  const leftRef = useReveal()
  const rightRef = useReveal()
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-nude-100/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          <div ref={leftRef} className="reveal-left">
            <h2 className="font-girly font-normal text-dark leading-tight mb-6 text-4xl md:text-5xl lg:text-6xl">
              Let's Create Something<br />
              <span className="text-gold-500">Beautiful</span>
            </h2>
            <p className="text-dark-lighter font-light leading-relaxed mb-10 font-tech">
              Ready to elevate your social media presence? I'd love to hear about
              your brand and explore how we can grow together.
            </p>

            {/* Contact details – with clickable links */}
            <div className="space-y-6 mb-10">
              {[
                { 
                  icon: 'fa-regular fa-envelope', 
                  label: 'Email', 
                  value: 'linetkithae@gmail.com',
                  href: 'mailto:linetkithae@gmail.com'
                },
                { 
                  icon: 'fa-brands fa-whatsapp', 
                  label: 'WhatsApp', 
                  value: '+254 769 527 791',
                  href: 'https://wa.me/254769527791'
                },
                { 
                  icon: 'fa-regular fa-location-dot', 
                  label: 'Location', 
                  value: 'Nairobi, Kenya',
                  href: 'https://maps.google.com/?q=Nairobi,Kenya'
                },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className={`${item.icon} text-gold-500 text-sm`} />
                  </div>
                  <div>
                    <div className="text-xs tracking-[.12em] uppercase text-nude-500 mb-1 font-tech font-medium">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark text-sm font-tech hover:text-gold-500 transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-dark text-sm font-tech">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links – active platforms */}
            <div className="flex gap-4">
              {[
                { icon: 'fa-brands fa-instagram', label: 'Instagram', url: 'https://instagram.com/kithae.linet' },
                { icon: 'fa-brands fa-tiktok', label: 'TikTok', url: 'https://tiktok.com/@linetkithae22' },
                { icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn', url: 'https://www.linkedin.com/in/linet-kithae-936211344' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-nude-300 flex items-center justify-center text-nude-500 hover:border-gold-500 hover:text-gold-500 hover:-translate-y-1 transition-all duration-300"
                >
                  <i className={`${s.icon} text-sm`} />
                </a>
              ))}
            </div>
          </div>

          <div ref={rightRef} className="reveal-right">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-xs tracking-[.12em] uppercase text-nude-500 mb-2 block font-tech font-medium">
                  Your Name
                </label>
                <input type="text" className="contact-input" placeholder="Name" required />
              </div>
              <div>
                <label className="text-xs tracking-[.12em] uppercase text-nude-500 mb-2 block font-tech font-medium">
                  Email Address
                </label>
                <input type="email" className="contact-input" placeholder="Email" required />
              </div>
              <div>
                <label className="text-xs tracking-[.12em] uppercase text-nude-500 mb-2 block font-tech font-medium">
                  Brand / Company
                </label>
                <input type="text" className="contact-input" placeholder="Your Brand" />
              </div>
              <div>
                <label className="text-xs tracking-[.12em] uppercase text-nude-500 mb-2 block font-tech font-medium">
                  Tell Me About Your Project
                </label>
                <textarea className="contact-input min-h-[140px] resize-none" placeholder="Share your goals..." required />
              </div>
              <button type="submit" className="btn-gold w-full justify-center font-tech">
                {sent ? (
                  <>
                    <i className="fa-solid fa-check" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <i className="fa-solid fa-paper-plane text-xs" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}