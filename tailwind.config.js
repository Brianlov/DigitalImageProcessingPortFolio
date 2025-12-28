/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000', // 60% Black
        secondary: '#ffffff', // 30% White
        accent: '#fbbf24', // 10% Yellow
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        pixel: ['"VT323"', 'monospace'],
        casual: ['"Patrick Hand"', 'cursive'],
      },
      animation: {
        'typewriter': 'typewriter 4.5s steps(60) infinite normal both',
        'fade-in': 'fadeIn 0.5s ease-out',
        'shift': 'shift 10s ease-in-out infinite alternate',
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0%' },
          '90%': { width: '100%' }, // Finish typing at approx 4s
          '100%': { width: '100%' }, // Pause for 0.5s
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shift: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-10px, -10px)' }
        }
      }
    },
  },
  plugins: [],
}
