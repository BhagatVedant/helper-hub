import React from 'react'
import { FaCheck } from 'react-icons/fa'

const morals = [
  { id: 1, title: 'Integrity' },
  { id: 2, title: 'Safety First' },
  { id: 3, title: 'Customer Focus' }
]

export default function About() {
  return (
    <div className="container about-page">
      <div className="page-box">
        <h2>About Us</h2>
        <p className="lead">Our morals</p>

        <div className="morals-grid">
          {morals.map((m) => (
            <div key={m.id} className="moral">
              <div className="moral-badge"><FaCheck /></div>
              <div className="moral-title">{m.title}</div>
            </div>
          ))}
        </div>

        <section className="about-text">
          <h3>Who we are</h3>
          <p className="muted">Helpers Hub connects you with trusted, background-checked professionals for home services. Our mission is to deliver reliable, high-quality service with transparency and care.</p>
        </section>
      </div>
    </div>
  )
}
