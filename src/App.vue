<template>
    <div id="root" :class="locale">
        <router-view  v-slot="{ Component, route }" >
            <Transition :name="route.name" mode="out-in">
                <component :is="Component" :key="route.fullPath"></component>
            </Transition>
        </router-view>
        <!-- <Home></Home> -->
        <!-- type: center-move | center-scale | bottom -->
        <Popup type="center-move"></Popup>
        <Loading></Loading>
    </div>
</template>

<script setup>
// import Home from '@/views/Home.vue'
import Popup from '@/components/popup/Popup.vue'

import { getCurrentInstance, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from '@/store'
import { getUrlParam } from '@/utils/utils'

const store = useStore()

const { proxy } = getCurrentInstance()

const { locale } = useI18n()
if (getUrlParam('lang') || getUrlParam('l')) {
    locale.value = getUrlParam('lang') || getUrlParam('l')
    localStorage.setItem(`lang`, getUrlParam('lang') || getUrlParam('l'))
    const url = new URL(location.href)
    url.searchParams.delete('lang')
    url.searchParams.delete('l')
    history.pushState(null, null, url.href)
} else if (localStorage.getItem(`lang`)) {
    locale.value = localStorage.getItem(`lang`)
} else {
    const broswerLang = (navigator.language || navigator.userLanguage).toLowerCase()
    locale.value = broswerLang === 'zh-tw' ? 'zh-tw' : broswerLang.split('-')[0]
}

document.title = `KongNiao`
</script>

<style lang="scss">
body {
    background: black;
}

#root {
    font-family: Chillroundf, PingFang SC;
    @include flex-center(center, normal, column);

    &.ru {
        font-family: PingFang SC;
    }
}

.home-enter-active,
.home-leave-active,
.info-enter-active,
.info-leave-active {
    transition: all 0.4s ease;
}
.home-enter-from {
    opacity: 0;
    // transform: translateY(10%);
    // transform: translateX(-100%);
}
.home-leave-to {
    opacity: 0;
    // transform: translateY(10%);
    // transform: translateX(100%);
}
.info-enter-from {
    opacity: 0;
    // transform: translateY(10%);
    // transform: translateX(100%);
}
.info-leave-to {
    opacity: 0;
    // transform: translateY(10%);
    // transform: translateX(-100%);
}
</style>
