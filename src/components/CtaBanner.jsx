// src/components/CtaBanner.jsx
import useReveal from '../hooks/useReveal'

export default function CtaBanner() {
  const r1 = useReveal()
  const r2 = useReveal()

  return (
    <section className="min-h-[60vh] bg-dark relative overflow-hidden flex flex-col items-center justify-center px-6">
      {/* Decorative floating shapes */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-60 h-60 border border-gold-400/20 rounded-full float-a" />
        <div className="absolute bottom-10 right-10 w-40 h-40 border border-gold-400/15 rounded-full float-b" />
      </div>

      <div className="max-w-3xl w-full text-center relative z-10">
        <h2
          ref={r1}
          className="reveal font-girly font-normal text-white leading-tight mb-6"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          Ready to Grow<br />Your Brand?
        </h2>
        <p
          ref={r2}
          className="reveal text-nude-300/70 font-light mb-10 max-w-lg mx-auto leading-relaxed font-tech"
        >
          Let's turn your social media into your strongest asset.
        </p>
        <div className="reveal">
          <a href="#contact" className="btn-gold">
            Start a Conversation
            <i className="fa-solid fa-arrow-right text-xs" />
          </a>
        </div>
      </div>
    </section>
  )
}