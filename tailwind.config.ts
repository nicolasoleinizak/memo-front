import { text } from "stream/consumers";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: {
        '50': '#ecfff5',
        '100': '#d3ffe9',
        '200': '#aaffd5',
        '300': '#69ffb6',
        '400': '#21ff90',
        '500': '#00f26f',
        '600': '#00ca58',
        '700': '#009e48',
        '800': '#007a3d',
        '900': '#026535',
        '950': '#00391b',
        DEFAULT: '#007a3d'
      },
      secondary: {
        '50': '#faffe4',
        '100': '#f1ffb8',
        '200': '#e5ff74',
        '300': '#deff25',
        '400': '#e7ff00',
        '500': '#fffa00',
        '600': '#f0c500',
        '700': '#be8b00',
        '800': '#9c6c00',
        '900': '#7a5100',
        '950': '#4d2d00',
        DEFAULT: '#9c6c00'
      },
      black: {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#888888',
        '500': '#6d6d6d',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#3d3d3d',
        '950': '#000000',
        DEFAULT: '#000000'
    },
    },
  },
  plugins: [],
};
export default config;
