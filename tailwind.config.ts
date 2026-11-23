import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#fdf8f5",
          dim: "#ded9d6",
          bright: "#fdf8f5",
          lowest: "#ffffff",
          low: "#f8f3f0",
          card: "#f2edea",
          high: "#ece7e4",
          highest: "#e6e2df",
          blush: "#f5ebe6",
        },
        brand: {
          primary: "#8b4552",
          container: "#a85d6a",
          secondary: "#c59b63",
          gold: "#7a5826",
          plum: "#6e4e58",
          truffle: "#2b1e22",
          border: "#ecd8d0",
          outline: "#857374",
          subtle: "#9e828a",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "serif"],
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "sans-serif"],
      },
      boxShadow: {
        glow: "0 4px 20px -2px rgba(139, 69, 82, 0.12)",
        gold: "0 4px 20px -2px rgba(197, 155, 99, 0.2)",
        card: "0 8px 30px rgba(110, 78, 88, 0.06)",
        float: "0 12px 40px rgba(43, 30, 34, 0.08)",
      },
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
