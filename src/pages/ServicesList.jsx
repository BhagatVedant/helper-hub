import React from 'react'
import services from '../data/services'
import PlanCard from '../components/PlanCard'
import ServiceCard from '../components/ServiceCard'

export default function ServicesList() {
  return (
    <div className="container services-list">
      <h2 className="section-title">All Services</h2>

      <div className="services-grid">
        {services.map((s) => (
          <ServiceCard key={s.id} id={s.id} title={s.title} desc={s.short} image={s.image} />
        ))}
      </div>

      {services.map((s) => (
        <section key={s.id} className="service-section">
          <h3>{s.title}</h3>
          <p className="muted">{s.short}</p>
          <div className="service-plans">
            {s.plans.map((p) => (
              <PlanCard key={p.id} plan={p} service={s.title} serviceId={s.id} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
