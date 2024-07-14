<template>
    <div class="carousel">
        <div v-if="current !== 'wukong' && current !== 'contest'" class="carousel-box">
            <swiper :autoHeight="true" :autoplay="{ delay: 5000, disableOnInteraction: false }" :loop="true"
                :modules="modules" :navigation="true" :pagination="{ clickable: true }">
                <swiper-slide v-for="banner of banners">
                    <div :class="['banner', current]" :style="{ backgroundImage: `url(${banner})` }"></div>
                    <!-- <img class="banner" :src="banner" /> -->
                </swiper-slide>
            </swiper>
        </div>
        <div class="carousel-info">
            <img :class="current" :src="projects[current].logo" />
            <div class="carousel-desc">{{ projects[current].description }}</div>
            <div class="carousel-imgs"><img v-for="url of lists" :src="url" /></div>
        </div>
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

const lists = {
    changyuan: [
        new URL('@/assets/images/project/changyuan/list/1.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/list/2.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/list/4.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/list/5.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/list/6.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/list/8.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/list/9.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/list/10.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/list/11.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/list/12.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/list/13.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/list/14.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/list/15.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/list/16.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/list/17.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/list/18.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/list/19.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/list/22.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/list/12.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/list/23.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/list/24.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/list/25.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/list/29.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/list/30.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/list/33.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/list/35.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/list/37.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/list/43.jpg', import.meta.url).href
    ],
    shanhai: [
        new URL('@/assets/images/project/shanhai/list/001.jpg', import.meta.url).href,
        new URL('@/assets/images/project/shanhai/list/002.jpg', import.meta.url).href,
        new URL('@/assets/images/project/shanhai/list/003.jpg', import.meta.url).href,
        new URL('@/assets/images/project/shanhai/list/004.jpg', import.meta.url).href,
        new URL('@/assets/images/project/shanhai/list/005.jpg', import.meta.url).href,
        new URL('@/assets/images/project/shanhai/list/006.jpg', import.meta.url).href,
        new URL('@/assets/images/project/shanhai/list/007.jpg', import.meta.url).href,
        new URL('@/assets/images/project/shanhai/list/008.jpg', import.meta.url).href,
        new URL('@/assets/images/project/shanhai/list/009.jpg', import.meta.url).href,
        new URL('@/assets/images/project/shanhai/list/010.jpg', import.meta.url).href
    ],
    changzhou: [
        new URL('@/assets/images/project/changzhou/list/red/003.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/list/red/004.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/list/red/005.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/list/red/006.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/list/red/007.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/list/red/009.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/list/green/4.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/list/green/5.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/list/green/6.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/list/green/7.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/list/green/8.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/list/green/10.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/list/green/14.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/list/green/17.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/list/green/18.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/list/green/19.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/list/green/23.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/list/green/24.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/list/green/28.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/list/green/30.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/list/green/34.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/list/green/38.jpg', import.meta.url).href
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
        new URL('@/assets/images/project/wukong/list/ha/00.jpg', import.meta.url).href,
        new URL('@/assets/images/project/wukong/list/ha/01.jpg', import.meta.url).href,
        new URL('@/assets/images/project/wukong/list/ha/04.jpg', import.meta.url).href,
        new URL('@/assets/images/project/wukong/list/ha/05.jpg', import.meta.url).href,
        new URL('@/assets/images/project/wukong/list/ha/06.jpg', import.meta.url).href,
        new URL('@/assets/images/project/wukong/list/kong/01.jpg', import.meta.url).href,
        new URL('@/assets/images/project/wukong/list/kong/02.jpg', import.meta.url).href,
        new URL('@/assets/images/project/wukong/list/kong/03.jpg', import.meta.url).href,
        new URL('@/assets/images/project/wukong/list/kong/04.jpg', import.meta.url).href,
        new URL('@/assets/images/project/wukong/list/kong/05.jpg', import.meta.url).href
    ],
    yaomu: [
        new URL('@/assets/images/project/yaomu/list/001.jpg', import.meta.url).href,
        new URL('@/assets/images/project/yaomu/list/002.jpg', import.meta.url).href,
        new URL('@/assets/images/project/yaomu/list/003.jpg', import.meta.url).href,
        new URL('@/assets/images/project/yaomu/list/004.jpg', import.meta.url).href,
        new URL('@/assets/images/project/yaomu/list/006.jpg', import.meta.url).href,
        new URL('@/assets/images/project/yaomu/list/007.jpg', import.meta.url).href
    ]
}[current]
</script>

<style lang="scss" scoped>
.carousel {
    width: 100%;
    background: black;

    .carousel-box {
        .banner {
            width: 100%;
            height: 800px;
            background-size: cover;
            background-position: top center;

            &.changyuan {
                height: 950px;
            }

            &.shanhai {
                height: 720px;
            }

            &.changzhou {
                height: 820px;
            }

            &.daye {
                height: 676px;
            }

            &.wukong {
                height: 0;
            }

            &.contest {
                height: 0;
            }

            &.yaomu {
                height: 1080px;
            }
        }
    }


    .carousel-info {
        @include flex-center(center, normal, column);

        >img {
            margin-top: 150px;

            &.changyuan {
                width: 360px;
            }

            &.shanhai {
                width: 320px;
            }

            &.changzhou {
                width: 320px;
            }

            &.daye {
                width: 320px;
            }

            &.wukong {
                margin-top: 110px;
                width: 380px;
            }

            &.contest {
                margin-top: 110px;
                width: 380px;
            }

            &.yaomu {
                width: 320px;
            }
        }

        .carousel-desc {
            width: 1450px;
            line-height: 42px;
            margin: 100px 0;
            font-size: 22px;
            text-align: center;
            color: rgba(255, 255, 255, 0.75);
        }

        .carousel-imgs {
            margin-bottom: 100px;

            img {
                display: block;
                width: 1550px;
                margin-top: 16px;
            }
        }
    }
}

@include setPhoneContent {
    .carousel {
        .carousel-info {
            >img {
                margin-top: 240px;

                &.changyuan {
                    width: 600px;
                }

                &.shanhai {
                    width: 460px;
                }

                &.changzhou {
                    width: 520px;
                }

                &.daye {
                    width: 580px;
                }

                &.wukong {
                    margin-top: 220px;
                    width: 660px;
                }

                &.contest {
                    margin-top: 240px;
                    width: 580px;
                }

                &.yaomu {
                    width: 550px;
                }
            }

            .carousel-desc {
                width: 1250px;
                line-height: 92px;
                margin: 180px 0;
                font-size: 52px;
            }

            .carousel-imgs {
                margin-bottom: 160px;

                img {
                    width: 1660px;
                    margin-top: 22px;
                }
            }
        }
    }
}
</style>
