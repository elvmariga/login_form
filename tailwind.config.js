/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily:{
      mulish:["Mulish", "san-serif"]
    },
    colors: {
      primary: 'rgba(67, 97, 238, 1)',
      secondary:'#3A0CA3',
      textColor:'rgba(0, 0, 0, 0.6)',
      inputbg:'#F5F7F9'
      
    },
    extend: {
      backgroundImage:{
        'login-left': "url('./Assests/backgroundImage.png')"
      }
    },
  },
  plugins: [],
};
