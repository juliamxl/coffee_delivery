import Image from 'next/image'
import debit from '../../assets/debit.svg'

interface PayProps {
  title: string
  image: string
  onClick: () => void
  isActive: boolean
}

export const Pay = ({ title, image, onClick, isActive }: PayProps) => {
  return (
    <div
      onClick={onClick}
      className={`p-5 flex rounded-md space-x-2 flex items-center justify-center text-base-text hover:bg-base-hover cursor-pointer ${
        isActive
          ? 'bg-purple-light border-2 border-purple-medium '
          : 'bg-base-button'
      }`}
    >
      <Image src={image} alt={title} className="w-6" />
      <p>{title}</p>
    </div>
  )
}
