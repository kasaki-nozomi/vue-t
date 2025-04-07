<template>
    <div class="project-item" :class="{ pc: store.pc }">
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
$scale: 1.3;

.project-item {
    position: relative;
    width: 312px;
    height: 300px;
    filter: brightness(0.8);
    transition: all 0.2s ease;
    @include flex-center();

    &.pc {
        &:hover {
            width: calc(312px * $scale);
            filter: brightness(1.2);

            .project-content {
                width: calc(300px * $scale);
                height: calc(300px * $scale);

                .project-image {
                    width: calc(300px * $scale);
                    height: calc(300px * $scale);

                    >img {
                        width: calc(300px * $scale);
                        height: calc(300px * $scale);
                        border-radius: 6px;
                    }

                    &::after {
                        content: '';
                        position: absolute;
                        width: 199%;
                        height: 199%;
                        border-radius: 12px;
                        border: 2px solid rgba(255, 255, 255, 0.4);
                        transform: scale(0.5);
                        cursor: pointer;
                        transition: all 0.2s ease;
                    }
                }

                .project-info {
                    margin-top: calc(300px * $scale);
                    transform: scale($scale);
                }
            }
        }
    }

    .project-content {
        position: absolute;
        width: 300px;
        height: 300px;
        pointer-events: auto;
        transition: all 0.2s ease;

        .project-image {
            position: absolute;
            width: 300px;
            height: 300px;
            transition: all 0.2s ease;
            @include flex-center();

            >img {
                position: absolute;
                width: 300px;
                height: 300px;
                border-radius: 5px;
                cursor: pointer;
                transition: all 0.2s ease;
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
                transition: all 0.2s ease;
            }
        }

        .project-info {
            margin-top: 300px;
            margin-left: 2px;
            padding-top: 8px;
            padding-bottom: 8px;
            transition: all 0.2s ease;
            transform-origin: left top;
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
                    bottom: -4px;
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
        width: 808px;
        height: 768px;
        @include flex-center();

        &:hover {
            filter: brightness(1.2);
        }

        .project-content {
            width: 768px;
            height: 768px;

            .project-image {
                width: 768px;
                height: 768px;

                >img {
                    width: 768px;
                    height: 768px;
                    border-radius: 5px;
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
                margin-top: 768px;
                margin-left: 10px;
                padding-top: 20px;
                padding-bottom: 20px;

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
                        bottom: -6px;
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