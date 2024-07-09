<template>
    <div class="home">
        <Header></Header>
        <Screen></Screen>
        <Company></Company>
        <Cooperate></Cooperate>
        <Footer></Footer>
    </div>
</template>
<script setup>
import Header from '@/components/αHeader.vue'
import Screen from '@/components/βScreen.vue'
import Company from '@/components/εCompany.vue'
import Cooperate from '@/components/ζCooperate.vue'
import Footer from '@/components/ηFooter.vue'

import axios from 'axios'
import { getCurrentInstance } from 'vue'
import { useI18n } from 'vue-i18n'

import { getSome, postSome } from '@/http/api'
import { useStore, useUserStore } from '@/store'

const { proxy } = getCurrentInstance()
const { t } = useI18n()

const store = useStore()
const userStore = useUserStore()

const CancelToken = axios.CancelToken
let source = CancelToken.source()

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
    // do something
    proxy.loading.hide()
})

async function login(params) { }

async function logout() { }
</script>

<style lang="scss" scoped>
.home {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background: black;
    overflow-y: auto;
    @include flex-center(center, normal, column);
    // @include background($image: 'background.jpg', $position: top center, $size: cover);

}
</style>
