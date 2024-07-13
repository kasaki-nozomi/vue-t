<template>
    <div class="screen">
        <video autoplay loop muted :poster="screenImage">
            <source :src="screenVideo" type="video/mp4">
        </video>
        <div class="screen-tip">
            <div>Broaden horizons</div>
            <div>& lead trends</div>
        </div>
    </div>
</template>

<script setup>
const screenImage = new URL('@/assets/images/company/company.jpg', import.meta.url).href
const screenVideo = new URL('@/assets/images/company/company.mp4', import.meta.url).href
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
        width: 1920px;
        height: 640px;
        // height: calc(100vh - 100PX);

        @include setPhoneContent {
            height: 1200px;
        }
    }

    .screen-tip {
        position: absolute;
        @include flex-center(center, center, column);

        div {
            font-size: 56px;
            line-height: 86px;
            font-weight: 500;
            color: white;
        }
    }
}
</style>
