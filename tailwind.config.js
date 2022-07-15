module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2dbc7e",

          secondary: "#f4f72e",

          accent: "#0536b2",

          neutral: "#22223A",

          "base-100": "#EFEAF0",

          info: "#3997C6",

          success: "#158A4B",

          warning: "#B77710",

          error: "#E93216",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
