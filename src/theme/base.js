const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addBase, theme }) {
    addBase({
        body: {
            margin: '0',
            fontFamily: theme('fontFamily.nunito'),
        },
        '.main': {
            alignItems: 'center',
            backgroundColor: `${theme('colors.white')}`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: '100vh',
        },
        '.logo, .favicon': {
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto',
        },
        '.logo': {
            backgroundImage: 'url("./assets/logo.svg")',
            height: '180px',
            width: '300px',
        },
        '.favicon': {
            backgroundImage: 'url("./assets/favicon.svg")',
            height: '75px',
            width: '75px',
        },
    })
})
