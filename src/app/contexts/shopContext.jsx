// CartContext.js
'use client'
// CartContext.js
import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]')
    localStorage.setItem('cart', JSON.stringify([...storedCart, item]))
    setCart([...storedCart, item])
  }

  const getCart = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]')
    return storedCart // Retornar o carrinho
  }

  const removeFromCart = (index) => {
    setCart((prevCart) => {
      const newCart = [...prevCart]
      newCart.splice(index, 1)
      return newCart
    })
  }

  const calculateCartTotal = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]')
    const total = storedCart.reduce((acc, item) => acc + item.total, 0)
    return (total + 3.5).toFixed(2)
  }

  const updateCartItem = (item, newQuantity, newTotal) => {
    const storedCart = JSON.parse(localStorage.getItem('cart'))

    const updatedCart = storedCart.map((cartItem) =>
      cartItem.coffee.id === item.coffee.id
        ? { ...cartItem, quantity: newQuantity, total: newTotal }
        : cartItem,
    )

    localStorage.setItem('cart', JSON.stringify(updatedCart))
    setCart(getCart())
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getCart,
        updateCartItem,
        calculateCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}
