<template>
    <div class="tab">
        <div class="tab-list">
            <div v-for="tabItem in TabList" :key="tabItem.label">
                <TabItem :tabItem="tabItem" />
            </div>
        </div>
    </div>
</template>

<script setup>
import TabItem from '@/components/header/tab/tab-item.vue'

import BusinessList from '@/resource/business'
import IPList from '@/resource/ip'
const GameList = [
    {
        id: 1,
        symbol: 'changyuan',
        title: '长源'
    }
]

const TabList = {
    Business: {
        id: 1,
        label: 'business',
        link: '/business',
        list: BusinessList,
        image: new URL('@/assets/images/header/business.svg', import.meta.url).href
    },
    IP: {
        id: 2,
        label: 'ip',
        link: '/ip',
        list: IPList,
        image: new URL('@/assets/images/header/ip.svg', import.meta.url).href
    },
    Game: {
        id: 3,
        label: 'game',
        link: '/game',
        list: GameList,
        image: new URL('@/assets/images/header/game.svg', import.meta.url).href
    }
}
</script>

<style lang="scss" scoped>
.tab {
    // max-height: calc(100vh - 90PX);
    // overflow-y: auto;
    background: rgba(20, 20, 20, 1);

    .tab-list {
        @include flex-center(normal, center);
    }
}
</style>