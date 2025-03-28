<template>
    <div id="root" :class="route.name" :style="root">
        <Header v-if="route.name !== 'game'"></Header>
        <el-scrollbar>
            <router-view v-slot="{ Component, route }">
                <Transition name="route" mode="out-in">
                    <component :is="Component" :key="route.fullPath"></component>
                </Transition>
            </router-view>
            <Footer v-if="route.name !== 'game'"></Footer>
        </el-scrollbar>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import Header from '@/components/αHeader.vue'
import Footer from '@/components/βFooter.vue'

const route = useRoute()

const root = ref({ height: `${window.innerHeight}px` })
window.addEventListener('resize', () => root.value = { height: `${window.innerHeight}px` })
</script>

<style lang="scss">
body {
    color: white;
    background: black;
}

#root {
    padding-top: 90PX;
    @include flex-center(center, normal, column);

    @include setPadContent {
        padding-top: 72PX;
    }

    @include setPhoneContent {
        padding-top: 300px;
    }

    &.game {
        padding-top: 0;

        .el-scrollbar__wrap {
            overflow-x: hidden !important;
            overflow-y: hidden !important;
        }

        .el-scrollbar__view {
            height: 100% !important;
        }

        .el-scrollbar__thumb {
            display: none !important;
        }
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


.route-enter-active,
.route-leave-active {
    transition: all 0.4s ease;
}

.route-enter-from,
.route-leave-to {
    opacity: 0;
    transform: translateY(50PX);
}
</style>
