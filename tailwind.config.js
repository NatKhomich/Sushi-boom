module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        boxShadow: {
          '2xs': '0 1px 2px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    plugins: [],
  }