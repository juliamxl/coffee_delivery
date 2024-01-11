'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Clock from '../../assets/clock.svg'
import DeliveryIMG from '../../assets/delivery.svg'
import Local from '../../assets/local.svg'
import Pay from '../../assets/pay.svg'
import Header from '../components/Header'
import { useCart } from '../contexts/shopContext'
import { baloo } from '../fonts'

interface Adress {
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
}

export const LandingPage = () => {
  const { getAdress, getFormPayment } = useCart()
  const [endereco, setEndereco] = useState<Adress | undefined>(undefined)
  const [formaPagamento, setFormaPagamento] = useState('')

  useEffect(() => {
    const adress = getAdress()
    const payment = getFormPayment
    setEndereco(adress)
    setFormaPagamento(payment)
  }, [])

  return (
    <div>
      <Header />
      <div className="flex justify-between">
        <div className="w-[50%] mt-16">
          <div>
            <p className={`${baloo.className} text-3xl text-yellow-dark`}>
              Uhu! Pedido Confirmado
            </p>
            <p className="text-xl text-base-subtitle">
              Agora é só aguardar que logo o café chegará até você
            </p>
            <div className="mt-10 rounded-bl-3xl rounded-tr-3xl bg-gradient-to-r  p-[1px] from-yellow-600 to-purple-600 ">
              <div className="bg-white h-full w-full p-10 rounded-bl-3xl rounded-tr-3xl space-y-6">
                <div className="flex text-lg space-x-3 text-base-text">
                  <Image src={Local} alt="shop" />
                  <div className="flex-col">
                    <p>
                      Entrega em{' '}
                      <b>
                        {endereco?.rua}, {endereco?.numero}
                      </b>
                    </p>
                    <p>
                      {endereco?.bairro} - {endereco?.cidade}, {endereco?.uf}
                    </p>
                  </div>
                </div>
                <div className="flex text-lg space-x-3 text-base-text">
                  <Image src={Clock} alt="shop" />
                  <div className="flex-col">
                    <p>Previsão de entrega</p>
                    <b>20 min - 30 min</b>
                  </div>
                </div>
                <div className="flex text-lg space-x-3 text-base-text">
                  <Image src={Pay} alt="shop" />
                  <div className="flex-col">
                    <p>Pagamento na entrega</p>
                    <b>{formaPagamento}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-auto w-auto">
          <Image src={DeliveryIMG} alt="shop" className="w-[600px]" />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
