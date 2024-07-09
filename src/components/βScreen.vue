<template>
    <div class="screen">
        <video autoplay muted loop :poster="screenImage">
            <source :src="screenVideo" type="video/mp4">
        </video>
    </div>
</template>

<script setup>
const screenImage = new URL('@/assets/images/company/company.jpg', import.meta.url).href
const screenVideo = new URL('@/assets/images/company/campany.mp4', import.meta.url).href
</script>

<style lang="scss" scoped>
.screen {
    background: rgb(25, 25, 25);

    video {
        display: block;
        margin: 0;
        padding: 0;
        width: 1920px;
    }
}
</style>
