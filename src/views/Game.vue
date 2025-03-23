<template>
    <div class="game-wrapper" :style="{ backgroundImage: `url(${List[current].cover})` }">
        <div class="game-container" :class="store.ratio > ratio ? 'horizontal' : 'portrait'">
            <div class="game-aside">
                <Aside :current="current" @updateCurrent="updateCurrent" />
            </div>
            <div class="game-main">
                <Transition name="game-component" mode="out-in">
                    <component :is="Components[current]" />
                </Transition>
            </div>
        </div>
    </div>
</template>

<script setup>
import '@/resource/game/preload'

import Aside from '@/components/game/components/Aside.vue'

import HomePage from '@/components/game/αHomePage.vue'
import WorldView from '@/components/game/βWorldView.vue'
import Mechanics from '@/components/game/γMechanics.vue'
import Enviroment from '@/components/game/δEnviroment.vue'
import Character from '@/components/game/εCharacter.vue'
import Notice from '@/components/game/ζNotice.vue'

import { ref } from 'vue'
import { useStore } from '@/store'

import List from '@/resource/game'

const store = useStore()
const ratio = 1920 / 1080

const current = ref(0)
const Components = [
    HomePage,
    WorldView,
    Mechanics,
    Enviroment,
    Character,
    Notice
]

function updateCurrent (value) {
    current.value = value
}
</script>

<style lang="scss" scoped>
.game-wrapper {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    transition: all 0.2s ease;
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
            margin-left: auto-value(200);
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

.game-component-enter-active,
.game-component-leave-active {
    transition: all 0.4s ease;
}
.game-component-enter-from,
.game-component-leave-to {
    opacity: 0;
    transform: translateY(auto-value(60));
}
</style>