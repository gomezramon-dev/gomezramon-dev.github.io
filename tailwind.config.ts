import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FDBD02",
        secondary: "#241F23",
      },
      letterSpacing: {
        links: "4px",
        title: "64px",
      },
      keyframes: {
        slideDown: {
          "0%": {
            transform: "translateY(-100%)"
           },
          "100%": { 
            transform: "translateY(0)" 
          },
        },
        slideUp: {
          "0%": { 
            transform: "translateY(0)" 
          },
          "100%": { 
            transform: "translateY(-100%)",
            visibility: "hidden" 
          },
        },
      },
      animation: {
        slideDown: "slideDown 0.5s ease forwards",
        slideUp: "slideUp 0.5s ease forwards",
        slideUpWindow: "slideUp 1s ease forwards",
        slideDownWindow: "slideDown 0.75s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
