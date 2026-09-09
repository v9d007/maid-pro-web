import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#005c55",
          container: "#0f766e",
          fixed: "#9cf2e8",
          "fixed-dim": "#80d5cb",
          dark: "#004842",
        },
        brand: {
          50: "#f0fdf9",
          100: "#ccfbef",
          200: "#9cf2e8",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#0f766e",
          600: "#005c55",
          700: "#004842",
          800: "#003833",
          900: "#002824",
        },
        tertiary: {
          DEFAULT: "#005e3f",
          container: "#007952",
          fixed: "#6ffbbe",
          "fixed-dim": "#4edea3",
        },
        secondary: {
          DEFAULT: "#565e74",
          container: "#dae2fd",
          fixed: "#dae2fd",
          "fixed-dim": "#bec6e0",
        },
        surface: {
          DEFAULT: "#f7f9fb",
          bright: "#f7f9fb",
          dim: "#d8dadc",
          variant: "#e0e3e5",
          "container-lowest": "#ffffff",
          "container-low": "#f2f4f6",
          container: "#eceef0",
          "container-high": "#e6e8ea",
          "container-highest": "#e0e3e5",
        },
        outline: {
          DEFAULT: "#6e7977",
          variant: "#bdc9c6",
        },
        "on-background": "#191c1e",
        "on-surface": "#191c1e",
        "on-surface-variant": "#3e4947",
        "on-primary": "#ffffff",
        "on-primary-container": "#a3faef",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#99ffcd",
        "inverse-surface": "#2d3133",
        "inverse-on-surface": "#eff1f3",
      },
      boxShadow: {
        'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.02)',
        'mid': '0 10px 15px -3px rgba(15, 118, 110, 0.08), 0 4px 6px -4px rgba(15, 118, 110, 0.03)',
        'high': '0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.04)',
        'accent': '0 8px 24px -4px rgba(0, 92, 85, 0.25)',
        'mint-glow': '0 8px 24px -4px rgba(37, 211, 102, 0.3)',
      },
      keyframes: {
        'marquee-left': {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-50%, 0, 0)' },
        },
        'marquee-right': {
          '0%': { transform: 'translate3d(-50%, 0, 0)' },
          '100%': { transform: 'translate3d(0, 0, 0)' },
        },
      },
      animation: {
        'marquee-left': 'marquee-left 36s linear infinite',
        'marquee-right': 'marquee-right 36s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
