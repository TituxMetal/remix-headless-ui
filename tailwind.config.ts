import { type Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    darkTheme: 'dim',
    themes: [
      'dark',
      'business',
      'synthwave',
      'haloween',
      'forrest',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'night',
      'coffee',
      'dim',
      'sunset'
    ]
  }
} satisfies Config
