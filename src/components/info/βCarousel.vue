<template>
    <div v-if="current !== 'wukong' && current !== 'contest'" class="carousel">
        <swiper :autoHeight="true" :autoplay="{ delay: 5000, disableOnInteraction: false }" :loop="true" :modules="modules" :navigation="true" :pagination="{ clickable: true }">
            <swiper-slide v-for="banner of banners">
                <div class="banner" :style="{ backgroundImage: `url(${banner})` }"></div>
                <!-- <img class="banner" :src="banner" /> -->
            </swiper-slide>
        </swiper>
        <div class="carousel-desc">{{ projects[current].description }}</div>
    </div>
</template>

<script setup>
import { getCurrentInstance, nextTick, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import { projects } from '@/utils/projects'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const { proxy } = getCurrentInstance()
const { t } = useI18n()
const route = useRoute()

const store = useStore()

const modules = [Autoplay, Navigation, Pagination]

const current = route.query.project || 'changyuan'

const banners = {
    changyuan: [
        new URL('@/assets/images/project/changyuan/banner/01.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/02.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/03.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/04.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/05.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/06.jpg', import.meta.url).href
    ],
    shanhai: [
        new URL('@/assets/images/project/shanhai/banner/01.jpg', import.meta.url).href,
        new URL('@/assets/images/project/shanhai/banner/02.jpg', import.meta.url).href,
        new URL('@/assets/images/project/shanhai/banner/03.jpg', import.meta.url).href,
        new URL('@/assets/images/project/shanhai/banner/04.jpg', import.meta.url).href
    ],
    changzhou: [
        new URL('@/assets/images/project/changzhou/banner/01.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/banner/02.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/banner/03.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/banner/04.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/banner/05.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/banner/06.jpg', import.meta.url).href
    ],
    daye: [
        new URL('@/assets/images/project/daye/banner/01.jpg', import.meta.url).href,
        new URL('@/assets/images/project/daye/banner/02.jpg', import.meta.url).href,
        new URL('@/assets/images/project/daye/banner/03.jpg', import.meta.url).href,
        new URL('@/assets/images/project/daye/banner/04.jpg', import.meta.url).href,
        new URL('@/assets/images/project/daye/banner/05.jpg', import.meta.url).href
    ],
    contest: [
        new URL('@/assets/images/project/contest/banner/01.jpg', import.meta.url).href,
    ],
    wukong: [
        new URL('@/assets/images/project/wukong/banner/01.jpg', import.meta.url).href
    ],
    yaomu: [
        new URL('@/assets/images/project/yaomu/banner/01.jpg', import.meta.url).href,
        new URL('@/assets/images/project/yaomu/banner/02.jpg', import.meta.url).href,
        new URL('@/assets/images/project/yaomu/banner/03.jpg', import.meta.url).href
    ]
}[current]
</script>

<style lang="scss" scoped>
.carousel {
    width: 100%;
    background: black;

    .banner {
        width: 100%;
        height: 800px;
        background-size: cover;
        background-position: top center;
    }

    .carousel-desc {
        width: 100%;
        margin: 100px 0;
        padding: 0 200px;
        font-size: 18PX;
        color: rgba(255, 255, 255, 0.75);
    }
}
</style>
