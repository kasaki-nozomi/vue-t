<template>
    <div class="worldview">
        <div class="worldview-content">
            <div class="worldview-list">
                <div v-for="(item, index) in worldview" :key="item.id">
                    <Transition :name="direction" mode="out-in">
                        <div class="worldview-item" v-show="current === index">
                            <div class="image-list" :class="`image-${index}`">
                                <img :src="item.phone.image" />
                            </div>
                            <div class="worldview-info" :class="`info-${index}`" @click="popup = true">
                                <img :src="info" />
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
        <div v-if="worldview.length > 1" class="worldview-aside">
            <div class="left button" @click="goLeft">
                <img :src="left" />
            </div>
            <div class="aside-list">
                <div v-for="(item, index) in worldview" :key="item.id" @click="goIndex(index)">
                    <Transition name="worldview">
                        <div v-if="current === index" class="image">
                            <img :src="item.icon" />
                        </div>
                        <div v-else class="point">
                            <div><div></div></div>
                        </div>
                    </Transition>
                </div>
            </div>
            <div class="right button" @click="goRight">
                <img :src="right" />
            </div>
        </div>
        <Transition name="popup" mode="out-in">
            <Popup v-if="popup && worldview[current].phone.popup" :image="worldview[current].phone.popup" @close="popup = false" />
        </Transition>
    </div>
</template>

<script setup>
import Popup from '@/components/game/components/phone/Popup.vue'

import { ref } from 'vue'
import { left, right, info } from '@/resource/game'
import worldview from '@/resource/game/worldview'

const current = ref(0)
const popup = ref(false)

const direction = ref('left')

function goLeft() {
    direction.value = 'left'
    current.value = (current.value - 1) < 0 ? worldview.length - 1 : (current.value - 1)
}

function goRight() {
    direction.value = 'right'
    current.value = (current.value + 1) % worldview.length
}

function goIndex(index) {
    if (index === current.value) return
    direction.value = index > current.value ? 'right' : 'left'
    current.value = index
}
</script>

<style lang="scss" scoped>
.worldview {
    position: relative;
    width: 100%;
    height: 100%;
    @include flex-center();

    .worldview-content {
        position: relative;
        width: 100%;
        height: 100%;
        @include flex-center();

        .worldview-list {
            position: relative;
            width: 100%;
            height: 100%;
            pointer-events: none;
            @include flex-center();

            >div {
                position: absolute;
                width: 100%;
                height: 100%;
                @include flex-center();
            }

            .worldview-item {
                position: relative;
                width: 100%;
                height: 100%;
                @include flex-center();

                .image-list {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    padding-bottom: 40rem;
                    @include flex-center();

                    &.image-2 {
                        padding-bottom: 160rem;
                    }

                    img {
                        width: 750rem;
                    }
                }

                .worldview-info {
                    position: absolute;
                    transition: all 0.2s ease;
                    cursor: pointer;
                    pointer-events: auto;

                    img {
                        width: 300rem;
                    }

                    &:hover {
                        transform: scale(1.05);
                    }

                    &.info-0 {
                        transform: translate(-120rem, 190rem);
                    }

                    &.info-1 {
                        transform: translate(20rem, 160rem);
                    }

                    &.info-2 {
                        transform: translate(-40rem, 240rem);
                    }

                    &.info-3 {
                        transform: translate(-40rem, 140rem);
                    }

                    &.info-4 {
                        transform: translate(-140rem, 100rem);
                    }

                    &.info-5 {
                        transform: translate(-100rem, 140rem);
                    }

                    &.info-6 {
                        transform: translate(-100rem, 140rem);
                    }
                }
            }
        }
    }

    .worldview-aside {
        position: absolute;
        bottom: 120rem;
        @include flex-center();

        .left {
            z-index: 10;
            position: relative;
            margin-right: 25rem;

            img {
                width: 45rem;
            }
        }

        .right {
            z-index: 10;
            position: relative;
            margin-left: 25rem;

            img {
                width: 45rem;
            }
        }

        .aside-list {
            @include flex-center();

            >div {
                position: relative;
                width: 66rem;
                @include flex-center();

                .image {
                    position: absolute;
                    width: 110rem;
                    cursor: pointer;
                    @include flex-center();

                    img {
                        width: 110rem;
                        border-radius: 50%;
                    }
                }

                .point {
                    position: absolute;
                    @include flex-center();

                    >div {
                        width: 20rem;
                        height: 20rem;
                        border-radius: 50%;
                        background: rgba(255, 255, 255, 0.2);
                        cursor: pointer;
                        @include flex-center();

                        >div {
                            width: 48%;
                            height: 48%;
                            border-radius: 50%;
                            background: rgba(255, 255, 255, 0.8);
                        }
                    }
                }
            }
        }
    }
}

.left-enter-active,
.right-enter-active  {
    transition: all 0.4s ease;
    transition-delay: 0.32s;
}
.left-leave-active,
.right-leave-active {
    transition: all 0.4s ease;
}
.left-enter-from,
.right-leave-to {
    opacity: 0;
    transform: translateX(-50rem);
}
.left-leave-to,
.right-enter-from {
    opacity: 0;
    transform: translateX(50rem);
}

.popup-enter-active,
.popup-leave-active {
    transition: all 0.4s ease;
}
.popup-enter-from,
.popup-leave-to {
    opacity: 0;
    transform: translateY(60rem);
}

.worldview-enter-active,
.worldview-leave-active {
    transition: all 0.25s ease;
}

.worldview-enter-from,
.worldview-leave-to {
    opacity: 0;
    transform: scale(0.5);
}
</style>