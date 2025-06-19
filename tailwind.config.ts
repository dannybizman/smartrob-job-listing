import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import tailwindcssAnimate from "tailwindcss-animate";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"@/components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				xxs: "375px",
				xs: "475px",
				sm: "640px",
				md: "768px",
				lg: "992px",
				xl: "1280px",
				"2xl": "1400px",
				xxl: "1500px",
				xxxl: "1850px",
			},
		},
		extend: {
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
			fontSize: {
				xxxs: "0.4rem",
				xxs: "0.6rem",
				xs: "0.8rem",
			},
			fontFamily: {
				sans: ["var(--font-geist-sans)", ...fontFamily.sans],
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					50: "#EFF6FF",
					100: "#DBEAFE",
					200: "#BFDBFE",
					300: "#93C5FD",
					400: "#60A5FA",
					500: "#3B82F6",
					600: "#2563EB",
					700: "#1D4ED8",
					800: "#1E40AF",
					900: "#1E3A8A",
					950: "#172554",
				},
				brand: {
					100: "#E8FBF4",
					200: "#DCEDE7",
					400: "#4EA685",
				},
				error: {
					50: "#FFE5E6",
					100: "#FFCCCC",
					200: "#FF9999",
					300: "#FF6666",
					400: "F53D3D",
					500: "#E51A1A",
					600: "#C20A0A",
					700: "#990000",
					800: "#660000",
					900: "#4C0000",
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
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [forms, tailwindcssAnimate],
} satisfies Config;

export default config;
