module.exports = {
    content: ['./src/**/*.{html,js,jsx,mdx}'],
    theme: {
        fontFamily: {
            ubuntu: ['Nunito', 'sans-serif'],
        },
        colors: {
            primary: {
                DEFAULT: '#8FBCBB',
                soft: '#E5F0EF',
            },
            gray: {
                bold: '#2E3440',
                DEFAULT: '#4C566A',
                soft: '#D8DEE9',
            },
            red: '#D26C68',
            blue: '#81A1C1',
            white: '#FFFFFF',
            shadow: '#404C566A',
        },
        extend: {
            boxShadow: {
                DEFAULT: '0px 8px 24px #404C566A',
            },
        },
    },
    plugins: [
        require('./src/theme/base'),
        // require('./src/theme/index.components'),
    ],
}
