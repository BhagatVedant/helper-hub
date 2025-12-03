import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved) return saved
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
    } catch (e) {}
    return 'light'
  })

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
    } catch (e) {}
  }, [theme])

  function toggleTheme() {
    setTheme(t => (t === 'dark' ? 'light' : 'dark'))
  }

  return (
    <header className="header">
      <div className="container header-inner">
        <h1 className="brand"><Link to="/" className="brand-link">Helpers Hub</Link></h1>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </nav>

        <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  )
}
