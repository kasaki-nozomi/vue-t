<template>
    <div class="home-container">
        <div id="home" class="home">
            <Screen></Screen>
            <Capacity></Capacity>
            <Project></Project>
            <div class="home-box">
                <div class="home-box-back" :style="style"></div>
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
import { useStore } from '@/store'

const { proxy } = getCurrentInstance()
const route = useRoute()
const router = useRouter()
const store = useStore()

const CancelToken = axios.CancelToken
let source = CancelToken.source()

proxy.bus.on('login', async (params) => {
    proxy.loading.show()
    await login(params)
    proxy.loading.hide()
})
async function login(params) { console.log(params) }

let elscroll = null
let company = null
let honor = null
let cooperate = null

const style = ref({})

onMounted(() => {
    elscroll = document.getElementsByClassName('el-scrollbar__wrap')[0]
    company = document.getElementById('company')
    honor = document.getElementById('honor')
    cooperate = document.getElementById('cooperate')

    elscroll.addEventListener('scroll', () => {
        const companyY = getElementViewTop(company)
        const honorY = getElementViewTop(honor)
        const cooperateY = getElementViewTop(cooperate)
        if (companyY < window.innerHeight) style.value = { top: `${(-companyY + companyY / (store.phone ? 12 : 6)) + (store.phone ? 72 : (store.pad ? 86 : 100))}px` }
        if (companyY < window.innerHeight / 3) proxy.bus.emit('company-show')
        if (honorY < window.innerHeight / 3) proxy.bus.emit('honor-show')
        if (cooperateY < window.innerHeight / 3) proxy.bus.emit('cooperate-show')
    }, true)

    const position = route.query?.position
    if (position) {
        elscroll.scrollTo({ top: document.getElementById(position).offsetTop, behavior: 'smooth' })
        window.history.replaceState(null, null, window.location.href.split('?')[0])
    }
})

function getElementViewTop(element) {
    let actualTop = element.offsetTop
    let current = element.offsetParent
    while (current !== null) {
        actualTop += current.offsetTop
        current = current.offsetParent
    }
    let elementScrollTop = elscroll.scrollTop
    // if (document.compatMode == 'BackCompat') {
    //     elementScrollTop = document.body.scrollTop
    // } else {
    //     elementScrollTop = document.documentElement.scrollTop
    // }
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
    @include flex-center(center, normal, column);

    .home-box {
        position: relative;
        width: 100%;
        // background-image: url('@/assets/images/back-mask-two.png');
        // background-size: 100% auto;
        // background-position-x: center;
        // background-repeat: no-repeat;
        // background-attachment: fixed;
        overflow: hidden;
        @include flex-center(center, normal, column);
        
        .home-box-back {
            position: absolute;
            top: 0;
            width: 1920px;
            height: 1538px;
            background-image: url('@/assets/images/back-mask-two.png');
            background-size: 100% auto;
            // transition: all 0.1s;
        }
    }
}

@include setPhoneContent {
    .home {
        .home-box {
            // background-image: url('@/assets/images/back-mask-two-m.png');
            
            .home-box-back {
                width: 1920px;
                height: 1538px;
                background-image: url('@/assets/images/back-mask-two.png');
            }
        }
    }
}
</style>
