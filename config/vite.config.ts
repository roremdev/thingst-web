import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    root: './src',
    build: {
        outDir: resolve(__dirname, '../dist'),
    },
    resolve: {
        alias: {
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
        },
    },
})
