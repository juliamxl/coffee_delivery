import Image from 'next/image'
import mapOrange from '../../assets/map_orange.svg'
import Header from '../components/Header'
import { baloo } from '../fonts'

export const Checkout = () => {
  return (
    <div>
      <Header />
      <div className="space-y-4">
        <p className={`${baloo.className} text-xl`}>Complete seu pedido</p>
        <div className="p-10 bg-base-card w-3/5 rounded-lg">
          <div className='flex items-start space-x-2'>
            <Image src={mapOrange} alt="mapOrange" />
            <div className="flex flex-col">
              <p className="text-lg text-base-subtitle">Endereço de Entrega</p>
              <p className="text-base-text">
                Informe onde você quer receber seu pedido
              </p>
            </div>
          </div>

          <div>
            <div>
              <input
                placeholder="CEP"
                className="border-solid border-black border-2"
              />
            </div>
            <div>
              <input
                placeholder="Rua"
                className="border-solid border-black border-2"
              />
            </div>
            <div>
              <input className="border-solid border-black border-2" />
              <input className="border-solid border-black border-2" />
            </div>
            <div>
              <input className="border-solid border-black border-2" />
              <input className="border-solid border-black border-2" />
              <input className="border-solid border-black border-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
