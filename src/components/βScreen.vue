<template>
    <div class="screen">
        <video autoplay loop muted :poster="screenImage">
            <source :src="screenVideo" type="video/mp4">
        </video>
        <div class="screen-tip">
            <!-- <div>KONG STUDIO</div>
            <div>Broaden horizons</div>
            <div>& lead trends</div> -->
            <img :src="store.phone ? screenTitle_m : screenTitle" />
        </div>
    </div>
</template>

<script setup>
import { useStore } from '@/store'
const store = useStore()
const screenImage = new URL('@/assets/images/company/company.jpg', import.meta.url).href
const screenVideo = new URL('@/assets/images/company/company.mp4', import.meta.url).href
const screenTitle = new URL('@/assets/images/screen-title.svg', import.meta.url).href
const screenTitle_m = new URL('@/assets/images/screen-title-m.svg', import.meta.url).href
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

        div {
            font-size: 30px;
            line-height: 50px;
            font-weight: 600;
            color: white;
        }

        div:first-child {
            margin-right: -8px;
            font-size: 66px;
            line-height: 100px;
        }

        img {
            width: 450px;
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

            div {
                font-size: 140px;
                line-height: 240px;
            }

            img {
                width: 1150px;
            }
        }
    }
}
</style>
