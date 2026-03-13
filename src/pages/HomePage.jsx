import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { MENU, TESTIMONIALS, RESTAURANT } from '../data/restaurantData'

// Featured dishes: first popular item from rolls + ramen + desserts
const featured = [
  MENU['Sushi Rolls'].find(i => i.popular),
  MENU['Ramen'].find(i => i.popular),
  MENU['Nigiri'].find(i => i.popular),
  MENU['Desserts'].find(i => i.popular),
].filter(Boolean)

const highlights = [
  { icon: '🎌', title: 'Authentic Tradition', desc: 'Techniques refined over decades, ingredients sourced from Japan and local partners' },
  { icon: '🌿', title: 'Fresh Daily', desc: 'Fish flown in weekly from the coast and Japanese markets, never frozen' },
  { icon: '🍶', title: 'Curated Sake Bar', desc: 'Over 20 premium sakes paired perfectly with every dish by our sommelier' },
  { icon: '🏆', title: 'Award Winning', desc: 'Nairobi\'s Best Japanese Restaurant 2024 — East Africa Food Awards' },
]

export default function HomePage() {
  useScrollReveal()

  return (
    <div>
      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: '#0a0a0a',
      }}>
        {/* Background image */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2,
          filter: 'blur(2px)',
        }} />
        {/* Gradient overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,10,10,0.98) 50%, rgba(10,10,10,0.7) 100%)' }} />

        {/* Floating sushi image */}
        <div style={{
          position: 'absolute', right: '5%', top: '50%',
          transform: 'translateY(-50%)',
          width: '42%', maxWidth: 560,
        }} className="hidden lg:block">
          <div style={{ borderRadius: '50% 30% 50% 30% / 30% 50% 30% 50%', overflow: 'hidden', boxShadow: '0 40px 120px rgba(232,101,26,0.15)' }}>
            <img
              src="https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=900&q=85"
              alt="Premium Sushi"
              style={{ width: '100%', height: 580, objectFit: 'cover', display: 'block' }}
            />
          </div>
          {/* Floating badge */}
          <div style={{
            position: 'absolute', bottom: 40, left: -40,
            background: '#161616', border: '1px solid #222',
            borderRadius: 16, padding: '16px 24px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
          }}>
            <div style={{ color: '#E8651A', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 4 }}>Chef's Special</div>
            <div style={{ color: 'white', fontFamily: 'Cormorant Garamond, serif', fontSize: 18 }}>Dragon Roll</div>
            <div style={{ color: '#888', fontSize: 12, marginTop: 2 }}>KSh 1,850</div>
          </div>
        </div>

        {/* Hero content */}
        <div className="max-w-7xl mx-auto px-6 relative z-10" style={{ paddingTop: 120 }}>
          <div style={{ maxWidth: 620 }}>
            <div className="section-label" style={{ animationDelay: '0.2s' }}>
              <span className="orange-line" />
              Nairobi, Kenya
            </div>
            <h1 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(52px, 8vw, 96px)',
              fontWeight: 300,
              lineHeight: 1.05,
              color: 'white',
              marginBottom: 28,
              letterSpacing: '-0.01em',
            }}>
              The Art of<br />
              <em style={{ color: '#E8651A', fontStyle: 'italic' }}>Japanese</em><br />
              Cuisine
            </h1>
            <p style={{ color: '#888', fontSize: 16, lineHeight: 1.8, marginBottom: 40, maxWidth: 480 }}>
              Where Japanese tradition meets Nairobi's modern pulse. 
              An experience in silence, craft, and extraordinary flavor.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/reservations" className="btn-orange" style={{ textDecoration: 'none' }}>
                Book a Table
              </Link>
              <Link to="/menu" className="btn-outline" style={{ textDecoration: 'none' }}>
                Explore Menu
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-16" style={{ paddingTop: 32, borderTop: '1px solid #1a1a1a' }}>
              {[['5+', 'Years of Excellence'], ['10,000+', 'Happy Guests'], ['100%', 'Fresh Ingredients']].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 32, color: '#E8651A', fontWeight: 400 }}>{num}</div>
                  <div style={{ color: '#555', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 2 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
          <div style={{ color: '#333', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>Scroll</div>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, #333, transparent)', margin: '0 auto' }} />
        </div>
      </section>

      {/* ── FEATURED DISHES ── */}
      <section style={{ padding: '100px 0', background: '#0d0d0d' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>
              <span className="orange-line" /> Featured Dishes
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 56px)', color: 'white', fontWeight: 300 }}>
              Crafted with Precision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((item, i) => (
              <div key={item.id} className="card-hover img-zoom reveal" style={{ animationDelay: `${i * 0.1}s`, background: '#161616', borderRadius: 20, overflow: 'hidden', border: '1px solid #1a1a1a' }}>
                <div style={{ height: 220, overflow: 'hidden', position: 'relative' }}>
                  <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  {item.popular && (
                    <div style={{ position: 'absolute', top: 14, right: 14 }}>
                      <span className="badge-orange">Popular</span>
                    </div>
                  )}
                </div>
                <div style={{ padding: '20px 20px 24px' }}>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22, color: 'white', fontWeight: 400, marginBottom: 6 }}>{item.name}</h3>
                  <p style={{ color: '#555', fontSize: 13, lineHeight: 1.6, marginBottom: 14, height: 40, overflow: 'hidden' }}>{item.description}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ color: '#E8651A', fontSize: 18, fontFamily: 'Cormorant Garamond, serif' }}>KSh {item.price.toLocaleString()}</span>
                    <Link to="/menu" style={{ color: '#888', fontSize: 12, textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase' }}>View →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <Link to="/menu" className="btn-outline" style={{ textDecoration: 'none' }}>View Full Menu</Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section style={{ padding: '100px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <div className="section-label">
                <span className="orange-line" /> Our Story
              </div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 4vw, 52px)', color: 'white', fontWeight: 300, lineHeight: 1.15, marginBottom: 24 }}>
                A Quiet Space for<br /><em style={{ color: '#E8651A' }}>Extraordinary</em> Flavors
              </h2>
              <p style={{ color: '#666', fontSize: 15, lineHeight: 1.9, marginBottom: 20 }}>
                Hush was born from a simple idea: that dining should feel like a ritual. 
                Chef Kenji Mura trained for fifteen years across Tokyo and Osaka before bringing 
                his craft to Nairobi — a city hungry for authenticity.
              </p>
              <p style={{ color: '#555', fontSize: 15, lineHeight: 1.9, marginBottom: 36 }}>
                Every piece of sushi is an exercise in patience and precision. Every bowl of ramen 
                is the result of twelve hours of simmering broth. This is food made with intention.
              </p>
              <Link to="/about" className="btn-orange" style={{ textDecoration: 'none' }}>Our Story</Link>
            </div>
            <div className="reveal-right">
              <div style={{ position: 'relative' }}>
                <div style={{ borderRadius: '30px 10px 30px 10px', overflow: 'hidden', height: 500 }}>
                  <img src="https://images.unsplash.com/photo-1562802378-063ec186a863?w=700&q=80" alt="Chef preparing sushi" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{
                  position: 'absolute', bottom: -20, left: -20,
                  background: '#E8651A', borderRadius: 16,
                  padding: '24px 28px', boxShadow: '0 20px 60px rgba(232,101,26,0.3)',
                }}>
                  <div style={{ color: 'white', fontFamily: 'Cormorant Garamond, serif', fontSize: 40, fontWeight: 300, lineHeight: 1 }}>15+</div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, marginTop: 4 }}>Years of Mastery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section style={{ padding: '80px 0', background: '#0d0d0d', borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((h, i) => (
              <div key={h.title} className="reveal" style={{ animationDelay: `${i * 0.1}s`, textAlign: 'center', padding: '20px 10px' }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{h.icon}</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22, color: 'white', fontWeight: 400, marginBottom: 10 }}>{h.title}</h3>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7 }}>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHEF SPECIALS ── */}
      <section style={{ padding: '100px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left" style={{ order: 2 }}>
              <div className="section-label">
                <span className="orange-line" /> Chef Kenji Mura
              </div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 4vw, 52px)', color: 'white', fontWeight: 300, lineHeight: 1.15, marginBottom: 24 }}>
                The Omakase<br /><em style={{ color: '#E8651A' }}>Experience</em>
              </h2>
              <p style={{ color: '#666', fontSize: 15, lineHeight: 1.9, marginBottom: 24 }}>
                Our 7-course omakase menu is Chef Kenji's love letter to Japanese cuisine — 
                a seasonal journey from delicate sashimi to rich miso-glazed black cod, each 
                course paired with a curated sake selection.
              </p>
              <div style={{ display: 'flex', gap: 24, marginBottom: 36, flexWrap: 'wrap' }}>
                {[['7', 'Courses'], ['2.5 hrs', 'Duration'], ['KSh 8,500', 'Per Person']].map(([val, lbl]) => (
                  <div key={lbl} style={{ textAlign: 'center' }}>
                    <div style={{ color: '#E8651A', fontFamily: 'Cormorant Garamond, serif', fontSize: 28, fontWeight: 400 }}>{val}</div>
                    <div style={{ color: '#555', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 2 }}>{lbl}</div>
                  </div>
                ))}
              </div>
              <Link to="/reservations" className="btn-orange" style={{ textDecoration: 'none' }}>Reserve Omakase</Link>
            </div>
            <div className="reveal-right" style={{ order: 1 }}>
              <div style={{ position: 'relative' }}>
                <div style={{ borderRadius: '10px 30px 10px 30px', overflow: 'hidden', height: 480 }}>
                  <img src="https://images.unsplash.com/photo-1534482421-64566f976cfa?w=700&q=80" alt="Sashimi platter" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: '100px 0', background: '#0d0d0d', borderTop: '1px solid #1a1a1a' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>
              <span className="orange-line" /> Guest Reviews
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 56px)', color: 'white', fontWeight: 300 }}>
              What Our Guests Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.id} className="reveal card-hover" style={{ animationDelay: `${i * 0.1}s`, background: '#161616', border: '1px solid #1a1a1a', borderRadius: 20, padding: '32px 36px' }}>
                <div className="stars" style={{ marginBottom: 20, fontSize: 16 }}>{'★'.repeat(t.rating)}</div>
                <p style={{ color: '#888', fontSize: 15, lineHeight: 1.85, marginBottom: 24, fontStyle: 'italic' }}>
                  "{t.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#E8651A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'Cormorant Garamond, serif', fontSize: 18, fontWeight: 600 }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ color: 'white', fontSize: 14, fontWeight: 500 }}>{t.name}</div>
                    <div style={{ color: '#444', fontSize: 12, marginTop: 2 }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESERVATION CTA ── */}
      <section style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.08 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(232,101,26,0.05), transparent 70%)' }} />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <div className="reveal">
            <div className="section-label" style={{ justifyContent: 'center' }}>
              <span className="orange-line" /> Reserve Your Table
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(40px, 6vw, 72px)', color: 'white', fontWeight: 300, lineHeight: 1.1, marginBottom: 24 }}>
              An Evening You<br /><em style={{ color: '#E8651A' }}>Won't Forget</em>
            </h2>
            <p style={{ color: '#666', fontSize: 16, lineHeight: 1.8, marginBottom: 40 }}>
              Reservations recommended. Walk-ins welcome based on availability. 
              Private dining available for groups of 6 and above.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link to="/reservations" className="btn-orange" style={{ textDecoration: 'none', fontSize: 15, padding: '16px 42px' }}>
                Book a Table
              </Link>
              <a href={`tel:${RESTAURANT.phone}`} className="btn-outline" style={{ textDecoration: 'none' }}>
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
