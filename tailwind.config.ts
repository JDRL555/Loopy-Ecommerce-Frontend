import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': "#330098",
        'secondary-color': "#FFCB23",
        'third-color': "#6E1BD5",
        'light-secondary-color': "#FDE185",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
