<template>
    <div class="enviroment">
        <div class="enviroment-content">
            <div class="enviroment-list">
                <div v-for="(item, index) in enviroment" :key="item.id">
                    <Transition :name="direction" mode="out-in">
                        <div class="enviroment-item" v-show="current === index">
                            <div class="image-list" :class="{ double: item.image.length === 2 }">
                                <img v-for="(image, index) in item.image" :key="index" :src="image" />
                                <div class="title">
                                    <div>{{ item.title }}</div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
                <div class="info">
                    <div class="title">
                        <div v-if="enviroment[current].title">{{ enviroment[current].title }}</div>
                        <div v-if="enviroment[current].title_en">{{ enviroment[current].title_en }}</div>
                    </div>
                    <div class="description">
                        <div v-if="enviroment[current].description" v-html="enviroment[current].description"></div>
                        <div v-if="enviroment[current].description_en" v-html="enviroment[current].description_en"></div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="enviroment.length > 1" class="enviroment-aside">
            <div class="left button" @click="goLeft">
                <img :src="left" />
            </div>
            <div class="aside-list">
                <div v-for="(item, index) in enviroment" :key="item.id" @click="goIndex(index)">
                    <Transition name="enviroment">
                        <div v-if="current === index" class="image">
                            <img :src="item.image[0]" />
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
    </div>
</template>

<script setup>


import { ref } from 'vue'
import { left, right } from '@/resource/game'
import enviroment from '@/resource/game/envirment'

const current = ref(0)

const direction = ref('left')

function goLeft() {
    direction.value = 'left'
    current.value = (current.value - 1) < 0 ? enviroment.length - 1 : (current.value - 1)
}

function goRight() {
    direction.value = 'right'
    current.value = (current.value + 1) % enviroment.length
}

function goIndex(index) {
    if (index === current.value) return
    direction.value = index > current.value ? 'right' : 'left'
    current.value = index
}
</script>

<style lang="scss" scoped>
.enviroment {
    position: relative;
    width: 100%;
    height: 100%;
    @include flex-center();

    .enviroment-content {
        width: 100%;
        height: 100%;
        @include flex-center();

        .enviroment-list {
            position: relative;
            width: 100%;
            @include flex-center(center, center, column);

            >div {
                position: absolute;
                padding-bottom: 440rem;
                @include flex-center();

                .enviroment-item {
                    .image-list {
                        position: relative;
                        @include flex-center();

                        img {
                            width: 560rem;
                            border-radius: 2rem;
                            border: 1rem solid rgba(255, 255, 255, 0.2);
                        }

                        .title {
                            position: absolute;
                            top: 24rem;
                            right: -28rem;
                            @include flex-center();

                            div:first-child {
                                min-width: 120rem;
                                height: 55rem;
                                padding: 0 20rem;
                                font-size: 16rem;
                                border-radius: 2rem 0 0 2rem;
                                color: white;
                                background: black;
                                @include flex-center();
                            }

                            div:last-child {
                                width: 2rem;
                                height: 45rem;
                                border-radius: 0 2rem 2rem 0;
                                background: rgba(30, 110, 128, 1);
                            }
                        }
                    }                      
                }
            }

            .info {
                position: absolute;
                top: 0;
                width: 550rem;
                height: auto;
                @include flex-center(center, center, column);

                .title {
                    width: 100%;
                    @include flex-center(center, normal);

                    div {
                        max-width: 600rem;
                        font-size: 22rem;
                    }
                }

                .description {
                    width: 100%;
                    @include flex-center(normal, center, column);

                    div {
                        margin-top: 20rem;
                        line-height: 2;
                        font-size: 18rem;
                        text-align: left;
                        color: rgba(255, 255, 255, 0.5);
                    }
                }
            }
        }
    }

    .enviroment-aside {
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
                width: 60rem;
                @include flex-center();

                .image {
                    position: absolute;
                    width: 110rem;
                    cursor: pointer;
                    @include flex-center();

                    img {
                        width: 44rem;
                        height: 44rem;
                        border-radius: 50%;
                    }

                    &::after {
                        position: absolute;
                        content: '';
                        width: 64rem;
                        height: 64rem;
                        border-radius: 50%;
                        border: 1rem solid rgba(255, 255, 255, 0.15);
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
.right-enter-active {
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
    transform: translateX(-40rem);
}

.left-leave-to,
.right-enter-from {
    opacity: 0;
    transform: translateX(40rem);
}

.enviroment-enter-active,
.enviroment-leave-active {
    transition: all 0.25s ease;
}

.enviroment-enter-from,
.enviroment-leave-to {
    opacity: 0;
    transform: scale(0.8);
}
</style>
