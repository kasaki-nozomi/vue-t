<template>
    <div class="enviroment">
        <div class="enviroment-content">
            <div v-if="enviroment.length > 1" class="left button" @click="goLeft">
                <img :src="left" />
            </div>
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
                            <!-- <div class="info">
                                <div class="title">
                                    <div v-if="item.title">{{ item.title }}</div>
                                    <div v-if="item.title_en">{{ item.title_en }}</div>
                                </div>
                                <div class="description">
                                    <div v-if="item.description" v-html="item.description"></div>
                                    <div v-if="item.description_en" v-html="item.description_en"></div>
                                </div>
                            </div> -->
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
            <div v-if="enviroment.length > 1" class="right button" @click="goRight">
                <img :src="right" />
            </div>
        </div>
        <div v-if="enviroment.length > 1" class="enviroment-aside">
            <div class="aside-list">
                <div v-for="(item, index) in enviroment" :key="item.id" @click="goIndex(index)">
                    <Transition name="enviroment">
                        <div v-if="current === index" class="image">
                            <img :src="item.image[0]" />
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
    width: auto-value(1440);
    @include flex-center();

    .enviroment-content {
        @include flex-center();

        .left {
            z-index: 10;
            position: relative;
            margin-right: auto-value(60);

            img {
                width: auto-value(40);
            }
        }

        .right {
            z-index: 10;
            position: relative;
            margin-left: auto-value(60);

            img {
                width: auto-value(40);
            }
        }

        .enviroment-list {
            position: relative;
            width: auto-value(1000);
            height: auto-value(630);
            @include flex-center(center, normal, column);

            >div {
                position: absolute;
                height: 100%;
                padding-bottom: auto-value(100);
                @include flex-center();

                .enviroment-item {
                    .image-list {
                        position: relative;
                        @include flex-center();

                        img {
                            width: auto-value(920);
                            border-radius: auto-value(2);
                            border: auto-value(1) solid rgba(255, 255, 255, 0.2);
                        }

                        .title {
                            position: absolute;
                            top: auto-value(20);
                            right: auto-value(-40);
                            @include flex-center();

                            div:first-child {
                                height: auto-value(80);
                                padding: 0 auto-value(32);
                                font-size: auto-value(22);
                                border-radius: auto-value(2) 0 0 auto-value(2);
                                color: white;
                                background: black;
                                @include flex-center();
                            }

                            div:last-child {
                                width: auto-value(4);
                                height: auto-value(80);
                                border-radius: 0 auto-value(2) auto-value(2) 0;
                                background: rgba(30, 110, 128, 1);
                            }
                        }

                        &.double {
                            height: auto-value(480);

                            img {
                                position: absolute;
                                width: auto-value(720);
                            }

                            img:first-child {
                                transform: translate(-20%, -20%);
                            }

                            img:last-child {
                                transform: translate(20%, 20%);
                            }
                        }
                    }

                    .info {
                        margin-bottom: auto-value(-60);
                        @include flex-center(center, center, column);

                        .title {
                            @include flex-center();

                            div {
                                max-width: auto-value(800);
                                font-size: auto-value(18);
                                margin: 0 auto-value(12);
                                margin-top: auto-value(36);
                            }
                        }

                        .description {
                            @include flex-center(center, center, column);

                            div {
                                max-width: auto-value(900);
                                margin-top: auto-value(20);
                                line-height: 1.8;
                                font-size: auto-value(14);
                                text-align: center;
                                color: rgba(255, 255, 255, 0.5);
                            }
                        }
                    }
                }
            }

            .info {
                position: absolute;
                top: auto-value(464);
                height: auto;
                padding-bottom: 0;
                @include flex-center(center, center, column);

                .title {
                    @include flex-center();

                    div {
                        max-width: auto-value(800);
                        font-size: auto-value(18);
                        margin: 0 auto-value(12);
                        margin-top: auto-value(36);
                    }
                }

                .description {
                    @include flex-center(center, center, column);

                    div {
                        max-width: auto-value(900);
                        margin-top: auto-value(14);
                        line-height: 2;
                        font-size: auto-value(14);
                        text-align: center;
                        color: rgba(255, 255, 255, 0.5);
                    }
                }
            }
        }
    }

    .enviroment-aside {
        position: absolute;
        right: 0;

        .aside-list {
            @include flex-center(center, center, column);

            >div {
                position: relative;
                height: auto-value(70);
                @include flex-center();

                .image {
                    position: absolute;
                    height: auto-value(70);
                    cursor: pointer;
                    @include flex-center();

                    img {
                        width: auto-value(38);
                        height: auto-value(38);
                        border-radius: 50%;
                    }

                    &::after {
                        position: absolute;
                        content: '';
                        width: auto-value(56);
                        height: auto-value(56);
                        border-radius: 50%;
                        border: auto-value(1) solid rgba(255, 255, 255, 0.15);
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
    transform: translateX(auto-value(-60));
}

.left-leave-to,
.right-enter-from {
    opacity: 0;
    transform: translateX(auto-value(60));
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
