/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
      },
      colors: {
        ink: '#06070b',
        panel: '#0c0e15',
        card: '#12141f',
        line: '#1f2333',
        gold: '#f5c451',
        cyan: '#4dd8e6',
        violet: '#8b7cf6',
      },
      boxShadow: {
        glow: '0 0 60px -12px rgba(245, 196, 81, 0.35)',
        'glow-cyan': '0 0 60px -12px rgba(77, 216, 230, 0.3)',
      },
    },
  },
  plugins: [],
}
