import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

import progress from 'vite-plugin-progress'
import ViteCompression from 'vite-plugin-compression'
import simpleHtmlPlugin from 'vite-plugin-simple-html'
import { qrcode } from 'vite-plugin-qrcode'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig(({ _, mode }) => {
    const env = loadEnv(mode, process.cwd(), '')
    const game = env.GAME
    const project = env.VITE_PROJECT
    const production = env.VITE_NODE_ENV === 'production'

    const config = {
        base: production ? `${env.PUBLIC_PATH}${game.toLowerCase()}/${project}/` : env.PUBLIC_PATH,
        build: {
            assetsDir: 'assets',
            assetsInlineLimit: 1024 * 5,
            cssCodeSplit: true,
            minify: 'terser',
            outDir: `${env.OUT_DIR}/${game.toLowerCase()}/${project}`,
            rollupOptions: { output: { assetFileNames: 'assets/[ext]/[name].[hash].[ext]' } },
            sourcemap: !production,
            terserOptions: { compress: { drop_console: production } }
        },
        css: {
            extract: true,
            preprocessorOptions: {
                scss: { additionalData: `@import '@/assets/style/mixin.scss';` }
            }
        },
        plugins: [
            vue(),
            qrcode(),
            // progress(),
            simpleHtmlPlugin({
                minify: true,
                inject: {
                    data: {
                        title: env[`VITE_NAME_${game}`],
                        icon: `${env.COMMON_PATH}/icon/${game.toLowerCase()}.png`,
                        shareTitle: env[`VITE_TITLE_${game}`],
                        shareDescription: '',
                        shareImage: `${env.COMMON_PATH}/share/${game.toLowerCase()}.jpg`,
                        shareUrl: `${env[`VITE_OFFICIAL_URL_${game}`]}/event/${project}${!production ? '/index.html' : ''}`,
                        date: new Date().toLocaleString()
                    }
                }
            }),
            ViteCompression({ gzip: true, ignore: ['.png', '.jpg'], threshold: 1024 * 10 }),
            ViteImageOptimizer(),
            AutoImport({ resolvers: [ElementPlusResolver()] }),
            Components({ resolvers: [ElementPlusResolver()] })
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        }
    }
    process.env.VITE_APP_GAME = game
    return config
})
