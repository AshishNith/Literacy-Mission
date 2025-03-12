module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E40AF',
          50: '#E6EBFA',
          100: '#C5D3F5',
          200: '#849BE8',
          300: '#4364DB',
          400: '#1E40AF',
          500: '#19379D',
          600: '#142E8C',
          700: '#0F257A',
          800: '#0A1C69',
          900: '#051357',
        },
        secondary: '#3B82F6',
        accent: '#60A5FA',
        dark: '#1F2937',
        light: '#F3F4F6',
      },
      animation: {
        slideLeft: 'slideLeft 40s linear infinite',
        slideRight: 'slideRight 40s linear infinite',
      },
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
