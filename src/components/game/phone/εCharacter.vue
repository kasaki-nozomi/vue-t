<template>
    <div class="character">
        <div class="character-content">
            <div class="character-list">
                <div v-for="(item, index) in character" :class="{'not-active': current !== index}" :key="item.name">
                    <Transition :name="direction" mode="out-in">
                        <div class="character-item" v-show="current === index" :style="{ 
                            backgroundImage: `url(${item.phone.background})`,
                            backgroundSize: store.ratio < ratio 
                                ? `auto ${store.ratio / ratio * 100}%`
                                : store.ratio > 0.65 
                                    ? 'contain'
                                    : 'cover'
                        }">
                            <img class="image-mask" :src="item.phone.mask" /> 
                            <img class="mask" :src="mask" /> 
                            <img class="image" :class="item.name"  :src="item.phone.image" />
                            <img class="symbol" :class="item.name" :src="item.symbol" />
                            <img class="fullname" :class="item.name" :src="item.fullname" />
                            <img class="info" :src="info" @click="popup = true" />
                        </div>
                    </Transition>
                </div>
            </div>

        </div>
        <div v-if="character.length > 1" class="character-aside">
            <div v-if="character.length > 1" class="left button" @click="goLeft">
                <img :src="left" />
            </div>
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
            <div v-if="character.length > 1 "class="right button" @click="goRight">
                <img :src="right" />
            </div>
        </div>
        <Transition name="popup" mode="out-in">
            <Popup v-if="popup && character[current].phone.popup" :image="character[current].phone.popup" @close="popup = false" />
        </Transition>
    </div>
</template>

<script setup>
import Popup from '@/components/game/components/phone/Popup.vue'

import { ref } from 'vue'
import { useStore } from '@/store'
import { left, right, info } from '@/resource/game'
import { ratio } from '@/utils/resize'
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
    width: 100%;
    height: 100%;
    @include flex-center();

    .character-content {
        position: relative;
        width: 100%;
        height: 100%;
        @include flex-center();

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
                background-repeat: no-repeat;
                background-position: center center;
                @include flex-center();

                .image-mask {
                    position: absolute;
                    width: 1200rem;
                }

                .mask {
                    position: absolute;
                    width: 660rem;
                    margin-top: -250rem;
                    @include rotate(50s)
                }

                .image {
                    position: absolute;

                    &.jing {
                        width: 1000rem;
                        margin-top: 80rem;
                    }

                    &.wyatt {
                        width: 980rem;
                        margin-top: 80rem;
                    }

                    &.famu {
                        width: 1020rem;
                        margin-top: 140rem;
                    }
                }

                .symbol {
                    position: absolute;
                    transform: translate(180rem, 180rem);

                    &.famu {
                        width: 248rem;
                    }

                    &.wyatt {
                        width: 200rem;
                    }

                    &.jing {
                        width: 240rem;
                    }
                }

                .fullname {
                    position: absolute;
                    
                    &.jing {
                        height: 70rem;
                        margin-top: 440rem;
                    }

                    &.wyatt {
                        height: 88rem;
                        margin-top: 540rem;
                    }

                    &.famu {
                        height: 88rem;
                        margin-top: 540rem;
                    }
                }
 
                .info {
                    position: absolute;
                    width: 320rem;
                    transform: translate(180rem, 440rem);
                    cursor: pointer;
                }
            }
        }
    }

    .character-aside {
        position: absolute;
        bottom: 100rem;
        @include flex-center();

        .left {
            z-index: 10;
            margin-right: 30rem;

            img {
                width: 45rem;
            }
        }

        .right {
            z-index: 10;
            margin-left: 30rem;

            img {
                width: 45rem;
            }
        }

        .aside-list {
            @include flex-center();

            >div {
                .avatar {
                    position: relative;
                    width: 110rem;
                    height: 110rem;
                    margin: 0 5rem;
                    opacity: 0.85;
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
    transform: translateY(50rem);
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
