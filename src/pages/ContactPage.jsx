import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { RESTAURANT } from '../data/restaurantData'

export default function ContactPage() {
  useScrollReveal()
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1500)
  }

  return (
    <div>
      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 60, background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1455279032140-49a4bf46f343?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.06 }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="section-label"><span className="orange-line" /> Contact</div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(44px, 7vw, 88px)', color: 'white', fontWeight: 300, lineHeight: 1.05 }}>
            Get in<br /><em style={{ color: '#E8651A' }}>Touch</em>
          </h1>
        </div>
      </section>

      <section style={{ padding: '60px 0 100px' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div className="reveal-left">
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 36, color: 'white', fontWeight: 300, marginBottom: 32 }}>Find Us</h2>

              {[
                { icon: '📍', title: 'Address', content: RESTAURANT.address, link: null },
                { icon: '📞', title: 'Phone', content: RESTAURANT.phone, link: `tel:${RESTAURANT.phone}` },
                { icon: '✉️', title: 'Email', content: RESTAURANT.email, link: `mailto:${RESTAURANT.email}` },
              ].map(({ icon, title, content, link }) => (
                <div key={title} style={{ display: 'flex', gap: 16, marginBottom: 20, padding: '20px 24px', background: '#161616', borderRadius: 16, border: '1px solid #1a1a1a' }}>
                  <span style={{ fontSize: 24 }}>{icon}</span>
                  <div>
                    <div style={{ color: '#E8651A', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 4 }}>{title}</div>
                    {link ? (
                      <a href={link} style={{ color: '#888', fontSize: 14, textDecoration: 'none' }}>{content}</a>
                    ) : (
                      <div style={{ color: '#888', fontSize: 14 }}>{content}</div>
                    )}
                  </div>
                </div>
              ))}

              {/* Hours */}
              <div style={{ background: '#161616', borderRadius: 16, padding: '24px', border: '1px solid #1a1a1a', marginTop: 8 }}>
                <h3 style={{ color: '#E8651A', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 20 }}>Opening Hours</h3>
                {[['Tuesday – Friday', RESTAURANT.hours.weekdays], ['Saturday – Sunday', RESTAURANT.hours.weekends], ['Monday', 'Closed']].map(([day, time]) => (
                  <div key={day} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #1a1a1a' }}>
                    <span style={{ color: '#666', fontSize: 14 }}>{day}</span>
                    <span style={{ color: day === 'Monday' ? '#333' : '#ccc', fontSize: 14 }}>{time}</span>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div style={{ marginTop: 20, borderRadius: 16, overflow: 'hidden', height: 240, background: '#161616', border: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <iframe
                  title="Hush Restaurant Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819!2d36.7699!3d-1.2903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a6bf2bbf7a9%3A0x6f1b6e6e6e6e6e6e!2sThe%20Junction%20Mall%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 'none', filter: 'grayscale(1) invert(0.9) brightness(0.7)' }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>

            {/* Form */}
            <div className="reveal-right">
              {sent ? (
                <div style={{ textAlign: 'center', padding: '80px 40px', background: '#161616', borderRadius: 24, border: '1px solid #1a1a1a' }}>
                  <div style={{ fontSize: 48, marginBottom: 20 }}>✉️</div>
                  <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 36, color: 'white', fontWeight: 300, marginBottom: 16 }}>Message Sent!</h2>
                  <p style={{ color: '#666', fontSize: 15, lineHeight: 1.8, marginBottom: 32 }}>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button onClick={() => setSent(false)} className="btn-orange">Send Another Message</button>
                </div>
              ) : (
                <div style={{ background: '#161616', borderRadius: 24, padding: '48px 40px', border: '1px solid #1a1a1a' }}>
                  <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 32, color: 'white', fontWeight: 300, marginBottom: 8 }}>Send Us a Message</h2>
                  <p style={{ color: '#555', fontSize: 14, marginBottom: 36 }}>For reservations, please use our booking page</p>

                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ marginBottom: 16 }}>
                      <div>
                        <label style={{ color: '#888', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Name</label>
                        <input className="form-input" required type="text" placeholder="Your name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                      </div>
                      <div>
                        <label style={{ color: '#888', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Email</label>
                        <input className="form-input" required type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                      </div>
                    </div>
                    <div style={{ marginBottom: 16 }}>
                      <label style={{ color: '#888', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Subject</label>
                      <select className="form-input" value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} style={{ appearance: 'none' }}>
                        <option value="">Select topic...</option>
                        <option>General Inquiry</option>
                        <option>Private Events</option>
                        <option>Feedback</option>
                        <option>Media & Press</option>
                        <option>Partnerships</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div style={{ marginBottom: 28 }}>
                      <label style={{ color: '#888', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Message</label>
                      <textarea className="form-input" required rows={6} placeholder="How can we help you?" value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} style={{ resize: 'vertical' }} />
                    </div>
                    <button type="submit" className="btn-orange" style={{ width: '100%', padding: 18, fontSize: 15 }} disabled={loading}>
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
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
