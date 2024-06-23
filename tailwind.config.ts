import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1500px",
      },
    },
    extend: {
      screens: {
        xxl: "1500px",
        s:"200px",
        sm: "575px",
        xm:"700px",
        xs: "1000px",
        lg: "1111px",
        xl: "1280px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        silverSetting: "hsl(var(--silverSetting))",
        bigStone: "hsl(var(--bigStone))",
        mercury: "hsl(var(--mercury))",
        squant: "hsl(var(--squant))",
        blackout: "hsl(var(--blackout))",
        whiteSolid: "hsl(var(--whiteSolid))",
        goshawkGrey: "hsl(var(--goshawkGrey))",
        carbon: "hsl(var(--carbon))",
        basaltGrey: "hsl(var(--basaltGrey))",
        superSilver: "hsl(var(--superSilver))",
        sapphireBlue: "hsl(var(--sapphireBlue))",
        rainyGrey: "hsl(var(--rainyGrey))",
        steam: "hsl(var(--steam))",
        darksea: "hsl(var(--darksea))",
        infinity: "hsl(var(--infinity))",
        mauimist: "hsl(var(--mauimist))",
        property: "hsl(var(--property))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
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
          DEFAULT: "hsl(var(--accent))",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        searchBtn: "0px 30px 30px 0px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
