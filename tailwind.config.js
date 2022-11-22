/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      spaceMono: ["Space Mono", "cursive"],
      ibmRegular: ["IBM Plex Mono", "serif"],
      ibmBold: ["IBM Plex Bold", "serif"],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    screens: {
      xxs: "320px",
      // => @media (min-width: 320px) { ... }

      xs: "380px",
      // => @media (min-width: 380px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      cm: "810px",
      // => @media (min-width: 810px) { ... }

      bcm: "890px",
      // => @media (min-width: 890px) { ... }

      lg: "1054px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      xll: "1920px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        backgroundColor: "#60a5f9",
        premiseItem: "#ffffff",
        textColor: "#4a4a4a",
        linkHover: "#e3e3e3",
        buttonColor: "#0088ff",
        buttonHover: "#286eef",
        linkBlue: "#499afd",
        linkHoverBlue: "#217ff1",
        buttonShowAll: "#313131",
        buttonShowAllHover: "#000000",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
