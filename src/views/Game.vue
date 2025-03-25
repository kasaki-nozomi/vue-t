<template>
    <div class="game-wrapper" ref="gameWrapper" :style="{ backgroundImage: `url(${List[current].cover})` }">
        <div class="game-container" :class="store.ratio > ratio ? 'horizontal' : 'portrait'">
            <Particle />
            <div class="game-aside">
                <Aside :current="current" @updateCurrent="updateCurrent" />
            </div>
            <div class="game-main">
                <Transition :name="direction" mode="out-in">
                    <component :is="Components[current]" />
                </Transition>
            </div>
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

import { ref, onMounted } from 'vue'
import { useStore } from '@/store'
import List from '@/resource/game'

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

const direction = ref('up')
function updateCurrent (value) {
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
    return function() {
        let context = this
        let args = arguments
        if (!timeout) {
            timeout = setTimeout(function() {
                timeout = null
                func.apply(context, args)
            }, wait)
        }
    }
}

onMounted(() => {
    gameWrapper.value.addEventListener('wheel', throttling((event) => {
        console.log(111111)
        if (event.deltaY > 0) {
            direction.value = 'up'
            current.value = Math.max(current.value - 1, 0)
        } else {
            direction.value = 'down'
            current.value = Math.min(current.value + 1, Components.length - 1)
        }
    }, 400), { passive: false })
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
    // transition-delay: 0.4s;
    color: white;
    

    .game-container {
        position: relative;
        height: 100%;
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
</style>