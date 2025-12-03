import React from 'react'

const reviews = [
  { id: 1, name: 'Anita', text: 'Quick and professional. Highly recommend!' },
  { id: 2, name: 'Rohit', text: 'Easy booking and the technician was great.' },
  { id: 3, name: 'Sara', text: 'Excellent customer support and timely service.' }
]

export default function Reviews() {
  return (
    <div className="reviews-grid">
      {reviews.map((r) => (
        <div key={r.id} className="review-card">
          <div className="review-avatar">{r.name.charAt(0)}</div>
          <div>
            <div className="review-name">{r.name}</div>
            <div className="review-text">{r.text}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
