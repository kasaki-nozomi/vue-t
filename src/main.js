import { createApp } from 'vue'
import App from '@/App.vue'

import { createPinia } from 'pinia'
// import router from '@/router'

import '@/assets/style/common.scss'
import '@/assets/style/index.scss'

import '@/utils/flexable.js'
import '@/utils/preload.js'

import autofont from '@/components/common/autofont/autofont.js'
import loading from '@/components/common/loading/loading.js'
import toast from '@/components/common/toast/toast.js'

import i18n from '@/i18n/index.js'
import bus from '@/utils/bus.js'

// import { ElInfiniteScroll } from 'element-plus'

const app = createApp(App)
const pinia = createPinia()

// app.use(router)
app.use(pinia)

app.use(autofont)
app.use(loading)
app.use(toast)

app.use(i18n)
app.use(bus)

// app.use(ElInfiniteScroll)

app.mount('#app')
