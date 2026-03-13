import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/menu', label: 'Menu' },
  { to: '/reservations', label: 'Reserve' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/blog', label: 'Blog' },
  { to: '/order', label: 'Order' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, setIsOpen } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isActive = (to) => {
    if (to === '/') return location.pathname === '/'
    return location.pathname.startsWith(to)
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(10,10,10,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
          padding: scrolled ? '12px 0' : '24px 0',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div style={{ width: 36, height: 36, background: '#E8651A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'white', fontFamily: 'Cormorant Garamond, serif', fontWeight: 600, fontSize: 16 }}>H</span>
            </div>
            <div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22, fontWeight: 600, color: 'white', lineHeight: 1 }}>HUSH</div>
              <div style={{ fontSize: 9, color: '#E8651A', letterSpacing: '0.25em', textTransform: 'uppercase', marginTop: 2 }}>Modern Sushi</div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="relative"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 13,
                  fontWeight: 400,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: isActive(to) ? '#E8651A' : '#999',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                  paddingBottom: 4,
                }}
                onMouseEnter={e => { if (!isActive(to)) e.target.style.color = '#ccc' }}
                onMouseLeave={e => { if (!isActive(to)) e.target.style.color = '#999' }}
              >
                {label}
                {isActive(to) && (
                  <span style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
                    background: '#E8651A'
                  }} />
                )}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Cart button */}
            <button
              onClick={() => setIsOpen(true)}
              className="relative"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}
              aria-label="Cart"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              {count > 0 && (
                <span className="cart-badge">{count}</span>
              )}
            </button>

            <Link to="/reservations" className="btn-orange hidden md:block" style={{ fontSize: 12, padding: '10px 24px' }}>
              Book a Table
            </Link>

            {/* Mobile menu button */}
            <button
              className="lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}
              aria-label="Menu"
            >
              <div style={{ width: 24, display: 'flex', flexDirection: 'column', gap: 5 }}>
                <span style={{ display: 'block', height: 1.5, background: mobileOpen ? '#E8651A' : '#ccc', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
                <span style={{ display: 'block', height: 1.5, background: '#ccc', opacity: mobileOpen ? 0 : 1, transition: 'opacity 0.3s' }} />
                <span style={{ display: 'block', height: 1.5, background: mobileOpen ? '#E8651A' : '#ccc', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`} style={{ paddingTop: 80 }}>
        <div style={{ padding: '0 32px' }}>
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 28, color: 'white', fontWeight: 300 }}>Menu</div>
          </div>
          {LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              style={{
                display: 'block',
                padding: '14px 0',
                borderBottom: '1px solid #1a1a1a',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 14,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: isActive(to) ? '#E8651A' : '#888',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
            >
              {label}
            </Link>
          ))}
          <div style={{ marginTop: 32 }}>
            <Link to="/reservations" className="btn-orange" style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}>
              Book a Table
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
