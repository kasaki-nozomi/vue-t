<template>
    <div class="aside">
        <img class="logo" :src="logo" />
        <div class="aside-list" :class="{ 'aside-have-header': store.ratio > ratioPC && !store.pad }">
            <div class="aside-item" :class="{ active: current === index }" v-for="(aside, index) in Asides" :key="aside.name" @click="emit('updateCurrent', index)">
                <img class="mask" :src="mask" v-show="current === index" />
                <div class="icon">
                    <img :src="aside.icon" />
                    <div v-show="current === index"></div>
                </div>
                <img class="title" :src="aside.title" />
            </div>
        </div>
    </div>
</template>

<script setup>
import Asides, { logo } from '@/resource/game'
import { useStore } from '@/store'
import { ratioPC } from '@/utils/resize'

const { current } = defineProps(['current'])
const emit = defineEmits(['updateCurrent'])

const store = useStore()

const mask = new URL('@/assets/images/game/aside-mask.png', import.meta.url).href
</script>

<style lang="scss" scoped>
.aside {
    z-index: 10;
    position: relative;

    .logo {
        width: auto-value(330);
        margin-left: auto-value(-10);
    }

    .aside-list {
        width: auto-value(180);
        margin: auto-value(100) 0 auto-value(160) 0;

        &.aside-have-header {
            margin: auto-value(80) 0 auto-value(100) 0;
        }

        .aside-item {
            position: relative;
            opacity: 0.6;
            margin: auto-value(20) 0;
            transition: all 0.3s ease;
            cursor: pointer;
            @include flex-center(center, normal);

            &:hover {
                opacity: 0.8;
            }

            &.active {
                opacity: 1;
            }

            .mask {
                position: fixed;
                left: 0;
                width: auto-value(500);
                opacity: 0.25;
            }

            .icon {
                position: relative;
                width: auto-value(32);
                height: auto-value(32);
                @include flex-center();

                img {
                    width: auto-value(24);
                }

                div {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    border: auto-value(1) solid rgb(255, 255, 255);
                }
            }

            .title {
                height: auto-value(50);
                margin-top: auto-value(5);
                margin-left: auto-value(26);
            }
        }
    }
}
</style>