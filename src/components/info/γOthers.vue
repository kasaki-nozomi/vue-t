<template>
    <div class="others">
        <div class="other-title"><span>其他项目 / </span>Other Projects</div>
        <div class="others-list">
            <div class="other-list-box" v-for="project of others.slice(0, count)">
                <div class="others-item" @mouseenter="info = project.id" @mouseleave="info = null" :style="{ backgroundImage: `url(${project.image})` }">
                    <Transition name="description" mode="out-in">
                        <div class="others-info" v-show="info === project.id">
                            <div class="others-info-title">{{ project.title }}</div>
                            <div class="others-info-desc" v-html="project.description"></div>
                            <button class="others-info-more" @click="goProject(project.symbol)">MORE</button>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
        <button class="others-more" v-show="!more" @click="(count = Infinity) && (more = true)"> SEE MORE</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from '@/store'
import { useRoute, useRouter } from 'vue-router'
import { projects } from '@/utils/projects'

const route = useRoute()
const router = useRouter()

const store = useStore()

const current = route.query.project || 'changyuan'

const count = ref(store.phone ? 2 : 3)
const info = ref(false)
const more = ref(false)
const others = Object.values(projects).filter((project) => project.symbol !== current).sort(() => Math.random() - 0.5)

function goProject(project) {
    router.replace({ path: '/info', query: { project: project } })
}
</script>

<style lang="scss" scoped>
.others {
    width: 100%;
    padding: 100px 0 80px 0;
    @include flex-center(center, center, column);

    .other-title {
        font-size: 36px;
        text-align: center;
        color: white;

        span {
            font-weight: 600;
        }
    }

    .others-list {
        width: 100%;
        max-width: 1820px;
        margin-top: 60px;
        gap: 60px;
        flex-wrap: wrap;
        @include flex-center();

        .other-list-box {
            @include flex-center();

            .others-item {
                width: 440px;
                height: 440px;
                background-size: cover;
                overflow: hidden;

                .others-info {
                    width: 100%;
                    height: 100%;
                    padding: 20px 40px;
                    gap: 25px;
                    background: rgba(0, 0, 0, 0.7);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    @include flex-center(center, center, column);

                    .others-info-title {
                        font-size: 22px;
                        font-weight: 600;
                        color: white;
                    }

                    .others-info-desc {
                        line-height: 36px;
                        font-size: 20px;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        line-clamp: 5;
                        -webkit-line-clamp: 5;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        color: rgba(255, 255, 255, 0.8);
                    }

                    .others-info-more {
                        height: 48px;
                        margin-top: 10px;
                        padding: 0 32px;
                        font-size: 20px;
                        border-radius: 48px;
                        color: black;
                        background: rgb(225, 225, 225);
                    }
                }
            }
        }
    }

    .others-more {
        height: 66px;
        margin-top: 80px;
        padding: 0 50px;
        font-size: 25px;
        border-radius: 66px;
        color: black;
        background: rgb(255, 255, 255);
    }
}

@include setPhoneContent {
    .others {
        padding: 180px 0;

        .other-title {
            font-size: 72px;
        }

        .others-list {
            margin-top: 110px;
            gap: 100px;

            .other-list-box {
                .others-item {
                    width: 800px;
                    height: 800px;

                    .others-info {
                        padding: 40px 72px;
                        gap: 28px;
                        background: rgba(0, 0, 0, 0.7);

                        .others-info-title {
                            font-size: 52px;
                        }

                        .others-info-desc {
                            line-height: 72px;
                            font-size: 42px;
                            -webkit-line-clamp: 5;
                        }

                        .others-info-more {
                            height: 88px;
                            margin-top: 24px;
                            padding: 0 60px;
                            font-size: 44px;
                            border-radius: 99px;
                        }
                    }
                }
            }
        }

        .others-more {
            height: 150px;
            margin-top: 128px;
            padding: 0 80px;
            font-size: 58px;
            border-radius: 150px;
        }
    }
}

.description-enter-active,
.description-leave-active {
    transition: all 0.6s ease;
}

.description-enter-from,
.description-leave-to {
    opacity: 0;
    transform: translateY(-75%);
}
</style>
