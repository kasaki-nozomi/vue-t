<template>
    <div class="mechanics">
        <div class="mechanics-content">
            <div class="left button" @click="goLeft">
                <img :src="left" />
            </div>
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
            <div class="right button" @click="goRight">
                <img :src="right" />
            </div>
        </div>
        <div class="mechanics-aside" v-if="mechanics.length > 1">
            <div class="aside-list">
                <div v-for="(item, index) in mechanics" :key="item.id" @click="goIndex(index)">
                    <img :src="item.icon" v-show="current === index" />
                    <div class="point" v-show="current !== index">
                        <div></div>
                    </div>
                    <div class="line" v-show="index !== mechanics.length - 1">
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

const mechanics = [
    {
        id: 1,
        title: '丰富的RPG养成',
        title_en: 'In-depth RPG Progression',
        icon: new URL('@/assets/images/game/03-mechanics/list/01-icon.png', import.meta.url).href, 
        image: [
            new URL('@/assets/images/game/03-mechanics/list/01-1.png', import.meta.url).href,
            new URL('@/assets/images/game/03-mechanics/list/01-2.png', import.meta.url).href 
        ],  
        description: '在圆盘地区的冒险中收集各类材料，强化异能，打造独属于你的最强武器，关闭信标，在向世界终焉进发的道路上探寻最本真的奥秘。',
        description_en: 'Embark on an adventure in the Disk Region to gather various materials, enhance your abilities, and forge the ultimate weapon unique to you. Shut down the beacons, and on the path toward the world`s end, uncover the most fundamental mysteries.'
    },
    {
        id: 2,
        title: '爽快的第三人称射击',
        title_en: 'Third-Person Shooter',
        icon: new URL('@/assets/images/game/03-mechanics/list/02-icon.png', import.meta.url).href,
        image: [
            new URL('@/assets/images/game/03-mechanics/list/02-1.png', import.meta.url).href,
        ],
        description: '在圆盘地区的冒险中收集各类材料，强化异能，打造独属于你的最强武器，关闭信标，在向世界终焉进发的道路上探寻最本真的奥秘。',
        description_en: 'Embark on an adventure in the Disk Region to gather various materials, enhance your abilities, and forge the ultimate weapon unique to you. Shut down the beacons, and on the path toward the world`s end, uncover the most fundamental mysteries.'
    },
    {
        id: 3,
        title: '三维（人格指数）玩法系统概述',
        title_en: 'Overview of the Three-Dimensional Gameplay System',
        icon: new URL('@/assets/images/game/03-mechanics/list/03-icon.png', import.meta.url).href,
        image: [
            new URL('@/assets/images/game/03-mechanics/list/03-1.png', import.meta.url).href,
            new URL('@/assets/images/game/03-mechanics/list/03-2.png', import.meta.url).href
        ],
        description: '人格指数：三维，分为韧骨、本真、争鸣，每个三维五个大等级。每一个大等级下有3个小等级,韧骨：实体，铸建磐石之躯（物理）,本真：纯洁，永葆原初之灵（防御）,争鸣：意念，以意念操控敌方（异能）',
        description_en: 'Personality Index: Three Dimensions, divided into Tenacity, Purity, and Resonance, each with five major levels. Each major level has three minor levels. Tenacity: Physical, forging a body as solid as rock (Physical). Purity: Innocence, preserving the original spirit (Defense). Resonance: Mind, manipulating enemies with mental power (Psychic).'
    },
    {
        id: 4,
        title: '基地功能',
        title_en: 'Base Functions',
        icon: new URL('@/assets/images/game/03-mechanics/list/04-icon.png', import.meta.url).href, 
        image: [
            new URL('@/assets/images/game/03-mechanics/list/04-1.png', import.meta.url).href
        ],
        description: '基地作为玩家在单局战斗失败后回到的固定场景，玩家在回到基地场景后，可以选择与NPC进行交互，触发特殊事件或是获得能力提升。',
        description_en: 'The base serves as the fixed scene where players return after failing a single battle. Upon returning to the base, players can choose to interact with NPCs, trigger special events, or gain ability enhancements.'
    }
]
</script>

<style lang="scss" scoped>
.mechanics {
    position: relative;
    width: auto-value(1440);
    @include flex-center();

    .mechanics-content {
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

        .mechanics-list {
            position: relative;
            width: auto-value(1000);
            height: auto-value(1000);
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
                        width: auto-value(900);
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