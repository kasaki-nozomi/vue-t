import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Work from '@/views/Work.vue'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/work', name: 'work', component: Work, props: true }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async (to, from) => {})

export default router