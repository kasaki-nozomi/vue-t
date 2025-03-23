<template>
    <div class="character">
        <div class="character-content">
            <div v-if="character.length > 1" class="left button" @click="goLeft">
                <img :src="left" />
            </div>
            <div class="character-list">
                <div v-for="(item, index) in character" :key="item.id">
                    <Transition :name="direction" mode="out-in">
                        <div class="character-item" v-show="current === index">
                            <img class="background" :src="item.background" />
                            <img class="mask" :src="mask" /> 
                            <img class="image" :src="item.image" />
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
                        </div>
                    </Transition>
                </div>
            </div>
            <div v-if="character.length > 1 "class="right button" @click="goRight">
                <img :src="right" />
            </div>
        </div>
        <div v-if="character.length > 1" class="character-aside">
            <div class="aside-list">
                <div v-for="(item, index) in character" :key="item.id" @click="goIndex(index)">
                    <div class="avatar" v-show="current === index && item.avatar">
                        <img :src="circle" />
                        <img :src="item.avatar" />
                    </div>
                    <div  class="point" v-show="current !== index">
                        <div></div>
                    </div>
                    <div class="line" v-show="index !== character.length - 1">
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

const circle = new URL('@/assets/images/game/05-character/avatar.svg', import.meta.url).href
const mask = new URL('@/assets/images/game/05-character/mask.svg', import.meta.url).href

const direction = ref('left')

function goLeft() {
    direction.value = 'left'
    current.value = (current.value - 1) < 0 ? character.length - 1 : (current.value - 1)
}

function goRight() {
    direction.value = 'right'
    current.value = (current.value + 1) % character.length
}

function goIndex(index) {
    if (index === current.value) return
    direction.value = index > current.value ? 'right' : 'left'
    current.value = index
}

const character = [
    {
        id: 1,
        name: 'famu',
        title: '',
        title_en: '',
        avatar: new URL('@/assets/images/game/05-character/list/famu-avatar.png', import.meta.url).href,
        background: new URL('@/assets/images/game/05-character/list/famu-background.png', import.meta.url).href,
        popup: new URL('@/assets/images/game/05-character/list/famu-popup.png', import.meta.url).href,
        symbol: new URL('@/assets/images/game/05-character/list/famu-symbol.svg', import.meta.url).href,
        image: new URL('@/assets/images/game/05-character/list/famu.png', import.meta.url).href,
        description: '',
        description_en: ''
    },
    {
        id: 2,
        name: 'wyatt',
        title: '',
        title_en: '',
        avatar: new URL('@/assets/images/game/05-character/list/wyatt-avatar.png', import.meta.url).href,
        background: new URL('@/assets/images/game/05-character/list/wyatt-background.png', import.meta.url).href,
        popup: new URL('@/assets/images/game/05-character/list/wyatt-popup.png', import.meta.url).href,
        symbol: new URL('@/assets/images/game/05-character/list/wyatt-symbol.svg', import.meta.url).href,
        image: new URL('@/assets/images/game/05-character/list/wyatt.png', import.meta.url).href,
        description: '',
        description_en: ''
    },
    {
        id: 3,
        name: 'jing',
        title: '',
        title_en: '',
        avatar: new URL('@/assets/images/game/05-character/list/jing-avatar.png', import.meta.url).href,
        background: new URL('@/assets/images/game/05-character/list/jing-background.png', import.meta.url).href,
        popup: new URL('@/assets/images/game/05-character/list/jing-popup.png', import.meta.url).href,
        symbol: new URL('@/assets/images/game/05-character/list/jing-symbol.svg', import.meta.url).href,
        image: new URL('@/assets/images/game/05-character/list/jing.png', import.meta.url).href,
        description: '',
        description_en: ''
    }
]
</script>

<style lang="scss" scoped>
.character {
    position: relative;
    width: auto-value(1720);
    height: 100%;
    pointer-events: none;
    @include flex-center();

    .character-content {
        position: relative;
        width: 100%;
        height: 100%;
        @include flex-center();

        .left {
            z-index: 10;
            position: absolute;
            left: auto-value(220);
            pointer-events: auto;

            img {
                width: auto-value(40);
            }
        }

        .right {
            z-index: 10;
            position: absolute;
            right: auto-value(220);
            pointer-events: auto;

            img {
                width: auto-value(40);
            }
        }

        .character-list {
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

            .character-item {
                position: relative;
                width: 100%;
                height: 100%;
                @include flex-center();

                .background {
                    position: absolute;
                    right: auto-value(0);
                    width: 100%;
                    height: auto-value(1170);
                }

                .mask {
                    position: absolute;
                    top: auto-value(10);
                    width: auto-value(1100);
                    @include rotate(100s)
                }

                .image {
                    position: absolute;
                    bottom: 0;
                    width: auto-value(1020);
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

    .character-aside {
        position: absolute;
        right: auto-value(66);
        pointer-events: auto;

        .aside-list {
            @include flex-center(center, center, column);

            >div {
                .avatar {
                    position: relative;
                    width: auto-value(94);
                    height: auto-value(94);
                    margin: auto-value(15) 0;
                    @include flex-center();

                    img:first-child {
                        position: absolute;
                        width: 100%;
                        @include rotate(20s)
                    }

                    img:last-child {
                        position: absolute;
                        width: auto-value(88);
                        cursor: pointer;
                    }
                }
                
                .point {
                    position: relative;
                    width: auto-value(18);
                    height: auto-value(18);
                    margin: auto-value(15) 0;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.15);
                    cursor: pointer;
                    @include flex-center();

                    div {
                        position: absolute;
                        width: 48%;
                        height: 48%;
                        border-radius: 50%;
                        background: rgba(255, 255, 255, 0.6);
                    }
                }

                .line {
                    @include flex-center(center, center, column);

                    div:nth-child(1) {
                        width: auto-value(4);
                        height: auto-value(4);
                        border-radius: auto-value(2);
                        background: rgba(255, 255, 255, 0.15);
                    }

                    div:nth-child(2) {
                        width: auto-value(2);
                        height: auto-value(60);
                        background: rgba(255, 255, 255, 0.1);
                    }

                    div:nth-child(3) {
                        width: auto-value(4);
                        height: auto-value(4);
                        border-radius: auto-value(2);
                        background: rgba(255, 255, 255, 0.15);
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