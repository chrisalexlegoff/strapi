/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js, ts, jsx, tsx}",
    "./components/**/*.{js, ts, jsx, tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bleu-clair": "var(--bleu-clair)",
        "rouge-orange": "var(--rouge-orange)",
        blanc: "var(--blanc)",
        "bleu-fonce": "var(--bleu-fonce)",
        vert: "var(--vert)",
        "fond-orange": "var(--fond-orange)",
        "noir-style": "var(--noir-style)",
        "vert-fond": "var(--vert-fond)",
        "fond-gris": "var(--fond-gris)",
        gris: "var(--gris)",
        "bleu-fond": "var(--bleu-fond)",
        "noir-paragraphe": "var(--noir-paragraphe)",
      },
      backgroundColor: {
        "accueil-entete-mobile": "var(--rouge-orange);",
        "accueil-nous": "var(--blanc);",
        "accueil-projet": "var(--vert);",
        "accueil-pourquoi": "var(--blanc);",
      },
      backgroundImage: {
        "accueil-entete":
          "linear-gradient(to right, var(--rouge-orange) 50%, var(--blanc) 50%);",
        "split-bottom-orange-white":
          "linear-gradient(to bottom, #FC5050 50%, #FFFFFF 50%);",
        "split-bottom-blue-white":
          "linear-gradient(to bottom, #2E437D 50%, #FFFFFF 50%);",
        "accueil-realisations":
          "linear-gradient(to right, var(--vert) 50%, var(--blanc) 50%);",
        "accueil-realisations-mobile":
          "linear-gradient(to bottom, var(--vert) 70%, var(--blanc) 30%);",
        "split-right-blue-transparent":
          "linear-gradient(to right, rgba(46, 67, 125, 0.8) 50%, rgba(255,255,255,0) 50%);",
        "split-right-pink-transparent":
          "linear-gradient(to right, rgba(252, 80, 80, 0.95) 50%, rgba(255,255,255,0) 50%);",
        "split-right-green-transparent":
          "linear-gradient(to right, rgba(65, 234, 212, 0.8) 50%, rgba(255,255,255,0) 50%);",
        "blue-transparent":
          "linear-gradient(0deg, rgba(46, 67, 125, 0.8), rgba(46, 67, 125, 0.8));",
        "blue-2-transparent":
          "linear-gradient(0deg, rgba(46, 67, 125, 1), rgba(46, 67, 125, 0.8));",
        "orange-transparent":
          "linear-gradient(0deg, rgba(252, 80, 80, 0.8), rgba(252, 80, 80, 0.8));",
        "white-transparent":
          "linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4));",
        "pink-transparent":
          "linear-gradient(0deg, rgba(252, 80, 80, 0.95), rgba(255, 255, 255, 0.4));",
        "white-transparent-board":
          "linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9));",
        "white-transparent-methodologie":
          "linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8));",
        "green-transparent":
          "linear-gradient(0deg, rgba(65, 234, 212, 0.95), rgba(65, 234, 212, 0.95));",
        "blue-binome":
          "linear-gradient(0deg, rgba(248, 250, 255, 0.8), rgba(248, 250, 255, 0.8));",
      },
      boxShadow: {
        inner: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
    fontFamily: {
      Humanist521BT: "Humanist521BT",
    },
  },
  plugins: [],
}
