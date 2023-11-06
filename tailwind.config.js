/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  container: {
    center: true,
  },
  extend: {},
};
// eslint-disable-next-line no-undef
export const plugins = [require("tailwind-scrollbar-hide")];
