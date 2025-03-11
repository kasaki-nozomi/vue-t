<template>
    <div class="project-item">
        <div class="project-content">
            <div class="project-image" @click="goProject">
                <img :src="project.image" />
            </div>
            <div class="project-info" @click="goProject">
                <div class="info-point"></div>
                <div class="info-title">{{ project.title }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'

const router = useRouter()
const store = useStore()

const { project, index } = defineProps({ project: { type: Object, required: true } })

function goProject() {
    store.setProject(null)
    router.push({ path: '/info', query: { id: project.symbol } })
}
</script>

<style lang="scss" scoped>
.project-item {
    width: 100%;
    filter: brightness(0.8);
    transition: all 0.2s ease;
    @include flex-center();

    &:hover {
        filter: brightness(1.2);
    }

    .project-content {
        pointer-events: auto;

        .project-image {
            position: relative;
            width: 300px;
            height: 300px;
            @include flex-center();

            >img {
                width: 300px;
                height: 300px;
                border-radius: 5px;
                cursor: pointer;
            }

            &::after {
                content: '';
                position: absolute;
                width: 199%;
                height: 199%;
                border-radius: 10px;
                border: 1px solid rgba(255, 255, 255, 0.25);
                transform: scale(0.5);
                cursor: pointer;
            }
        }

        .project-info {
            margin-top: 12px;
            padding-bottom: 12px;
            @include flex-center(center, normal);

            .info-point {
                width: 6px;
                height: 6px;
                border-radius: 2px;
                background: rgb(120, 150, 255);
            }

            .info-title {
                position: relative;
                margin-left: 10px;
                font-size: 14px;
                line-height: 20px;
                cursor: pointer;

                &::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: -6px;
                    width: 0;
                    height: 1px;
                    background-color: rgba(120, 150, 255, 0.8);
                    transition: all 0.4s ease;
                }

                &:hover::after {
                    width: 100%;
                }
            }
        }
    }
}

@include setPhoneContent {
    .project-item {
        width: 100%;
        filter: brightness(0.8);
        transition: all 0.2s ease;
        @include flex-center();

        &:hover {
            filter: brightness(1.2);
        }

        .project-content {
            pointer-events: auto;

            .project-image {
                position: relative;
                width: 768px;
                height: 768px;
                @include flex-center();

                >img {
                    width: 768px;
                    height: 768px;
                    border-radius: 5px;
                    cursor: pointer;
                }

                &::after {
                    content: '';
                    position: absolute;
                    width: 199%;
                    height: 199%;
                    border-radius: 10px;
                    border: 1px solid rgba(255, 255, 255, 0.25);
                    transform: scale(0.5);
                    cursor: pointer;
                }
            }

            .project-info {
                margin-top: 32px;
                padding-bottom: 20px;
                @include flex-center(center, normal);

                .info-point {
                    width: 25px;
                    height: 25px;
                    border-radius: 8px;
                    background: rgb(120, 150, 255);
                }

                .info-title {
                    position: relative;
                    margin-left: 40px;
                    font-size: 50px;
                    line-height: 80px;
                    cursor: pointer;

                    &::after {
                        content: '';
                        position: absolute;
                        left: 0;
                        bottom: -10px;
                        width: 0;
                        height: 2px;
                        background-color: rgba(120, 150, 255, 0.8);
                        transition: all 0.4s ease;
                    }

                    &:hover::after {
                        width: 100%;
                    }
                }
            }
        }
    }
}
</style>