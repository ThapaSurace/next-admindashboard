/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'textSoft':'#b7bac1',
        'bgSoft':'#182237',
        'pink-300': 'hsl(270, 50%, 32%)'
      },
      boxShadow: {
        'purple': 'rgba(132, 59, 206, 0.15) 0px 4px 24px'
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}
