import { defineStore } from 'pinia'

import { useLoadingStore } from '@/store/module/loading'
import { useUserStore } from '@/store/module/user'

const useStore = defineStore('main', {
    state: () => ({
        activityEnd: false,
        utmCampaign: '',
    }),
    getters: {},
    actions: {
        setActivityEnd(status) { this.activityEnd = status }
    }
})

export { 
    useStore,
    useLoadingStore,
    useUserStore
}
