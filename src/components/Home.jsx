import React from 'react'
import { Link } from 'react-router-dom'
import Hero from './Hero'
import ServiceCard from './ServiceCard'
import Discounts from './Discounts'
import Reviews from './Reviews'
import services from '../data/services'

export default function Home() {
  return (
    <div>
      <Hero />

      <div className="container">
        <section className="section section-services">
          <h3 className="section-title">Our Services</h3>
          <p className="section-sub">Top quality professionals for all your home needs.</p>
          <div className="services grid">
            {services.map((s) => (
              <ServiceCard key={s.id} id={s.id} title={s.title} desc={s.short} />
            ))}
          </div>
          <div className="more-link"><Link to="/services" className="link-btn">View all services</Link></div>
        </section>

        <section className="section section-discounts">
          <h3 className="section-title">Ongoing Discounts</h3>
          <Discounts />
        </section>

        <section className="section section-reviews">
          <h3 className="section-title">Customer Reviews</h3>
          <Reviews />
        </section>
      </div>
    </div>
  )
}
