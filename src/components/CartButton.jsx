import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../store/CartContext'

export default function CartButton() {
  const { totalItems, setOpen } = useCart()

  if (!totalItems || totalItems === 0) return null

  return (
    <button className="cart-button" onClick={() => setOpen(true)} aria-label="Open cart">
      <FaShoppingCart />
      <span className="cart-count">{totalItems}</span>
    </button>
  )
}
