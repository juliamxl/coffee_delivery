import Image from 'next/image'
import credit from '../../assets/credit.svg'
import debit from '../../assets/debit.svg'
import mapOrange from '../../assets/map_orange.svg'
import money from '../../assets/money.svg'
import Header from '../components/Header'
import { ShopCard } from '../components/ShopCard'
import { baloo } from '../fonts'

export const Checkout = () => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-5 gap-6">
        <div className="space-y-4 col-span-3">
          <p className={`${baloo.className} text-xl`}>Complete seu pedido</p>
          <div className="p-10 bg-base-card w-full rounded-lg">
            <div className="flex items-start space-x-2 mb-6 ">
              <Image src={mapOrange} alt="mapOrange" />
              <div className="flex flex-col">
                <p className="text-lg text-base-subtitle">
                  Endereço de Entrega
                </p>
                <p className="text-base-text">
                  Informe onde você quer receber seu pedido
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <input
                  placeholder="CEP"
                  className="bg-base-input border-solid border-2 border-base-button rounded-md h-9 outline-none p-2"
                />
              </div>
              <div>
                <input
                  placeholder="Rua"
                  className="bg-base-input border-solid border-2 border-base-button rounded-md h-9  w-full outline-none p-2"
                />
              </div>
              <div className="grid grid-cols-7 gap-3">
                <input
                  placeholder="Número"
                  className="bg-base-input border-solid border-2 border-base-button rounded-md h-9 col-span-2 outline-none p-2"
                />
                <input
                  placeholder="Complemento"
                  className="bg-base-input border-solid border-2 border-base-button rounded-md h-9 col-span-5 outline-none p-2"
                />
              </div>
              <div className="grid grid-cols-7 gap-3">
                <input
                  placeholder="Bairro"
                  className="bg-base-input border-solid border-2 border-base-button rounded-md h-9 col-span-2 outline-none p-2"
                />
                <input
                  placeholder="Cidade"
                  className="bg-base-input border-solid border-2 border-base-button rounded-md h-9 col-span-4 outline-none p-2"
                />
                <input
                  placeholder="UF"
                  className="bg-base-input border-solid border-2 border-base-button rounded-md h-9 col-span-1 outline-none p-2"
                />
              </div>
            </div>
          </div>
          <div className="bg-base-card p-10 space-y-8 rounded-lg">
            <div className="flex space-x-2">
              <div>
                <p className="text-purple-medium text-2xl">$</p>
              </div>
              <div>
                <p className="text-base-subtitle text-lg">Pagamento</p>
                <p className="text-base-text">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-base-button p-5 flex rounded-md space-x-2 flex items-center justify-center text-base-text">
                <Image src={debit} alt="Débito" className="w-6" />
                <p>CARTÃO DE CRÉDITO</p>
              </div>
              <div className="bg-base-button p-5 flex rounded-md space-x-2 flex justify-center items-center text-base-text">
                <Image src={credit} alt="Débito" className="w-6" />
                <p>CARTÃO DE CRÉDITO</p>
              </div>
              <div className="bg-base-button p-5 flex rounded-md space-x-2 flex justify-center items-center text-base-text">
                <Image src={money} alt="Débito" className="w-6" />
                <p>CARTÃO DE CRÉDITO</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 space-y-4">
          <p className={`${baloo.className} text-xl`}>Cafés selecionados</p>
          <div className="bg-base-card rounded-bl-3xl rounded-tr-3xl p-12 space-y-4 ">
            <div className=" space-y-6">
              <ShopCard />
              <ShopCard />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-base-text">
                <p>Total de itens</p>
                <p className={`${baloo.className} font-normal`}>R$ 29,70</p>
              </div>
              <div className="flex justify-between text-base-text">
                <p>Entrega</p>
                <p className={`${baloo.className}`}>R$ 3,50</p>
              </div>
              <div className="flex justify-between text-base-text font-semibold text-xl">
                <p>Total</p>
                <p className={`${baloo.className}`}>R$ 33,20</p>
              </div>
            </div>
            <div>
              <button className="bg-yellow-brand text-white w-full p-4 rounded-lg font-medium">
                CONFIRMAR PEDIDO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
