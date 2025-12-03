import React from 'react'
import { useCart } from '../store/CartContext'

export default function PlanCard({ plan, service, serviceId }) {
  const { addItem } = useCart()

  function handleAdd() {
    addItem({ planId: plan.id, serviceId: serviceId, name: plan.name, price: plan.price, serviceName: service })
  }

  return (
    <div className="plan-card">
      <div className="plan-header">
        <h4>{plan.name}</h4>
        <div className="price">₹{plan.price}</div>
      </div>
      <div className="plan-duration">{plan.duration}</div>
      <ul className="plan-features">
        {plan.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <button className="btn primary" onClick={handleAdd}>Book {plan.name}</button>
    </div>
  )
}
