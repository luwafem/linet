// src/components/Loader.jsx
import { useEffect, useState } from 'react'

export default function Loader() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1500)
    const fallback = setTimeout(() => setLoaded(true), 4000)
    const removeTimer = setTimeout(() => document.getElementById('loader')?.remove(), 2400)

    return () => {
      clearTimeout(timer)
      clearTimeout(fallback)
      clearTimeout(removeTimer)
    }
  }, [])

  useEffect(() => {
    if (loaded) document.body.classList.add('site-ready')
  }, [loaded])

  return (
    <div id="loader" className={`${loaded ? 'loaded' : ''} fixed inset-0 z-[9999] bg-nude-50 flex items-center justify-center flex-col gap-3 transition-opacity duration-800 ease-out`}>
      {/* Name – now dark to contrast with nude background */}
      <span className="font-girly text-5xl md:text-7xl text-dark tracking-wider opacity-0 animate-[loaderFadeUp_0.9s_cubic-bezier(0.16,1,0.3,1)_0.3s_forwards]">
        Linet
      </span>
      {/* Subtitle – dark/gold for readability */}
      <span className="font-tech text-xs md:text-sm tracking-[0.35em] uppercase text-gold-500 opacity-0 animate-[loaderFadeUp_0.8s_ease_0.6s_forwards]">
        Social Media Strategist
      </span>
      {/* Loading bar – gold accent */}
     
    </div>
  )
}