import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Sohne",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        serif: ["Signifier", "Source_Serif_4", "serif"],
      },
      typography: () => ({
        DEFAULT: {
          css: {
            h1: {
              fontFamily: ["Signifier"],
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
} satisfies Config;
