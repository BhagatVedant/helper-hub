import React from 'react'

const offers = [
  { id: 1, title: '10% off for first-time users', note: 'Use code NEW10' },
  { id: 2, title: 'Flat ₹200 off on AC services', note: 'Limited time offer' }
]

export default function Discounts() {
  return (
    <div className="discounts">
      {offers.map((o) => (
        <div key={o.id} className="discount-card">
          <h4>{o.title}</h4>
          <p className="muted">{o.note}</p>
        </div>
      ))}
    </div>
  )
}
