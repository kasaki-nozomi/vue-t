<template>
    <div class="project">
        <div class="project-title">
            <img :src="title" />
        </div>
        <div class="project-list">
            <div class="project-list-box" ref="container" @scroll="handleScroll" @mouseenter="scrollSpeed = 0"
                @mouseleave="scrollSpeed = defaultSpeed" @touchstart="scrollSpeed = 0"
                @touchend="scrollSpeed = defaultSpeed">
                <div v-for="project of Projects.slice(-count)" :key="`start-${project.symbol}`">
                    <Project :project="project"></Project>
                </div>
                <div v-for="project of Projects" :key="project.symbol">
                    <Project :project="project"></Project>
                </div>
                <div v-for="project of Projects.slice(0, count)" :key="`end-${project.symbol}`">
                    <Project :project="project"></Project>
                </div>
            </div>
            <div class="project-scroll">
                <div class="left-box">
                    <div class="button" @mousedown="handleScrollClick(leftSpeed)" @mouseup="handleScrollClickUp"
                        @touchstart="handleScrollClick(leftSpeed)" @touchend="handleScrollClickUp"
                        @touchcancel="handleScrollClickUp">
                        <img :src="left" />
                    </div>
                </div>
                <div class="right-box">
                    <div class="button" @mousedown="handleScrollClick(rightSpeed)" @mouseup="handleScrollClickUp"
                        @touchstart="handleScrollClick(rightSpeed)" @touchend="handleScrollClickUp"
                        @touchcancel="handleScrollClickUp">
                        <img :src="right" />
                    </div>
                </div>
            </div>
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

const count = 3
const scrolling = ref(false)
const container = ref(null)

const defaultSpeed = 1
const leftSpeed = -5
const rightSpeed = 5

let scrollSpeed = defaultSpeed
let itemWidth = 0

const handleScroll = () => {
    if (scrolling.value) return
    if (container.value.scrollLeft <= 0) {
        container.value.style.scrollBehavior = 'auto'
        container.value.scrollLeft += itemWidth * Projects.length
        container.value.clientWidth
    } else if (container.value.scrollLeft > Projects.length * itemWidth) {
        container.value.style.scrollBehavior = 'auto'
        container.value.scrollLeft -= itemWidth * Projects.length
        container.value.clientWidth
    }
}

const handleScrollClick = (speed) => scrollSpeed = speed
const handleScrollClickUp = () => scrollSpeed = defaultSpeed

onMounted(() => {
    itemWidth = container.value.children[0].getBoundingClientRect().width

    const autoScroll = () => {
        if (container.value) container.value.scrollLeft += scrollSpeed
        requestAnimationFrame(autoScroll)
    }
    autoScroll()
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
        position: relative;
        height: 460px;
        margin-top: 60px;

        .project-list-box {
            overflow-x: auto;
            @include flex-center(normal, normal);

            >div {
                padding: 0 15px;
            }

            >div:nth-of-type(even) {
                margin-top: 35px;
            }

            >div:nth-of-type(odd) {
                margin-top: 75px;
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
                overflow-x: auto;
                @include flex-center(normal, normal);

                >div {
                    margin-top: 0;
                    padding: 0 25px;
                }

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
