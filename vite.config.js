import { defineConfig, loadEnv } from 'vite'

import vue from '@vitejs/plugin-vue'
import path from 'path'

import ViteCompression from 'vite-plugin-compression'
import simpleHtmlPlugin from 'vite-plugin-simple-html'
import VitePluginPreloadImages from 'vite-plugin-preload-images'
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
            rollupOptions: {
                output: {
                    assetFileNames: (assetInfo) => {
                        assetInfo
                        return 'assets/[ext]/[name].[hash].[ext]'
                    },
                    chunkFileNames: (chunkInfo) => {
                        if (chunkInfo.moduleIds[0].includes('i18n/lang')) {
                            return 'assets/lang/[name].[hash].js'
                        }
                        return 'assets/[name].[hash].js'
                    },
                    manualChunks: (id) => {
                        if (!id.includes('node_modules')) {
                            if (id.includes('lang')) return 'lang'
                            if (id.includes('src/views')) {
                                return id.split('src/views/')[1].split('.')[0].toLowerCase()
                            }
                        }
                        if (id.includes('node_modules')) {
                            const module = String(id.split('node_modules/').pop()).split('/')[0]
                            if (module.includes('vue')) {
                                if (module.includes('vue-i18n')) return 'chunks/vue-i18n'
                                if (module.includes('vue-router')) return 'chunks/vue-router'
                                return 'chunks/vue'
                            }
                            if (module.includes('axios')) return 'chunks/axios'
                            if (module.includes('crypto')) return 'chunks/crypto'
                            if (module.includes('intlify')) return 'chunks/intlify'
                            return 'chunks/vendor'
                        }
                    }
                }
            },
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
                minify: {
                    collapseWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true,
                    removeComments: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true
                },
                inject: {
                    data: {
                        title: '空鸟文化',
                        icon: '',
                        shareTitle: '',
                        shareDescription: '',
                        shareImage: '',
                        shareUrl: '',
                        date: new Date().toLocaleString()
                    }
                }
            }),
            ViteCompression({ threshold: 1024 * 10 }),
            ViteImageOptimizer(),
            // VitePluginPreloadImages({
            //     dirs: 'src/assets/images/project/**/*.{jpg,png,svg}',
            //     attrs: {
            //         rel: 'prefetch'
            //     }
            // }),
            AutoImport({ resolvers: [ElementPlusResolver()] }),
            Components({ resolvers: [ElementPlusResolver()] })
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        },
        server: { port: 2233 }
    }
    return config
})
