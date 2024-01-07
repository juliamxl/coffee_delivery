'use client'
import Image from 'next/image'
import { useState } from 'react'
import Cappucino from '../../assets/cappucino.svg'
import CupCoffee from '../../assets/cup_coffee.svg'
import Gelato from '../../assets/gelato.svg'
import Latte from '../../assets/latte.svg'
import Mocha from '../../assets/mocha.svg'
import trash from '../../assets/trash.svg'
import Vanilla from '../../assets/vanilla.svg'
import { useCart } from '../contexts/shopContext'

interface ShopCardProps {
  item: {
    coffee: {
      nome: string
      preco: number
      id: number
    }
    quantity: number
    total: number
  }
}

export const ShopCard = ({ item }: ShopCardProps) => {
  const { updateCartItem } = useCart()
  const [quantityChange, setQuantityChange] = useState(item.quantity)
  const [total, setTotal] = useState(item.total)

  const getCoffeeImage = (coffeeName: string) => {
    switch (coffeeName) {
      case 'Expresso Tradicional':
        return CupCoffee
      case 'Cappuccino Especial':
        return Cappucino
      case 'Latte Macchiato':
        return Latte
      case 'Mocha de Chocolate':
        return Mocha
      case 'Café Gelado':
        return Gelato
      case 'Café com Baunilha':
        return Vanilla
    }
  }

  const handleIncrement = () => {
    setQuantityChange((prevQuantity) => prevQuantity + 1)
    setTotal((prevTotal) => prevTotal + item.coffee.preco)
    updateCartItem(item, quantityChange + 1, total + item.coffee.preco)
  }

  const handleDecrement = () => {
    setQuantityChange((prevQuantity) =>
      prevQuantity > 1 ? prevQuantity - 1 : 1,
    )
    setTotal((prevTotal) =>
      prevTotal === item.coffee.preco
        ? item.coffee.preco
        : prevTotal - item.coffee.preco,
    )
    updateCartItem(
      item,
      quantityChange > 1 ? quantityChange - 1 : 1,
      total === item.coffee.preco
        ? item.coffee.preco
        : total - item.coffee.preco,
    )
  }

  const coffeeImage = getCoffeeImage(item.coffee.nome)

  return (
    <div className="flex space-x-6 pb-6 border-b-2">
      <Image src={coffeeImage} alt="coffee" className="w-16" />
      <div className="space-y-2 w-full">
        <div className="flex justify-between text-base-text font-bold">
          <p>{item.coffee.nome}</p>
          <p>R$ {total.toFixed(2)}</p>
        </div>
        <div className="flex space-x-2">
          <div className="flex bg-base-button items-center space-x-2 px-3 text-xl rounded-md text-base-text">
            <button className="text-purple-medium" onClick={handleDecrement}>
              -
            </button>
            <p className="text-base">{quantityChange}</p>
            <button className="text-purple-medium" onClick={handleIncrement}>
              +
            </button>
          </div>
          <div className="flex bg-base-button p-2 rounded-md text-base-text font-medium">
            <Image src={trash} alt="trash" />
            <button className="text-xs">REMOVER</button>
          </div>
        </div>
      </div>
    </div>
  )
}
