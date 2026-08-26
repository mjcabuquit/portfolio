import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#10131A",
        "ink-raised": "#171B25",
        "ink-line": "#262C3A",
        paper: "#ECEEF3",
        text: "#E7E8EC",
        muted: "#8A8F9C",
        stable: "#5FE1A0",
        contract: "#F2A93B",
        signal: "#8C7CF0",
      },
      fontFamily: {
        display: ["'Sora'", "sans-serif"],
        body: ["'IBM Plex Sans'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      borderRadius: {
        sm: "2px",
      },
    },
  },
  plugins: [],
} satisfies Config;
