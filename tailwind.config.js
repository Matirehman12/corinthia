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
        gray: "#484848",
        customGold: '#BB975B',
        lightGray: '#F7F6F4',
        bgGray: '#EBEBEB',
        bgDarkGray: '#F7F7F7',
        btnGolden: ' #BB975B',
        darkGray: '#E9E6DF',


      },
      fontFamily: {
        caslon: ['"Adobe Caslon Pro"', 'serif'],
        optima: ['Optima', 'sans-serif'],
      },
      backgroundImage: {
        'bottom-lines': "url('/src/images/bottom-lines.svg')",
      }
    },
  },
  plugins: [],
};
