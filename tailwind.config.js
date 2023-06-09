/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#ffffff",
        "secondary-color": "#000000",
        "accent-color": "#4190d9",
        "accent-color-light": "#aacae8",
      },
      fontFamily: {
        roboto: ['var(--font-roboto)']
      }
    },
  },
  plugins: [],
}