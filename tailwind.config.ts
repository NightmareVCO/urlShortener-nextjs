import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      flex: {
        "2": "2 2 0%",
        "3": "3 3 0%",
        "4": "4 4 0%",
        "5": "5 5 0%",
      },
      colors: {
        "main-black": "#0B101B",
        "main-blue": "#144EE3",
        "main-blue-active": "#144EFF",
        "main-gray": "#181E29",
        "main-gray-bright": "#2d394d",
        "main-pink": "#EB568E",
        "main-dark-white": "#FFFFFF80",
        "main-gray-border": "#C9CED650",
        "background-gray": "#181E29",
        "background-gray-translucent": "#181E2999",
        "table-gray": "rgba(24, 30, 41, 0.3)",
      },
      animation: {
        "text-gradient": "text-gradient 3s linear infinite",
        "background-shine": "background-shine 4s linear infinite",
      },
      keyframes: {
        "text-gradient": {
          to: {
            backgroundPosition: "200% center",
          },
        },
        "background-shine": {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
