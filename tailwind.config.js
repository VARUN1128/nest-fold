/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        walnut: {
          DEFAULT: '#5C3D2E',
          deep: '#472E22',
          light: '#724F3D',
        },
        cream: {
          DEFAULT: '#F5EFE4',
          surface: '#FAF7F0',
          dark: '#EAE1D2',
        },
        rattan: {
          DEFAULT: '#C8A96E',
          light: '#DBC392',
          dark: '#A6884E',
        },
        sage: {
          DEFAULT: '#7A9E7E',
          hover: '#688B6C',
          light: '#9BB89E',
          dark: '#59755D',
        },
        clay: {
          DEFAULT: '#B5714A',
          hover: '#A0603B',
          light: '#C98965',
        },
        charcoal: {
          DEFAULT: '#2A2420',
          dark: '#1C1714',
          muted: '#524944',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        caps: '.15em',
      },
    },
  },
  plugins: [],
}
