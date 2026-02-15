/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Apple-inspired palette
        'apple': {
          'white': '#FBFBFD',
          'gray-50': '#F5F5F7',
          'gray-100': '#E8E8ED',
          'gray-200': '#D2D2D7',
          'gray-300': '#B0B0B6',
          'gray-400': '#86868B',
          'gray-500': '#6E6E73',
          'gray-600': '#424245',
          'gray-700': '#333336',
          'gray-800': '#1D1D1F',
          'black': '#000000',
          'blue': '#0071E3',
          'blue-hover': '#0077ED',
          'blue-dark': '#0066CC',
          'green': '#28CD41',
          'red': '#FF3B30',
          'orange': '#FF9500',
          'purple': '#AF52DE',
          'pink': '#FF2D55',
        },
      },
      fontFamily: {
        'sans': [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
          'SF Pro Text',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        'display': [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      fontSize: {
        'hero': ['80px', { lineHeight: '1.05', letterSpacing: '-0.015em', fontWeight: '700' }],
        'hero-sm': ['48px', { lineHeight: '1.08', letterSpacing: '-0.01em', fontWeight: '700' }],
        'section': ['56px', { lineHeight: '1.07', letterSpacing: '-0.012em', fontWeight: '700' }],
        'section-sm': ['32px', { lineHeight: '1.12', letterSpacing: '-0.01em', fontWeight: '700' }],
        'subtitle': ['28px', { lineHeight: '1.14', letterSpacing: '0.007em', fontWeight: '600' }],
        'subtitle-sm': ['21px', { lineHeight: '1.19', letterSpacing: '0.011em', fontWeight: '600' }],
        'body-xl': ['21px', { lineHeight: '1.38', letterSpacing: '0.011em' }],
        'body-lg': ['19px', { lineHeight: '1.42', letterSpacing: '0.012em' }],
        'body': ['17px', { lineHeight: '1.47', letterSpacing: '-0.022em' }],
        'body-sm': ['14px', { lineHeight: '1.43', letterSpacing: '-0.016em' }],
        'caption': ['12px', { lineHeight: '1.33', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        'apple': '980px',
        'apple-lg': '1120px',
        'apple-xl': '1440px',
      },
      borderRadius: {
        'apple': '18px',
        'apple-sm': '12px',
        'apple-lg': '24px',
        'apple-xl': '30px',
      },
      boxShadow: {
        'apple-sm': '0 1px 3px rgba(0, 0, 0, 0.08)',
        'apple': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'apple-md': '0 8px 30px rgba(0, 0, 0, 0.08)',
        'apple-lg': '0 12px 40px rgba(0, 0, 0, 0.12)',
        'apple-xl': '0 20px 60px rgba(0, 0, 0, 0.15)',
        'apple-hover': '0 8px 36px rgba(0, 0, 0, 0.14)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        scaleIn: {
          'from': { opacity: '0', transform: 'scale(0.96)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'apple-spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      backdropBlur: {
        'apple': '20px',
      },
      backgroundImage: {
        'gradient-apple': 'linear-gradient(135deg, #0071E3, #AF52DE, #FF2D55)',
        'gradient-hero': 'linear-gradient(to right, #2563EB, #7C3AED, #EC4899)',
        'gradient-subtle': 'linear-gradient(180deg, #FBFBFD 0%, #F5F5F7 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}