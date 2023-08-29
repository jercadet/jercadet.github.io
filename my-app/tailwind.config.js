/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'cadet-gray': '#9AADBF',
        'charcoal': '#344055',
        'air-superiority-blue': '#6D98BA',
        'rose-taupe': '#A26769',
        'old-rose': '#B97375',
      },
      fontFamily: {
        'custom': ['Prompt', 'Oxygen', 'Ubuntu'], 
      }
    },
  },
  plugins: [],
}

