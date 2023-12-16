import Image from 'next/image'
import BannerImage from '../../assets/banner.svg'
import Box from '../../assets/box.svg'
import Clock from '../../assets/clock.svg'
import Coffee from '../../assets/coffee.svg'
import Shop from '../../assets/shop_rounded.svg'
import { baloo } from '../fonts'

export const Banner = () => {
  return (
    <div className="flex mt-14">
      <div className="w-[50%] space-y-16">
        <div className="space-y-8">
          <p className={`${baloo.className} font-extrabold text-6xl`}>
            Encontre o café perfeito para qualquer hora do dia
          </p>
          <p className="text-3xl text-base-subtitle">
            Com o Coffee Delivery você receberá seu café onde estiver, a
            qualquer hora
          </p>
        </div>
        <div className="grid grid-cols-2 mt-4 text-base-subtitle">
          <div className="flex text-xl space-x-3">
            <Image src={Shop} alt="shop" />
            <p>Compra simples e segura</p>
          </div>
          <div className="flex text-xl space-x-3">
            <Image src={Box} alt="box" />
            <p>Embalagem mantém o café intacto</p>
          </div>
          <div className="flex  text-xl space-x-3 mt-5">
            <Image src={Clock} alt="clock" />
            <p>Entrega rápida e rastreada</p>
          </div>
          <div className="flex text-xl space-x-3 mt-5">
            <Image src={Coffee} alt="coffee" />
            <p>O café chega fresquinho até você</p>
          </div>
        </div>
      </div>
      <div className="flex w-auto ml-32">
        <Image src={BannerImage} alt="banner_image" className="w-[40rem]" />
      </div>
    </div>
  )
}
