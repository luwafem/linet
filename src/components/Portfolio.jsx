// src/components/Portfolio.jsx
import { useState, useRef } from 'react'
import useReveal from '../hooks/useReveal'

const projects = [
  { img: 'https://picsum.photos/seed/fashion-luxe-5/800/600.jpg', brand: 'Luxe Fashion House', desc: 'Full social media overhaul from brand voice to content strategy across Instagram and TikTok.', tags: ['Instagram', 'TikTok', 'Strategy'], metrics: ['+340% Engagement', '2.1M Impressions', '+18K Followers'] },
  { img: 'https://picsum.photos/seed/tech-nova-5/800/600.jpg', brand: 'NovaTech Startup', desc: 'LinkedIn thought leadership strategy that positioned the CEO as an industry voice.', tags: ['LinkedIn', 'B2B', 'Content'], metrics: ['+520% Profile Views', '45K Monthly Reach', '12 Features'] },
  { img: 'https://picsum.photos/seed/beauty-glow-5/800/600.jpg', brand: 'Glow Beauty Co.', desc: 'TikTok first content strategy with UGC campaigns that went viral multiple times.', tags: ['TikTok', 'UGC', 'Campaigns'], metrics: ['3.8M Viral Views', '+67K Followers', '8.2% Conversion'] },
  { img: 'https://picsum.photos/seed/taste-food-5/800/600.jpg', brand: 'Taste Restaurant Group', desc: 'Multi location social management driving foot traffic and online reservations.', tags: ['Multi-Platform', 'Local SEO', 'Community'], metrics: ['+42% Reservations', '+95K Followers', '4.8 Star Rating'] },
]

function PortfolioCard({ project }) {
  const ref = useReveal(0.05)
  return (
    <div
      ref={ref}
      className="portfolio-card flex-shrink-0 w-[85%] md:w-auto snap-center rounded-2xl overflow-hidden bg-nude-50/80 backdrop-blur-sm"
    >
      <div className="portfolio-img-wrap">
        <img
          src={project.img}
          alt={project.brand}
          className="w-full h-[450px] sm:h-[400px] object-cover object-center"
        />
      </div>

      <div className="pt-6 pb-6 px-4 text-center bg-nude-50/60 backdrop-blur-sm">
        <h3 className="font-girly text-2xl text-dark mb-3 font-semibold">
          {project.brand}
        </h3>
        <p className="text-dark-lighter text-sm font-light leading-relaxed mb-5 max-w-md mx-auto">
          {project.desc}
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {project.tags.map(t => (
            <span
              key={t}
              className="text-[0.7rem] tracking-[0.1em] uppercase px-3 py-1 rounded-md bg-nude-200/70 text-dark font-medium"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const headRef = useReveal()
  const showRef = useReveal()
  const [playing, setPlaying] = useState(false)

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-nude-50 relative overflow-hidden">
      <div className="absolute top-20 left-12 w-32 h-32 border border-gold-400/10 rounded-full -z-0" />
      <div className="absolute bottom-24 right-16 w-24 h-24 border border-gold-400/10 rounded-2xl -z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div ref={headRef} className="reveal text-center mb-16">
          <h2 className="font-girly font-normal text-dark leading-tight mb-5 text-4xl md:text-5xl lg:text-6xl">
            Portfolio
          </h2>
        </div>

        <div className="grid-port gap-5 px-6 md:px-0 md:gap-6 snap-x snap-mandatory">
          {projects.map((p, i) => <PortfolioCard key={i} project={p} />)}
        </div>

        {/* Swipe hint – always visible, hides on desktop via CSS */}
        <div className="swipe-hint flex items-center justify-center gap-3 mt-6 text-nude-400">
          <i className="fa-solid fa-arrow-left text-xs animate-pulse" />
          <span className="text-xs tracking-wider uppercase">Swipe to explore</span>
          <i className="fa-solid fa-arrow-right text-xs animate-pulse" />
        </div>

        {/* Video/Showreel section – commented out */}
        {/*
        <div ref={showRef} className="reveal mt-20 relative max-w-4xl mx-auto">
          ...
        </div>
        */}
      </div>
    </section>
  )
}