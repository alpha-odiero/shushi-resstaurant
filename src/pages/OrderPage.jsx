import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { MENU, CATEGORY_ICONS } from '../data/restaurantData'
import { useCart } from '../context/CartContext'

function OrderCard({ item }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addItem(item)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div style={{ display: 'flex', gap: 14, padding: '16px 0', borderBottom: '1px solid #1a1a1a', alignItems: 'center' }}>
      <div className="img-zoom" style={{ width: 80, height: 80, borderRadius: 12, overflow: 'hidden', flexShrink: 0 }}>
        <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 4 }}>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 18, color: 'white', fontWeight: 400 }}>{item.name}</span>
          {item.popular && <span className="badge-orange" style={{ fontSize: 10, padding: '2px 8px' }}>★</span>}
          {item.spicy && <span style={{ color: '#f77', fontSize: 14 }}>🌶</span>}
        </div>
        <p style={{ color: '#444', fontSize: 12, lineHeight: 1.5, marginBottom: 6 }}>{item.description}</p>
        <span style={{ color: '#E8651A', fontSize: 16, fontFamily: 'Cormorant Garamond, serif' }}>KSh {item.price.toLocaleString()}</span>
      </div>
      <button
        onClick={handleAdd}
        style={{
          background: added ? 'rgba(76,175,80,0.15)' : 'rgba(232,101,26,0.1)',
          border: added ? '1px solid rgba(76,175,80,0.3)' : '1px solid rgba(232,101,26,0.3)',
          color: added ? '#4CAF50' : '#E8651A',
          width: 40, height: 40, borderRadius: '50%',
          fontSize: 20, cursor: 'pointer', transition: 'all 0.3s',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}
      >
        {added ? '✓' : '+'}
      </button>
    </div>
  )
}

export default function OrderPage() {
  useScrollReveal()
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const [activeCategory, setActiveCategory] = useState('Sushi Rolls')
  const [search, setSearch] = useState('')
  const { count, total, setIsOpen } = useCart()

  const categories = Object.keys(MENU)

  const filteredItems = search.trim()
    ? Object.values(MENU).flat().filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())
      )
    : MENU[activeCategory]

  return (
    <div>
      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 60, background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.07 }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="section-label"><span className="orange-line" /> Order Online</div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(44px, 6vw, 72px)', color: 'white', fontWeight: 300, lineHeight: 1.05 }}>
            Order from<br /><em style={{ color: '#E8651A' }}>Hush</em>
          </h1>
          <p style={{ color: '#555', fontSize: 14, marginTop: 12 }}>Delivery within 45–60 minutes · Free delivery on orders over KSh 3,000</p>
        </div>
      </section>

      <section style={{ padding: '0 0 100px' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Menu Side */}
            <div className="lg:col-span-2">
              {/* Search */}
              <div style={{ padding: '24px 0', borderBottom: '1px solid #1a1a1a' }}>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Search the menu..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  style={{ background: '#161616' }}
                />
              </div>

              {!search && (
                <div style={{ display: 'flex', gap: 4, overflowX: 'auto', padding: '16px 0', borderBottom: '1px solid #1a1a1a', scrollbarWidth: 'none' }}>
                  {categories.map(cat => (
                    <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                      whiteSpace: 'nowrap', padding: '8px 18px', borderRadius: 50,
                      border: activeCategory === cat ? 'none' : '1px solid #222',
                      background: activeCategory === cat ? '#E8651A' : 'transparent',
                      color: activeCategory === cat ? 'white' : '#666',
                      fontSize: 12, fontFamily: 'DM Sans', cursor: 'pointer', transition: 'all 0.3s',
                    }}>
                      {CATEGORY_ICONS[cat]} {cat}
                    </button>
                  ))}
                </div>
              )}

              <div style={{ paddingTop: 8 }}>
                {search && (
                  <div style={{ padding: '16px 0', color: '#555', fontSize: 13 }}>
                    {filteredItems.length} result{filteredItems.length !== 1 ? 's' : ''} for "{search}"
                  </div>
                )}
                {filteredItems.map(item => <OrderCard key={item.id} item={item} />)}
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div style={{ position: 'sticky', top: 100, background: '#161616', borderRadius: 20, padding: '28px 24px', border: '1px solid #1a1a1a' }}>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 24, color: 'white', fontWeight: 400, marginBottom: 4 }}>Your Order</h3>
                <p style={{ color: '#444', fontSize: 13, marginBottom: 24 }}>{count} item{count !== 1 ? 's' : ''}</p>

                {count === 0 ? (
                  <div style={{ textAlign: 'center', padding: '32px 0' }}>
                    <div style={{ fontSize: 40, marginBottom: 12 }}>🍱</div>
                    <p style={{ color: '#444', fontSize: 14 }}>Add items to begin</p>
                  </div>
                ) : (
                  <>
                    <div style={{ borderTop: '1px solid #1a1a1a', paddingTop: 16, marginBottom: 20 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                        <span style={{ color: '#666', fontSize: 14 }}>Subtotal</span>
                        <span style={{ color: '#ccc', fontSize: 14 }}>KSh {total.toLocaleString()}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                        <span style={{ color: '#666', fontSize: 14 }}>Delivery</span>
                        <span style={{ color: total >= 3000 ? '#4CAF50' : '#ccc', fontSize: 14 }}>{total >= 3000 ? 'Free' : 'KSh 300'}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 12, borderTop: '1px solid #1a1a1a' }}>
                        <span style={{ color: 'white', fontSize: 16, fontFamily: 'Cormorant Garamond, serif' }}>Total</span>
                        <span style={{ color: 'white', fontSize: 16, fontWeight: 500 }}>KSh {(total + (total >= 3000 ? 0 : 300)).toLocaleString()}</span>
                      </div>
                    </div>
                    <button className="btn-orange" style={{ width: '100%', padding: 16, fontSize: 14 }} onClick={() => setIsOpen(true)}>
                      View Cart & Checkout
                    </button>
                  </>
                )}

                <div style={{ marginTop: 24, padding: '16px', background: '#111', borderRadius: 12 }}>
                  <div style={{ color: '#555', fontSize: 12, marginBottom: 6 }}>🕐 Estimated delivery</div>
                  <div style={{ color: '#888', fontSize: 14 }}>45 – 60 minutes</div>
                </div>
                <div style={{ marginTop: 8, padding: '16px', background: '#111', borderRadius: 12 }}>
                  <div style={{ color: '#555', fontSize: 12, marginBottom: 6 }}>📍 Delivery area</div>
                  <div style={{ color: '#888', fontSize: 14 }}>Nairobi & surrounding areas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
