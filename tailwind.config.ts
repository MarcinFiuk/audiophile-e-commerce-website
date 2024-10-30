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
        "orange-600": "hsl(22, 65, 57)",
        peach: "hsl(21, 94, 75)",
        charcoal: "hsl(0, 0, 6)",
        "light-gray": "hsl(0, 0, 95)",
        "off-white": "hsl(0, 0, 98)",
      },
      maxWidth: {
        wrapper: "69.375rem",
      },
      padding: {
        "13": "3.25rem",
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
