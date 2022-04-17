const { resolve } = require('path')

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-vite',
    },
    async viteFinal(config) {
        config.resolve.alias = {
            '@src': resolve(__dirname, '../src'),
            '@assets': resolve(__dirname, '../src/assets'),
            '@baseComponents': resolve(__dirname, '../src/components/base'),
            '@containerComponents': resolve(
                __dirname,
                '../src/components/container'
            ),
            '@controllers': resolve(__dirname, '../src/controllers'),
            '@layouts': resolve(__dirname, '../src/layouts'),
            '@services': resolve(__dirname, '../src/services'),
            '@server': resolve(__dirname, '../src/server'),
            '@views': resolve(__dirname, '../src/views'),
        }
        return config
    },
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) =>
                prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
        },
    },
}
