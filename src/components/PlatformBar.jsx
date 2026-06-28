// src/components/PlatformBar.jsx
import useReveal from '../hooks/useReveal'

const platforms = [
  {
    icon: 'fa-brands fa-instagram',
    name: 'Instagram',
    url: 'https://instagram.com/kithae.linet'
  },
  {
    icon: 'fa-brands fa-tiktok',
    name: 'TikTok',
    url: 'https://tiktok.com/@linetkithae22'
  },
  {
    icon: 'fa-brands fa-linkedin-in',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/linet-kithae-936211344'
  },
  {
    icon: 'fa-brands fa-whatsapp',
    name: 'WhatsApp',
    url: 'https://wa.me/254769527791'
  }
]

export default function PlatformBar() {
  const ref = useReveal()

  return (
    <section ref={ref} className="reveal py-16 bg-nude-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
          {platforms.map(p => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-1 group"
            >
              <i className={`${p.icon} text-xl sm:text-2xl text-nude-400 group-hover:text-gold-500 transition-colors duration-300`} />
              <span className="text-[.65rem] tracking-[.15em] uppercase text-nude-500 group-hover:text-gold-600 transition-colors duration-300 font-tech font-light">
                {p.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}