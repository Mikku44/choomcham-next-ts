import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react";
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'ssm': '280px',
        'sm':'728px',
        '2xl': '1440px',  // Custom breakpoint for screens larger than 1440px
        '3xl': '1920px',  // Custom breakpoint for screens larger than 1920px
        // Add more custom breakpoints as needed
      },
    },
  },
  darkMode: "class",
  plugins: [require("daisyui"),nextui(),],
}
export default config
