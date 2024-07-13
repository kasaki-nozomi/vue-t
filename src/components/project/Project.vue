<template>
    <div class="project" :class="{ reverse: project.id % 2 === 0 }">
        <div class="project-left" :class="{ 'project-leftm': store.pad, 'desc-show': desc }" @mouseenter="desc = true" @mouseleave="desc = false" :style="{ backgroundImage: `url(${project.image})` }">
            <Transition :name="`description-${project.id % 2 !== 0 ? 'left' : 'right' }`" mode="out-in"><div class="project-desc" v-show="desc" @click="goProject(id)">{{ project.description }}</div></Transition>
        </div>
        <div class="project-right" v-show=!store.pad>
            <img :class="project.symbol" :src="project.logo" />
            <div v-if="project.symbol === 'contest'">Rendering</div>
            <div v-if="project.symbol === 'contest'">Competition</div>
            <!-- <div class="project-info">
                <div class="project-info-detail">
                    <img :src="oliveLeft" />
                    <div class="info">
                        <div class="title">{{ project.title }}</div>
                        <div class="introduce">{{ project.introduce }}</div>
                    </div>
                    <img :src="oliveRight" />
                </div>
                <button class="project-info-more" @click="goProject">查看更多</button>
            </div> -->
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

const oliveLeft = new URL('@/assets/images/olive-left.svg', import.meta.url).href
const oliveRight = new URL('@/assets/images/olive-right.svg', import.meta.url).href

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
        width: 1266px;
        height: 500px;
        background-size: cover;
        background-repeat: no-repeat;
        overflow: hidden;
        transition: all 0.4s;
        cursor: pointer;

        &.project-leftm {
            height: 825px;
        }

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

        img {
            width: 180px;
        }

        .changyuan {
            width: 280px;
        }

        .shanhai {
            margin-top: 28px;
        }

        .changzhou {
            width: 220px;
            margin-top: 28px;
        }

        .daye {
            width: 260px;
        }

        .wukong {
            width: 300px;
        }
        
        .contest {
            width: 180px;
        }

        .yaomu {
            width: 220px;
        }

        div:nth-of-type(1) {
            line-height: 80px;
            font-size: 32px;
            font-weight: 800;
            color: white;
        }

        div:nth-of-type(2) {
            font-size: 20px;
            color: white;
        }
    } 
}

.description-left-enter-active,
.description-left-leave-active,
.description-right-enter-active,
.description-right-leave-active {
    transition: all 0.6s ease;
}
.description-left-enter-from,
.description-left-leave-to {
    opacity: 0;
    // transform: translateX(-75%);
}
.description-right-enter-from,
.description-right-leave-to {
    opacity: 0;
    // transform: translateX(75%);
}
</style>