import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        login: false,
        userInfo: { },
    }),
    getters: {},
    actions: {
        setLoginStatus(status) { this.login = status },
        setUserInfo(status) { this.userInfo = status }
    }
})