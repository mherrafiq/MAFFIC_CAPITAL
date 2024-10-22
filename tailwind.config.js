/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'move': 'move 20s linear infinite', // Existing animation
        'magnet-move': 'magnetMove 3s ease-in-out infinite', // New magnet animation for the image
      },
      keyframes: {
        move: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        magnetMove: {
          '0%': { transform: 'translateX(0) scale(1)' }, // Starting position
          '30%': { transform: 'translateX(-20px) scale(1.1)' }, // Magnet close effect
          '50%': { transform: 'translateX(20px) scale(1.1)' }, // Magnet close effect to the right
          '100%': { transform: 'translateX(0) scale(1)' }, // Return to original position
        },
      },
    },
  },
  plugins: [],
};
