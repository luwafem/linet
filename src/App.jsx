// src/App.jsx
import { Helmet } from 'react-helmet-async'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import PlatformBar from './components/PlatformBar'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import CtaBanner from './components/CtaBanner'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  const siteUrl = 'https://linet.co' // ← replace with your actual domain

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Linet — Social Media Strategist | Brand Growth & Engagement</title>
        <meta
          name="description"
          content="Linet is a results-driven Social Media Strategist helping brands grow with clarity, creativity, and purpose. Specialising in content strategy, community management, and analytics."
        />
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="Linet — Social Media Strategist | Brand Growth & Engagement" />
        <meta
          property="og:description"
          content="Linet is a results-driven Social Media Strategist helping brands grow with clarity, creativity, and purpose."
        />
        <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content="Linet — Social Media Strategist | Brand Growth & Engagement" />
        <meta
          name="twitter:description"
          content="Linet is a results-driven Social Media Strategist helping brands grow with clarity, creativity, and purpose."
        />
        <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />

        {/* Structured Data (JSON‑LD) for Person */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Linet",
            "jobTitle": "Social Media Strategist",
            "url": siteUrl,
            "sameAs": [
              "https://instagram.com/kithae.linet",
              "https://www.linkedin.com/in/linet-kithae-936211344",
              "https://tiktok.com/@linetkithae22",
              "https://wa.me/254769527791"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance Social Media Strategist"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nairobi",
              "addressCountry": "Kenya"
            }
          })}
        </script>
      </Helmet>

      <Loader />
      <Navbar />
      <main>
        <div className="h-screen flex flex-col overflow-hidden">
          <Hero />
          <Marquee />
        </div>
        <About />
        <Services />
        <PlatformBar />
        <Portfolio />
        <Process />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}