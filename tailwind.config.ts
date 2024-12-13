import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#2596be",
        secondary: "#6c6767",
      },
    },
  },
  plugins: [],
} satisfies Config;
