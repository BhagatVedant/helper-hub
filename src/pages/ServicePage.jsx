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

  return (
    <div className="container service-page">
      <section className="service-intro">
        <h2>{service.title}</h2>
        <p className="lead">{service.description}</p>
      </section>

      <section className="service-plans">
        {service.plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} service={service.title} serviceId={service.id} />
        ))}
      </section>
    </div>
  )
}
