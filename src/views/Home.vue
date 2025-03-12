<template>
    <div class="home-wrapper">
        <div id="home" class="home">
            <Screen></Screen>
            <Capacity></Capacity>
            <Project></Project>
            <div id="home-box" class="home-box" :style="style">
                <div class="home-box-mask"></div>
                <Company></Company>
                <Honor></Honor>
                <Cooperate></Cooperate>
            </div>
        </div>
    </div>
</template>
<script setup>
import Screen from '@/components/home/αScreen.vue'
import Capacity from '@/components/home/βCapacity.vue'
import Project from '@/components/home/γProject.vue'
import Company from '@/components/home/δCompany.vue'
import Honor from '@/components/home/εHonor.vue'
import Cooperate from '@/components/home/ζCooperate.vue'

import { getCurrentInstance, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '@/store'

const { proxy } = getCurrentInstance()
const route = useRoute()
const store = useStore()

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
        if (companyY < window.innerHeight) style.value = { backgroundPositionY: `${(companyY + (store.phone ? 72 : (store.pad ? 86 : 100))) / (store.phone ? 4 : 2)}px` }
        if (companyY < window.innerHeight / 3) proxy.bus.emit('company-show')
        if (honorY < window.innerHeight / 3) proxy.bus.emit('honor-show')
        if (cooperateY < window.innerHeight / 3) proxy.bus.emit('cooperate-show')
    })

    const position = route.query?.position
    if (position === 'company') {
        window.history.replaceState(null, null, window.location.href.split('?')[0])
        elscroll.scrollTo({ top: document.getElementById('home-box').offsetTop, behavior: 'smooth' })
    } else {
        elscroll.scrollTop = 0
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
    return actualTop - elementScrollTop
}
</script>

<style lang="scss" scoped>
.home-wrapper {
    @include flex-center(center, normal, column);

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
            background-image: url('@/assets/images/home/mask.png');
            background-size: 100% auto;
            background-position-x: center;
            background-repeat: no-repeat;
            background-attachment: fixed;
            overflow: hidden;
            @include flex-center(center, normal, column);

            .home-box-mask {
                position: absolute;
                top: 0;
                width: 100%;
                height: 1000px;
                background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
            }
        }
    }
}



@include setPhoneContent {
    .home-wrapper {
        .home {
            .home-box {
                background-image: url('@/assets/images/home/mask-m.png');

                .home-box-mask {
                    height: 2000px;
                }
            }
        }
    }
}
</style>
