/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05060a',
          900: '#0a0c14',
          850: '#0e1119',
          800: '#12151f',
          700: '#1a1e2b',
          600: '#262b3a',
        },
        mist: {
          50: '#f6f8fc',
          100: '#eaeefb',
          200: '#cdd5ec',
          300: '#a3afce',
          400: '#7782a3',
        },
        iris: {
          300: '#a5b4ff',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
        },
        teal: {
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        'display': ['clamp(2.75rem, 6vw, 5.25rem)', { lineHeight: '1.02', letterSpacing: '-0.035em' }],
        'h1': ['clamp(2rem, 4vw, 3.25rem)', { lineHeight: '1.08', letterSpacing: '-0.03em' }],
        'h2': ['clamp(1.5rem, 2.6vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      },
      maxWidth: {
        'container': '1200px',
      },
      borderRadius: {
        'xl2': '1.25rem',
      },
      boxShadow: {
        'glow': '0 0 0 1px rgba(129,140,248,0.18), 0 24px 70px -20px rgba(79,70,229,0.45)',
        'card': '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 48px -24px rgba(0,0,0,0.7)',
      },
      backgroundImage: {
        'grid': 'linear-gradient(rgba(148,163,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,255,0.05) 1px, transparent 1px)',
      },
      keyframes: {
        'gradient-pan': {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'shimmer': {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'gradient-pan': 'gradient-pan 12s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
