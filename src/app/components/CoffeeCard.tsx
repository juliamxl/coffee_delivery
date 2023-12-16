import Image from 'next/image'
import CupCoffee from '../../assets/cup_coffee.svg'
import ShopWhite from '../../assets/shop_white.svg'
import { baloo } from '../fonts'

export const CoffeeCard = () => {
  return (
    <div className="bg-base-card w-72 p-6 space-y-3 rounded-bl-3xl rounded-tr-3xl mb-6">
      <div className="flex flex-col items-center">
        <Image
          src={CupCoffee}
          alt="cup_coffee"
          className="relative -top-12 -mb-8"
        />
        <div className="bg-yellow-light py-1 px-2 rounded-full">
          <p className=" text-yellow-dark font-bold text-xs ">TRADICIONAL</p>
        </div>
      </div>
      <div className="text-center space-y-2">
        <p className={`${baloo.className} text-xl`}>Expresso Tradicional</p>
        <p className="text-base-label">
          O tradicional café feito com água quente e graõs moídos
        </p>
      </div>
      <div className="flex justify-between ">
        <p className={`${baloo.className} text-base-text`}>
          R$ <span className="text-3xl">9,90</span>
        </p>
        <div className="flex space-x-2">
          <div className="flex ml-3 bg-base-button items-center space-x-2 px-3 text-xl rounded-md">
            <button className="text-purple-medium">-</button>
            <p>1</p>
            <button className="text-purple-medium">+</button>
          </div>
          <Image src={ShopWhite} alt="shop_white" />
        </div>
      </div>
    </div>
  )
}
