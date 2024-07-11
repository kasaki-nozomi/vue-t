<template>
    <div class="others">
        <div class="others-list">
            <div class="other-list-box" v-for="project of others.slice(0, count)">
                <div class="others-item" @mouseenter="info = project.id" @mouseleave="info = null" :style="{ backgroundImage: `url(${project.image})` }">
                    <Transition name="description" mode="out-in">
                        <div class="others-info" v-show="info === project.id">
                            <div class="others-info-desc">{{ project.description }}</div>
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
import { getCurrentInstance, nextTick, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from '@/store'
import { useRoute, useRouter } from 'vue-router'
import { projects } from '@/utils/projects'

const { proxy } = getCurrentInstance()
const { t } = useI18n()
const route = useRoute()
const router = useRouter()

const store = useStore()

const current = route.query.project || 'changyuan'

const count = ref(3)
const info = ref(false)
const more = ref(false)
const others = Object.values(projects).filter((project) => project.symbol !== current).sort(() => Math.random() - 0.5)

function goProject(project) {
    router.replace({ path: '/info', query: { project: project } })
    location.reload()
}
</script>

<style lang="scss" scoped>
.others {
    width: 100%;
    padding: 50PX 0;
    @include flex-center(center, center, column);

    .others-list {
        width: 100%;
        max-width: 1200PX;
        gap: 40PX;
        flex-wrap: wrap;
        @include flex-center();

        .other-list-box {
            @include flex-center();

            .others-item {
                width: 320PX;
                height: 320PX;
                background-size: cover;
                overflow: hidden;

                .others-info {
                    width: 100%;
                    height: 100%;
                    padding: 20PX 40PX 0 40PX;
                    gap: 20PX;
                    background: rgba(0, 0, 0, 0.7);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    @include flex-center(center, center, column);

                    .others-info-desc {
                        font-size: 14PX;
                        color: white;
                    }

                    .others-info-more {
                        height: 42PX;
                        padding: 0 25PX;
                        font-size: 16PX;
                        border-radius: 42PX;
                        color: black;
                        background: rgb(225, 225, 225);
                    }
                }
            }
        }
    }

    .others-more {
        height: 55PX;
        margin-top: 40PX;
        padding: 0 60PX;
        font-size: 20PX;
        border-radius: 55PX;
        color: black;
        background: rgb(255, 255, 255);
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
