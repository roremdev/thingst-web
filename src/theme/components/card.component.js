const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        '.card': {
            backgroundColor: theme('colors.white'),
            borderColor: theme('colors.gray.soft'),
            borderRadius: theme('borderRadius.lg'),
            borderWidth: theme('borderWidth.DEFAULT'),
            display: 'grid',
            justifyContent: 'center',
            maxHeight: '650px',
            maxWidth: '408px',
            padding: theme('spacing.3'),
            rowGap: theme('spacing.6'),
            '.card-image': {
                height: '300px',
                maxWidth: '384px',
                width: '100%',
                '& > div': {
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    borderRadius: theme('borderRadius.lg'),
                    height: '100%',
                    width: '100%',
                },
            },
            '.card-content': {
                display: 'grid',
                rowGap: theme('spacing.3'),
                '.card-content-headline': {
                    display: 'grid',
                    rowGap: '6px',
                },
            },
        },
    })
})
