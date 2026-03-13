import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { RESTAURANT } from '../data/restaurantData'

const TIMES = ['12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM']

export default function ReservationsPage() {
  useScrollReveal()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const [form, setForm] = useState({
    name: '', email: '', phone: '', guests: '2', date: '', time: '', requests: '', experience: 'standard'
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.includes('@')) errs.email = 'Valid email required'
    if (!form.phone.trim()) errs.phone = 'Phone is required'
    if (!form.date) errs.date = 'Date is required'
    if (!form.time) errs.time = 'Time is required'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  const update = (field, value) => {
    setForm(f => ({ ...f, [field]: value }))
    setErrors(e => { const n = { ...e }; delete n[field]; return n })
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <div>
      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 60, background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.06 }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="section-label"><span className="orange-line" /> Reservations</div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(44px, 7vw, 88px)', color: 'white', fontWeight: 300, lineHeight: 1.05 }}>
            Reserve Your<br /><em style={{ color: '#E8651A' }}>Table</em>
          </h1>
        </div>
      </section>

      <section style={{ padding: '60px 0 100px' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Info */}
            <div className="reveal-left">
              <div style={{ position: 'sticky', top: 100 }}>
                <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 32, color: 'white', fontWeight: 300, marginBottom: 32 }}>Dining Information</h2>

                {[
                  { icon: '📍', title: 'Location', content: RESTAURANT.address },
                  { icon: '📞', title: 'Phone', content: RESTAURANT.phone },
                  { icon: '✉️', title: 'Email', content: RESTAURANT.email },
                ].map(({ icon, title, content }) => (
                  <div key={title} style={{ display: 'flex', gap: 16, marginBottom: 24, padding: '20px', background: '#161616', borderRadius: 16, border: '1px solid #1a1a1a' }}>
                    <span style={{ fontSize: 22 }}>{icon}</span>
                    <div>
                      <div style={{ color: '#E8651A', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 4 }}>{title}</div>
                      <div style={{ color: '#888', fontSize: 14 }}>{content}</div>
                    </div>
                  </div>
                ))}

                <div style={{ background: '#161616', borderRadius: 16, padding: 24, border: '1px solid #1a1a1a', marginTop: 8 }}>
                  <h3 style={{ color: '#E8651A', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>Opening Hours</h3>
                  {[['Tue — Fri', RESTAURANT.hours.weekdays], ['Sat — Sun', RESTAURANT.hours.weekends], ['Monday', 'Closed']].map(([day, time]) => (
                    <div key={day} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #1a1a1a' }}>
                      <span style={{ color: '#666', fontSize: 13 }}>{day}</span>
                      <span style={{ color: day === 'Monday' ? '#444' : '#ccc', fontSize: 13 }}>{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 reveal-right">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '80px 40px', background: '#161616', borderRadius: 24, border: '1px solid #1a1a1a' }}>
                  <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(232,101,26,0.1)', border: '1px solid rgba(232,101,26,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: 32 }}>🍣</div>
                  <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 40, color: 'white', fontWeight: 300, marginBottom: 16 }}>Reservation Confirmed!</h2>
                  <p style={{ color: '#666', fontSize: 15, lineHeight: 1.8, marginBottom: 12 }}>Thank you, <strong style={{ color: '#E8651A' }}>{form.name}</strong>.</p>
                  <p style={{ color: '#555', fontSize: 14, lineHeight: 1.8, marginBottom: 8 }}>We have reserved a table for <strong style={{ color: '#ccc' }}>{form.guests} guests</strong> on <strong style={{ color: '#ccc' }}>{form.date}</strong> at <strong style={{ color: '#ccc' }}>{form.time}</strong>.</p>
                  <p style={{ color: '#444', fontSize: 13 }}>A confirmation has been sent to {form.email}</p>
                  <button onClick={() => setSubmitted(false)} className="btn-orange" style={{ marginTop: 32 }}>Make Another Reservation</button>
                </div>
              ) : (
                <div style={{ background: '#161616', borderRadius: 24, padding: '48px 40px', border: '1px solid #1a1a1a' }}>
                  <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 32, color: 'white', fontWeight: 300, marginBottom: 8 }}>Book Your Experience</h2>
                  <p style={{ color: '#555', fontSize: 14, marginBottom: 36 }}>Reservations recommended for groups of 4 or more</p>

                  {/* Experience type */}
                  <div style={{ marginBottom: 28 }}>
                    <label style={{ color: '#888', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 12 }}>Experience Type</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {[['standard', 'À La Carte', 'Order from the full menu'], ['omakase', 'Omakase', '7-course chef\'s selection'], ['private', 'Private Dining', 'Exclusive dining room']].map(([val, lbl, desc]) => (
                        <button key={val} onClick={() => update('experience', val)} style={{
                          padding: '16px', borderRadius: 14, textAlign: 'left',
                          border: form.experience === val ? '1px solid #E8651A' : '1px solid #222',
                          background: form.experience === val ? 'rgba(232,101,26,0.1)' : 'transparent',
                          cursor: 'pointer', transition: 'all 0.3s',
                        }}>
                          <div style={{ color: form.experience === val ? '#E8651A' : '#888', fontSize: 13, fontWeight: 500, marginBottom: 4 }}>{lbl}</div>
                          <div style={{ color: '#444', fontSize: 11 }}>{desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ marginBottom: 16 }}>
                      <div>
                        <label style={{ color: '#888', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Full Name *</label>
                        <input className="form-input" type="text" placeholder="Your full name" value={form.name} onChange={e => update('name', e.target.value)} />
                        {errors.name && <span style={{ color: '#f77', fontSize: 12, marginTop: 4, display: 'block' }}>{errors.name}</span>}
                      </div>
                      <div>
                        <label style={{ color: '#888', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Email *</label>
                        <input className="form-input" type="email" placeholder="your@email.com" value={form.email} onChange={e => update('email', e.target.value)} />
                        {errors.email && <span style={{ color: '#f77', fontSize: 12, marginTop: 4, display: 'block' }}>{errors.email}</span>}
                      </div>
                      <div>
                        <label style={{ color: '#888', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Phone *</label>
                        <input className="form-input" type="tel" placeholder="+254 700 000 000" value={form.phone} onChange={e => update('phone', e.target.value)} />
                        {errors.phone && <span style={{ color: '#f77', fontSize: 12, marginTop: 4, display: 'block' }}>{errors.phone}</span>}
                      </div>
                      <div>
                        <label style={{ color: '#888', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Number of Guests *</label>
                        <select className="form-input" value={form.guests} onChange={e => update('guests', e.target.value)} style={{ appearance: 'none' }}>
                          {[1,2,3,4,5,6,7,8,10,12].map(n => <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>)}
                        </select>
                      </div>
                      <div>
                        <label style={{ color: '#888', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Date *</label>
                        <input className="form-input" type="date" min={today} value={form.date} onChange={e => update('date', e.target.value)} />
                        {errors.date && <span style={{ color: '#f77', fontSize: 12, marginTop: 4, display: 'block' }}>{errors.date}</span>}
                      </div>
                      <div>
                        <label style={{ color: '#888', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Time *</label>
                        <select className="form-input" value={form.time} onChange={e => update('time', e.target.value)} style={{ appearance: 'none' }}>
                          <option value="">Select time...</option>
                          {TIMES.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                        {errors.time && <span style={{ color: '#f77', fontSize: 12, marginTop: 4, display: 'block' }}>{errors.time}</span>}
                      </div>
                    </div>
                    <div style={{ marginBottom: 28 }}>
                      <label style={{ color: '#888', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Special Requests</label>
                      <textarea className="form-input" rows={4} placeholder="Dietary requirements, allergies, celebrations, special arrangements..." value={form.requests} onChange={e => update('requests', e.target.value)} style={{ resize: 'vertical' }} />
                    </div>
                    <button type="submit" className="btn-orange" style={{ width: '100%', padding: 18, fontSize: 15 }} disabled={loading}>
                      {loading ? 'Confirming Reservation...' : 'Confirm Reservation'}
                    </button>
                    <p style={{ color: '#333', fontSize: 12, textAlign: 'center', marginTop: 16 }}>We'll send a confirmation to your email within minutes.</p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
