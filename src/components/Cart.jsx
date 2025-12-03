import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useCart } from '../store/CartContext'

export default function Cart() {
  const { items, open, setOpen, removeItem, updateQty, purchase } = useCart()

  if (!open) return null

  return (
    <div className="cart-drawer" role="dialog">
      <div className="cart-header">
        <h3>Your Cart</h3>
        <button className="icon-btn small" onClick={() => setOpen(false)} aria-label="Close cart"><FaTimes /></button>
      </div>

      <div className="cart-body">
        {items.length === 0 && <div className="muted">Your cart is empty.</div>}
        {items.map((it) => (
          <div key={`${it.serviceId}-${it.planId}`} className="cart-item">
            <div>
              <div className="cart-item-title">{it.name}</div>
              <div className="muted small">{it.serviceName}</div>
            </div>
            <div className="cart-controls">
              <button className="icon-btn" onClick={() => updateQty(it.planId, it.serviceId, Math.max(1, it.qty - 1))}>-</button>
              <div className="qty">{it.qty}</div>
              <button className="icon-btn" onClick={() => updateQty(it.planId, it.serviceId, it.qty + 1)}>+</button>
              <div className="cart-price">₹{(it.price * it.qty).toFixed(0)}</div>
              <button className="btn ghost small" onClick={() => removeItem(it.planId, it.serviceId)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <button className="btn primary" onClick={purchase}>Purchase</button>
      </div>
    </div>
  )
}
