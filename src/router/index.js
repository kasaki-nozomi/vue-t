import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Info from '@/views/Info.vue'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/info', name: 'info', component: Info }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    // scrollBehavior(to, from, savedPosition) {
    //     return new Promise((resolve) => {
    //         setTimeout(() => { resolve({ top: 0 }) }, 400)
    //     })
    // }
})

router.beforeEach(async (to, from) => { })
router.afterEach(async (to, from) => { })

export default router