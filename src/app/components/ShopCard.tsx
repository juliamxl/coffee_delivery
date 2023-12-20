import Image from 'next/image'
import coffee from '../../assets/cup_coffee.svg'
import trash from '../../assets/trash.svg'

export const ShopCard = () => {
  return (
    <div className="flex space-x-6 pb-6 border-b-2">
      <Image src={coffee} alt="coffee" className="w-16" />
      <div className="space-y-2 w-full">
        <div className="flex justify-between text-base-text font-bold">
          <p>Expresso Tradicional</p>
          <p>R$ 9,90</p>
        </div>
        <div className="flex space-x-2">
          <div className="flex bg-base-button items-center space-x-2 px-3 text-xl rounded-md text-base-text">
            <button className="text-purple-medium">-</button>
            <p className="text-base">1</p>
            <button className="text-purple-medium">+</button>
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
