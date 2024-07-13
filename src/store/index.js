import { defineStore } from 'pinia'

import { useLoadingStore } from '@/store/module/loading'
import { useUserStore } from '@/store/module/user'

const useStore = defineStore('main', {
    state: () => ({
        phone: window.innerWidth <= 750,
        pad: window.innerWidth <= 1050,
        pc: window.innerWidth > 750
    }),
    getters: { },
    actions: {
        setResize() {
            this.phone = window.innerWidth <= 750
            this.pad = window.innerWidth <= 1050
            this.pc = window.innerWidth > 750
        }
    }
})

export { 
    useStore,
    useLoadingStore,
    useUserStore
}
