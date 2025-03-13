/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['selector', '[class*="app-dark"]'],
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    plugins: [require('tailwindcss-primeui')],
    theme: {
        screens: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            '2xl': '1920px'
        },
        colors: {
            'forgot-pass': '#448AFF',
            'bms-primary': '#0D47A1'
        },
        fontFamily: {
            roboto: ['Roboto', 'sans-serif']
        }
    }
};
