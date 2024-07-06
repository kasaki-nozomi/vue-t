import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', {
    state: () => ({
        loadingState: 0
    }),
    getters: {
        loading: (state) => Boolean(state.loadingState)
    },
    actions: {
        loadingShow() { this.loadingState++ },
        loadingHide() { this.loadingState > 0 && this.loadingState-- }
    }
})