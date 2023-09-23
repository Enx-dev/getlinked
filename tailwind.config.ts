/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "8rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
        xxl: "1440px",
      },
    },
    screens: {
      screen: { max: "1550px" },
      laptop: { max: "1400px" },

      tablet: { max: "1025px" },
      sm_tablet: { max: "900px" },
      mobile: { max: "560px" },
      sm_mobile: { max: "330px" },
    },
    extend: {
      backgroundImage: {
        "main-gradient": "linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)",
      },
      colors: {
        border: "var(--border)",
        input: "hsl(var(--input))",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        footer: "#100B20",
        "main-purple": "#903aff",
        "main-accent": "#d434fe",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontSize: {
        heading: ["clamp(2.1rem, 5vw, 5rem)", { lineHeight: "0.8em" }],
        subheading: ["clamp(1rem, 6vw, 1.5rem)", { lineHeight: "1.2em" }],
        body: ["clamp(0.7rem, 4vw, 0.9rem)", { lineHeight: "1.2em" }],
        label: ["clamp(1rem, 3vw, 2.25rem)", { lineHeight: "1.5em" }],
        cardLabel: ["clamp(0.87rem, 4vw, 2rem)", { lineHeight: "1.5em" }],
        cardHeading: ["clamp(1rem, 4vw, 2.25rem)", { lineHeight: "1.5em" }],
      },
    },
  },
  plugins: [require("tailwindcss-animatecss")],
};
export default config;
