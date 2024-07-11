<template>
    <div class="carousel">
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
import { getCurrentInstance, nextTick, ref } from 'vue'
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
        new URL('@/assets/images/project/changyuan/banner/1.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/2.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/4.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/5.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/6.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/8.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/9.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/10.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/11.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/12.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/13.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/14.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/15.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/16.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/17.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/18.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/19.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/22.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/23.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/24.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/25.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/29.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/30.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/33.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/34.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/35.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/37.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/43.jpg', import.meta.url).href
    ],
    changzhou: [
        new URL('@/assets/images/project/changzhou/banner/003.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/banner/004.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/banner/005.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/banner/006.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/banner/007.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/banner/009.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/banner_/4.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/banner_/5.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/banner_/6.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/banner_/7.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/banner_/8.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/banner_/10.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/banner_/14.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/banner_/17.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/banner_/18.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/banner_/19.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/banner_/23.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/banner_/24.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/banner_/28.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/banner_/30.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/banner_/34.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/banner_/38.jpg', import.meta.url).href
    ],
    daye: [
        new URL('@/assets/images/project/daye/banner/33.jpg', import.meta.url).href,
        new URL('@/assets/images/project/daye/banner/mijing.jpg', import.meta.url).href,
        new URL('@/assets/images/project/daye/banner/mijing4.jpg', import.meta.url).href,
        new URL('@/assets/images/project/daye/banner/mijing9.jpg', import.meta.url).href,
        new URL('@/assets/images/project/daye/banner/mijing14.jpg', import.meta.url).href
    ],
    shanhai: [
        new URL('@/assets/images/project/shanhai/banner/001.jpg', import.meta.url).href,
        new URL('@/assets/images/project/shanhai/banner/002.jpg', import.meta.url).href,
        new URL('@/assets/images/project/shanhai/banner/003.jpg', import.meta.url).href,
        new URL('@/assets/images/project/shanhai/banner/004.jpg', import.meta.url).href,
        new URL('@/assets/images/project/shanhai/banner/005.jpg', import.meta.url).href,
        new URL('@/assets/images/project/shanhai/banner/006.jpg', import.meta.url).href,
        new URL('@/assets/images/project/shanhai/banner/007.jpg', import.meta.url).href,
        new URL('@/assets/images/project/shanhai/banner/008.jpg', import.meta.url).href,
        new URL('@/assets/images/project/shanhai/banner/009.jpg', import.meta.url).href,
        new URL('@/assets/images/project/shanhai/banner/010.jpg', import.meta.url).href,
    ],
    wukong: [
        new URL('@/assets/images/project/wukong/banner/00.jpg', import.meta.url).href,
        new URL('@/assets/images/project/wukong/banner/01.jpg', import.meta.url).href,
        new URL('@/assets/images/project/wukong/banner/04.jpg', import.meta.url).href,
        new URL('@/assets/images/project/wukong/banner/05.jpg', import.meta.url).href,
        new URL('@/assets/images/project/wukong/banner/06.jpg', import.meta.url).href,
        new URL('@/assets/images/project/wukong/banner_/01.jpg', import.meta.url).href,
        new URL('@/assets/images/project/wukong/banner_/02.jpg', import.meta.url).href,
        new URL('@/assets/images/project/wukong/banner_/03.jpg', import.meta.url).href,
        new URL('@/assets/images/project/wukong/banner_/04.jpg', import.meta.url).href,
        new URL('@/assets/images/project/wukong/banner_/05.jpg', import.meta.url).href
    ],
    yaomu: [
        new URL('@/assets/images/project/yaomu/banner/001.jpg', import.meta.url).href,
        new URL('@/assets/images/project/yaomu/banner/002.jpg', import.meta.url).href,
        new URL('@/assets/images/project/yaomu/banner/003.jpg', import.meta.url).href,
        new URL('@/assets/images/project/yaomu/banner/004.jpg', import.meta.url).href,
        new URL('@/assets/images/project/yaomu/banner/0006.0003.jpg', import.meta.url).href,
        new URL('@/assets/images/project/yaomu/banner/0006.0670.jpg', import.meta.url).href,
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
