import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F3EC",
        ivory: "#FAF7F1",
        taupe: "#C4B5A4",
        sage: "#9DA894",
        gold: "#C9A876",
        charcoal: "#2C2A27",
        warmGray: "#7A7569",
        softWhite: "#FDFCF8",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
