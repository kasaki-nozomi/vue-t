<template>
    <div id="root" :class="locale">
        <Home></Home>
        <!-- type: center-move | center-scale | bottom -->
        <Popup type="center-move"></Popup>
        <Loading></Loading>
    </div>
</template>

<script setup>
import Home from '@/views/Home.vue'
import Popup from '@/components/popup/Popup.vue'

import { getCurrentInstance, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from '@/store'
import { getUrlParam } from '@/utils/utils'

const store = useStore()

const game = import.meta.env.VITE_APP_GAME

const { proxy } = getCurrentInstance()

const { locale } = useI18n()
if (getUrlParam('lang') || getUrlParam('l')) {
    locale.value = getUrlParam('lang') || getUrlParam('l')
    localStorage.setItem(`${game.toLowerCase()}-lang`, getUrlParam('lang') || getUrlParam('l'))
    const url = new URL(location.href)
    url.searchParams.delete('lang')
    url.searchParams.delete('l')
    history.pushState(null, null, url.href)
} else if (localStorage.getItem(`${game.toLowerCase()}-lang`)) {
    locale.value = localStorage.getItem(`${game.toLowerCase()}-lang`)
} else {
    const broswerLang = (navigator.language || navigator.userLanguage).toLowerCase()
    locale.value = broswerLang === 'zh-tw' ? 'zh-tw' : broswerLang.split('-')[0]
}

if (getUrlParam('openid')) {
    localStorage.setItem(`${game.toLowerCase()}-openid`, decodeURIComponent(getUrlParam('openid')))
    const url = new URL(location.href)
    url.searchParams.delete('openid')
    history.pushState(null, null, url.href)
    nextTick(() => proxy.bus.emit('login', { openid: localStorage.getItem(`${game.toLowerCase()}-openid`) }))
} else if (localStorage.getItem(`${game.toLowerCase()}-openid`)) {
    nextTick(() => proxy.bus.emit('login', { openid: localStorage.getItem(`${game.toLowerCase()}-openid`) }))
}

if (getUrlParam('utm_campaign')) {
    localStorage.setItem(`${game}_utm_campaign`, getUrlParam('utm_campaign'))
    const url = new URL(location.href)
    url.searchParams.delete('utm_campaign')
    history.pushState(null, null, url.href)
}
store.utmCampaign = localStorage.getItem(`${game}_utm_campaign`)

document.title = `${import.meta.env[`VITE_NAME_${game}`]}`
</script>

<style lang="scss">
body {
    background: rgba(0, 0, 0, 0.75);
}

#app {
    height: 100%;
}

#root {
    height: 100%;
    font-family: Chillroundf, PingFang SC;
    @include flex-center(center, normal, column);

    &.ru {
        font-family: PingFang SC;
    }

    &::before {
        content: '';
        z-index: -99;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        filter: blur(10px);
        @include background($image: 'background.jpg', $position: top center, $size: 100% auto);
    }
}
</style>
