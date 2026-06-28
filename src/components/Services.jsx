// src/components/Services.jsx
import useReveal from '../hooks/useReveal'

const services = [
  {
    icon: 'fa-bullseye',
    title: 'Strategy & Planning',
    desc: 'Content strategy, calendar management, SEO copywriting, and AI assisted creation.'
  },
  {
    icon: 'fa-pen-fancy',
    title: 'Brand Voice & Storytelling',
    desc: 'Authentic brand voice development, compelling storytelling, and community engagement.'
  },
  {
    icon: 'fa-video',
    title: 'Video & Design',
    desc: 'Short form video (Reels/TikTok), video editing, and professional graphic design (Canva).'
  },
  {
    icon: 'fa-users',
    title: 'Audience Growth',
    desc: 'Data driven audience growth strategies, engagement optimization, and community management.'
  },
  {
    icon: 'fa-chart-pie',
    title: 'Analytics & KPIs',
    desc: 'In depth social media analytics, KPI tracking, and campaign performance reporting.'
  },
  {
    icon: 'fa-toolbox',
    title: 'Tools & Platforms',
    desc: 'Proficient in Meta Business Suite, Buffer, Loomly, and other scheduling tools.'
  }
]

export default function Services() {
  const headRef = useReveal()
  const gridRef = useReveal()

  return (
    <section id="services" className="py-24 sm:py-32 bg-nude-100/50">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headRef} className="reveal text-center mb-16">
          <h2 className="font-girly font-normal text-dark leading-tight mb-5 text-4xl md:text-5xl lg:text-6xl">
            Core Skills
          </h2>
          {/* Removed the section-divider dash for a cleaner look */}
        </div>

        <div ref={gridRef} className="stagger grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((s, i) => (
            <div key={i} className="service-card text-center">
              <i className={`fa-solid ${s.icon} text-2xl text-gold-500 mb-6 block`} />
              <h3 className="font-girly text-2xl text-dark mb-3 font-semibold">
                {s.title}
              </h3>
              <p className="text-dark-lighter text-sm font-light leading-relaxed max-w-xs mx-auto">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}