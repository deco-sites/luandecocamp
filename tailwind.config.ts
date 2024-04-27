import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      animation: {
        sliding: "sliding 30s linear infinite",
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      colors: {
        dark: {
          3: "#070708",
          6: "#0E0E10",
          8: "#131316",
          12: "#1C1C21",
          15: "#232329",
          20: "#2F2F37",
          25: "#3B3B45",
          30: "#474752",
        },
        grey: {
          40: "#62646C",
          50: "#797C86",
          70: "#AFB0B6",
          80: "#CACACE",
          90: "#E4E4E6",
        },
        purple: {
          55: "#4A2CED",
          90: "#D6D0FB",
        },
      },
    },
  },
};
