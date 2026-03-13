import { useState, useEffect } from 'react'

const ADMIN_CREDS = { username: 'admin', password: 'hush2024' }

const MOCK_RESERVATIONS = [
  { id: 1, name: 'Amara Osei', guests: 4, date: '2025-04-12', time: '7:00 PM', experience: 'omakase', status: 'confirmed' },
  { id: 2, name: 'David Mwangi', guests: 2, date: '2025-04-13', time: '8:30 PM', experience: 'standard', status: 'pending' },
  { id: 3, name: 'Sophia Kamau', guests: 6, date: '2025-04-14', time: '7:30 PM', experience: 'private', status: 'confirmed' },
  { id: 4, name: 'Tariq Al-Mansouri', guests: 2, date: '2025-04-15', time: '9:00 PM', experience: 'omakase', status: 'confirmed' },
]

const MOCK_ORDERS = [
  { id: 1001, customer: 'John K.', items: 'Dragon Roll x2, Edamame', total: 4150, status: 'preparing', time: '7 min ago' },
  { id: 1002, customer: 'Mary W.', items: 'Tonkotsu Ramen, Gyoza', total: 2900, status: 'delivered', time: '25 min ago' },
  { id: 1003, customer: 'Peter O.', items: 'Salmon Sashimi, Sake', total: 2750, status: 'on the way', time: '12 min ago' },
]

const STATS = [
  { label: 'Total Reservations', value: '248', icon: '📅', change: '+12% this week' },
  { label: 'Online Orders Today', value: '34', icon: '📦', change: '+8 from yesterday' },
  { label: 'Revenue This Month', value: 'KSh 1.2M', icon: '💰', change: '+18% vs last month' },
  { label: 'Avg Rating', value: '4.9 ★', icon: '⭐', change: 'Based on 312 reviews' },
]

function LoginScreen({ onLogin }) {
  const [creds, setCreds] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      if (creds.username === ADMIN_CREDS.username && creds.password === ADMIN_CREDS.password) {
        onLogin()
      } else {
        setError('Invalid credentials. Try admin / hush2024')
      }
    }, 1000)
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0a', padding: 24 }}>
      <div style={{ width: '100%', maxWidth: 420 }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#E8651A', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 24, fontFamily: 'Cormorant Garamond, serif', color: 'white', fontWeight: 600 }}>H</div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 32, color: 'white', fontWeight: 300 }}>Admin Dashboard</h1>
          <p style={{ color: '#444', fontSize: 13, marginTop: 6 }}>Hush Modern Sushi Restaurant</p>
        </div>
        <div style={{ background: '#161616', borderRadius: 20, padding: '40px 36px', border: '1px solid #1a1a1a' }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 16 }}>
              <label style={{ color: '#888', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Username</label>
              <input className="form-input" type="text" placeholder="admin" value={creds.username} onChange={e => setCreds(c => ({ ...c, username: e.target.value }))} />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ color: '#888', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Password</label>
              <input className="form-input" type="password" placeholder="••••••••" value={creds.password} onChange={e => setCreds(c => ({ ...c, password: e.target.value }))} />
            </div>
            {error && <p style={{ color: '#f77', fontSize: 13, marginBottom: 16, textAlign: 'center' }}>{error}</p>}
            <button type="submit" className="btn-orange" style={{ width: '100%', padding: 16 }} disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
          <p style={{ color: '#333', fontSize: 12, textAlign: 'center', marginTop: 16 }}>Demo: admin / hush2024</p>
        </div>
      </div>
    </div>
  )
}

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [activeTab, setActiveTab] = useState('dashboard')
  const [reservations, setReservations] = useState(MOCK_RESERVATIONS)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  if (!loggedIn) return <LoginScreen onLogin={() => setLoggedIn(true)} />

  const TABS = [
    { id: 'dashboard', label: '📊 Dashboard' },
    { id: 'reservations', label: '📅 Reservations' },
    { id: 'orders', label: '📦 Orders' },
    { id: 'menu', label: '🍣 Menu' },
    { id: 'blog', label: '✍️ Blog' },
  ]

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', paddingTop: 80 }}>
      {/* Admin header */}
      <div style={{ background: '#111', borderBottom: '1px solid #1a1a1a', padding: '16px 0', position: 'sticky', top: 72, zIndex: 20 }}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 24, color: 'white', fontWeight: 400 }}>
            Admin Dashboard
          </h1>
          <button onClick={() => setLoggedIn(false)} style={{ background: 'none', border: '1px solid #333', color: '#666', padding: '8px 16px', borderRadius: 8, cursor: 'pointer', fontSize: 13 }}>
            Sign Out
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Tabs */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 32, overflowX: 'auto', borderBottom: '1px solid #1a1a1a', paddingBottom: 1 }}>
          {TABS.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
              padding: '12px 20px', background: 'none', border: 'none', cursor: 'pointer',
              color: activeTab === tab.id ? '#E8651A' : '#555', fontSize: 13, fontFamily: 'DM Sans',
              borderBottom: activeTab === tab.id ? '2px solid #E8651A' : '2px solid transparent',
              transition: 'all 0.2s', whiteSpace: 'nowrap',
            }}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {STATS.map(s => (
                <div key={s.label} style={{ background: '#161616', borderRadius: 16, padding: '24px', border: '1px solid #1a1a1a' }}>
                  <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 28, color: 'white', fontWeight: 300, marginBottom: 4 }}>{s.value}</div>
                  <div style={{ color: '#555', fontSize: 12, marginBottom: 4 }}>{s.label}</div>
                  <div style={{ color: '#E8651A', fontSize: 11 }}>{s.change}</div>
                </div>
              ))}
            </div>
            <div style={{ background: '#161616', borderRadius: 16, padding: 24, border: '1px solid #1a1a1a' }}>
              <h3 style={{ color: 'white', fontFamily: 'Cormorant Garamond, serif', fontSize: 22, marginBottom: 20 }}>Today's Reservations</h3>
              {reservations.slice(0, 3).map(r => (
                <div key={r.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #1a1a1a' }}>
                  <div>
                    <span style={{ color: '#ccc', fontSize: 14 }}>{r.name}</span>
                    <span style={{ color: '#444', fontSize: 13, marginLeft: 12 }}>{r.guests} guests · {r.time}</span>
                  </div>
                  <span style={{
                    padding: '4px 12px', borderRadius: 20, fontSize: 11,
                    background: r.status === 'confirmed' ? 'rgba(76,175,80,0.1)' : 'rgba(255,193,7,0.1)',
                    color: r.status === 'confirmed' ? '#4CAF50' : '#FFC107',
                    border: `1px solid ${r.status === 'confirmed' ? 'rgba(76,175,80,0.3)' : 'rgba(255,193,7,0.3)'}`,
                  }}>{r.status}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reservations Tab */}
        {activeTab === 'reservations' && (
          <div style={{ background: '#161616', borderRadius: 16, overflow: 'hidden', border: '1px solid #1a1a1a' }}>
            <div style={{ padding: '20px 24px', borderBottom: '1px solid #1a1a1a', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ color: 'white', fontFamily: 'Cormorant Garamond, serif', fontSize: 22 }}>All Reservations</h3>
              <span style={{ color: '#555', fontSize: 13 }}>{reservations.length} total</span>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #1a1a1a' }}>
                    {['Guest', 'Guests', 'Date', 'Time', 'Experience', 'Status', 'Actions'].map(h => (
                      <th key={h} style={{ padding: '12px 20px', color: '#555', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'left', fontWeight: 400 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {reservations.map(r => (
                    <tr key={r.id} style={{ borderBottom: '1px solid #111' }}>
                      <td style={{ padding: '14px 20px', color: '#ccc', fontSize: 14 }}>{r.name}</td>
                      <td style={{ padding: '14px 20px', color: '#888', fontSize: 14 }}>{r.guests}</td>
                      <td style={{ padding: '14px 20px', color: '#888', fontSize: 14 }}>{r.date}</td>
                      <td style={{ padding: '14px 20px', color: '#888', fontSize: 14 }}>{r.time}</td>
                      <td style={{ padding: '14px 20px' }}>
                        <span className="badge-orange" style={{ fontSize: 11, textTransform: 'capitalize' }}>{r.experience}</span>
                      </td>
                      <td style={{ padding: '14px 20px' }}>
                        <span style={{
                          padding: '4px 12px', borderRadius: 20, fontSize: 11,
                          background: r.status === 'confirmed' ? 'rgba(76,175,80,0.1)' : 'rgba(255,193,7,0.1)',
                          color: r.status === 'confirmed' ? '#4CAF50' : '#FFC107',
                          border: `1px solid ${r.status === 'confirmed' ? 'rgba(76,175,80,0.3)' : 'rgba(255,193,7,0.3)'}`,
                          textTransform: 'capitalize',
                        }}>{r.status}</span>
                      </td>
                      <td style={{ padding: '14px 20px' }}>
                        <button
                          onClick={() => {
                            setReservations(prev => prev.map(res => res.id === r.id ? { ...res, status: res.status === 'confirmed' ? 'pending' : 'confirmed' } : res))
                          }}
                          style={{ background: 'none', border: '1px solid #333', color: '#888', padding: '5px 12px', borderRadius: 8, cursor: 'pointer', fontSize: 12 }}
                        >
                          Toggle
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div>
            <div className="grid grid-cols-1 gap-4">
              {MOCK_ORDERS.map(order => (
                <div key={order.id} style={{ background: '#161616', borderRadius: 16, padding: '20px 24px', border: '1px solid #1a1a1a', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
                  <div>
                    <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 4 }}>
                      <span style={{ color: 'white', fontSize: 15, fontWeight: 500 }}>Order #{order.id}</span>
                      <span style={{ color: '#444', fontSize: 12 }}>{order.time}</span>
                    </div>
                    <div style={{ color: '#888', fontSize: 13, marginBottom: 4 }}>{order.customer}</div>
                    <div style={{ color: '#555', fontSize: 13 }}>{order.items}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: '#E8651A', fontFamily: 'Cormorant Garamond, serif', fontSize: 20, marginBottom: 8 }}>KSh {order.total.toLocaleString()}</div>
                    <span style={{
                      padding: '5px 14px', borderRadius: 20, fontSize: 12,
                      background: order.status === 'delivered' ? 'rgba(76,175,80,0.1)' : order.status === 'preparing' ? 'rgba(255,193,7,0.1)' : 'rgba(33,150,243,0.1)',
                      color: order.status === 'delivered' ? '#4CAF50' : order.status === 'preparing' ? '#FFC107' : '#64B5F6',
                      border: `1px solid ${order.status === 'delivered' ? 'rgba(76,175,80,0.3)' : order.status === 'preparing' ? 'rgba(255,193,7,0.3)' : 'rgba(33,150,243,0.3)'}`,
                      textTransform: 'capitalize',
                    }}>{order.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Menu Management */}
        {activeTab === 'menu' && (
          <div style={{ background: '#161616', borderRadius: 16, padding: '32px', border: '1px solid #1a1a1a', textAlign: 'center' }}>
            <div style={{ fontSize: 48, marginBottom: 20 }}>🍣</div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 28, color: 'white', marginBottom: 16 }}>Menu Management</h3>
            <p style={{ color: '#555', fontSize: 14, lineHeight: 1.8, maxWidth: 400, margin: '0 auto 32px' }}>
              Connect to the backend API to manage menu items, upload food photos, update prices and descriptions.
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <button className="btn-orange">Add Menu Item</button>
              <button className="btn-outline">Upload Image</button>
            </div>
          </div>
        )}

        {/* Blog Management */}
        {activeTab === 'blog' && (
          <div style={{ background: '#161616', borderRadius: 16, padding: '32px', border: '1px solid #1a1a1a', textAlign: 'center' }}>
            <div style={{ fontSize: 48, marginBottom: 20 }}>✍️</div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 28, color: 'white', marginBottom: 16 }}>Blog Management</h3>
            <p style={{ color: '#555', fontSize: 14, lineHeight: 1.8, maxWidth: 400, margin: '0 auto 32px' }}>
              Create, edit and publish blog posts. Manage SEO metadata, featured images, and publication schedules.
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <button className="btn-orange">New Post</button>
              <button className="btn-outline">Manage Posts</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
