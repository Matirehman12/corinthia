/** @type {import('tailwindcss').Config} */
module.exports = {
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
        black: "#080808",
        gray: "#484848"
      },
      fontFamily: {
        caslon: ['"Adobe Caslon Pro"', 'serif'],
        optima: ['Optima', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
