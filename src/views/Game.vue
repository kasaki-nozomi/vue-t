<template>
    <div ref="gameWrapper" class="game-wrapper" :class="{ 'game-wrapper-home-phone': current === 0 && store.ratio <= 1 }" :style="{ backgroundImage: `url(${List[current].cover})` }">
        <div class="game-container">
            <Particle />
            <Transition name="game-fade" mode="out-in">
                <div v-if="store.ratio > 1" class="game-content-pc" :class="store.ratio > ratio ? 'horizontal' : 'portrait'">
                    <div class="game-aside">
                        <Aside :current="current" @updateCurrent="updateCurrent" />
                    </div>
                    <div class="game-main">
                        <Transition :name="direction" mode="out-in">
                            <component :is="Components[current]" />
                        </Transition>
                    </div>
                </div>
                <div v-else class="game-content-phone">
                    <Transition name="home-mask" mode="out-in">
                        <div class="game-mask-phone" v-show="current === 0"></div>
                    </Transition>
                    <div class="game-title-phone" :class="{ 'game-title-phone-home': current === 0 }">
                        <Transition name="game-title">
                            <img v-if="current === 0" class="first" :src="logo" />
                            <img v-else class="second" :src="logo" />
                        </Transition>
                    </div>
                    <Transition name="home-mask" mode="out-in">
                        <div class="game-bottom-phone" v-show="current === 0">
                            <div>——<span>向上滑动开启旅程</span>——</div>
                            <div>Slide down to start the journey</div>
                        </div>
                    </Transition>
                    <div class="game-main-phone">
                        <Transition :name="direction" mode="out-in">
                            <component :is="ComponentsPhone[current]" />
                        </Transition>
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script setup>
import '@/resource/game/preload'

import Aside from '@/components/game/components/Aside.vue'
import Particle from '@/components/game/components/Particle.vue'

import HomePage from '@/components/game/αHomePage.vue'
import WorldView from '@/components/game/βWorldView.vue'
import Mechanics from '@/components/game/γMechanics.vue'
import Enviroment from '@/components/game/δEnviroment.vue'
import Character from '@/components/game/εCharacter.vue'
import Notice from '@/components/game/ζNotice.vue'

import HomePage_Phone from '@/components/game/phone/αHomePage.vue'
import WorldView_Phone from '@/components/game/phone/βWorldView.vue'
import Mechanics_Phone from '@/components/game/phone/γMechanics.vue'
import Enviroment_Phone from '@/components/game/phone/δEnviroment.vue'
import Character_Phone from '@/components/game/phone/εCharacter.vue'
import Notice_Phone from '@/components/game/phone/ζNotice.vue'

import { ref, onMounted } from 'vue'
import { useStore } from '@/store'
import List, { logo } from '@/resource/game'

const store = useStore()
const ratio = 1920 / 1080

const gameWrapper = ref(null)

const current = ref(0)
const Components = [
    HomePage,
    WorldView,
    Mechanics,
    Enviroment,
    Character,
    Notice
]

const ComponentsPhone = [
    HomePage_Phone,
    WorldView_Phone,
    Mechanics_Phone,
    Enviroment_Phone,
    Character_Phone,
    Notice_Phone
]

const direction = ref('up')
function updateCurrent(value) {
    if (value < current.value) {
        direction.value = 'up'
    } else {
        direction.value = 'down'
    }
    current.value = value
}

function debounce(func, wait = 1000, immediate) {
    let timeout
    return function () {
        let context = this
        let args = arguments
        if (timeout) clearTimeout(timeout)
        if (immediate) {
            if (!timeout) func.apply(context, args)
            timeout = setTimeout(() => timeout = null, wait)
        }
        else {
            timeout = setTimeout(() => func.apply(context, args), wait)
        }
    }
}

function throttling(func, wait = 1000) {
    let timeout
    return function () {
        let context = this
        let args = arguments
        if (!timeout) {
            timeout = setTimeout(function () {
                timeout = null
                func.apply(context, args)
            }, wait)
        }
    }
}

onMounted(() => {
    gameWrapper.value.addEventListener('wheel', throttling((event) => {
        if (event.deltaY > 0) {
            direction.value = 'up'
            current.value = Math.max(current.value - 1, 0)
        } else {
            direction.value = 'down'
            current.value = Math.min(current.value + 1, Components.length - 1)
        }
    }, 400), { passive: false })

    let touchStartY = 0
    let touchEndY = 0
    const minSwipeDistance = 50
    gameWrapper.value.addEventListener('touchstart', (event) => touchStartY = event.touches[0].clientY, { passive: true })
    gameWrapper.value.addEventListener('touchmove', (event) => event.preventDefault(), { passive: false })
    gameWrapper.value.addEventListener('touchend', throttling((event) => {
        touchEndY = event.changedTouches[0].clientY
        const swipeDistance = touchEndY - touchStartY
        if (Math.abs(swipeDistance) > minSwipeDistance) {
            if (swipeDistance > 0) {
                direction.value = 'up'
                current.value = Math.max(current.value - 1, 0)
            } else {
                direction.value = 'down'
                current.value = Math.min(current.value + 1, Components.length - 1)
            }
        }
    }, 200), { passive: true })
})

</script>

<style lang="scss" scoped>
.game-wrapper {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    transition: all 0.4s ease;
    color: white;

    &.game-wrapper-home-phone {
        background-position: center -22vh;
    }

    .game-container {
        position: relative;
        height: 100%;
        width: 100%;
        @include flex-center();

        .game-content-pc {
            position: relative;
            height: 100%;
            width: 100%;
            @include flex-center();

            .game-aside {
                position: absolute;
                @include flex-center(center, center, column);
            }

            .game-main {
                margin-left: auto-value(150);
                @include flex-center();
            }

            &.horizontal {
                .game-aside {
                    left: 17.7vh;
                }

                .game-main {
                    width: 177vh;
                    height: 100vh;
                }
            }

            &.portrait {
                .game-aside {
                    left: 10vw;
                }

                .game-main {
                    width: 100vw;
                    height: calc(1080 / 1920 * 100vw);
                }
            }
        }

        .game-content-phone {
            position: relative;
            width: 100%;
            height: 100%;
            @include flex-center();

            .game-mask-phone {
                position: absolute;
                bottom: 22vh;
                width: 100%;
                height: 10%;
                background: linear-gradient(0deg, rgb(0, 0, 0), rgba(0, 0, 0, 0));
            }

            .game-title-phone {
                position: absolute;
                width: 100%;
                @include flex-center(center, normal, column);

                .first {
                    position: fixed;
                    
                    bottom: calc(22vh - 62rem);
                    width: 460rem;
                }

                .second {
                    position: fixed;
                    left: 60rem;
                    top: 60rem;
                    width: 460rem;
                }
            }

            .game-bottom-phone {
                position: absolute;
                bottom: 0;
                width: 100%;
                font-size: 20rem;
                color: rgba(255, 255, 255, 0.5);
                @include flex-center(center, normal, column);

                div:first-child {
                    margin-bottom: 20rem;

                    span {
                        margin: 0 5rem;
                    }
                }

                div:last-child {
                    margin-bottom: 60rem;  
                }
            }
        }
    }
}

.up-enter-active,
.up-leave-active,
.down-enter-active,
.down-leave-active {
    transition: all 0.4s ease;
}

.up-enter-from,
.down-leave-to {
    opacity: 0;
    transform: translateY(auto-value(-60));
}

.up-leave-to,
.down-enter-from {
    opacity: 0;
    transform: translateY(auto-value(60));
}

.game-fade-enter-active,
.game-fade-leave-active {
    transition: all 0.4s ease;
}

.game-fade-enter-from,
.game-fade-leave-to {
    opacity: 0;
}

.home-mask-enter-active,
.home-mask-leave-active {
    transition: all 0.4s ease;
}

.home-mask-enter-from,
.home-mask-leave-to {
    opacity: 0;
    transform: translateY(22vh);
}

.game-title-enter-active,
.game-title-leave-active {
    transition: all 0.4s ease;
}

.game-title-enter-from,
.game-title-leave-to {
    opacity: 0;
    transform: translateY(50rem);
}
</style>