// src/components/Process.jsx
import useReveal from '../hooks/useReveal'

const steps = [
  { num: '01', title: 'Discover', desc: 'Deep dive into your brand, audience, competitors, and goals to understand where you stand and where you need to go.' },
  { num: '02', title: 'Plan', desc: 'Build a tailored content strategy and editorial calendar with clear KPIs, tone of voice, and platform specific approaches.' },
  { num: '03', title: 'Create', desc: 'Craft platform native content, manage community engagement, and execute campaigns that resonate with your audience.' },
  { num: '04', title: 'Optimize', desc: 'Analyse performance data, refine strategy, and continuously improve results through data driven iteration.' },
]

export default function Process() {
  const headRef = useReveal()
  const gridRef = useReveal()

  return (
    <section id="process" className="py-24 sm:py-32 bg-nude-100/50">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headRef} className="reveal text-center mb-16">
          <h2 className="font-girly font-normal text-dark leading-tight text-4xl md:text-5xl lg:text-6xl">
            How I Work
          </h2>
          {/* Removed the section-divider dash */}
        </div>

        <div ref={gridRef} className="stagger process-grid flex flex-col gap-10 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <div key={i} className="process-step flex gap-6 items-start">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full border border-gold-400/30 flex items-center justify-center bg-nude-50">
                  <span className="font-display text-lg text-gold-500">{s.num}</span>
                </div>
                {i < 3 && <div className="process-line" />}
              </div>
              <div className="process-content pt-2">
                <h3 className="font-girly text-2xl text-dark mb-2 font-semibold">{s.title}</h3>
                <p className="text-dark-lighter text-sm font-light leading-relaxed font-tech">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}