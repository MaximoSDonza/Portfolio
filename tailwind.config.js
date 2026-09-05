/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js}"],
  "darkMode": "class",
  theme: {
    extend: {

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'system-ui', 'sans-serif'],
      },

      colors:{
        negro: '#1c1c22',
        panel: '#26262e',
        blanco: '#f5f5f4'
      },

      maxWidth: {
        prose: '70ch',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        riseIn: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(14px, -18px) scale(1.06)' },
          '66%': { transform: 'translate(-12px, 10px) scale(0.96)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in forwards',
        fadeOut: 'fadeOut 0.5s ease-out forwards',
        riseIn: 'riseIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        blob: 'blob 12s ease-in-out infinite',
      }

    },
  },
  plugins: [],
}

