import { defineStore } from 'pinia'

import { useLoadingStore } from '@/store/module/loading'
import { useUserStore } from '@/store/module/user'

import { getUAOS } from '@/utils/utils'

const useStore = defineStore('main', {
    state: () => ({
        os: getUAOS(),

        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.innerWidth / window.innerHeight,

        phone: window.innerWidth <= 600,
        pad: window.innerWidth <= 1050,
        pc: window.innerWidth > 600,

        project: null
    }),
    getters: { },
    actions: {
        setResize() {
            this.width = window.innerWidth
            this.height = window.innerHeight
            this.ratio = window.innerWidth / window.innerHeight

            this.phone = window.innerWidth <= 600
            this.pad = window.innerWidth <= 1050
            this.pc = window.innerWidth > 600
        },
        setProject(project) {
            this.project = project
        }
    }
})

export { 
    useStore,
    useLoadingStore,
    useUserStore
}
