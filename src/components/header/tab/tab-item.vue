<template>
    <div class="tab-item" :class="{ 'tab-item-odds': tabItem.id % 2 === 0 }">
        <div class="tab-item-content">
            <img :src="tabItem.image" @click="router.push(tabItem.link)" />
            <div class="tab-item-list">
                <div class="tab-item-list-item" v-for="item in tabItem.list" :key="item.symbol">
                    <div @click="tabClick(item.symbol)">{{ item.title }}</div>
                    <img v-if="item.id < 3" :src="hot" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const { tabItem } = defineProps({ tabItem: { type: Object, required: true } })

const hot = new URL('@/assets/images/header/hot.svg', import.meta.url).href

function tabClick(symbol) {
    if (tabItem.label === 'game') return router.push('/game')
    else router.push({ path: '/info', query: { id: symbol }})
}
</script>

<style lang="scss" scoped>
.tab-item {
    width: 320PX;
    height: 100%;
    padding: 36PX 36PX 30PX 36PX;

    &.tab-item-odds {
        background: rgba(30, 30, 30, 1);
    }

    .tab-item-content {
        width: 100%;

        >img {
            width: 100%;
            cursor: pointer;
        }

        .tab-item-list {
            width: 100%;
            margin-top: 12PX;

            .tab-item-list-item {
                width: 100%;
                padding: 10PX 0;
                font-size: 12PX;
                @include flex-center(center, normal);

                div {
                    position: relative;
                    cursor: pointer;

                    &::after {
                        content: '';
                        position: absolute;
                        left: 0;
                        bottom: -6px;
                        width: 0;
                        height: 1px;
                        background-color: rgba(120, 150, 255, 0.8);
                        transition: all 0.4s ease;
                    }

                    &:hover::after {
                        width: 100%;
                    }
                }

                >img {
                    width: 18PX;
                    margin-left: 10PX;
                    animation: hot 2s ease infinite;
                }

                @keyframes hot {
                    0%,
                    50%,
                    100% {
                        transform: scale(1);
                    }

                    25% {
                        transform: scale(1.15);
                    }
                }
            }
        }
    }
}
</style>
