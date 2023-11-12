import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'my-bg': '#1A1A1A',
        'header-bg': '#0D0D0D',
        'my-blue': '#4EA8DE',
        'my-blueDark': '#1E6F9F',
        'my-purpleDark': '#5E60CE',
        'my-input': '#262626',
      },
    },
  },
  screens: {
    sm: '640px',
    // @media (min-width: 640px) { ... }
    md: '768px',
    // @media (min-width: 768px) { ... }
    lg: '1024px',
    // @media (min-width: 1024px) { ... }
    xl: '1280px',
    // @media (min-width: 1280px) { ... }
    '2xl': '1536px',
    // @media (min-width: 1536px) { ... }
  },
  plugins: [],
}
export default config
