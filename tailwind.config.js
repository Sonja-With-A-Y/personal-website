module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lmtext: "var(--lmtext)",
        lmbutton: "var(--lmbutton)",
        lmbuttonhover: "var(--lmbuttonhover)",
        lmbackground: "var(--lmbackground)",
        lmnavbg: "var(--lmnavbg)",
        dmtext: "var(--dmtext)",
        dmbutton: "var(--dmbutton)",
        dmbuttonhover: "var(--dmbuttonhover)",
        dmbackground: "var(--dmbackground)",
        dmnavbg: "var(--dmnavbg)",
        // primary: "var(--primary)",
        // secondary: "var(--secondary)",
        // main: "var(--main)",
        // header: "var(--header)",
        // accent: "var(--accent)",
      },
      spacing: {
        '120': '30rem',
        '140': '35rem',
      },
    },
  },
  plugins: [],
}
