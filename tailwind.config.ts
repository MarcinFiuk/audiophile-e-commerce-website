import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
              'orange-600': 'hsl(22, 65, 57)',
              'peach': 'hsl(21, 94, 75)',
              'charcoal': 'hsl(0, 0, 6)',
              'light-gray': 'hsl(0, 0, 95)',
              'off-white': 'hsl(0, 0, 98)',
            },
            maxWidth: {
                wrapper: '69.375rem',
            },
        },
    },
    plugins: [],
};
export default config;
