/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        background: '#0F172A', // Slate 900
        card: '#1E293B',       // Slate 800
        primary: '#3B82F6',    // Blue 500
        secondary: '#10B981',  // Emerald 500
        accent: '#8B5CF6',     // Violet 500
        danger: '#EF4444',     // Red 500
        warning: '#F59E0B',    // Amber 500
        text: '#F8FAFC',       // Slate 50
        muted: '#94A3B8',      // Slate 400
        border: '#334155'      // Slate 700
      },
      fontFamily: {
        // Will rely on system defaults for now unless custom fonts are added later
        sans: ['System'],
      }
    },
  },
  plugins: [],
};
