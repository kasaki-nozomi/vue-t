<template>
    <div id="info" class="info" ref="info">
        <Carousel></Carousel>
        <Others></Others>
    </div>
</template>

<script setup>
import Carousel from '@/components/info/βCarousel.vue'
import Others from '@/components/info/γOthers.vue'

import { onMounted } from 'vue'

onMounted(() => {
    document.getElementsByClassName('el-scrollbar__wrap')[0].scrollTop = 0
})

</script>

<style lang="scss" scoped>
.info {
    position: relative;
    width: 100%;
    height: 100%;
    background: rgb(20, 20, 20);
    overflow-y: auto;
    @include flex-center(center, normal, column);
}
</style>
