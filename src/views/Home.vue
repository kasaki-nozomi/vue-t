<template>
    <div class="home">
        <Header></Header>
        <Slogan></Slogan>
        <Login></Login>
        <Footer></Footer>
    </div>
</template>
<script setup>
import Header from '@/components/αHeader.vue'
import Slogan from '@/components/βSlogan.vue'
import Login from '@/components/γLogin.vue'
import Footer from '@/components/δFooter.vue'

import axios from 'axios'
import { getCurrentInstance } from 'vue'
import { useI18n } from 'vue-i18n'
import { GameInfo } from '@/http/request'
import { getUserInfo, getEventDo } from '@/http/api'
import { useStore, useUserStore } from '@/store'
import { logPageLoadDone, logLoginSuccess } from '@/utils/bilog'

const { proxy } = getCurrentInstance()
const { t } = useI18n()

const store = useStore()
const userStore = useUserStore()

const game = import.meta.env.VITE_APP_GAME

const CancelToken = axios.CancelToken
let source = CancelToken.source()

let initIntervel = null

logPageLoadDone()

proxy.bus.on('login', async (params) => {
    proxy.loading.show()
    await login(params)
    proxy.loading.hide()
})
proxy.bus.on('logout', async () => {
    logout()
})
proxy.bus.on('login-success', async () => {
    proxy.loading.show()
    await initBefore()
    await initThis(source.token)
    proxy.loading.hide()
})
proxy.bus.on('share-game', async () => {
    proxy.loading.show()
    await shareGame()
    proxy.loading.hide()
})

async function login(params) {
    try {
        const response = await getUserInfo(params)
        if (response.code === 0) {
            userStore.setLoginStatus(true)
            userStore.setUserInfo({ ...response.data })
            localStorage.setItem(`${game.toLowerCase()}-openid`, response.data.openid)
            proxy.bus.emit('login-success')
            if (params.uid) logLoginSuccess()
        } else {
            if (response.code === 1002) proxy.toast(t('login_007'))
            else proxy.toast(t('login_008'))
        }
    } catch (error) {
        console.error(error)
        proxy.toast(t('login_008'))
    }
}

async function logout(removeOpenID = true) {
    if (removeOpenID) localStorage.removeItem(`${game.toLowerCase()}-openid`)
    if (initIntervel) clearInterval(initIntervel)
    userStore.setLoginStatus(false)
}

async function initBefore() {
    const response = await getEventDo({ p2: GameInfo.p2.init })
    return response.code
}

async function initThis(cancelToken = null) {
    try {
        const response = await getEventDo({ p2: GameInfo.p2.init }, {}, cancelToken)
        if (response.code === 0) {
            // store.setActivityEnd(Date.now() / 1000 >= 0)
        } else {
            if (response.code !== -1057) proxy.toast(t('error_003'))
        }
        return response.code
    } catch (error) {
        if (axios.isCancel(error)) {
            console.log('axios-cancel init')
        }
    }
}

async function shareGame() {
    const response = await getBridgeDo({ p2: GameInfo.p2.share })
    if (response.code === 0) proxy.bus.emit('share-success')
    else proxy.toast(t('share_003'))
    return response.code
}
</script>

<style lang="scss" scoped>
.home {
    position: relative;
    width: 750px;
    height: 100%;
    min-height: 100vh;
    @include background($image: 'background.jpg', $position: top center, $size: cover);
}
</style>
