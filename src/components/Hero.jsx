// src/components/Hero.jsx
import linetCutout from '../assets/linet.png'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex-1 min-h-0 bg-nude-50 flex flex-col overflow-hidden"
    >
      {/* Warm background gradient + subtle dot texture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-nude-50 via-nude-100/30 to-gold-100/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(201,169,110,0.08)_1px,_transparent_1px)] bg-[length:30px_30px]" />
      </div>

      {/* Decorative circle */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-gold-400/10 rounded-full -z-0 hidden lg:block" />

      {/* Foreground hairline */}
      <div className="absolute top-0 left-0 right-0 h-px bg-nude-300/40 z-40" />

      {/* Scroll indicator */}
      <div className="hidden md:flex absolute bottom-8 left-8 flex-col items-center gap-2 opacity-50 z-40">
        <span
          className="text-[0.5rem] tracking-[0.4em] uppercase text-nude-500"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Scroll
        </span>
      </div>

      {/* Cutout image with halo */}
      <div className="absolute bottom-0 right-0 w-full md:w-2/5 lg:w-1/3 h-full z-20 pointer-events-none flex items-end justify-center md:justify-end md:pr-16 lg:pr-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,110,0.25)_0%,_transparent_70%)] opacity-70" />
        <img
          src={linetCutout}
          alt="Linet"
          className="hero-cutout h-[65vh] md:h-[80vh] w-auto object-contain object-bottom mix-blend-multiply relative z-10"
        />
      </div>

      {/* Main content – mobile top padding increased by ~10% */}
      <div className="flex-1 flex flex-col px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto w-full relative z-10 pt-[5.5rem] md:pt-24 pb-24 md:pb-0 justify-end md:justify-center">
        <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-end md:items-center">
          {/* LEFT */}
          <div className="md:col-span-6">
            {/* Expertise label – smaller on mobile */}
            <div className="mb-3 md:mb-4">
              <span className="text-[0.55rem] md:text-[0.7rem] tracking-[0.25em] uppercase text-nude-700 font-medium font-tech">
                Expertise
              </span>
            </div>

            {/* Skill tags – smaller on mobile */}
            <div className="flex flex-wrap gap-1.5 md:gap-2 mb-6 md:mb-6">
              {[
                'Content Strategy',
                'Community Management',
                'Video & Design',
                'Analytics & KPIs',
              ].map(tag => (
                <span
                  key={tag}
                  className="text-[0.55rem] md:text-[0.7rem] tracking-[0.1em] uppercase px-2 md:px-3 py-1 rounded-md bg-nude-200/70 text-dark font-medium font-tech"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Girly heading */}
            <h1
              className="hero-1 font-girly font-normal text-dark leading-[0.9] tracking-tight"
              style={{ fontSize: 'clamp(3.5rem, 11vw, 9rem)' }}
            >
              Linet
            </h1>

            {/* Tagline */}
            <div className="hero-2 my-6 md:my-6">
              <p className="text-dark text-sm md:text-base font-medium max-w-sm leading-relaxed font-tech">
                Social media strategist helping brands grow with clarity, creativity, and purpose.
              </p>
            </div>

            <div className="hero-3 flex flex-wrap items-center gap-3 md:gap-4">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-medium tracking-[0.1em] uppercase text-white bg-gold-500 rounded-lg hover:bg-gold-600 transition-all duration-300 shadow-sm hover:shadow-md font-tech"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-medium tracking-[0.1em] uppercase text-dark border border-nude-400 rounded-lg hover:border-dark hover:text-dark transition-all duration-300 font-tech"
              >
                Let's Talk
              </a>
            </div>
          </div>

          {/* RIGHT: Meta – unchanged */}
          <div className="hidden md:flex md:col-span-6 flex-col gap-4 md:pl-8 pb-4 relative z-30">
            <div className="hero-4 space-y-4">
              <div>
                <div className="text-[0.7rem] tracking-[0.3em] uppercase text-nude-700 font-medium mb-1 font-tech">Role</div>
                <div className="text-sm text-dark font-normal font-tech">Social Media Strategist</div>
              </div>
              <div>
                <div className="text-[0.7rem] tracking-[0.3em] uppercase text-nude-700 font-medium mb-1 font-tech">Location</div>
                <div className="text-sm text-dark font-normal font-tech">Nairobi, Kenya</div>
              </div>
              <div>
                <div className="text-[0.7rem] tracking-[0.3em] uppercase text-nude-700 font-medium mb-1 font-tech">Experience</div>
                <div className="text-sm text-dark font-normal font-tech">5+ Years in Digital</div>
              </div>
              <div>
                <div className="text-[0.7rem] tracking-[0.3em] uppercase text-nude-700 font-medium mb-1 font-tech">Status</div>
                <div className="text-sm text-dark font-normal font-tech flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
                  Available for Projects
                </div>
              </div>
              <div className="pt-4 border-t border-nude-200/50">
                <div className="text-[0.7rem] tracking-[0.3em] uppercase text-nude-700 font-medium mb-2 font-tech">Connect</div>
                <div className="flex gap-4">
                  <a href="https://instagram.com/kithae.linet" target="_blank" rel="noopener noreferrer" className="text-nude-500 hover:text-gold-500 transition-colors duration-300 text-lg" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a>
                  <a href="https://www.linkedin.com/in/linet-kithae-936211344" target="_blank" rel="noopener noreferrer" className="text-nude-500 hover:text-gold-500 transition-colors duration-300 text-lg" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in" /></a>
                  <a href="https://wa.me/254769527791" target="_blank" rel="noopener noreferrer" className="text-nude-500 hover:text-gold-500 transition-colors duration-300 text-lg" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp" /></a>
                  <a href="https://tiktok.com/@linetkithae22" target="_blank" rel="noopener noreferrer" className="text-nude-500 hover:text-gold-500 transition-colors duration-300 text-lg" aria-label="TikTok"><i className="fa-brands fa-tiktok" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile meta – unchanged */}
        <div className="md:hidden mt-8 pt-6 border-t border-nude-200/50 relative z-30 bg-nude-50/80 backdrop-blur-sm rounded-t-2xl px-4 pb-4">
          <div className="grid grid-cols-2 gap-y-4 gap-x-6">
            <div>
              <div className="text-[0.65rem] tracking-[0.3em] uppercase text-nude-700 font-medium mb-1 font-tech">Role</div>
              <div className="text-sm text-dark font-normal font-tech">Social Media Strategist</div>
            </div>
            <div>
              <div className="text-[0.65rem] tracking-[0.3em] uppercase text-nude-700 font-medium mb-1 font-tech">Location</div>
              <div className="text-sm text-dark font-normal font-tech">Nairobi, Kenya</div>
            </div>
            <div>
              <div className="text-[0.65rem] tracking-[0.3em] uppercase text-nude-700 font-medium mb-1 font-tech">Experience</div>
              <div className="text-sm text-dark font-normal font-tech">5+ Years</div>
            </div>
            <div>
              <div className="text-[0.65rem] tracking-[0.3em] uppercase text-nude-700 font-medium mb-1 font-tech">Status</div>
              <div className="text-sm text-dark font-normal font-tech flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
                Available
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-nude-200/40">
            <div className="text-[0.65rem] tracking-[0.3em] uppercase text-nude-700 font-medium mb-2 font-tech">Connect</div>
            <div className="flex gap-5">
              <a href="https://instagram.com/kithae.linet" target="_blank" rel="noopener noreferrer" className="text-nude-500 hover:text-gold-500 transition-colors duration-300 text-lg" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a>
              <a href="https://www.linkedin.com/in/linet-kithae-936211344" target="_blank" rel="noopener noreferrer" className="text-nude-500 hover:text-gold-500 transition-colors duration-300 text-lg" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in" /></a>
              <a href="https://wa.me/254769527791" target="_blank" rel="noopener noreferrer" className="text-nude-500 hover:text-gold-500 transition-colors duration-300 text-lg" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp" /></a>
              <a href="https://tiktok.com/@linetkithae22" target="_blank" rel="noopener noreferrer" className="text-nude-500 hover:text-gold-500 transition-colors duration-300 text-lg" aria-label="TikTok"><i className="fa-brands fa-tiktok" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}