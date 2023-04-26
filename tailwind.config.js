/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: '0.938rem'
      },
      fontFamily: {
        'primary': ['Inter', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        offwhite: 'rgb(var(--color-off-white) / <alpha-value>)',
        grayishblue: 'rgb(var(--color-dark-grayish-blue) / <alpha-value>)',
        darkblue: 'rgb(var(--very-dark-blue) / <alpha-value>)'
      }
    },
  },
  plugins: [],
}