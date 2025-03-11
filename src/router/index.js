import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Info from '@/views/Info.vue'
import IP from '@/views/IP.vue'
import Business from '@/views/Business.vue'
import Game from '@/views/Game.vue'
import Error from '@/views/404.vue'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/info', name: 'info', component: Info },
    { path: '/ip', name: 'ip', component: IP },
    { path: '/business', name: 'business', component: Business },
    { path: '/game', name: 'game', component: Game },
    { path: '/:pathMatch(.*)*', name: 'error', component: Error }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {}
})

router.beforeEach(async (to, from) => {})

router.afterEach(async (to, from) => {
    setTimeout(() => {
        const scrollWrap = document.getElementsByClassName('el-scrollbar__wrap')[0]
        if (scrollWrap) scrollWrap.scrollTop = 0
    }, 400)
})

export default router
