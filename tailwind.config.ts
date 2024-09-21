import aspectRatio from "@tailwindcss/aspect-ratio";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        colors: {
          blue: {
            "100": "#f1f9fe",
            "200": "#d9eefc",
            "300": "#bde1f9",
            "400": "#a6d7f7",
            "500": "#8eccf5",
            "600": "#3fa8ee",
            "700": "#1280ca",
            "800": "#0b4d7a",
            "900": "#041e2f",
          },
          green: {
            "100": "#f4fbf6",
            "200": "#caedd6",
            "300": "#a4dfb8",
            "400": "#7ad197",
            "500": "#51c377",
            "600": "#38a35c",
            "700": "#2a7944",
            "800": "#1c502d",
            "900": "#0d2615",
          },
          gray: {
            "100": "#f6f7f8",
            "200": "#bdc2cc",
            "300": "#868fa2",
            "400": "#545d6d",
            "500": "#282c34",
            "600": "#23272e",
            "700": "#1f2228",
            "800": "#1b1d23",
            "900": "#16181d",
          },
          orange: {
            "100": "#fef9f1",
            "200": "#fbe8cb",
            "300": "#f8d7a5",
            "400": "#f5c67f",
            "500": "#f2b55a",
            "600": "#ed9717",
            "700": "#b4710e",
            "800": "#714809",
            "900": "#2f1e04",
          },
          pink: {
            100: "#fffafc",
            200: "#fedce7",
            300: "#feb9d0",
            400: "#fd8cb2",
            500: "#fb3c7c",
            600: "#fa0557",
            700: "#eb0551",
            800: "#d20449",
            900: "#b4043e",
          },
          purple: {
            "100": "#f9f4fb",
            "200": "#d7b2e1",
            "300": "#b56fc8",
            "400": "#893d9e",
            "500": "#50235c",
            "600": "#431e4d",
            "700": "#36183f",
            "800": "#2d1434",
            "900": "#200e25",
          },
          red: {
            "100": "#fcf2f2",
            "200": "#f5cccd",
            "300": "#eda6a7",
            "400": "#e58082",
            "500": "#dd5a5c",
            "600": "#cb292c",
            "700": "#941e20",
            "800": "#611415",
            "900": "#2a0909",
          },
          yellow: {
            "100": "#fffcf0",
            "200": "#fff5cc",
            "300": "#feeeae",
            "400": "#fee78a",
            "500": "#fee067",
            "600": "#fed01b",
            "700": "#cba201",
            "800": "#7f6601",
            "900": "#332900",
          },
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        mono: ["Source Code Pro", "monospace"],
      },
    },
  },
  plugins: [forms, aspectRatio, typography],
};

export default config;
