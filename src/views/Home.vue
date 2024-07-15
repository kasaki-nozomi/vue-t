<template>
    <div class="home-container">
        <div id="home" class="home">
            <Screen></Screen>
            <Capacity></Capacity>
            <Project></Project>
            <div class="home-box" :style="style">
                <Company></Company>
                <Honor></Honor>
                <Cooperate></Cooperate>
            </div>
        </div>
    </div>
</template>
<script setup>
import Screen from '@/components/βScreen.vue'
import Capacity from '@/components/γCapacity.vue'
import Project from '@/components/δProject.vue'
import Company from '@/components/εCompany.vue'
import Honor from '@/components/ζHonor.vue'
import Cooperate from '@/components/ηCooperate.vue'

import axios from 'axios'
import { getCurrentInstance, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const { proxy } = getCurrentInstance()
const route = useRoute()
const router = useRouter()

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

    const position = route.query?.position
    if (position) {
        document.documentElement.scrollTo({ top: document.getElementById(position).offsetTop, behavior: 'smooth' })
        window.history.replaceState(null, null, window.location.href.split('?')[0])
    }
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
.home-container {
    @include flex-center(center, normal, column);
}

.home {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background: black;
    overflow-y: auto;
    @include flex-center(center, normal, column);

    .home-box {
        width: 100%;
        background-image: url('@/assets/images/back-mask-two.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        @include flex-center(center, normal, column);
    }
}

@include setPhoneContent {
    .home {
        .home-box {
            background-image: url('@/assets/images/back-mask-two-m.png');
        }
    }
}
</style>
