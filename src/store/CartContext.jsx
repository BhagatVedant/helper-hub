import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [open, setOpen] = useState(false)

  function addItem(item) {
    setItems((prev) => {
      const idx = prev.findIndex(
        (i) => i.planId === item.planId && i.serviceId === item.serviceId
      )
      if (idx > -1) {
        const copy = [...prev]
        copy[idx].qty = (copy[idx].qty || 1) + (item.qty || 1)
        return copy
      }
      return [...prev, { ...item, qty: item.qty || 1 }]
    })
    setOpen(true)
  }

  function removeItem(planId, serviceId) {
    setItems((prev) => prev.filter((i) => !(i.planId === planId && i.serviceId === serviceId)))
  }

  function updateQty(planId, serviceId, qty) {
    setItems((prev) => prev.map((i) => (i.planId === planId && i.serviceId === serviceId ? { ...i, qty } : i)))
  }

  function clear() {
    setItems([])
    setOpen(false)
  }

  function purchase() {
    if (items.length === 0) return
    // simple placeholder purchase flow
    alert('Purchase successful — thank you!')
    clear()
  }

  const totalItems = items.reduce((s, i) => s + (i.qty || 0), 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, clear, totalItems, open, setOpen, purchase }}>
      {children}
    </CartContext.Provider>
  )
}
