<template>
    <div class="scroll" v-if="scroll.length">
        <div class="scroll-box">
            <swiper :autoHeight="true" :autoplay="{ delay: 5000, disableOnInteraction: false }" :loop="true" :modules="modules" :navigation="true" :pagination="{ clickable: true }">
                <swiper-slide v-for="banner of scroll">
                    <div :class="['banner', route.query.id]" :style="{ backgroundImage: `url(${banner})` }"></div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const route = useRoute()
const modules = [Autoplay, Navigation, Pagination]

const props = defineProps({ scroll: { type: Array, required: true } })
</script>

<style lang="scss" scoped>
.scroll {
    position: relative;
    width: 100%;
    background: black;

    .scroll-box {
        .banner {
            width: 100%;
            height: 800px;
            background-size: cover;
            background-position: top center;
        }
    }
}

:deep(.swiper-button-prev:after) {
    margin-left: 10px;
    font-size: 42px;
    color: white;
}

:deep(.swiper-button-next:after) {
    margin-right: 10px;
    font-size: 42px;
    color: white;
}

:deep(.swiper-pagination-bullet) {
    width: 10px;
    height: 10px;
    margin: 0 5px !important;
    border-radius: 10px;
    background: white;
    transition: all 0.15s;
}

:deep(.swiper-pagination-bullet-active) {
    width: 36px;
}

@include setPhoneContent {
    :deep(.swiper-button-prev:after) {
        margin-left: -20px;
        font-size: 80px;
    }

    :deep(.swiper-button-next:after) {
        margin-right: -20px;
        font-size: 80px;
    }

    :deep(.swiper-pagination-bullet) {
        width: 24px;
        height: 24px;
        margin: 0 12px !important;
        border-radius: 24px;
    }

    :deep(.swiper-pagination-bullet-active) {
        width: 60px;
    }
}
</style>
