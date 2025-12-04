import React from 'react'
import { useParams, Link } from 'react-router-dom'
import services from '../data/services'
import PlanCard from '../components/PlanCard'

export default function ServicePage() {
  const { id } = useParams()
  const service = services.find((s) => s.id === id)

  if (!service) {
    return (
      <div className="container">
        <h2>Service not found</h2>
        <p>We couldn't find the selected service.</p>
        <Link to="/">Back to home</Link>
      </div>
    )
  }

  const img = service.image ? new URL(`../assets/${service.image}`, import.meta.url).href : null

  return (
    <div className="container service-page">
      <section className="service-hero">
        <div className="service-hero-content">
          <h1 className="hero-title">{service.title}</h1>
          <p className="lead">{service.description}</p>
          <div style={{marginTop:12}}>
            <Link to="/services" className="btn btn-ghost">Back to services</Link>
          </div>
        </div>
        {img && (
          <div className="service-hero-media">
            <img src={img} alt={service.title} />
          </div>
        )}
      </section>

      <section className="service-plans">
        {service.plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} service={service.title} serviceId={service.id} />
        ))}
      </section>
    </div>
  )
}
