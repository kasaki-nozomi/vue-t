<template>
    <div class="project" :class="{ reverse: project.id % 2 === 0 }">
        <div class="project-left" :class="{ 'project-leftm': store.pad, 'desc-show': desc }" @mouseenter="desc = true" @mouseleave="desc = false" :style="{ backgroundImage: `url(${project.image})` }">
            <Transition :name="`description-${project.id % 2 !== 0 ? 'left' : 'right' }`" mode="out-in"><div class="project-desc" v-show="desc" @click="goProject(id)">{{ project.description }}</div></Transition>
        </div>
        <div class="project-right" v-show=!store.pad>
            <div class="project-info">
                <div class="project-info-detail">
                    <img :src="oliveLeft" />
                    <div class="info">
                        <div class="title">{{ project.title }}</div>
                        <div class="introduce">{{ project.introduce }}</div>
                    </div>
                    <img :src="oliveRight" />
                </div>
                <button class="project-info-more" @click="goProject">查看更多</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { getCurrentInstance, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'

const router = useRouter()
const store = useStore()

const { project } = defineProps({ project: { type: Number, required: true } })

const oliveLeft = new URL('@/assets/images/olive-left.png', import.meta.url).href
const oliveRight = new URL('@/assets/images/olive-right.png', import.meta.url).href

const desc = ref(false)

function goProject() {
    router.push({ path: '/info', query: { project: project.symbol } })
}
</script>

<style lang="scss" scoped>
.project {
    width: 100%;
    // height: 500px;
    background: rgb(22, 22, 22);
    @include flex-center();

    &.reverse {
        flex-direction: row-reverse;
    }

    .project-left {
        position: relative;
        height: 550px;
        flex: 2;
        background-size: cover;
        background-repeat: no-repeat;
        overflow: hidden;
        transition: all 0.4s;
        cursor: pointer;

        &.project-leftm {
            height: 825px;
        }

        // &.desc-show {
            
        // }

        .project-desc {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            padding: 0 220px;
            font-size: 32px;
            color: white;
            background: rgba(0, 0, 0, 0.75);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            @include flex-center();

            @include setPadContent {
                font-size: 40px;
            }
        }
    }

    .project-right {
        height: 100%;
        flex: 1;
        @include flex-center(center, center, column);

        .project-info {
            @include flex-center(center, normal, column);

            .project-info-detail {
                @include flex-center();

                img {
                    width: 70PX;
                }

                .info {
                    width: 120PX;
                    margin: 0 20PX;
                    color: white;
                    @include flex-center(center,  center, column);

                    .title {
                        font-size: 20PX;
                    }

                    .introduce {
                        margin-top: 10PX;
                        font-size: 14PX;
                        text-align: center;
                    }
                }
            }

            .project-info-more {
                height: 45PX;
                margin-top: 18PX;
                padding: 0 24PX;
                font-size: 18PX;
                border-radius: 45PX;
                color: black;
                background: white;
                @include flex-center();
            }
        }
    } 
}

.description-left-enter-active,
.description-left-leave-active,
.description-right-enter-active,
.description-right-leave-active {
    transition: all 0.88s ease;
}
.description-left-enter-from,
.description-left-leave-to {
    opacity: 0;
    transform: translateX(-75%);
}
.description-right-enter-from,
.description-right-leave-to {
    opacity: 0;
    transform: translateX(75%);
}
</style>