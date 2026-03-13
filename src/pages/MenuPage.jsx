import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { MENU, CATEGORY_ICONS } from '../data/restaurantData'
import { useCart } from '../context/CartContext'

function MenuCard({ item }) {
  const { addItem, setIsOpen } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addItem(item)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div className="card-hover" style={{ background: '#161616', borderRadius: 20, overflow: 'hidden', border: '1px solid #1a1a1a', display: 'flex', flexDirection: 'column' }}>
      <div className="img-zoom" style={{ height: 200, position: 'relative' }}>
        <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: 12, right: 12, display: 'flex', gap: 6 }}>
          {item.popular && <span className="badge-orange">Popular</span>}
          {item.spicy && <span style={{ background: 'rgba(220,50,50,0.15)', border: '1px solid rgba(220,50,50,0.3)', color: '#f77', padding: '4px 10px', borderRadius: 20, fontSize: 11, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Spicy</span>}
        </div>
      </div>
      <div style={{ padding: '20px 20px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22, color: 'white', fontWeight: 400, marginBottom: 6 }}>{item.name}</h3>
        <p style={{ color: '#555', fontSize: 13, lineHeight: 1.6, marginBottom: 16, flex: 1 }}>{item.description}</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ color: '#E8651A', fontSize: 20, fontFamily: 'Cormorant Garamond, serif' }}>KSh {item.price.toLocaleString()}</span>
          <button
            onClick={handleAdd}
            style={{
              background: added ? '#1a4a2a' : 'transparent',
              border: added ? '1px solid #2a6a3a' : '1px solid #333',
              color: added ? '#4CAF50' : '#E8651A',
              padding: '8px 18px', borderRadius: 50, fontSize: 12,
              cursor: 'pointer', transition: 'all 0.3s', fontFamily: 'DM Sans',
              letterSpacing: '0.05em',
            }}
          >
            {added ? '✓ Added' : '+ Add'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('Sushi Rolls')
  useScrollReveal()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const categories = Object.keys(MENU)

  return (
    <div>
      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 60, background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1617196034085-52a27a0fa621?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.07 }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="section-label"><span className="orange-line" /> Our Menu</div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(44px, 7vw, 88px)', color: 'white', fontWeight: 300, lineHeight: 1.05 }}>
            A Curated<br /><em style={{ color: '#E8651A' }}>Menu</em>
          </h1>
          <p style={{ color: '#555', fontSize: 15, marginTop: 16, maxWidth: 480 }}>
            All prices in Kenyan Shillings (KSh). Prices include VAT. Consuming raw or undercooked seafood may increase your risk of foodborne illness.
          </p>
        </div>
      </section>

      {/* Sticky category nav */}
      <div style={{ position: 'sticky', top: 72, zIndex: 30, background: 'rgba(10,10,10,0.97)', borderBottom: '1px solid #1a1a1a', backdropFilter: 'blur(20px)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ display: 'flex', gap: 4, overflowX: 'auto', padding: '12px 0', scrollbarWidth: 'none' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  whiteSpace: 'nowrap',
                  padding: '10px 20px',
                  borderRadius: 50,
                  border: activeCategory === cat ? 'none' : '1px solid #222',
                  background: activeCategory === cat ? '#E8651A' : 'transparent',
                  color: activeCategory === cat ? 'white' : '#666',
                  fontSize: 13,
                  fontFamily: 'DM Sans',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  letterSpacing: '0.05em',
                }}
              >
                {CATEGORY_ICONS[cat]} {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu items */}
      <section style={{ padding: '60px 0 100px' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ marginBottom: 36 }}>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 36, color: 'white', fontWeight: 300 }}>
              {CATEGORY_ICONS[activeCategory]} {activeCategory}
            </h2>
            <div style={{ width: 40, height: 2, background: '#E8651A', marginTop: 10 }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MENU[activeCategory].map((item, i) => (
              <div key={item.id} className="reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                <MenuCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
