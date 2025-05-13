/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        monoTitle: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [require('tailwindcss-debug-screens')],

};
