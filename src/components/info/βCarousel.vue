<template>
    <div class="carousel">
        <div v-if="current !== 'wukong' && current !== 'contest'" class="carousel-box">
            <swiper :autoHeight="true" :autoplay="{ delay: 5000, disableOnInteraction: false }" :loop="true" :modules="modules" :navigation="true" :pagination="{ clickable: true }">
                <swiper-slide v-for="banner of banners">
                    <div :class="['banner', current]" :style="{ backgroundImage: `url(${banner})` }"></div>
                </swiper-slide>
            </swiper>
        </div>
        <div class="carousel-info">
            <img :class="current" :src="projects[current].logo" />
            <div v-if="current !== 'contest'" class="carousel-desc" v-html="projects[current].description"></div>
            <div class="carousel-imgs">
                <div v-if="current !== 'contest'"><img v-for="url of lists" :src="url" /></div>
                <div v-if="current === 'contest'" class="carousel-video">
                    <div v-for="contest of contests">
                        <video class="contest-video" autoplay loop muted playsinline webkit-playsinline :poster="contest.image">
                            <source :src="contest.video" type="video/mp4">
                        </video>
                        <div class="video-title">{{ contest.title }}</div>
                        <div class="video-desc" v-html="contest.desc"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '@/utils/projects'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const route = useRoute()

const modules = [Autoplay, Navigation, Pagination]

const current = route.query.project || 'changyuan'

const banners = {
    changyuan: [
        new URL('@/assets/images/project/changyuan/banner/4.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/12.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/13.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changyuan/banner/29.jpg', import.meta.url).href
    ],
    shanhai: [
        new URL('@/assets/images/project/shanhai/list/001.jpg', import.meta.url).href,
        new URL('@/assets/images/project/shanhai/list/002.jpg', import.meta.url).href,
        new URL('@/assets/images/project/shanhai/list/003.jpg', import.meta.url).href,
        new URL('@/assets/images/project/shanhai/list/004.jpg', import.meta.url).href
    ],
    changzhou: [
        new URL('@/assets/images/project/changzhou/banner/4.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/banner/5.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/banner/7.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/banner/8.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/banner/10.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/banner/14.jpg', import.meta.url).href
    ],
    daye: [
        new URL('@/assets/images/project/daye/banner/01.jpg', import.meta.url).href,
        new URL('@/assets/images/project/daye/banner/02.jpg', import.meta.url).href,
        new URL('@/assets/images/project/daye/banner/03.jpg', import.meta.url).href,
        new URL('@/assets/images/project/daye/banner/04.jpg', import.meta.url).href,
        new URL('@/assets/images/project/daye/banner/05.jpg', import.meta.url).href
    ],
    contest: [
        new URL('@/assets/images/project/contest/cover.jpg', import.meta.url).href,
    ],
    wukong: [
        new URL('@/assets/images/project/wukong/cover.jpg', import.meta.url).href
    ],
    yaomu: [
        new URL('@/assets/images/project/yaomu/list/003.jpg', import.meta.url).href,
        new URL('@/assets/images/project/yaomu/list/004.jpg', import.meta.url).href,
        new URL('@/assets/images/project/yaomu/list/006.jpg', import.meta.url).href
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
        new URL('@/assets/images/project/changzhou/list/green/38.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/list/red/003.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/list/red/004.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/list/red/005.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/list/red/006.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/list/red/007.jpg', import.meta.url).href,
        new URL('@/assets/images/project/changzhou/list/red/009.jpg', import.meta.url).href
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

const contests = [
    {
        title: '创造亚当',
        image: new URL('@/assets/images/project/contest/cover.jpg', import.meta.url).href,
        video: new URL('@/assets/images/project/contest/yadang.mp4', import.meta.url).href,
        desc: '初始人们只是想用人工智能来解决生产生活上的问题，比如流水线代工、洗碗拖地等，但没想到这一切涉及到的领域竟然是如此之多，人类无法再独立思考，社会停滞。没有人再能像过去那样超越自我，突破时代，打破限制。与猿猴发现使用骨头作为工具和瓦特发明蒸汽机等相比，人类文明不再有任何进展。<br>因此，致力于模拟人类思维成长过程的亚当公司应运而生。通过大量的神经科学项目，研究人类大脑的结构和功能衍化，并提供人类孩童时期的模拟学习环境来训练模型，建立一个人类幼童的思维模型。'
    },
    {
        title: '起源之海',
        image: new URL('@/assets/images/project/contest/qiyuan.jpg', import.meta.url).href,
        video: new URL('@/assets/images/project/contest/qiyuan.mp4', import.meta.url).href,
        desc: '于起源之渊，最后的古人觊觎传说中的魂灵，光与远古秘能交织。终焉之际，魂灵之体消逝于深渊之底，旧的法则已然破碎，新的指引即将诞生。'
    },
]

onMounted(() => {
    let videos = Array.from(document.getElementsByClassName('contest-video'))
    document.documentElement.addEventListener('click', () => {
        if (videos.length) videos.forEach((video) => { if (video.paused) video.play() } )
    })
    document.getElementsByClassName('el-scrollbar__wrap')[0].addEventListener('scroll', () => {
        if (videos.length) videos.forEach((video) => { if (video.paused) video.play() } )
    })
})
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
                height: 808px;
            }

            &.shanhai {
                height: 720px;
            }

            &.changzhou {
                height: 686px;
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
                height: 820px;
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
                width: 120px;
            }

            &.changzhou {
                width: 280px;
            }

            &.daye {
                width: 300px;
            }

            &.wukong {
                margin-top: 110px;
                width: 360px;
            }

            &.contest {
                margin-top: 110px;
                width: 420px;
            }

            &.yaomu {
                width: 180px;
            }
        }

        .carousel-desc {
            width: 1000px;
            line-height: 42px;
            margin: 100px 0;
            font-size: 18px;
            text-align: center;
            color: rgba(255, 255, 255, 0.75);
        }

        .carousel-imgs {
            margin-bottom: 100px;

            img {
                display: block;
                width: 1250px;
                margin-top: 16px;
            }
        }

        .carousel-video {
            margin-top: 80px;

            div {
                @include flex-center(center, normal, column);

                video {
                    display: block;
                    margin-top: 16px;
                    width: 1400px; 
                }

                .video-title {
                    margin: 28px 0 20px 0;
                    font-size: 28px;
                    font-weight: bold;
                    color: white;
                }

                .video-desc {
                    width: 1100px;
                    line-height: 38px;
                    margin-bottom: 80px;
                    font-size: 20px;
                    text-align: center;
                    color: rgba(255, 255, 255, 0.75);
                }
            }
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
    .carousel {
        .carousel-info {
            >img {
                margin-top: 240px;

                &.changyuan {
                    width: 600px;
                }

                &.shanhai {
                    width: 220px;
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
                    width: 680px;
                }

                &.yaomu {
                    width: 360px;
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
                    width: 1800px;
                    margin-top: 22px;
                }
            }

            .carousel-video {
                margin-top: 150px;

                div {
                    video {
                        margin-top: 22px;
                        width: 1770px; 
                    }

                    .video-title {
                        margin: 48px 0 36px 0;
                        font-size: 58px;
                    }

                    .video-desc {
                        width: 1360px;
                        line-height: 92px;
                        margin-bottom: 150px;
                        font-size: 50px;
                    }
                }
            }
        }
    }

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
