// src/components/SEO.jsx
import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, path, ogImage }) {
  const siteTitle = 'Linet — Social Media Strategist'
  const siteDescription = 'Social media strategist helping brands grow with clarity, creativity, and purpose.'
  const siteUrl = 'https://linet.co' // replace with your domain

  return (
    <Helmet>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || siteDescription} />
      <link rel="canonical" href={`${siteUrl}${path || ''}`} />

      {/* Open Graph */}
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || siteDescription} />
      <meta property="og:url" content={`${siteUrl}${path || ''}`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage || `${siteUrl}/og-image.png`} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description || siteDescription} />
      <meta name="twitter:image" content={ogImage || `${siteUrl}/og-image.png`} />
    </Helmet>
  )
}