const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        '.aside': {
            backgroundColor: theme('colors.white'),
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            padding: `${theme('spacing.12')} ${theme('spacing.6')}`,
            position: 'fixed',
            right: 0,
            top: 0,
            transition:
                'transform 500ms ease-in-out, visibility 500ms ease-in-out',
            width: '100%',
            zIndex: 20,
            '& > .icon': {
                alignSelf: 'end',
            },
        },
        '.icon': {
            '& > div': {
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
            },
        },
        '.line': {
            borderRadius: theme('borderRadius.full'),
            backgroundColor: theme('colors.gray.bold'),
            height: theme('spacing.[0.5]'),
            marginTop: theme('spacing.[1.5]'),
        },
        '.shadow': {
            backgroundColor: theme('colors.shadow'),
            display: 'block',
            inset: 0,
            position: 'absolute',
            transition:
                'opacity 500ms ease-in-out, visibility 500ms ease-in-out',
            zIndex: 10,
        },
        [`@media (min-width: ${theme('screens.md')})`]: {
            '.aside': {
                width: '464px',
            },
        },
    })
})
