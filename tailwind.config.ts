import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
      gray: {
        25: "#FCFCFD",
        50: "#F8FAFC",
        100: "#EEF2F6",
        200: "#E3E8EF",
        300: "#CDD5DF",
        400: "#9AA4B2",
        500: "#697586",
        600: "#4B5565",
        700: "#364152",
        800: "#202939",
        900: "#121926",
      },
    },
  },
  plugins: [],
};
export default config;
