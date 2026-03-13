import { useCart } from '../context/CartContext'
import { useState } from 'react'

export default function CartSidebar() {
  const { items, removeItem, updateQty, total, count, isOpen, setIsOpen, clearCart } = useCart()
  const [ordered, setOrdered] = useState(false)

  const handleCheckout = () => {
    if (items.length === 0) return
    setOrdered(true)
    setTimeout(() => {
      clearCart()
      setOrdered(false)
      setIsOpen(false)
    }, 3000)
  }

  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/70" onClick={() => setIsOpen(false)} />
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, width: 400, maxWidth: '95vw',
        background: '#111', zIndex: 60, display: 'flex', flexDirection: 'column',
        borderLeft: '1px solid #1a1a1a', transform: 'translateX(0)',
      }}>
        {/* Header */}
        <div style={{ padding: '24px 28px', borderBottom: '1px solid #1a1a1a', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 24, color: 'white', fontWeight: 400 }}>Your Order</h2>
            <p style={{ color: '#555', fontSize: 12, marginTop: 2 }}>{count} item{count !== 1 ? 's' : ''}</p>
          </div>
          <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#555', fontSize: 24, lineHeight: 1 }}>×</button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px 28px' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', paddingTop: 60 }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🍣</div>
              <p style={{ color: '#555', fontSize: 14 }}>Your cart is empty</p>
              <p style={{ color: '#333', fontSize: 12, marginTop: 8 }}>Add items from the menu to get started</p>
            </div>
          ) : ordered ? (
            <div style={{ textAlign: 'center', paddingTop: 60 }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
              <p style={{ color: '#E8651A', fontSize: 18, fontFamily: 'Cormorant Garamond, serif' }}>Order Confirmed!</p>
              <p style={{ color: '#555', fontSize: 14, marginTop: 8 }}>We'll have your food ready shortly.</p>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} style={{ display: 'flex', gap: 16, padding: '16px 0', borderBottom: '1px solid #1a1a1a' }}>
                <img src={item.image} alt={item.name} style={{ width: 64, height: 64, borderRadius: 10, objectFit: 'cover' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ color: '#ccc', fontSize: 14, fontWeight: 500, marginBottom: 4 }}>{item.name}</div>
                  <div style={{ color: '#E8651A', fontSize: 14 }}>KSh {(item.price * item.qty).toLocaleString()}</div>
                  <div className="flex items-center gap-3" style={{ marginTop: 8 }}>
                    <button onClick={() => updateQty(item.id, item.qty - 1)} style={{ width: 26, height: 26, borderRadius: '50%', border: '1px solid #333', background: 'none', color: '#ccc', cursor: 'pointer', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>−</button>
                    <span style={{ color: '#ccc', fontSize: 14, minWidth: 20, textAlign: 'center' }}>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)} style={{ width: 26, height: 26, borderRadius: '50%', border: '1px solid #333', background: 'none', color: '#ccc', cursor: 'pointer', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
                    <button onClick={() => removeItem(item.id)} style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', color: '#444', fontSize: 12 }}>Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && !ordered && (
          <div style={{ padding: '20px 28px', borderTop: '1px solid #1a1a1a' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ color: '#555', fontSize: 13 }}>Subtotal</span>
              <span style={{ color: '#ccc', fontSize: 13 }}>KSh {total.toLocaleString()}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
              <span style={{ color: '#555', fontSize: 13 }}>Delivery</span>
              <span style={{ color: '#E8651A', fontSize: 13 }}>Free</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24, paddingTop: 16, borderTop: '1px solid #1a1a1a' }}>
              <span style={{ color: 'white', fontSize: 16, fontFamily: 'Cormorant Garamond, serif' }}>Total</span>
              <span style={{ color: 'white', fontSize: 16, fontWeight: 500 }}>KSh {total.toLocaleString()}</span>
            </div>
            <button className="btn-orange" style={{ width: '100%', padding: '16px', fontSize: 14 }} onClick={handleCheckout}>
              Place Order
            </button>
          </div>
        )}
      </div>
    </>
  )
}
