import { Link } from 'react-router-dom'
import { RESTAURANT } from '../data/restaurantData'

export default function Footer() {
  return (
    <footer style={{ background: '#080808', borderTop: '1px solid #1a1a1a' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div style={{ width: 40, height: 40, background: '#E8651A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'white', fontFamily: 'Cormorant Garamond, serif', fontWeight: 600, fontSize: 18 }}>H</span>
              </div>
              <div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 24, fontWeight: 600, color: 'white', lineHeight: 1 }}>HUSH</div>
                <div style={{ fontSize: 9, color: '#E8651A', letterSpacing: '0.25em', textTransform: 'uppercase', marginTop: 2 }}>Modern Sushi</div>
              </div>
            </div>
            <p style={{ color: '#555', fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>
              Premium Japanese cuisine in the heart of Nairobi. An experience in silence, craft, and flavor.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'Twitter', 'Facebook'].map(s => (
                <a key={s} href="#" style={{ width: 36, height: 36, borderRadius: 8, border: '1px solid #222', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555', textDecoration: 'none', fontSize: 12, transition: 'all 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#E8651A'; e.currentTarget.style.color = '#E8651A' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#222'; e.currentTarget.style.color = '#555' }}>
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 style={{ fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#E8651A', marginBottom: 20 }}>Navigate</h4>
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About Us' },
              { to: '/menu', label: 'Our Menu' },
              { to: '/reservations', label: 'Reservations' },
              { to: '/gallery', label: 'Gallery' },
              { to: '/blog', label: 'Blog' },
              { to: '/order', label: 'Order Online' },
            ].map(({ to, label }) => (
              <Link key={to} to={to} style={{ display: 'block', marginBottom: 10, color: '#555', fontSize: 14, textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#ccc'}
                onMouseLeave={e => e.target.style.color = '#555'}>
                {label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#E8651A', marginBottom: 20 }}>Contact</h4>
            <div style={{ marginBottom: 14 }}>
              <div style={{ color: '#555', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Address</div>
              <div style={{ color: '#888', fontSize: 14, lineHeight: 1.6 }}>{RESTAURANT.address}</div>
            </div>
            <div style={{ marginBottom: 14 }}>
              <div style={{ color: '#555', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Phone</div>
              <a href={`tel:${RESTAURANT.phone}`} style={{ color: '#888', fontSize: 14, textDecoration: 'none' }}>{RESTAURANT.phone}</a>
            </div>
            <div>
              <div style={{ color: '#555', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Email</div>
              <a href={`mailto:${RESTAURANT.email}`} style={{ color: '#888', fontSize: 14, textDecoration: 'none' }}>{RESTAURANT.email}</a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 style={{ fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#E8651A', marginBottom: 20 }}>Opening Hours</h4>
            <div style={{ marginBottom: 14 }}>
              <div style={{ color: '#555', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Tue — Fri</div>
              <div style={{ color: '#888', fontSize: 14 }}>{RESTAURANT.hours.weekdays}</div>
            </div>
            <div style={{ marginBottom: 14 }}>
              <div style={{ color: '#555', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Sat — Sun</div>
              <div style={{ color: '#888', fontSize: 14 }}>{RESTAURANT.hours.weekends}</div>
            </div>
            <div style={{ marginBottom: 24 }}>
              <div style={{ color: '#555', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Monday</div>
              <div style={{ color: '#555', fontSize: 14 }}>Closed</div>
            </div>
            <Link to="/reservations" className="btn-orange" style={{ fontSize: 12, padding: '10px 22px', textDecoration: 'none', display: 'inline-block' }}>
              Book a Table
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ marginTop: 60, paddingTop: 24, borderTop: '1px solid #1a1a1a', display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ color: '#333', fontSize: 12 }}>© 2025 Hush Modern Sushi Restaurant. All rights reserved. Nairobi, Kenya.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map(t => (
              <span key={t} style={{ color: '#333', fontSize: 12, cursor: 'pointer' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
