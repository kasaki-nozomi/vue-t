<template>
    <div id="work" class="work">
        <Header></Header>
        <Carousel></Carousel>
    </div>
</template>

<script setup>
import Header from '@/components/work/αHeader.vue'
import Carousel from '@/components/work/βCarousel.vue'
</script>

<style lang="scss" scoped>
.work {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background: black;
    overflow-y: auto;
    @include flex-center(center, normal, column);
}
</style>
