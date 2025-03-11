<template>
    <div class="content">
        <div v-if="store.project.logo" class="content-logo">
            <img :src="store.project.logo" />
        </div>
        <div class="content-title">{{ store.project.title }}</div>
        <div v-if="store.project.description" class="content-description">
            {{ store.project.description }}
        </div>
        <div class="content-section">
            <img :src="section" />
        </div>
        <div class="content-images">
            <div v-if="route.query.id !== Project.XuanRan.symbol">
                <div v-for="(url, index) of content">
                    <el-image class="image" :src="url" :preview-src-list="content" :initial-index="index" />
                </div>
            </div>
            <div v-else class="content-video">
                <div v-for="(contest, index) of contests">
                    <div class="content-video-box">
                        <video class="contest-video" autoplay loop muted playsinline webkit-playsinline
                            :poster="contest.image">
                            <source :src="contest.video" type="video/mp4">
                        </video>
                        <div class="content-loading" v-show="state[index]">
                            <img :src="loading" />
                        </div>
                    </div>
                    <div class="video-title">{{ contest.title }}</div>
                    <div class="video-description" v-html="contest.description"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/store'
import Project from '@/utils/project'

const route = useRoute()
const store = useStore()

const props = defineProps({ content: { type: Array, required: true } })

const state = ref([true, true])
const play = ref([false, false])
const looping = ref([true, true])

const loading = new URL('@/assets/images/loading.svg', import.meta.url).href
const section = new URL('@/assets/images/production.svg', import.meta.url).href

const contests = [
    {
        title: '创造亚当',
        image: new URL('@/assets/images/ip/list/07-xuanran/yadang.jpg', import.meta.url).href,
        video: new URL('@/assets/images/ip/list/07-xuanran/yadang.mp4', import.meta.url).href,
        description: '初始人们只是想用人工智能来解决生产生活上的问题，比如流水线代工、洗碗拖地等，但没想到这一切涉及到的领域竟然是如此之多，人类无法再独立思考，社会停滞。没有人再能像过去那样超越自我，突破时代，打破限制。与猿猴发现使用骨头作为工具和瓦特发明蒸汽机等相比，人类文明不再有任何进展。<br>因此，致力于模拟人类思维成长过程的亚当公司应运而生。通过大量的神经科学项目，研究人类大脑的结构和功能衍化，并提供人类孩童时期的模拟学习环境来训练模型，建立一个人类幼童的思维模型。'
    },
    {
        title: '起源之海',
        image: new URL('@/assets/images/ip/list/07-xuanran/qiyuan.jpg', import.meta.url).href,
        video: new URL('@/assets/images/ip/list/07-xuanran/qiyuan.mp4', import.meta.url).href,
        description: '于起源之渊，最后的古人觊觎传说中的魂灵，光与远古秘能交织。终焉之际，魂灵之体消逝于深渊之底，旧的法则已然破碎，新的指引即将诞生。'
    },
]

onMounted(() => {
    let videos = Array.from(document.getElementsByClassName('contest-video'))
    videos.length && videos.forEach((video, index) => {
        video.addEventListener('playing', () => { [state.value[index], play.value[index]] = [false, true] }, { once: true })
        video.addEventListener('waiting', () => { if (looping.value[index]) state.value[index] = true })
        video.addEventListener('canplay', () => { if (play.value[index]) state.value[index] = false })
        video.addEventListener('timeupdate', () => { looping.value[index] = video.currentTime <= video.duration - 0.5 })
    })
    document.documentElement.addEventListener('click', () => {
        videos.length && videos.forEach((video) => { if (video.paused) video.play() })
    })
    document.getElementsByClassName('el-scrollbar__wrap')[0].addEventListener('scroll', () => {
        videos.length && videos.forEach((video) => { if (video.paused) video.play() })
    })
})
</script>

<style lang="scss">
.el-image-viewer__wrapper {
    top: 100PX;
    outline: unset;
}

@include setPadContent {
    .el-image-viewer__wrapper {
        top: 86PX;
    }
}

@include setPhoneContent {
    .el-image-viewer__wrapper {
        top: 72PX;
    }
}
</style>

<style lang="scss" scoped>
.content {
    width: 1200px;
    margin-top: 60px;
    @include flex-center(center, normal, column);

    >div {
        width: 100%;
        margin-top: 40px;
    }

    .content-logo {
        >img {
            width: 320px;
        }
    }

    .content-title {
        line-height: 48px;
        font-size: 40px;
        letter-spacing: 1px;
    }

    .content-description {
        line-height: 32px;
        font-size: 16px;
        text-align: justify;
        color: rgba(255, 255, 255, 0.6);
    }

    .content-section {
        margin-top: 80px;

        img {
            height: 64px;
        }
    }

    .content-images {
        .image {
            display: block;
            width: 100%;
            margin-top: 16px;
            cursor: pointer;
        }

        .content-video {
            margin-top: 40px;

            div {
                @include flex-center(center, normal, column);

                .content-video-box {
                    position: relative;

                    .contest-video {
                        display: block;
                        width: 100%;
                        margin-top: 16px;
                    }

                    .content-loading {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.25);
                        @include flex-center();

                        img {
                            width: 66px;
                            opacity: 0.75;
                            @include rotate();
                        }
                    }
                }

                .video-title {
                    margin: 28px 0 20px 0;
                    font-size: 28px;
                    font-weight: bold;
                    color: white;
                }

                .video-description {
                    width: 80%;
                    line-height: 38px;
                    margin-bottom: 80px;
                    font-size: 20px;
                    text-align: center;
                    color: rgba(255, 255, 255, 0.75);
                }
            }
        }
    }
}

@include setPhoneContent {
    .content {
        width: 1420px;
        margin-top: 120px;

        >div {
            margin-top: 100px;
        }

        .content-logo {
            >img {
                width: 600px;
            }
        }

        .content-title {
            line-height: 120px;
            font-size: 100px;
            letter-spacing: 2px;
            font-weight: bold;
        }

        .content-description {
            line-height: 100px;
            font-size: 55px;
        }

        .content-section {
            margin-top: 120px;

            img {
                height: 184px;
            }
        }

        .content-images {
            margin-top: 140px;

            .image {
                margin-top: 24px;
            }

            .content-video {
                margin-top: 40px;

                div {
                    @include flex-center(center, normal, column);

                    .content-video-box {
                        position: relative;

                        .contest-video {
                            display: block;
                            width: 100%;
                            margin-top: 16px;
                        }

                        .content-loading {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            background: rgba(0, 0, 0, 0.25);
                            @include flex-center();

                            img {
                                width: 66px;
                                opacity: 0.75;
                                @include rotate();
                            }
                        }
                    }

                    .video-title {
                        line-height: 100px;
                        margin: 60px 0 20px 0;
                        font-size: 60px;
                    }

                    .video-description {
                        width: 100%;
                        line-height: 80px;
                        margin-bottom: 120px;
                        font-size: 40px;
                    }
                }
            }
        }
    }
}
</style>
