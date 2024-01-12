'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Logo from '../../assets/coffee_logo.svg'
import MapPin from '../../assets/map_pin.svg'
import Shop from '../../assets/shop.svg'
import { useCart } from '../contexts/shopContext'

export default function Header() {
  const router = useRouter()
  const { getCartItemQuantity, cart } = useCart()
  const [cartQuantity, setCartQuantity] = useState(0)

  const handleClick = () => {
    router.push(`/checkout`)
  }

  useEffect(() => {
    const quantity = getCartItemQuantity()
    setCartQuantity(quantity)
  }, [cart])

  return (
    <div className="h-28 flex items-center justify-between">
      <Image src={Logo} alt="logo" />
      <div className="flex space-x-3">
        <div className="bg-purple-light flex h-10 items-center rounded-md p-4 space-x-1 text-purple-dark font-medium">
          <Image src={MapPin} alt="mappin" />
          <p>Porto Alegre, RS</p>
        </div>
        <div
          className="bg-yellow-light w-10 flex items-center justify-center rounded-md hover:cursor-pointer"
          onClick={handleClick}
        >
          <Image src={Shop} alt="shop" />
          <span className="text-xs bg-yellow-dark w-5 h-5 text-white rounded-full flex items-center justify-center absolute top-5  right-150px">
            {cartQuantity}
          </span>
        </div>
      </div>
    </div>
  )
}
