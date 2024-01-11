'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Cash from '../../assets/cash.svg'
import Credit from '../../assets/credit.svg'
import Debit from '../../assets/debit.svg'
import mapOrange from '../../assets/map_orange.svg'
import Header from '../components/Header'
import { Pay } from '../components/Pay'
import { ShopCard } from '../components/ShopCard'
import { useCart } from '../contexts/shopContext'
import { baloo } from '../fonts'
import { useRouter } from 'next/navigation'

interface CheckoutItem {
  coffee: {
    nome: string
    preco: number
    id: number
    imagem: string
  }
  quantity: number
  total: number
}

export const Checkout = () => {
  const router = useRouter()
  const [cep, setCep] = useState('')
  const [rua, setRua] = useState('')
  const [numero, setNumero] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [complemento, setComplemento] = useState('')
  const [uf, setUf] = useState('')
  const { getCart, cart, atualizarEndereco, atualizarFormaPagamento } =
    useCart()
  const [cartItems, setCartItems] = useState<CheckoutItem[]>([])
  const [activePayIndex, setActivePayIndex] = useState<number | undefined>(
    undefined,
  )
  const [cartTotal, setCartTotal] = useState<string>('0.00')

  useEffect(() => {
    const items = getCart()
    setCartItems(items)
    setCartTotal(calculateTotal(items))
  }, [cart])

  const handlePayClick = (index: number) => {
    setActivePayIndex(index)
  }

  const calculateTotalItems = (items: CheckoutItem[]) => {
    return items.reduce((total, item) => total + item.total, 0).toFixed(2)
  }

  const calculateTotal = (items: CheckoutItem[]) => {
    const totalItems = calculateTotalItems(items)
    const deliveryCost = 3.5
    return (parseFloat(totalItems) + deliveryCost).toFixed(2)
  }

  const handleConfirmPedido = () => {
    // Validação dos campos de input
    if (!cep || !rua || !numero || !complemento || !bairro || !cidade || !uf) {
      alert('Preencha todos os campos de endereço.')
    } else {
      atualizarEndereco({ cep, rua, numero, complemento, bairro, cidade, uf })
      if (activePayIndex !== undefined) {
        // Defina a forma de pagamento com base no índice ativo
        let formaDePagamentoSelecionada = ''
        if (activePayIndex === 0) {
          formaDePagamentoSelecionada = 'Cartão de Crédito'
        } else if (activePayIndex === 1) {
          formaDePagamentoSelecionada = 'Cartão de Débito'
        } else if (activePayIndex === 2) {
          formaDePagamentoSelecionada = 'Dinheiro'
        }
        atualizarFormaPagamento(formaDePagamentoSelecionada)
      }
      router.push(`/landingPage`)
    }
  }

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
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  className="bg-base-input border-solid border-2 border-base-button rounded-md h-9 outline-none p-2"
                />
              </div>
              <div>
                <input
                  placeholder="Rua"
                  value={rua}
                  onChange={(e) => setRua(e.target.value)}
                  className="bg-base-input border-solid border-2 border-base-button rounded-md h-9  w-full outline-none p-2"
                />
              </div>
              <div className="grid grid-cols-7 gap-3">
                <input
                  placeholder="Número"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                  className="bg-base-input border-solid border-2 border-base-button rounded-md h-9 col-span-2 outline-none p-2"
                />
                <input
                  placeholder="Complemento"
                  value={complemento}
                  onChange={(e) => setComplemento(e.target.value)}
                  className="bg-base-input border-solid border-2 border-base-button rounded-md h-9 col-span-5 outline-none p-2"
                />
              </div>
              <div className="grid grid-cols-7 gap-3">
                <input
                  placeholder="Bairro"
                  value={bairro}
                  onChange={(e) => setBairro(e.target.value)}
                  className="bg-base-input border-solid border-2 border-base-button rounded-md h-9 col-span-2 outline-none p-2"
                />
                <input
                  placeholder="Cidade"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  className="bg-base-input border-solid border-2 border-base-button rounded-md h-9 col-span-4 outline-none p-2"
                />
                <input
                  placeholder="UF"
                  value={uf}
                  onChange={(e) => setUf(e.target.value)}
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
              <Pay
                title="CARTÃO DE CRÉDITO"
                image={Credit}
                onClick={() => handlePayClick(0)}
                isActive={activePayIndex === 0}
              />
              <Pay
                title="CARTÃO DE DÉBITO"
                image={Debit}
                onClick={() => handlePayClick(1)}
                isActive={activePayIndex === 1}
              />
              <Pay
                title="DINHEIRO"
                image={Cash}
                onClick={() => handlePayClick(2)}
                isActive={activePayIndex === 2}
              />
            </div>
          </div>
        </div>
        <div className="col-span-2 space-y-4">
          <p className={`${baloo.className} text-xl`}>Cafés selecionados</p>
          <div className="bg-base-card rounded-bl-3xl rounded-tr-3xl rounded-br-md rounded-tl-md p-12 space-y-4 ">
            <div className=" space-y-6">
              {cartItems.map((item, index) => (
                <ShopCard key={index} item={item} />
              ))}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-base-text">
                <p>Total de itens</p>
                <p className={`${baloo.className} font-normal`}>
                  R$ {calculateTotalItems(cartItems)}
                </p>
              </div>
              <div className="flex justify-between text-base-text">
                <p>Entrega</p>
                <p className={`${baloo.className}`}>R$ 3,50</p>
              </div>
              <div className="flex justify-between text-base-text font-semibold text-xl">
                <p>Total</p>
                <p className={`${baloo.className}`}>R$ {cartTotal}</p>
              </div>
            </div>
            <div>
              <button
                className="bg-yellow-brand text-white w-full p-4 rounded-lg font-medium"
                onClick={handleConfirmPedido}
              >
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
