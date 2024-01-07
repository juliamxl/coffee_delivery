'use client'
import Image from 'next/image'
import BannerImage from '../../assets/banner.svg'
import Box from '../../assets/box.svg'
import Cappucino from '../../assets/cappucino.svg'
import Clock from '../../assets/clock.svg'
import Coffee from '../../assets/coffee.svg'
import CupCoffee from '../../assets/cup_coffee.svg'
import Gelato from '../../assets/gelato.svg'
import Latte from '../../assets/latte.svg'
import Mocha from '../../assets/mocha.svg'
import Shop from '../../assets/shop_rounded.svg'
import Vanilla from '../../assets/vanilla.svg'
import { CoffeeCard } from '../components/CoffeeCard'
import Header from '../components/Header'
import { baloo } from '../fonts'

interface Cafe {
  id: number
  nome: string
  categoria: string
  descricao: string
  preco: number
  imagem: string // O campo imagem é opcional
}

// Crie um array de objetos com 6 cafés
const cafes: Cafe[] = [
  {
    id: 1,
    nome: 'Expresso Tradicional',
    categoria: 'Tradicional',
    descricao: 'O tradicional café feito com água quente e grãos moídos',
    preco: 9.9,
    imagem: CupCoffee,
  },
  {
    id: 2,
    nome: 'Cappuccino Especial',
    categoria: 'Especial',
    descricao: 'Um cappuccino especial com espuma de leite e canela',
    preco: 12.5,
    imagem: Cappucino,
  },
  {
    id: 3,
    nome: 'Latte Macchiato',
    categoria: 'Tradicional com Leite',
    descricao: 'Um café latte com uma mancha de leite vaporizado',
    preco: 11.75,
    imagem: Latte,
  },
  {
    id: 4,
    nome: 'Mocha de Chocolate',
    categoria: 'Especial',
    descricao: 'Um mocha delicioso com café, leite vaporizado e chocolate',
    preco: 14.2,
    imagem: Mocha,
  },
  {
    id: 5,
    nome: 'Café Gelado',
    categoria: 'Tradicional',
    descricao: 'Um café refrescante servido com gelo e opcionalmente com leite',
    preco: 10.5,
    imagem: Gelato,
  },
  {
    id: 5,
    nome: 'Café com Baunilha',
    categoria: 'Especial',
    descricao: 'Café aromatizado com baunilha e levemente adoçado',
    preco: 13.25,
    imagem: Vanilla,
  },
]

export const Home = () => {
  return (
    <div>
      <Header />
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
      <div className="">
        <p className={`${baloo.className} text-3xl mb-14`}>Nossos cafés</p>
        <div className="flex flex-wrap gap-5">
          <div className="flex flex-wrap gap-5">
            {cafes.map((coffee, index) => (
              <CoffeeCard key={index} coffee={coffee} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
