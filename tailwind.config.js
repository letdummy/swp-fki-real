module.exports = {
  content: ["./public/**/*.{html,js}",
"./public/pages/**/*.{html,js}"
],
  theme: {
    extend: {
      maxWidth: {
        '2sm': '10rem',
        '3sm': '15rem'
      },
      height: {
        '90': '22.5rem' 
      }
    },
  },
  plugins: [],
}
