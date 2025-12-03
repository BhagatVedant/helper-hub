import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import ServicePage from './pages/ServicePage'
import Footer from './components/Footer'
import Cart from './components/Cart'
import CartButton from './components/CartButton'
import ServicesList from './pages/ServicesList'
import Contact from './pages/Contact'
import About from './pages/About'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesList />} />
          <Route path="/service/:id" element={<ServicePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Cart />
      <CartButton />
      <Footer />
    </div>
  )
}
