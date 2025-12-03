import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    alert('Thanks, our customer service will reach out shortly.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="container contact-page">
      <div className="page-box">
        <h2>Contact Customer Service</h2>
        <p className="muted">We're here to help — send us a message.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Email
            <input name="email" type="email" value={form.email} onChange={handleChange} required />
          </label>
          <label>
            Message
            <textarea name="message" value={form.message} onChange={handleChange} required />
          </label>

          <div className="form-actions">
            <button className="btn primary" type="submit">Send Message</button>
            <Link to="/about" className="link-btn ghost">About Us</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
