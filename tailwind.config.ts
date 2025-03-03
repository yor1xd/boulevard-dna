import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        belleza: "var(--font-belleza)",
        brittany: "var(--font-brittany)",
      },
      animation: {
        "appearfromabove": "appearfromabove-anim 1s ease-out",
        "appearfrombelow": "appearfrombelow-anim 1s ease-out",
        "frombelow": "frombelow-anim 2s ease-out",
        "fromabelowop": "frombelowop-anim 1s ease-out",
        "fromaboveop": "fromaboveop-anim 1s ease-out",
        "fadeOut": "fadeOut 1s ease-out 2s forwards",
        "pingX": "pingX 2s ease-in-out infinite",
      },
      keyframes: {
        "appearfromabove-anim": {
            "0%" : { transform: "translateY(-50%) translateX(-50%)", opacity: "0"},
            "100%" : { transform: "translateY(0) translateX(-50%)", opacity: "1" }

        },
        "appearfrombelow-anim": {
            "0%" : { transform: "translateY(50%) translateX(-50%)", opacity: "0" },
            "100%" : { transform: "translateY(0) translateX(-50%)", opacity: "1" }

        },
        "frombelow-anim": {
            "0%" : { transform: "translateY(100%)"},
            "100%" : { transform: "translateY(0)"}

        },
        "frombelowop-anim": {
            "0%" : { transform: "translateY(-100%)", opacity: "0"},
            "100%" : { transform: "translateY(0)", opacity: "1"}

        },
        "fromaboveop-anim": {
            "0%" : { transform: "translateY(-100%)", opacity: "0"},
            "100%" : { transform: "translateY(0)", opacity: "1"}

        },
        "fadeOut" : {
            "0%" : {opacity: "1"},
            "100%": {opacity: "0"},
        },

        "pingX" : {
            "0%" : {transform: "translateX(0)"},
            "50%": {transform: "translateX(10%)"},
            "100%": {transform: "translateX(0)"},
        },
      }
    },
  },
  plugins: [],
} satisfies Config;
