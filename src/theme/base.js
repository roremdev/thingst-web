const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addBase, theme }) {
    addBase({
        b: {
            fontWeight: theme('fontWeight.bold'),
        },
        body: {
            margin: '0',
            fontFamily: theme('fontFamily.nunito'),
            color: theme('colors.gray.bold'),
        },
        button: {
            borderRadius: theme('borderRadius.md'),
            fontSize: theme('fontSize.xl'),
            fontWeight: theme('fontWeight.bold'),
            padding: `${theme('spacing.[3.5]')} ${theme('spacing.3')}`,
            width: '187px',
        },
        form: {
            display: 'grid',
            rowGap: '60px',
            h3: {
                color: theme('colors.gray.DEFAULT'),
                fontSize: theme('fontSize.5xl'),
                fontWeight: theme('fontWeight.bold'),
            },
            div: {
                display: 'grid',
                rowGap: theme('spacing.3'),
            },
            '.form-submit ': {
                justifyContent: 'center',
                textAlign: 'center',
            },
        },
        input: {
            fontFamily: theme('fontFamily.nunito'),
            width: '100%',
            '&:focus': {
                outline: 'none',
            },
        },
        '.main': {
            alignItems: 'center',
            backgroundColor: theme('colors.white'),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: '0 24px',
        },
        '.logo, .favicon': {
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
        },
        '.logo': {
            backgroundImage: 'url("./assets/logo.svg")',
            height: '72px',
            width: '140px',
        },
        '.favicon': {
            backgroundImage: 'url("./assets/favicon.svg")',
            height: '75px',
            width: '75px',
        },
        [`@media (min-width: ${theme('screens.md')})`]: {
            '.main': {
                padding: '0 184px',
            },
        },
    })
})
