<template>
    <div class="project">
        <div class="project-title">
            <img :src="title" />
        </div>
        <div class="project-list">
            <div class="project-list-box" :class="[direction, { stop }]" ref="container" @mouseenter="stop = true" @mouseleave="stop = false">
                <div v-for="project of Projects" :key="project.symbol">
                    <Project :project="project"></Project>
                </div>
                <div v-for="project of Projects" :key="`${project.symbol}-repeat`">
                    <Project :project="project"></Project>
                </div>
            </div>
            <!-- <div class="project-scroll">
                <div class="left-box">
                    <div class="button"  @click="direction = 'left'">
                        <img :src="left" />
                    </div>
                </div>
                <div class="right-box">
                    <div class="button" @click="direction = 'right'">
                        <img :src="right" />
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Project from '@/components/home/project/Project.vue'
import Projects from '@/resource/home'

const title = new URL('@/assets/images/home/project/title.svg', import.meta.url).href
const left = new URL('@/assets/images/home/project/left.svg', import.meta.url).href
const right = new URL('@/assets/images/home/project/right.svg', import.meta.url).href

const container = ref(null)
const stop = ref(false)
const direction = ref('left')

let itemWidth = 0

function goLeft() {
    const translateX = getTranslateX(container.value)
    container.value.style.transform = `translateX(${translateX + itemWidth}px)`
}

function getTranslateX(element) {
    const style = window.getComputedStyle(element)
    const matrix = new WebKitCSSMatrix(style.transform)
    return matrix.m41
}

onMounted(() => {
    itemWidth = container.value.children[0].getBoundingClientRect().width
})
</script>

<style lang="scss" scoped>
.project {
    width: 100%;

    .project-title {
        img {
            height: 64px;
            margin-left: 220px;
        }
    }

    .project-list {
        z-index: 10;
        position: relative;
        height: 460px;
        margin-top: 60px;

        .project-list-box {
            position: relative;
            width: max-content;
            flex-wrap: nowrap;
            transition: all 0.2s ease;
            animation: scroll 20s infinite linear forwards;
            @include flex-center();

            &.stop {
                animation-play-state: paused;
            }

            &.left {
                animation-direction: normal;
            }

            &.right {
                animation-direction: reverse;
            }

            @keyframes scroll {
                to {
                    transform: translateX(-50%);
                }
            }

            >div:nth-of-type(even) {
                margin-top: 25px;
            }

            >div:nth-of-type(odd) {
                margin-top: 85px;
            }
        }

        .project-scroll {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            @include flex-center();

            >div {
                position: absolute;
                width: 500px;
                height: 150%;
                @include flex-center(center, normal);

                .button {
                    pointer-events: visible;
                    position: absolute;
                    height: 50px;
                    width: 50px;
                    font-size: 0;
                    border-radius: 50%;
                    background: rgba(100, 100, 100, 0.2);
                    backdrop-filter: blur(10px);
                    @include flex-center();

                    &::after {
                        content: '';
                        position: absolute;
                        width: 133%;
                        height: 133%;
                        font-size: 0;
                        border-radius: 50%;
                        border: 1px solid rgba(255, 255, 255, 0.4);
                        transform: scale(0.75);
                    }

                    img {
                        width: 28px;
                    }
                }
            }

            .left-box {
                left: 0;
                background: linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);

                .button {
                    left: 200px;
                }
            }

            .right-box {
                right: 0;
                background: linear-gradient(to left, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);

                .button {
                    right: 200px;
                }
            }
        }
    }
}

@include setPhoneContent {
    .project {
        .project-title {
            >img {
                height: 184px;
                margin-left: 133px;
            }
        }

        .project-list {
            position: relative;
            height: calc(1800px / 2);
            margin-top: 180px;

            .project-list-box {
                @include flex-center(normal, normal);

                >div:nth-of-type(even) {
                    margin-top: 0;
                }

                >div:nth-of-type(odd) {
                    margin-top: 0;
                }
            }

            .project-scroll {
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;

                >div {
                    position: absolute;
                    width: 500px;
                    height: 100%;
                    @include flex-center(center, normal);

                    .button {
                        pointer-events: visible;
                        position: absolute;
                        height: 180px;
                        width: 180px;
                        margin-bottom: 80px;
                        font-size: 0;
                        border-radius: 50%;
                        background: rgba(20, 20, 20, 0.2);
                        backdrop-filter: blur(10px);
                        @include flex-center();

                        &::after {
                            content: '';
                            position: absolute;
                            width: 133%;
                            height: 133%;
                            font-size: 0;
                            border-radius: 50%;
                            border: 8px solid rgba(255, 255, 255, 0.4);
                            transform: scale(0.75);
                        }

                        img {
                            width: 114px;
                        }
                    }
                }

                .left-box {
                    .button {
                        left: 140px;
                    }
                }

                .right-box {
                    .button {
                        right: 140px;
                    }
                }
            }
        }
    }
}
</style>
