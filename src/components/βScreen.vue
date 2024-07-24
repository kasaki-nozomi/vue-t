<template>
    <div class="screen">
        <video class="screen-video" autoplay loop muted playsinline webkit-playsinline :poster="screenImage">
            <source :src="screenVideo" type="video/mp4">
        </video>
        <div class="screen-tip">
            <img :src="store.phone ? screenTitle_m : screenTitle" />
        </div>
        <div class="screen-loading" v-show="state">
            <img :src="loading" />
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useStore } from '@/store'

const store = useStore()

const state = ref(true)
const play = ref(false)
const looping = ref(true)
const loading = new URL('@/assets/images/loading.svg', import.meta.url).href

const screenImage = new URL('@/assets/images/company/company.jpg', import.meta.url).href
const screenVideo = new URL('@/assets/images/company/company.mp4', import.meta.url).href
const screenTitle = new URL('@/assets/images/screen-title.svg', import.meta.url).href
const screenTitle_m = new URL('@/assets/images/screen-title-m.svg', import.meta.url).href

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

    .screen-tip {
        position: absolute;
        right: 120px;
        bottom: 80px;
        @include flex-center(flex-end, normal, column);

        img {
            width: 450px;
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

        .screen-tip {
            right: auto;
            bottom: 170px;

            img {
                width: 1150px;
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
