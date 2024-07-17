<template>
    <div id="root" :style="root">
        <Header></Header>
        <el-scrollbar>
            <router-view v-slot="{ Component, route }">
                <Transition :name="route.name" mode="out-in">
                    <component :is="Component" :key="route.fullPath"></component>
                </Transition>
            </router-view>
            <Footer></Footer>   
        </el-scrollbar>
    </div>
</template>

<script setup>
import Header from '@/components/αHeader.vue'
import Footer from '@/components/θFooter.vue'

const root = { height: `${window.innerHeight}px` }

document.title = `空鸟文化`
</script>

<style></style>
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

.el-scrollbar {
    width: 1920px !important;
}

.el-scrollbar__wrap {
    overflow-x: hidden !important;
    overflow-y: auto !important;
}

.el-scrollbar__bar.is-vertical {
    width: 12PX !important;
}

.el-scrollbar__thumb {
    position: absolute !important;
    right: 0 !important;
    width: 10PX !important;
    border-radius: 12PX !important;
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
    background: rgba(255, 255, 255, 0.15) !important;
    transition: all 0.15s !important;
    opacity: 1 !important;

    &:hover {
        width: 12PX !important;
        border: 1px solid rgba(255, 255, 255, 0.25) !important;
        background: rgba(255, 255, 255, 0.2) !important;
    }

    &:active {
        width: 12PX !important;
        border: 1px solid rgba(255, 255, 255, 0.25) !important;
        background: rgba(255, 255, 255, 0.2) !important;
    }
}


.home-enter-active,
.home-leave-active,
.info-enter-active,
.info-leave-active {
    transition: all 0.4s ease;
}

.home-enter-from,
.home-leave-to,
.info-enter-from,
.info-leave-to {
    opacity: 0;
    transform: translateY(50PX);
}
</style>
