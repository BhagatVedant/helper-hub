import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero-landing">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1 className="hero-title">Helpers Hub</h1>
          <p className="hero-tag">Trusted professionals. Easy booking. Exceptional service.</p>
          <div className="hero-ctas">
            <Link to="/services" className="btn primary large">Browse Services</Link>
            <Link to="/contact" className="btn ghost large">Contact Support</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="card-visual">Your home, handled.</div>
        </div>
      </div>
    </section>
  )
}
