import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#FFFFFF",
        gold: "#E11D48",
        saffron: "#FB7185",
        kasavu: "#171717",
        crimson: "#B91C1C",
        ash: "#6B7280"
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 24px 80px rgba(225, 29, 72, 0.18)"
      },
      transitionTimingFunction: {
        brahma: "cubic-bezier(0.76, 0, 0.24, 1)"
      }
    }
  },
  plugins: []
};

export default config;
