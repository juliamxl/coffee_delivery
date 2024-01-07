import Image from 'next/image'
import { useState } from 'react'
import ShopWhite from '../../assets/shop_white.svg'
import { useCart } from '../contexts/shopContext'
import { baloo } from '../fonts'

interface Coffee {
  id: number
  nome: string
  categoria: string
  descricao: string
  preco: number
  imagem: string
}

interface CoffeeCardProps {
  coffee: Coffee
}

export const CoffeeCard = ({ coffee }: CoffeeCardProps) => {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const handleIncrement = () => {
    setQuantity(quantity + 1)
  }

  const handleDecrement = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1)
  }

  const handleShop = (quantity: number) => {
    const total = quantity * coffee.preco
    const item = { coffee, quantity, total }
    addToCart(item)
  }

  return (
    <div className="bg-base-card w-72 p-6 space-y-3 rounded-bl-3xl rounded-tr-3xl mb-6">
      <div className="flex flex-col items-center">
        <Image
          src={coffee.imagem}
          alt="cup_coffee"
          className="relative -top-12 -mb-8"
        />
        <div className="bg-yellow-light py-1 px-2 rounded-full">
          <p className=" text-yellow-dark font-bold text-xs">
            {coffee.categoria}
          </p>
        </div>
      </div>
      <div className="text-center space-y-2">
        <p className={`${baloo.className} text-xl`}>{coffee.nome}</p>
        <p className="text-base-label">{coffee.descricao}</p>
      </div>
      <div className="flex justify-between">
        <p className={`${baloo.className} text-base-text`}>
          R$ <span className="text-3xl">{coffee.preco.toFixed(2)}</span>
        </p>
        <div className="flex space-x-2">
          <div className="flex ml-3 bg-base-button items-center space-x-2 px-3 text-xl rounded-md">
            <button className="text-purple-medium" onClick={handleDecrement}>
              -
            </button>
            <p>{quantity}</p>
            <button className="text-purple-medium" onClick={handleIncrement}>
              +
            </button>
          </div>
          <Image
            src={ShopWhite}
            alt="shop_white"
            className="hover:cursor-pointer"
            onClick={() => handleShop(quantity)}
          />
        </div>
      </div>
    </div>
  )
}
