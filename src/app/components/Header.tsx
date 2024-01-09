'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Logo from '../../assets/coffee_logo.svg'
import MapPin from '../../assets/map_pin.svg'
import Shop from '../../assets/shop.svg'

export default function Header() {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/checkout`)
  }

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
        </div>
      </div>
    </div>
  )
}
