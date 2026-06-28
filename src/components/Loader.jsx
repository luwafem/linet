import { useEffect, useState } from 'react'

export default function Loader() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1800)
    const fallback = setTimeout(() => setLoaded(true), 4500)
    const removeTimer = setTimeout(() => document.getElementById('loader')?.remove(), 2800)
    return () => { clearTimeout(timer); clearTimeout(fallback); clearTimeout(removeTimer) }
  }, [])

  useEffect(() => {
    if (loaded) document.body.classList.add('site-ready')
  }, [loaded])

  return (
    <div id="loader" className={loaded ? 'loaded' : ''}>
      <span className="loader-name">LINET</span>
      <span className="loader-sub">Social Media Manager</span>
      <div className="loader-line-wrap">
        <div className="loader-line" />
      </div>
    </div>
  )
}