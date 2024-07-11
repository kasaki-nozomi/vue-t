<template>
    <div id="info" class="info" ref="info">
        <Header></Header>
        <Carousel></Carousel>
        <Others></Others>
        <Footer></Footer>
    </div>
</template>

<script setup>
import Header from '@/components/info/αHeader.vue'
import Carousel from '@/components/info/βCarousel.vue'
import Others from '@/components/info/γOthers.vue'
import Footer from '@/components/ηFooter.vue'
</script>

<style lang="scss" scoped>
.info {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background: rgb(20, 20, 20);
    overflow-y: auto;
    @include flex-center(center, normal, column);
}
</style>
