/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'rufina': ['Rufina', 'serif'],
        'avenir': ['Avenir', 'sans-serif'],
      },
        colors: {
          'primary': '#FF6363',
          'secondary': {
          100: '#E2E2D5',
          200: '#888883',
          },
          'c-blue': '#3221DF'
        },
    },
  },
  plugins: [],
}

