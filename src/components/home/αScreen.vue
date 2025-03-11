<template>
    <div class="screen">
        <video class="screen-video" autoplay loop muted playsinline webkit-playsinline :poster="screenImage">
            <source :src="screenVideo" type="video/mp4">
        </video>
        <div class="screen-title">
            <img :src="title" />
        </div>
        <div class="screen-loading" v-show="state">
            <img :src="loading" />
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const state = ref(true)
const play = ref(false)
const looping = ref(true)
const loading = new URL('@/assets/images/loading.svg', import.meta.url).href

const title = new URL('@/assets/images/home/screen/title.svg', import.meta.url).href

const screenImage = new URL('@/assets/images/home/screen/screen.jpg', import.meta.url).href
const screenVideo = new URL('@/assets/images/home/screen/screen.mp4', import.meta.url).href

onMounted(() => {
    let video = document.getElementsByClassName('screen-video')[0]
    video && video.addEventListener('playing', () => { [state.value, play.value] = [false, true] }, { once: true })
    video && video.addEventListener('waiting', () => { if (looping.value) state.value = true })
    video && video.addEventListener('canplay', () => { if (play.value) state.value = false })
    video && video.addEventListener('timeupdate', () => { looping.value = video.currentTime <= video.duration - 0.5 })
    document.documentElement.addEventListener('click', () => { if (video && video.paused) video.play() })
    document.getElementsByClassName('el-scrollbar__wrap')[0].addEventListener('scroll', () => { if (video && video.paused) video.play() })
})
</script>

<style lang="scss" scoped>
.screen {
    position: relative;
    background: rgb(25, 25, 25);
    @include flex-center();

    video {
        display: block;
        margin: 0;
        padding: 0;
        height: 640px;
    }

    .screen-title {
        position: absolute;
        bottom: 66px;
        @include flex-center(flex-center, normal, column);

        img {
            width: 360px;
        }
    }

    .screen-loading {
        position: absolute;
        width: 1920px;
        height: 100%;

        img {
            position: absolute;
            top: 15px;
            left: 15px;
            width: 32px;
            opacity: 0.5;
            @include rotate();
        }
    }
}

@include setPhoneContent {
    .screen {
        video {
            height: 1550px;
        }

        .screen-title {
            right: auto;
            bottom: 160px;

            img {
                width: 880px;
            }
        }

        .screen-loading {
            img {
                top: 32px;
                left: 32px;
                width: 80px;
            }
        }
    }
}
</style>
