/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dimgray: "rgba(88, 88, 88, 0.7)",
        white: "#fff",
        gray: {
          "100": "rgba(255, 255, 255, 0.8)",
          "200": "rgba(255, 255, 255, 0.6)",
          "300": "rgba(255, 255, 255, 0.1)",
          "400": "rgba(255, 255, 255, 0.3)",
        },
      },
      spacing: {},
      fontFamily: {
        "sf-pro-text": "'SF Pro Text'",
        inter: "Inter",
        "sf-pro": "'SF Pro'",
        "termina-test": "'Termina Test'",
        "sf-mono": "'SF Mono'",
      },
      borderRadius: {
        "29xl": "48px",
        "21xl": "40px",
      },
    },
    fontSize: {
      sm: "14px",
      "9xl": "28px",
      "3xl": "22px",
      xs: "12px",
      "17xl": "36px",
      base: "16px",
      smi: "13px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
