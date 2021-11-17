module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      'current': 'currentColor',
      'orang1':'#FF6338',
      'orang2':'#F44618',
      'pink1':'#EA4970',
      'pink2':'#E56AB6',
      'purple1':'#B64E91',
      'purpule2':'#765795',
      'darkblue':'#40547E',
      'darkblue2':'#2F4858',
      'black':'#000000',
      'white':'#FFFFFF' ,
       'gray':'#6B7280',
       'gray-50':'#F9FAFB',
       'graylight':'#E4E4E4',
       'darkpurple':'#612D4D',
    },
  variants: {
    extend: {},
  },
  plugins: [],
}}
