/** @type {import('tailwindcss').Config} */
const preline = require('preline/plugin.js');
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}",'./node_modules/preline/preline.js',],
  theme: {
    extend: {},
  },
  plugins: [require('preline/plugin')],
}

