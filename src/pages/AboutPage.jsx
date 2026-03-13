import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const TEAM = [
  { name: 'Kenji Mura', role: 'Head Chef & Founder', bio: 'Trained in Osaka and Tokyo for 15 years, Chef Kenji brings authentic mastery to every dish he creates.', image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80' },
  { name: 'Aiko Tanaka', role: 'Sushi Chef', bio: 'Specializing in nigiri and omakase courses, Aiko studied under a master in Kyoto for eight years.', image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400&q=80' },
  { name: 'Marcus Ochieng', role: 'Sommelier', bio: 'Marcus curates our sake and cocktail program, sourcing rare bottles from small Japanese breweries.', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
]

const AWARDS = [
  { year: '2024', award: 'Best Japanese Restaurant — East Africa Food Awards' },
  { year: '2024', award: 'Top 10 Restaurants in Nairobi — Time Out' },
  { year: '2023', award: 'Best New Restaurant — Nairobi Magazine' },
  { year: '2023', award: 'Excellence in Fine Dining — Kenya Hospitality Awards' },
]

const GALLERY = [
  'https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?w=500&q=80',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&q=80',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80',
  'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500&q=80',
]

export default function AboutPage() {
  useScrollReveal()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      {/* ── PAGE HERO ── */}
      <section style={{ paddingTop: 120, paddingBottom: 80, background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.06 }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="section-label">
            <span className="orange-line" /> About Hush
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(44px, 7vw, 88px)', color: 'white', fontWeight: 300, lineHeight: 1.05, maxWidth: 700 }}>
            Our Story of<br /><em style={{ color: '#E8651A' }}>Quiet Excellence</em>
          </h1>
        </div>
      </section>

      {/* ── STORY ── */}
      <section style={{ padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <div style={{ borderRadius: '20px 40px 20px 40px', overflow: 'hidden', height: 500 }}>
                <img src="https://images.unsplash.com/photo-1562802378-063ec186a863?w=700&q=80" alt="Restaurant interior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            <div className="reveal-right">
              <div className="section-label"><span className="orange-line" /> Founded 2020</div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 44, color: 'white', fontWeight: 300, lineHeight: 1.2, marginBottom: 24 }}>
                Born from a<br />Lifelong Obsession
              </h2>
              <p style={{ color: '#666', fontSize: 15, lineHeight: 1.9, marginBottom: 18 }}>
                Hush was born in 2020 when Chef Kenji Mura returned to Nairobi after fifteen years perfecting his craft in Japan. His mission was singular: to create a space where Japanese cuisine could be experienced in its truest form — undiluted by trends, undistracted by noise.
              </p>
              <p style={{ color: '#555', fontSize: 15, lineHeight: 1.9, marginBottom: 18 }}>
                The name "Hush" reflects the philosophy of the restaurant. In the best Japanese dining rooms, there is a reverence — a quiet intensity that honors the ingredients and the craft. We bring that spirit to Nairobi.
              </p>
              <p style={{ color: '#555', fontSize: 15, lineHeight: 1.9 }}>
                Today, Hush stands as East Africa's premier destination for modern Japanese cuisine, beloved by Nairobi's most discerning diners and food travelers from around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section style={{ padding: '80px 0', background: '#0d0d0d', borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="reveal" style={{ background: '#161616', borderRadius: 24, padding: '48px 40px', border: '1px solid #1a1a1a', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: 120, height: 120, background: 'rgba(232,101,26,0.05)', borderRadius: '0 24px 0 50%' }} />
              <div style={{ color: '#E8651A', fontSize: 36, marginBottom: 20 }}>✦</div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 32, color: 'white', fontWeight: 400, marginBottom: 16 }}>Our Mission</h3>
              <p style={{ color: '#666', fontSize: 15, lineHeight: 1.85 }}>
                To deliver an authentic Japanese dining experience that honors centuries of culinary tradition while remaining rooted in the vibrant spirit of Nairobi. We believe the best dining is a form of storytelling — each dish a chapter, each meal a narrative.
              </p>
            </div>
            <div className="reveal" style={{ background: '#161616', borderRadius: 24, padding: '48px 40px', border: '1px solid #1a1a1a', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: 120, height: 120, background: 'rgba(201,168,76,0.05)', borderRadius: '0 24px 0 50%' }} />
              <div style={{ color: '#C9A84C', fontSize: 36, marginBottom: 20 }}>◈</div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 32, color: 'white', fontWeight: 400, marginBottom: 16 }}>Our Vision</h3>
              <p style={{ color: '#666', fontSize: 15, lineHeight: 1.85 }}>
                To become the defining Japanese fine dining destination in East Africa — a beacon for culinary excellence that elevates the region's dining culture and inspires a new generation of chefs and food lovers to explore the depths of Japanese gastronomy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section style={{ padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal" style={{ marginBottom: 56 }}>
            <div className="section-label"><span className="orange-line" /> Meet the Team</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 48, color: 'white', fontWeight: 300 }}>The Artisans</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member, i) => (
              <div key={member.name} className="reveal card-hover" style={{ animationDelay: `${i * 0.15}s`, background: '#161616', borderRadius: 20, overflow: 'hidden', border: '1px solid #1a1a1a' }}>
                <div className="img-zoom" style={{ height: 280 }}>
                  <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '24px 24px 28px' }}>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 24, color: 'white', fontWeight: 400, marginBottom: 4 }}>{member.name}</h3>
                  <div style={{ color: '#E8651A', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>{member.role}</div>
                  <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7 }}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section style={{ padding: '80px 0', background: '#0d0d0d', borderTop: '1px solid #1a1a1a' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal" style={{ marginBottom: 48 }}>
            <div className="section-label"><span className="orange-line" /> Interior</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 48, color: 'white', fontWeight: 300 }}>Our Space</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {GALLERY.map((src, i) => (
              <div key={i} className="img-zoom reveal" style={{ borderRadius: 16, overflow: 'hidden', height: 200 }}>
                <img src={src} alt="Restaurant" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AWARDS ── */}
      <section style={{ padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="reveal">
              <div className="section-label"><span className="orange-line" /> Recognition</div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 48, color: 'white', fontWeight: 300, marginBottom: 8 }}>Awards &<br />Accolades</h2>
            </div>
            <div>
              {AWARDS.map((a, i) => (
                <div key={i} className="reveal" style={{ animationDelay: `${i * 0.1}s`, display: 'flex', gap: 24, padding: '20px 0', borderBottom: '1px solid #1a1a1a', alignItems: 'center' }}>
                  <span style={{ color: '#E8651A', fontFamily: 'Cormorant Garamond, serif', fontSize: 20, minWidth: 50 }}>{a.year}</span>
                  <span style={{ color: '#888', fontSize: 15 }}>{a.award}</span>
                  <span style={{ marginLeft: 'auto', color: '#E8651A' }}>★</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '80px 0', background: '#0d0d0d', borderTop: '1px solid #1a1a1a', textAlign: 'center' }}>
        <div className="max-w-xl mx-auto px-6 reveal">
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 48, color: 'white', fontWeight: 300, marginBottom: 20 }}>
            Experience <em style={{ color: '#E8651A' }}>Hush</em> Tonight
          </h2>
          <p style={{ color: '#555', fontSize: 15, lineHeight: 1.8, marginBottom: 36 }}>Reserve your table and let us take care of the rest.</p>
          <Link to="/reservations" className="btn-orange" style={{ textDecoration: 'none' }}>Book a Table</Link>
        </div>
      </section>
    </div>
  )
}
