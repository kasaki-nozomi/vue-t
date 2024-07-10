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
    const project = env.VITE_PROJECT
    const production = env.VITE_NODE_ENV === 'production'

    const config = {
        base: env.PUBLIC_PATH,
        build: {
            assetsDir: 'assets',
            assetsInlineLimit: 1024 * 5,
            cssCodeSplit: true,
            minify: 'terser',
            outDir: env.OUT_DIR,
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
            // qrcode(),
            // progress(),
            simpleHtmlPlugin({
                minify: true,
                inject: {
                    data: {
                        title: ``,
                        icon: ``,
                        shareTitle: ``,
                        shareDescription: '',
                        shareImage: ``,
                        shareUrl: ``,
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
    return config
})
