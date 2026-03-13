import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { GALLERY } from '../data/restaurantData'

const CATS = ['all', 'food', 'restaurant', 'events']

export default function GalleryPage() {
  useScrollReveal()
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const [filter, setFilter] = useState('all')
  const [lightbox, setLightbox] = useState(null)

  const filtered = filter === 'all' ? GALLERY : GALLERY.filter(g => g.category === filter)

  const navigate = (dir) => {
    const idx = filtered.findIndex(g => g.id === lightbox.id)
    const next = filtered[(idx + dir + filtered.length) % filtered.length]
    setLightbox(next)
  }

  useEffect(() => {
    const handler = (e) => {
      if (!lightbox) return
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') navigate(1)
      if (e.key === 'ArrowLeft') navigate(-1)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, filtered])

  return (
    <div>
      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 60, background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.06 }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="section-label"><span className="orange-line" /> Gallery</div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(44px, 7vw, 88px)', color: 'white', fontWeight: 300, lineHeight: 1.05 }}>
            A Visual<br /><em style={{ color: '#E8651A' }}>Journey</em>
          </h1>
        </div>
      </section>

      {/* Filter */}
      <section style={{ padding: '40px 0', borderBottom: '1px solid #1a1a1a' }}>
        <div className="max-w-7xl mx-auto px-6 flex gap-3 flex-wrap">
          {CATS.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} style={{
              padding: '10px 24px', borderRadius: 50,
              border: filter === cat ? 'none' : '1px solid #222',
              background: filter === cat ? '#E8651A' : 'transparent',
              color: filter === cat ? 'white' : '#666',
              fontSize: 13, fontFamily: 'DM Sans',
              cursor: 'pointer', transition: 'all 0.3s',
              textTransform: 'capitalize', letterSpacing: '0.08em',
            }}>
              {cat === 'all' ? 'All Photos' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: '60px 0 100px' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((img, i) => (
              <div
                key={img.id}
                className="reveal img-zoom"
                onClick={() => setLightbox(img)}
                style={{
                  marginBottom: 16,
                  borderRadius: 16,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  animationDelay: `${i * 0.05}s`,
                }}
              >
                <img src={img.src} alt={img.alt} style={{ width: '100%', display: 'block' }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)',
                  opacity: 0, transition: 'opacity 0.3s',
                  display: 'flex', alignItems: 'flex-end', padding: 20,
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = 1}
                  onMouseLeave={e => e.currentTarget.style.opacity = 0}
                >
                  <span style={{ color: 'white', fontSize: 14, fontFamily: 'Cormorant Garamond, serif' }}>{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <button onClick={(e) => { e.stopPropagation(); navigate(-1) }} style={{ position: 'absolute', left: 24, color: 'white', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: 48, height: 48, fontSize: 22, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>‹</button>
          <div style={{ maxWidth: '85vw', maxHeight: '85vh', position: 'relative' }} onClick={e => e.stopPropagation()}>
            <img src={lightbox.src.replace('w=600', 'w=1200')} alt={lightbox.alt} style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 12 }} />
            <div style={{ position: 'absolute', bottom: -40, left: 0, right: 0, textAlign: 'center', color: '#888', fontSize: 14, fontFamily: 'Cormorant Garamond, serif' }}>{lightbox.alt}</div>
          </div>
          <button onClick={(e) => { e.stopPropagation(); navigate(1) }} style={{ position: 'absolute', right: 24, color: 'white', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: 48, height: 48, fontSize: 22, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>›</button>
          <button onClick={() => setLightbox(null)} style={{ position: 'absolute', top: 24, right: 24, color: 'white', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: 48, height: 48, fontSize: 24, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
        </div>
      )}
    </div>
  )
}
