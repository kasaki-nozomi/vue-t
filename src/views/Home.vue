<template>
    <Header></Header>
    <div id="home" class="home">
        <Screen></Screen>
        <Capacity></Capacity>
        <Project></Project>
        <div class="home-box" :style="style">
            <Company></Company>
            <Honor></Honor>
            <Cooperate></Cooperate>
        </div>
        <Footer></Footer>
    </div>
</template>
<script setup>
import Header from '@/components/αHeader.vue'
import Screen from '@/components/βScreen.vue'
import Capacity from '@/components/γCapacity.vue'
import Project from '@/components/δProject.vue'
import Company from '@/components/εCompany.vue'
import Honor from '@/components/ζHonor.vue'
import Cooperate from '@/components/ηCooperate.vue'
import Footer from '@/components/θFooter.vue'

import axios from 'axios'
import { getCurrentInstance, ref, onMounted } from 'vue'
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
async function login(params) { }

let company = null
let honor = null
let cooperate = null

onMounted(() => {
    company = document.getElementById('company')
    honor = document.getElementById('honor')
    cooperate = document.getElementById('cooperate')
})

const style = ref({})
window.onscroll = () => {
    const companyY = getElementViewTop(company)
    const honorY = getElementViewTop(honor)
    const cooperateY = getElementViewTop(cooperate)
    if (companyY < window.innerHeight) style.value = { backgroundPositionY: `${companyY / 2}px` }
    if (companyY < window.innerHeight / 2.5) proxy.bus.emit('company-show')
    if (honorY < window.innerHeight / 2.5) proxy.bus.emit('honor-show')
    if (cooperateY < window.innerHeight / 2.5) proxy.bus.emit('cooperate-show')
}

function getElementViewTop(element) {
    let actualTop = element.offsetTop
    let current = element.offsetParent
    while (current !== null) {
        actualTop += current.offsetTop
        current = current.offsetParent
    }
    let elementScrollTop
    if (document.compatMode == 'BackCompat') {
        elementScrollTop = document.body.scrollTop
    } else {
        elementScrollTop = document.documentElement.scrollTop
    }
    return actualTop - elementScrollTop
}
</script>

<style lang="scss" scoped>
.home {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    // max-height: 100vh;
    background: black;
    overflow-y: auto;
    @include flex-center(center, normal, column);

    .home-box {
        width: 100%;
        background-image: url('@/assets/images/back-mask-two.png');
        background-size: cover;
        background-repeat: no-repeat;
        // background-position: top center;
        background-attachment: fixed;
        @include flex-center(center, normal, column);
    }
}
</style>
