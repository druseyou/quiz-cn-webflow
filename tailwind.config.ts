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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          dark: "#10044d",
          DEFAULT: "#19067e",
          light: "#3f2ead",
        },
        surface: {
          DEFAULT: "#f5f5f5",
          variant: "#796fac",
        },
        border: {
          DEFAULT: "#4e557e",
          active: "#f5f7ff",
          disabled: "#5968c9",
        },
        text: {
          primary: "#f5f5f5",
          secondary: "#796fac",
        },
        gradient: {
          start: "#1a1347",
          middle: "#003a58",
          end: "#3f2ead",
        },
      },
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

