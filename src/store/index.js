import { defineStore } from 'pinia'

import { useLoadingStore } from '@/store/module/loading'
import { useUserStore } from '@/store/module/user'

const useStore = defineStore('main', {
    state: () => ({
        phone: window.innerWidth <= 600,
        pad: window.innerWidth <= 1050,
        pc: window.innerWidth > 600
    }),
    getters: { },
    actions: {
        setResize() {
            this.phone = window.innerWidth <= 600
            this.pad = window.innerWidth <= 1050
            this.pc = window.innerWidth > 600
        }
    }
})

export { 
    useStore,
    useLoadingStore,
    useUserStore
}
