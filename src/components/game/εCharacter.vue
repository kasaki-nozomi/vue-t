<template>
    <div class="character">
        <div class="character-content">
            <div v-if="character.length > 1" class="left button" @click="goLeft">
                <img :src="left" />
            </div>
            <div class="character-list">
                <div v-for="(item, index) in character" :class="{'not-active': current !== index}" :key="item.name">
                    <Transition :name="direction" mode="out-in">
                        <div class="character-item" v-show="current === index">
                            <img class="background" :src="item.background" />
                            <img class="mask" :src="mask" /> 
                            <img class="image" :class="[item.name, { 'image-have-header': store.ratio > ratioPC && !store.pad }]"  :src="item.image" />
                            <img class="symbol" :class="item.name" :src="item.symbol" />
                            <img class="fullname" :class="item.name" :src="item.fullname" />
                            <img class="info" :src="info" @click="popup = true" />
                            <div class="message">
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
                    <div class="avatar" :class="{ active: current === index }">
                        <Transition name="circle" mode="out-in">
                            <div class="circle" v-show="current === index">
                                <img :src="circle" />
                            </div>
                        </Transition>
                        <img :src="item.avatar" />
                    </div>
                </div>
            </div>
        </div>
        <Transition name="popup" mode="out-in">
            <Popup v-if="popup && character[current].popup" :image="character[current].popup" @close="popup = false" />
        </Transition>
    </div>
</template>

<script setup>
import Popup from '@/components/game/components/Popup.vue'

import { ref } from 'vue'
import { useStore } from '@/store'
import { left, right, info } from '@/resource/game'
import { ratioPC } from '@/utils/resize'
import character from '@/resource/game/character'

const store = useStore()

const current = ref(0)

const popup = ref(false)

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
</script>

<style lang="scss" scoped>
.character {
    position: relative;
    width: auto-value(1770);
    height: 100%;
    @include flex-center();

    .character-content {
        position: relative;
        width: 100%;
        height: 100%;
        @include flex-center();

        .left {
            z-index: 10;
            position: absolute;
            left: auto-value(330);

            img {
                width: auto-value(40);
            }
        }

        .right {
            z-index: 10;
            position: absolute;
            right: auto-value(220);

            img {
                width: auto-value(40);
            }
        }

        .character-list {
            position: relative;
            width: 100%;
            height: 100%;
            @include flex-center();

            >div {
                position: absolute;
                width: 100%;
                height: 100%;
                @include flex-center();
            }

            .not-active {
                pointer-events: none;
            }

            .character-item {
                position: relative;
                width: 100%;
                height: 100%;
                @include flex-center();

                .background {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                }

                .mask {
                    position: absolute;
                    top: auto-value(10);
                    width: auto-value(1100);
                    @include rotate(100s)
                }

                .image {
                    position: absolute;

                    &.image-have-header {
                        transform: scale(0.85);
                        transform-origin: center bottom;
                    }

                    &.jing {
                        bottom: auto-value(-160);
                        width: auto-value(1020);
                        margin-right: auto-value(100);
                    }

                    &.wyatt {
                        bottom: auto-value(-160);
                        width: auto-value(1040);
                        margin-right: auto-value(120);
                    }

                    &.famu {
                        bottom: auto-value(-160);
                        width: auto-value(1020);
                        margin-right: auto-value(20);
                    }
                }

                .symbol {
                    position: absolute;
                    width: auto-value(180);

                    &.famu {
                        width: auto-value(240);
                        right: auto-value(580);
                        bottom: auto-value(255);
                    }

                    &.wyatt {
                        right: auto-value(580);
                        bottom: auto-value(255);
                    }

                    &.jing {
                        right: auto-value(580);
                        bottom: auto-value(255);
                    }
                }

                .fullname {
                    position: absolute;
                    
                    &.jing {
                        height: auto-value(66);
                        right: auto-value(740);
                        bottom: auto-value(265);
                    }

                    &.wyatt {
                        height: auto-value(80);
                        right: auto-value(710);
                        bottom: auto-value(265);
                    }

                    &.famu {
                        height: auto-value(80);
                        right: auto-value(710);
                        bottom: auto-value(265);
                    }
                }

                .info {
                    position: absolute;
                    width: auto-value(260);
                    right: auto-value(720);
                    bottom: auto-value(100);
                    transition: all 0.4s ease;
                    cursor: pointer;

                    &:hover {
                        transform: scale(1.1);
                    }
                }
 
                .info {
                    position: absolute;
                    width: auto-value(280);
                    right: auto-value(680);
                    bottom: auto-value(50);
                    transition: all 0.4s ease;
                    cursor: pointer;

                    &:hover {
                        transform: scale(1.05);
                    }
                }

                .message {
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

        .aside-list {
            @include flex-center(center, center, column);

            >div {
                .avatar {
                    position: relative;
                    width: auto-value(100);
                    height: auto-value(100);
                    margin: auto-value(15) 0;
                    opacity: 0.6;
                    transform: scale(0.85);
                    transition: all 0.15s ease;
                    @include flex-center();

                    &.active {
                        opacity: 1;
                        transform: scale(1);
                    }

                    .circle {
                        position: absolute;
                        width: 100%;
                        @include flex-center();
                        
                        img {
                            width: 100%;
                            @include rotate(20s)
                        }
                    }

                    >img {
                        position: absolute;
                        width: 94%;
                        cursor: pointer;
                    }
                }
                
                .point {
                    position: relative;
                    width: auto-value(18);
                    height: auto-value(18);
                    margin: auto-value(20) 0;
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

.circle-enter-active,
.circle-leave-active {
    transition: all 0.5s ease;
}
.circle-enter-from,
.circle-leave-to {
    opacity: 0;
    transform: scale(0);
}
</style>
