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
    background: rgba(0, 0, 0, 0.75);
}

#root {
    font-family: Chillroundf, PingFang SC;
    @include flex-center(center, normal, column);

    &.ru {
        font-family: PingFang SC;
    }
}
</style>
