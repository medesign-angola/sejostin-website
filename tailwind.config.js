/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    screens: {
      'sm': '350px',
      'md': '1024px',
      'lg': '1440px',
      'xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#157DA1',
        secondary: '#027E45',
        accent: '#28ABE3',
      }
    }
  },
  plugins: [],
}
