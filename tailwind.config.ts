import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange-dark": "hsl(22, 65, 57)",
        peach: "hsl(21, 94, 75)",
        charcoal: "hsl(0, 0, 6)",
        "light-gray": "hsl(0, 0, 95)",
        "off-white": "hsl(0, 0, 98)",
      },
      width: {
        "25": "6.25rem",
      },
      maxWidth: {
        wrapper: "69.375rem",
      },
      gap: {
        "8.5": "2.125rem",
      },
      padding: {
        "11.5": "2.875rem",
        "13": "3.25rem",
        "15": "3.75rem",
        "18.75": "4.6875rem",
      },
      fontSize: {
        "custom-s": ["0.9375rem", "1.67"],
        "custom-xs": [
          "0.8125rem",
          {
            lineHeight: "1.93",
            fontWeight: "700",
          },
        ],
      },
      letterSpacing: { customWidest: "0.125rem" },
    },
  },
  plugins: [],
};
export default config;
