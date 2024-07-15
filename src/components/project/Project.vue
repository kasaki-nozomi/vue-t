<template>
    <div class="project" :class="{ reverse: project.id % 2 === 0 && !store.phone }">
        <div class="project-left" :class="{ 'project-leftm': store.pad }" @mouseenter="desc = true" @mouseleave="desc = false" :style="{ backgroundImage: `url(${project.image})` }">
            <Transition :name="`description-${project.id % 2 !== 0 ? 'left' : 'right' }`" mode="out-in">
                <div class="project-desc" v-show="desc && !store.phone" @click="goProject" v-html="project.description"></div>
            </Transition>
        </div>
        <div class="project-right" v-if=!store.phone>
            <img :class="project.symbol" :src="project.logo" />
        </div>
        <div class="project-bottom" v-if=store.phone>
            <img :class="project.symbol" :src="project.logo" />
            <div class="project-bottom-desc" v-html="project.description"></div>
            <button @click="goProject">查看更多</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'

const router = useRouter()
const store = useStore()

const { project } = defineProps({ project: { type: Object, required: true } })

const desc = ref(false)

function goProject() {
    router.push({ path: '/info', query: { project: project.symbol } })
}
</script>

<style lang="scss" scoped>
.project {
    width: 100%;
    background: black;
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

        .project-desc {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            line-height: 40px;
            padding: 0 220px;
            font-size: 20px;
            color: white;
            background: rgba(0, 0, 0, 0.75);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            @include flex-center();
        }
    }

    .project-right {
        height: 100%;
        flex: 1;
        @include flex-center(center, center, column);

        .changyuan {
            width: 280px;
        }

        .shanhai {
            width: 90px;
        }

        .changzhou {
            width: 210px;
        }

        .daye {
            width: 260px;
        }

        .wukong {
            width: 300px;
        }
        
        .contest {
            width: 240px;
        }

        .yaomu {
            width: 160px;
        }
    } 
}

@media screen and (min-width: 2000px) {
    .project-left {
        height: 500PX;
    }

    .project-right {
        img {
            height: 320PX
        }
    }
}

@include setPhoneContent {
    .project {
        @include flex-center(center, normal, column);

        .project-left {
            width: 1920px;
            height: 720px;
        }

        .project-bottom {
            @include flex-center(center, center, column);

            .project-bottom-desc {
                width: 1280px;
                line-height: 84px;
                font-size: 48px;
                text-align: center;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 4;
                text-overflow: ellipsis;
                overflow: hidden;
                color: rgba(255, 255, 255, 0.75);
            }

            img {
                margin-top: 160px;
            }

            .changyuan {
                width: 520px;
            }

            .shanhai {
                width: 280px;
            }

            .changzhou {
                width: 380px;
            }

            .daye {
                width: 360px;
            }

            .wukong {
                width: 480px;
            }
            
            .contest {
                width: 480px;
            }

            .yaomu {
                width: 400px;
            }

            div {
                width: 1280px;
                line-height: 105px;
                margin-top: 100px;
                font-size: 52px;
                color: white;
                text-align: center;
            }

            button {
                height: 130px;
                margin: 160px 0 180px 0;
                padding: 0 80px;
                font-size: 52px;
                border-radius: 130px;
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