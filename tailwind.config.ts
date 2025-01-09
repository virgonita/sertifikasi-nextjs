import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        '3x1': '2rem',
        '4x1': '2.5rem',
        '5x1': '3rem',
        '7x1': '4.5rem', 
      },
    },
  },
  plugins: [],
} satisfies Config;
