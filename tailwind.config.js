/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          DEFAULT: '#FF6B6B',
          hover: '#FF5252',
        },
        orange: '#FF8A4C',
        navy: {
          dark: '#0A192F',
          darker: '#020c1b',
        },
        slate: {
          DEFAULT: '#1E293B',
          light: '#334155',
        },
        gray: {
          DEFAULT: '#64748B',
          light: '#94A3B8',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#94A3B8',
          muted: '#64748B',
        },
        code: {
          DEFAULT: '#E5E7EB',
          bg: '#1E293B',
        },
      },
      fontFamily: {
        primary: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        code: ['Consolas', 'Monaco', 'Courier New', 'monospace'],
      },
      maxWidth: {
        'container': '1400px',
      },
      spacing: {
        'section-v': '6rem',
        'section-h': '3rem',
      },
      transitionDuration: {
        'default': '200ms',
        'slow': '300ms',
      },
    },
  },
  plugins: [],
}
