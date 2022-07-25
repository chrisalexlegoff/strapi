/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js, ts, jsx, tsx}",
    "./components/**/*.{js, ts, jsx, tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "split-right-orange-white":
          "linear-gradient(to right, #FC5050 50%, #FFFFFF 50%);",
        "split-bottom-orange-white":
          "linear-gradient(to bottom, #FC5050 50%, #FFFFFF 50%);",
        "split-right-green-white":
          "linear-gradient(to right, #41EAD4 50%, #FFFFFF 50%);",
        "split-bottom-green-white":
          "linear-gradient(to bottom, #41EAD4 70%, #FFFFFF 30%);",
      },
    },
    fontFamily: {
      Humanst521BT: "Humanst521BT",
    },
  },
  plugins: [],
}
