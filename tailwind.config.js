/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html',
    './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        Day: '#42C2FF',
        Night: '#712B75',
        Cloudy: '#A8AAC4',
        Snowy: '#6BA7CC',
        textWhite: '#E8FCFF',
        textWhite2: '#E8FCFF00',
        bg1: '#EFFFFDB2',
        bg2: '#EFFFFD00',
        text2: '#48738DCC',
        search1: '#97A0B9',
        search2: '#F2FBFF'

      }
    }
  },
  plugins: []
}
