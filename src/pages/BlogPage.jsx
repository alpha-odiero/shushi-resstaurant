import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { BLOG_POSTS } from '../data/restaurantData'

function BlogCard({ post, onClick }) {
  return (
    <div className="card-hover img-zoom reveal" onClick={onClick} style={{ background: '#161616', borderRadius: 20, overflow: 'hidden', border: '1px solid #1a1a1a', cursor: 'pointer' }}>
      <div style={{ height: 200, overflow: 'hidden' }}>
        <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ padding: '24px 24px 28px' }}>
        <div style={{ display: 'flex', gap: 10, marginBottom: 14, alignItems: 'center' }}>
          <span className="badge-orange">{post.category}</span>
          <span style={{ color: '#333', fontSize: 12 }}>{post.readTime} read</span>
        </div>
        <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22, color: 'white', fontWeight: 400, lineHeight: 1.3, marginBottom: 12 }}>{post.title}</h3>
        <p style={{ color: '#555', fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>{post.excerpt}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, borderTop: '1px solid #1a1a1a' }}>
          <div>
            <div style={{ color: '#888', fontSize: 13 }}>{post.author}</div>
            <div style={{ color: '#333', fontSize: 12, marginTop: 2 }}>{post.date}</div>
          </div>
          <span className="interactive-word" style={{ color: '#E8651A', fontSize: 13 }}>Read →</span>
        </div>
      </div>
    </div>
  )
}

function BlogPost({ post, onBack }) {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <div>
      <section style={{ paddingTop: 120, paddingBottom: 60, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${post.image})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.12 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,10,0.7), #0a0a0a)' }} />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <button onClick={onBack} style={{ background: 'none', border: 'none', color: '#E8651A', cursor: 'pointer', fontSize: 14, fontFamily: 'DM Sans', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8 }}>
            ← Back to Blog
          </button>
          <span className="badge-orange" style={{ marginBottom: 16, display: 'inline-block' }}>{post.category}</span>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 5vw, 56px)', color: 'white', fontWeight: 300, lineHeight: 1.2, marginBottom: 24 }}>{post.title}</h1>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#E8651A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'Cormorant Garamond, serif', fontSize: 16 }}>{post.author[0]}</div>
            <div>
              <div style={{ color: '#ccc', fontSize: 14 }}>{post.author}</div>
              <div style={{ color: '#444', fontSize: 12, marginTop: 2 }}>{post.date} · {post.readTime} read</div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ padding: '40px 0 100px' }}>
        <div className="max-w-3xl mx-auto px-6">
          <img src={post.image} alt={post.title} style={{ width: '100%', borderRadius: 20, marginBottom: 48, height: 400, objectFit: 'cover' }} />
          {post.content.split('\n\n').map((para, i) => (
            <p key={i} style={{
              fontSize: 16, lineHeight: 1.95, marginBottom: 24,
              fontWeight: para === para.toUpperCase() && para.length < 60 ? 500 : 400,
              color: para === para.toUpperCase() && para.length < 60 ? '#E8651A' : '#888',
              letterSpacing: para === para.toUpperCase() && para.length < 60 ? '0.05em' : 'normal',
            }}>
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function BlogPage() {
  useScrollReveal()
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const [selected, setSelected] = useState(null)

  if (selected) return <BlogPost post={selected} onBack={() => setSelected(null)} />

  return (
    <div>
      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 60, background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1562802378-063ec186a863?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.06 }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="section-label"><span className="orange-line" /> Hush Blog</div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(44px, 7vw, 88px)', color: 'white', fontWeight: 300, lineHeight: 1.05 }}>
            Stories &<br /><em style={{ color: '#E8651A' }}>Flavors</em>
          </h1>
        </div>
      </section>

      <section style={{ padding: '60px 0 100px' }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Featured */}
          <div className="reveal" style={{ marginBottom: 60, cursor: 'pointer' }} onClick={() => setSelected(BLOG_POSTS[0])}>
            <div className="card-hover" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, background: '#161616', borderRadius: 24, overflow: 'hidden', border: '1px solid #1a1a1a' }}>
              <div className="img-zoom" style={{ height: 300 }}>
                <img src={BLOG_POSTS[0].image} alt={BLOG_POSTS[0].title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
                  <span className="badge-orange">{BLOG_POSTS[0].category}</span>
                  <span style={{ color: '#E8651A', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'flex', alignItems: 'center' }}>Featured</span>
                </div>
                <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 36, color: 'white', fontWeight: 300, lineHeight: 1.3, marginBottom: 16 }}>{BLOG_POSTS[0].title}</h2>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>{BLOG_POSTS[0].excerpt}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#E8651A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 14, fontFamily: 'Cormorant Garamond, serif' }}>{BLOG_POSTS[0].author[0]}</div>
                  <div>
                    <div style={{ color: '#888', fontSize: 13 }}>{BLOG_POSTS[0].author}</div>
                    <div style={{ color: '#333', fontSize: 12 }}>{BLOG_POSTS[0].date}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(1).map((post, i) => (
              <div key={post.id} style={{ animationDelay: `${i * 0.1}s` }}>
                <BlogCard post={post} onClick={() => setSelected(post)} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
