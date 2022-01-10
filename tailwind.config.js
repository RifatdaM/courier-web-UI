module.exports = {
  content: ["./html/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        helv: "'Helvetica' , sans-serif",
      },
      colors: {
        primary: {
          main: "#ee2926",
          dark: "#691210",
          light: "#f79f9e",
        },
        accent: "#26ebee",
        background: "#fff1f2",
        gray: "#6b7280",
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
        lg: "1124px",
        xl: "1124px",
        "2xl": "1440px",
      }
    },
  },
  plugins: [],
};
