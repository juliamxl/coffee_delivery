import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'purple-light': '#EBE5F9', // Substitua pela cor desejada
        'yellow-light': '#F1E9C9',
        'base-card': '#F3F2F2',
        'purple-dark': '#4B2995',
        'purple-brand': '#8047F8',
        'base-button': '#E6E5E5',
        'base-input': '#EDEDED',
        'yellow-brand': '#DBAC2C',
        'yellow-dark': '#C47F17',
        'base-hover': '#D7D5D5',
      },
      textColor: {
        'purple-dark': '#4B2995', // Substitua pela cor desejada
        'purple-medium': '#8047F8', // Substitua pela cor desejada
        'base-subtitle': '#403937', // Substitua pela cor desejada// Substitua pela cor desejada
        'base-label': '#8D8686', // Substitua pela cor desejada
        'base-text': '#574F4D', // Substitua pela cor desejada
        'yellow-dark': '#C47F17', // Substitua pela cor desejada
      },
      borderColor: {
        'base-button': '#E6E5E5',
        'purple-medium': '#8047F8',
      },
      fontFamily: {
        sans: ['var(--font-baloo)'],
      },
      spacing: {
        '150px': '150px', // Adicione o valor desejado
      },
    },
  },
  plugins: [],
}
export default config
