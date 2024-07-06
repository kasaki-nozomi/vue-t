import { defineStore } from 'pinia'

import { useLoadingStore } from '@/store/module/loading'
import { useUserStore } from '@/store/module/user'

const useStore = defineStore('main', {
    state: () => ({ }),
    getters: { },
    actions: { }
})

export { 
    useStore,
    useLoadingStore,
    useUserStore
}
