import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ServiceCard({ id, title, desc }) {
  const navigate = useNavigate()
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{desc}</p>
      <button className="btn" onClick={() => navigate(`/service/${id}`)}>Book Now</button>
    </div>
  )
}
