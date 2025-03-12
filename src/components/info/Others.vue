<template>
    <div class="others">
        <div class="other-title"><span>其他项目 / </span>Other Projects</div>
        <div class="others-list">
            <div class="other-list-box" v-for="project of others.slice(0, count)" :key="project.symbol">
                <div class="others-item" @mouseenter="info = project.symbol" @mouseleave="info = null" :style="{ backgroundImage: `url(${project.image})` }">
                    <Transition name="description" mode="out-in">
                        <div class="others-info" v-show="info === project.symbol">
                            <div class="others-info-title">{{ project.title }}</div>
                            <div class="others-info-description" v-html="project.description"></div>
                            <button class="others-info-more" @click="goProject(project)">MORE</button>
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
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useStore()

const info = ref(null)
const count = ref(store.phone ? 4 : 6)

const props = defineProps({ others: { type: Array, required: true } })

function goProject(project) {
    store.setProject(project)
    router.push({ path: '/info', query: { id: project.symbol } })
}
</script>

<style lang="scss" scoped>
.others {
    width: 100%;
    padding: 80px 0 160px 0;
    @include flex-center(center, center, column);

    .other-title {
        font-size: 36px;
        text-align: center;
        color: white;

        span {
            font-weight: bold;
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
                border-radius: 2px;
                background-size: cover;
                background-position: center;
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
                        font-weight: bold;
                        color: white;
                    }

                    .others-info-description {
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
                        font-size: 18px;
                        border-radius: 48px;
                        color: black;
                        background: rgb(225, 225, 225);
                        @include flex-center();
                    }
                }
            }
        }
    }

    .others-more {
        height: 66px;
        margin-top: 80px;
        padding: 0 50px;
        font-size: 24px;
        border-radius: 66px;
        color: black;
        background: rgb(255, 255, 255);
        @include flex-center();
    }
}

@include setPhoneContent {
    .others {
        padding: 150px 0;

        .other-title {
            font-size: 72px;
        }

        .others-list {
            margin-top: 110px;
            gap: 60px;

            .other-list-box {
                .others-item {
                    width: 850px;
                    height: 850px;
                    border-radius: 4px;

                    .others-info {
                        padding: 40px 72px;
                        gap: 28px;
                        background: rgba(0, 0, 0, 0.7);

                        .others-info-title {
                            font-size: 52px;
                        }

                        .others-info-description {
                            line-height: 72px;
                            font-size: 42px;
                            line-clamp: 5;
                            -webkit-line-clamp: 5;
                        }

                        .others-info-more {
                            height: 88px;
                            margin-top: 24px;
                            padding: 0 60px;
                            font-size: 36px;
                            border-radius: 88px;
                        }
                    }
                }
            }
        }

        .others-more {
            height: 150px;
            margin-top: 128px;
            padding: 0 80px;
            font-size: 52px;
            border-radius: 150px;
        }
    }
}

.description-enter-active,
.description-leave-active {
    transition: all 0.4s ease;
}

.description-enter-from,
.description-leave-to {
    opacity: 0;
}
</style>
