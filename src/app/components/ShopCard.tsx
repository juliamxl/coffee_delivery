'use client'
import Image from 'next/image'
import { useState } from 'react'
import coffee from '../../assets/cup_coffee.svg'
import trash from '../../assets/trash.svg'
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

  const handleIncrement = () => {
    setQuantityChange(quantityChange + 1)
    setTotal(total + item.coffee.preco)
    updateCartItem(item, quantityChange + 1, total + item.coffee.preco)
  }

  const handleDecrement = () => {
    setQuantityChange(quantityChange > 1 ? quantityChange - 1 : 1)
    setTotal(
      total === item.coffee.preco
        ? item.coffee.preco
        : total - item.coffee.preco,
    )
    updateCartItem(
      item,
      quantityChange > 1 ? quantityChange - 1 : 1,
      total === item.coffee.preco
        ? item.coffee.preco
        : total - item.coffee.preco,
    )
  }

  return (
    <div className="flex space-x-6 pb-6 border-b-2">
      <Image src={coffee} alt="coffee" className="w-16" />
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
