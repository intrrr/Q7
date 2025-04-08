/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,tsx}"],
    theme: {
      extend: {}
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: ["light", "dark", "cupcake"], // 可根据需求选择主题
    }
  };
  