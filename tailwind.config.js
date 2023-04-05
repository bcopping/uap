/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: "var(--font-body)",
      heading: "var(--font-heading)",
    },
    fontSize: {
      xs: ["12px", "18px"],
      sm: ["14px", "24px"],
      md: ["16px", "26px"],
      base: ["17px", "28px"],
      lg: ["22px", "32px"],
      xl: ["24px", "36px"],
      "2xl": ["38px", "54px"],
    },
    extend: {},
  },
  plugins: [],
};
