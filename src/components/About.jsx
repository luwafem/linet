// src/components/About.jsx
import useReveal from '../hooks/useReveal'
import useCounter from '../hooks/useCounter'

function Stat({ end, suffix, label }) {
  const [count, ref] = useCounter(end, suffix)
  return (
    <div ref={ref} className="text-center">
      <div className="stat-number" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 400, lineHeight: 1, color: 'var(--color-gold-500)' }}>
        {count}{suffix}
      </div>
      <div className="text-xs tracking-[.15em] uppercase text-dark-lighter mt-2 font-girly font-medium">
        {label}
      </div>
    </div>
  )
}

export default function About() {
  const photoRef = useReveal(0.1)
  const textRef = useReveal(0.1)

  return (
    <section id="about" className="py-24 sm:py-32 bg-nude-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div ref={photoRef} className="reveal-left relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://picsum.photos/seed/linet-portrait-5/600/750.jpg"
                alt="Linet"
                className="w-full h-[480px] sm:h-[560px] object-cover"
              />
              <div className="absolute inset-0 bg-dark/20" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-28 h-28 border border-gold-400/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-20 h-20 border border-gold-400/15 rounded-full -z-10" />
          </div>

          <div ref={textRef} className="reveal-right">
            <h2 className="font-girly font-semibold text-dark leading-tight mb-6 text-4xl md:text-5xl lg:text-6xl">
              Strategy Meets<br />
              <span className="text-gold-500">Creative Impact</span>
            </h2>

            <p className="text-dark-lighter leading-relaxed mb-5 font-tech font-normal text-base">
              I'm a results driven Social Media Strategist with a passion for crafting
              data informed content strategies that grow brands and foster genuine connection.
              From content calendars and brand voice to community management and performance
              analytics I help businesses tell their story with clarity and purpose.
            </p>
            <p className="text-dark-lighter leading-relaxed mb-10 font-tech font-normal text-base">
              My expertise spans short form video, design, SEO copywriting, and platform native
              content across Instagram, TikTok, LinkedIn, and beyond. Whether you're a startup
              or an established brand, I translate insights into actionable growth always
              with a creative, human touch.
            </p>

            
          </div>
        </div>
      </div>
    </section>
  )
}