/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"], // Enable dark mode based on the 'dark' class
	content: [
	  "./src/**/*.{js,ts,jsx,tsx}", // Ensure paths are correct for your project structure
	],
	theme: {
	  extend: {
		screens: {
		  // Custom breakpoints for mobile portrait and landscape
		  'mobile-portrait': { raw: '(max-width: 480px) and (orientation: portrait)' },
		  'mobile-landscape': { raw: '(max-height: 480px) and (orientation: landscape)' },
		},
		borderRadius: {
		  lg: 'var(--radius)', // Ensure --radius is defined
		  md: 'calc(var(--radius) - 2px)', // Ensure --radius is defined
		  sm: 'calc(var(--radius) - 4px)', // Ensure --radius is defined
		},
		colors: {
		  background: 'hsl(var(--background))', // Ensure --background is defined
		  foreground: 'hsl(var(--foreground))', // Ensure --foreground is defined
		  card: {
			DEFAULT: 'hsl(var(--card))', // Ensure --card is defined
			foreground: 'hsl(var(--card-foreground))', // Ensure --card-foreground is defined
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))', // Ensure --popover is defined
			foreground: 'hsl(var(--popover-foreground))', // Ensure --popover-foreground is defined
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary))', // Ensure --primary is defined
			foreground: 'hsl(var(--primary-foreground))', // Ensure --primary-foreground is defined
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))', // Ensure --secondary is defined
			foreground: 'hsl(var(--secondary-foreground))', // Ensure --secondary-foreground is defined
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))', // Ensure --muted is defined
			foreground: 'hsl(var(--muted-foreground))', // Ensure --muted-foreground is defined
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))', // Ensure --accent is defined
			foreground: 'hsl(var(--accent-foreground))', // Ensure --accent-foreground is defined
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))', // Ensure --destructive is defined
			foreground: 'hsl(var(--destructive-foreground))', // Ensure --destructive-foreground is defined
		  },
		  border: 'hsl(var(--border))', // Ensure --border is defined
		  input: 'hsl(var(--input))', // Ensure --input is defined
		  ring: 'hsl(var(--ring))', // Ensure --ring is defined
		  chart: {
			'1': 'hsl(var(--chart-1))', // Ensure --chart-1 is defined
			'2': 'hsl(var(--chart-2))', // Ensure --chart-2 is defined
			'3': 'hsl(var(--chart-3))', // Ensure --chart-3 is defined
			'4': 'hsl(var(--chart-4))', // Ensure --chart-4 is defined
			'5': 'hsl(var(--chart-5))', // Ensure --chart-5 is defined
		  }
		}
	  }
	},
	plugins: [require("tailwindcss-animate")], // Tailwind CSS Animate plugin for animations
  };
  