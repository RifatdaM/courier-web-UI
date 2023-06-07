module.exports = {
  content: ["./html/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        helv: "'Helvetica' , sans-serif",
        bebas:"'Bebas Neue', sans-serif",
      },
      colors: {
        primary: {
          main: "#066163",
          "30%": "#044445",
          dark: "#010a0a",
          light: "#e6efef",
        },
        accent: "#fc4442",
        background: "#F1F2F5",
        grayCustom: "#6b7280",
        disable: "#d1d5db",
        dark: "#111827",
        light: "#f9fbfe",

        error: "#dc2626",
        accept: "#16a34a",
        warning: "#facc15",
        info: "#0ea5e9",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "lg": "1024px",
        "xl": "1124px",
        "2xl": "1440px",
      }
    },
  },
  plugins: [],
};
