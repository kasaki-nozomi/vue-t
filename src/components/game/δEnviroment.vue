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
                            </div>
                            <div class="info">
                                <div v-if="item.title" class="title">
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
            <div v-if="enviroment.length > 1 "class="right button" @click="goRight">
                <img :src="right" />
            </div>
        </div>
        <div v-if="enviroment.length > 1" class="enviroment-aside">
            <div class="aside-list">
                <div v-for="(item, index) in enviroment" :key="item.id" @click="goIndex(index)">
                    <img v-show="current === index && item.icon" :src="item.icon" />
                    <div v-show="current !== index" class="point">
                        <div></div>
                    </div>
                    <div class="line" v-show="index !== enviroment.length - 1">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { left, right } from '@/resource/game'

import { ref } from 'vue'

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

const enviroment = [
    {
        id: 1,
        title: '',
        title_en: '',
        icon: '', 
        image: [
            new URL('@/assets/images/game/04-enviroment/list/01.png', import.meta.url).href
        ],  
        description: '释若耶作为王都，是科技最为发达、治安、基建良好的地区，也是政治、经济、文化中心，人口密度最大，这里四季分明，花草、佛像和林立的高楼相映成趣。受侵蚀进程：77.7%',
        description_en: 'Shi Ruoye, the royal capital, is a highly advanced city with strong security and infrastructure. It is the political, economic, and cultural hub, densely populated, with clear seasons and a unique blend of nature, statues, and skyscrapers. Erosion Progress: 77.7%.'
    },
]
</script>

<style lang="scss" scoped>
.enviroment {
    position: relative;
    width: auto-value(1440);
    @include flex-center();

    .enviroment-content {
        @include flex-center();

        .left {
            margin-right: auto-value(50);

            img {
                width: auto-value(40);
            }
        }

        .right {
            margin-left: auto-value(50);

            img {
                width: auto-value(40);
            }
        }

        .enviroment-list {
            position: relative;
            width: auto-value(1000);
            height: auto-value(1000);
            @include flex-center();

            >div {
                position: absolute;
                height: 100%;
                @include flex-center();
            }

            .enviroment-item {
                .image-list {
                    position: relative;
                    @include flex-center();

                    img {
                        width: auto-value(1120);
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
            }
        }
    }

    .enviroment-aside {
        position: absolute;
        right: 0;

        .aside-list {
            @include flex-center(center, center, column);

            >div {
                img {
                    width: auto-value(100);
                    margin: auto-value(-10) 0;
                    cursor: pointer;
                }

                .point {
                    position: relative;
                    width: auto-value(18);
                    height: auto-value(18);
                    margin: auto-value(20) 0;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.2);
                    cursor: pointer;
                    @include flex-center();

                    div {
                        position: absolute;
                        width: 48%;
                        height: 48%;
                        border-radius: 50%;
                        background: rgba(255, 255, 255, 0.8);
                    }
                }

                .line {
                    @include flex-center(center, center, column);

                    div:nth-child(1) {
                        width: auto-value(4);
                        height: auto-value(4);
                        border-radius: auto-value(2);
                        background: rgba(255, 255, 255, 0.2);
                    }

                    div:nth-child(2) {
                        width: auto-value(2);
                        height: auto-value(60);
                        background: rgba(255, 255, 255, 0.15);
                    }

                    div:nth-child(3) {
                        width: auto-value(4);
                        height: auto-value(4);
                        border-radius: auto-value(2);
                        background: rgba(255, 255, 255, 0.2);
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
</style>