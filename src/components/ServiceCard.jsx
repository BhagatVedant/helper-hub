import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ServiceCard({ id, title, desc, image }) {
  const navigate = useNavigate()
  const img = image ? new URL(`../assets/${image}`, import.meta.url).href : null
  return (
    <article className="card service-card">
      {img && (
        <div className="service-card-media">
          <img src={img} alt={title} className="service-card-img" />
        </div>
      )}
      <div className="service-card-body">
        <h3>{title}</h3>
        <p className="muted">{desc}</p>
        <div style={{marginTop:8}}>
          <button className="btn" onClick={() => navigate(`/service/${id}`)}>View plans</button>
        </div>
      </div>
    </article>
  )
}
