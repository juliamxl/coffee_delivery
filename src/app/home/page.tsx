import { Banner } from '../components/Banner'
import { CoffeeCard } from '../components/CoffeeCard'
import Header from '../components/Header'
import { baloo } from '../fonts'

export const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <div className="">
        <p className={`${baloo.className} text-3xl mb-14`}>Nossos cafés</p>
        <div className="flex flex-wrap gap-5">
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </div>
      </div>
    </div>
  )
}

export default Home
