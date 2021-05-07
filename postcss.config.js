module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-font-magician")({
      hosted: ["/fonts/BNazanin", "/fonts/BRoya", "/fonts/Vazir", "/fonts/BTitr"],
    }),
  ],
};
