/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Scans all your screen components
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#6C25FF', // Optional: Custom name for your design's purple
        },
      },
    },
  },
  plugins: [],
};
