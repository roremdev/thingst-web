const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addUtilities }) {
    addUtilities({
        '.aside_show': {
            transform: 'translateX(0)',
            visibility: 'visible',
        },
        '.aside_hidden': {
            transform: 'translateX(100%)',
            visibility: 'hidden',
        },
        '.shadow_show': {
            opacity: 1,
        },
        '.shadow_hidden': {
            opacity: 0,
            visibility: 'hidden',
        },
    })
})
