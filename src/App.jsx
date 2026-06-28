// src/App.jsx
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
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        {/* Wrap Hero and Marquee in a viewport-height container */}
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