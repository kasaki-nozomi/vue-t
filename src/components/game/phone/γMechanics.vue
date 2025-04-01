<template>
    <div class="mechanics">
        <div class="mechanics-content">
            <div class="mechanics-list">
                <div v-for="(item, index) in mechanics" :key="item.id">
                    <Transition :name="direction" mode="out-in">
                        <div class="mechanics-item" v-show="current === index">
                            <div class="image-list" :class="{ double: item.image.length === 2 }">
                                <img v-for="(image, index) in item.image" :key="index" :src="image" />
                            </div>
                            <div class="info">
                                <div class="title">
                                    <div>{{ item.title }}</div>
                                    <div>{{ item.title_en }}</div>
                                </div>
                                <div class="description">
                                    <div>{{ item.description }}</div>
                                    <div>{{ item.description_en }}</div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
        <div v-if="mechanics.length > 1" class="mechanics-aside">
            <div class="left button" @click="goLeft">
                <img :src="left" />
            </div>
            <div class="aside-list">
                <div v-for="(item, index) in mechanics" :key="item.id" @click="goIndex(index)">
                    <Transition name="mechanics">
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
            <div class="right button" @click="goRight">
                <img :src="right" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { left, right } from '@/resource/game'

import { ref } from 'vue'

import mechanics from '@/resource/game/mechanics'

const current = ref(0)

const direction = ref('left')

function goLeft() {
    direction.value = 'left'
    current.value = (current.value - 1) < 0 ? mechanics.length - 1 : (current.value - 1)
}

function goRight() {
    direction.value = 'right'
    current.value = (current.value + 1) % mechanics.length
}

function goIndex(index) {
    if (index === current.value) return
    direction.value = index > current.value ? 'right' : 'left'
    current.value = index
}
</script>

<style lang="scss" scoped>
.mechanics {
    position: relative;
    width: 100%;
    height: 100%;
    @include flex-center();

    .mechanics-content {
        width: 100%;
        height: 100%;
        @include flex-center();

        .mechanics-list {
            position: relative;
            width: 100%;
            height: 100%;
            @include flex-center();

            >div {
                position: absolute;
                height: 100%;
                @include flex-center();
            }

            .mechanics-item {
                .image-list {
                    position: relative;
                    @include flex-center();

                    img {
                        width: 700rem;
                    }

                    &.double {
                        img {
                            position: absolute;
                            width: 600rem;

                            &:hover {
                                z-index: 10;
                            }
                        }

                        img:first-child {
                            transform: translate(-10%, -24%);
                        }

                        img:last-child {
                            transform: translate(10%, 24%);
                        }
                    }
                }

                .info {
                    @include flex-center(center, center, column);

                    .title {
                        @include flex-center();

                        div {
                            max-width: auto-value(800);
                            font-size: auto-value(18);
                            margin: 0 auto-value(12);
                        }
                    }

                    .description {
                        margin-top: auto-value(15);
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
            }
        }
    }

    .mechanics-aside {
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
                    width: 100rem;
                    cursor: pointer;
                    @include flex-center();

                    img {
                        width: 100rem;
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
    transform: translateX(auto-value(-60));
}
.left-leave-to,
.right-enter-from {
    opacity: 0;
    transform: translateX(auto-value(60));
}

.mechanics-enter-active,
.mechanics-leave-active {
    transition: all 0.25s ease;
}

.mechanics-enter-from,
.mechanics-leave-to {
    opacity: 0;
    transform: scale(0.8);
}
</style>