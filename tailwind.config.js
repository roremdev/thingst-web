module.exports = {
    content: ['./src/**/*.{html,ts,tsx,mdx}'],
    theme: {
        fontFamily: {
            nunito: ['Nunito', 'sans-serif'],
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
                inside: 'inset 0px 0px 0px 2px #4C566A',
            },
            backgroundImage: {
                car: "url('./assets/icons/car.svg')",
                cross: "url('./assets/icons/cross.svg')",
                dollar: "url('./assets/icons/dollar.svg')",
                filter: "url('./assets/icons/filter.svg')",
                search: "url('./assets/icons/search.svg')",
            },
        },
    },
    plugins: [
        require('./src/theme/base'),
        require('./src/theme/components/index.component'),
        require('./src/theme/components/card.component'),
        require('./src/theme/util'),
    ],
}
