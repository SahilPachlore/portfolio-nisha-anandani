/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f7f3ec',
        'cream-2': '#efe7d8',
        ink: '#1a1215',
        'ink-2': '#2a1f23',
        pink: {
          DEFAULT: '#ff2d78',
          50: '#fff0f6',
          100: '#ffd6e7',
          200: '#ffb3d4',
          300: '#ff85b8',
          400: '#ff5fa2',
          500: '#ff2d78',
          600: '#e6005f',
          700: '#b3004a',
        },
        gold: '#c9a227',
        red: '#e6402d',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        narrow: ['"Archivo Narrow"', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        jp: ['"Shippori Mincho"', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
        label: '0.18em',
        label2: '0.3em',
      },
      keyframes: {
        marqueeX: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeXRev: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        marqueeY: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        stampIn: {
          '0%': { transform: 'rotate(-12deg) scale(1.6)', opacity: '0' },
          '60%': { opacity: '1' },
          '100%': { transform: 'rotate(-8deg) scale(1)', opacity: '1' },
        },
        pulseDot: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
      },
      animation: {
        'marquee-x': 'marqueeX 40s linear infinite',
        'marquee-x-fast': 'marqueeX 22s linear infinite',
        'marquee-x-rev': 'marqueeXRev 34s linear infinite',
        'marquee-y': 'marqueeY 28s linear infinite',
        floaty: 'floaty 4s ease-in-out infinite',
        'stamp-in': 'stampIn 0.7s cubic-bezier(0.2,0.8,0.2,1) both',
        'pulse-dot': 'pulseDot 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
