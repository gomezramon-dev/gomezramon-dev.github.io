import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FDBD02",
        secondary: "#241F23",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        desktop: {'max': '1279px'},
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)', visibility: 'visible' },
          '100%': { transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)', visibility: 'hidden'},
        },
      },
      animation: {
        slideDown: 'slideDown 0.5s ease forwards',
        slideUp: 'slideUp 0.5s ease forwards',
      },
    },
  },
  plugins: [],
}

export default config