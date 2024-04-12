/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          100: "#060606",
          150: "#121212",
          200: "#EEEEEE",
          300: "#FFCB09",
          400: "#737373",
          450: "#C1C1C1",
          500: "#232323",
          600: "#383838",
        },
        secondary: {
          100: "#D9F99D",
          200: "#FDE68A",
          300: "#F59E0B",
          400: "#1E1E1E",
        },
      },
      fontFamily: {
        cdRegular: "ClashDisplay-Regular",
        cdBold: "ClashDisplay-Bold",
        cdMedium: "ClashDisplay-Medium",
        cdSemiBold: "ClashDisplay-Semibold",
        cdLight: "ClashDisplay-Light",
        sfRegular: "SF-Pro-Display-Regular",
        sfBold: "SF-Pro-Display-Bold",
        sfMedium: "SF-Pro-Display-Medium",
        sfSemiBold: "SF-Pro-Display-semiBold",
        sfThin: "SF-Pro-Display-Thin",
        sfLight: "SF-Pro-Display-Light",
      },
    },
  },
  plugins: [],
};
