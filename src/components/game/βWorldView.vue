<template>
    <div class="worldview">
        <div class="worldview-content">
            <div v-if="worldview.length > 1" class="left button" @click="goLeft">
                <img :src="left" />
            </div>
            <div class="worldview-list">
                <div v-for="(item, index) in worldview" :key="item.id">
                    <Transition :name="direction" mode="out-in">
                        <div class="worldview-item" v-show="current === index">
                            <div class="image-list">
                                <img :src="item.image" />
                            </div>
                            <div class="info">
                                <div v-if="item.title" class="title">
                                    <div>{{ item.title }}</div>
                                    <div>{{ item.title_en }}</div>
                                </div>
                                <div v-if="item.description" class="description">
                                    <div>{{ item.description }}</div>
                                    <div>{{ item.description_en }}</div>
                                </div>
                            </div>
                            <div class="worldview-info" :class="`info-${index}`" @click="popup = true">
                                <img :src="info" />
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
            <div v-if="worldview.length > 1 "class="right button" @click="goRight">
                <img :src="right" />
            </div>
        </div>
        <div v-if="worldview.length > 1" class="worldview-aside">
            <div class="aside-list">
                <div v-for="(item, index) in worldview" :key="item.id" @click="goIndex(index)">
                    <Transition name="worldview">
                        <div v-if="current === index" class="image">
                            <img :src="item.icon" />
                        </div>
                        <div v-else class="point">
                            <div>
                                <div></div>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
        <Transition name="popup" mode="out-in">
            <Popup v-if="popup && worldview[current].popup" :image="worldview[current].popup" @close="popup = false" />
        </Transition>
    </div>
</template>

<script setup>
import Popup from '@/components/game/components/Popup.vue'

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
    width: auto-value(1440);
    height: 100%;
    @include flex-center();

    .worldview-content {
        position: relative;
        height: 100%;
        @include flex-center();

        .left {
            z-index: 10;
            position: relative;
            margin-right: auto-value(80);

            img {
                width: auto-value(40);
            }
        }

        .right {
            z-index: 10;
            position: relative;
            margin-left: auto-value(80);

            img {
                width: auto-value(40);
            }
        }

        .worldview-list {
            position: relative;
            width: auto-value(1000);
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

                .image-list {
                    position: relative;
                    @include flex-center();

                    img {
                        width: auto-value(980);
                    }
                }

                .info {
                    @include flex-center(center, center, column);

                    .title {
                        margin-bottom: auto-value(15);
                        @include flex-center();

                        div {
                            max-width: auto-value(800);
                            font-size: auto-value(18);
                            margin: 0 auto-value(12);
                        }
                    }

                    .description {
                        @include flex-center(center, center, column);

                        div {
                            max-width: auto-value(900);
                            margin: auto-value(5) 0;
                            line-height: 1.8;
                            font-size: auto-value(14);
                            text-align: center;
                            color: rgba(255, 255, 255, 0.5);
                        }
                    }
                }

                .worldview-info {
                    position: absolute;
                    transition: all 0.4s ease;
                    cursor: pointer;
                    pointer-events: auto;

                    img {
                        width: auto-value(250);
                    }

                    &:hover {
                        transform: scale(1.1);
                    }

                    &.info-0 {
                        right: auto-value(70);
                        bottom: auto-value(140);
                    }

                    &.info-1 {
                        right: auto-value(180);
                        bottom: auto-value(60);
                    }

                    &.info-2 {
                        right: auto-value(100);
                        bottom: auto-value(80);
                    }

                    &.info-3 {
                        right: auto-value(100);
                        bottom: auto-value(50);
                    }

                    &.info-4 {
                        right: auto-value(120);
                        bottom: auto-value(80);
                    }

                    &.info-5 {
                        right: auto-value(20);
                        bottom: auto-value(120);
                    }

                    &.info-6 {
                        right: auto-value(80);
                        bottom: auto-value(80);
                    }
                }
            }
        }
    }

    .worldview-aside {
        position: absolute;
        right: 0;

        .aside-list {
            @include flex-center(center, center, column);

            >div {
                position: relative;
                height: auto-value(80);
                @include flex-center();

                .image {
                    position: absolute;
                    height: auto-value(100);
                    cursor: pointer;
                    @include flex-center();

                    img {
                        width: auto-value(100);
                        border-radius: 50%;
                    }
                }

                .point {
                    position: absolute;
                    height: auto-value(70);
                    @include flex-center();

                    >div {
                        width: auto-value(18);
                        height: auto-value(18);
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
    transform: translateX(auto-value(-60));
}
.left-leave-to,
.right-enter-from {
    opacity: 0;
    transform: translateX(auto-value(60));
}

.popup-enter-active,
.popup-leave-active {
    transition: all 0.4s ease;
}
.popup-enter-from,
.popup-leave-to {
    opacity: 0;
    transform: translateY(auto-value(60));
}

.worldview-enter-active,
.worldview-leave-active {
    transition: all 0.25s ease;
}

.worldview-enter-from,
.worldview-leave-to {
    opacity: 0;
    transform: scale(0.8);
}
</style>