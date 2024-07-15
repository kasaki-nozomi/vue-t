<template>
    <div id="root" :class="locale">
        <Header></Header>
        <router-view  v-slot="{ Component, route }" >
            <Transition :name="route.name" mode="out-in">
                <component :is="Component" :key="route.fullPath"></component>
            </Transition>
        </router-view>
        <Footer></Footer>
        <!-- type: center-move | center-scale | bottom -->
        <Popup type="center-move"></Popup>
        <Loading></Loading>
    </div>
</template>

<script setup>
import Header from '@/components/αHeader.vue'
import Footer from '@/components/θFooter.vue'
import Popup from '@/components/popup/Popup.vue'

import { useI18n } from 'vue-i18n'
import { getUrlParam } from '@/utils/utils'

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

document.title = `空鸟文化`
</script>

<style lang="scss">
body {
    background: black;
}

#root {
    padding-top: 100PX;
    font-family: SourceHanSansSC, PingFang SC;
    @include flex-center(center, normal, column);

    @include setPadContent {
        padding-top: 86PX;
    }

    @include setPhoneContent {
        padding-top: 72PX;
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
    transform: translateY(50PX);
    // transform: translateX(-100%);
}
.home-leave-to {
    opacity: 0;
    transform: translateY(50PX);
    // transform: translateX(100%);
}
.info-enter-from {
    opacity: 0;
    transform: translateY(50PX);
    // transform: translateX(100%);
}
.info-leave-to {
    opacity: 0;
    transform: translateY(50PX);
    // transform: translateX(-100%);
}
</style>
