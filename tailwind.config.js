/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'hush-black': '#0a0a0a',
        'hush-dark': '#111111',
        'hush-card': '#161616',
        'hush-border': '#222222',
        'hush-orange': '#E8651A',
        'hush-orange-light': '#F07840',
        'hush-gold': '#C9A84C',
        'hush-cream': '#F5F0E8',
        'hush-muted': '#888888',
        'hush-text': '#CCCCCC',
      },
      fontFamily: {
        'display': ['Cormorant Garamond', 'serif'],
        'body': ['DM Sans', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'slide-right': 'slideRight 0.6s ease forwards',
      },
      keyframes: {
        fadeUp: { '0%': { opacity: 0, transform: 'translateY(30px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        slideRight: { '0%': { opacity: 0, transform: 'translateX(-30px)' }, '100%': { opacity: 1, transform: 'translateX(0)' } },
      }
    },
  },
  plugins: [],
}
