/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#1A1208',
          light: '#2A2014',
          deep: '#120C05',
        },
        walnut: {
          DEFAULT: '#1A1208',
          deep: '#120C05',
          light: '#5C3D2E',
        },
        cream: {
          DEFAULT: '#F7F0E3',
          warm: '#F5EFE4',
          surface: '#FAF7F0',
          dark: '#EAE1D2',
        },
        rattan: {
          DEFAULT: '#C8A96E',
          light: '#DBC392',
          dark: '#A6884E',
        },
        burntOrange: {
          DEFAULT: '#D4541A',
          hover: '#BA4512',
          light: '#E26730',
        },
        sage: {
          DEFAULT: '#7A9E7E',
          hover: '#688B6C',
          light: '#9BB89E',
        },
        clay: {
          DEFAULT: '#8B4513',
          warm: '#B5714A',
          light: '#A0521D',
        },
        charcoal: {
          DEFAULT: '#1A1208',
          trueBlack: '#0D0A04',
          muted: '#4A3E31',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        caps: '.15em',
        tracked: '.25em',
      },
    },
  },
  plugins: [],
}
