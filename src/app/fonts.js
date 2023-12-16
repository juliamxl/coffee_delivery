// eslint-disable-next-line camelcase
import { Baloo_2, Roboto_Flex as Roboto } from 'next/font/google'

export const roboto = Roboto({ subsets: ['latin'] })

export const baloo = Baloo_2({
  weight: ['700', '800'],
  subsets: ['latin'],
  variable: '--font-baloo',
})
