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
        xs: "450px",
      },
    },
  },
  plugins: [],
}

export default config