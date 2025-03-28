<template>
    <div class="business-wrapper">
        <div class="business-banner">
            <img class="banner" :src="banner" />
            <div class="mask"></div>
            <img class="title" :src="title" />
            <div class="bar"></div>
        </div>
        <div class="business-list">
            <div class="business-content">
                <div class="business-item" v-for="business of BusinessList.slice(0, 2)">
                    <Business :business="business" />
                    <div class="item-mask"></div>
                    <img v-if="business.symbol === 'scene'" :src="scene" />
                    <img v-if="business.symbol === 'character'" :src="character" />
                </div>
            </div>
            <div class="business-title">
                <img :src="project" />
            </div>
            <div class="business-content">
                <div class="business-item" v-for="business of BusinessList.slice(2)">
                    <Business :business="business" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Business from '@/components/business/Business.vue'
import BusinessList from '@/resource/business'

const banner = new URL('@/assets/images/business/banner.jpg', import.meta.url).href
const title = new URL('@/assets/images/business/banner.svg', import.meta.url).href

const scene = new URL('@/assets/images/business/scene.svg', import.meta.url).href
const character = new URL('@/assets/images/business/character.svg', import.meta.url).href

const project = new URL('@/assets/images/project.svg', import.meta.url).href
</script>

<style lang="scss" scoped>
.business-wrapper {
    width: 100%;
    margin-bottom: 200px;
    @include flex-center(center, normal, column);

    .business-banner {
        position: relative;
        width: 1920px;

        .banner {
            width: 100%;
        }

        .mask {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 220px;
            background: linear-gradient(180deg, transparent 0%, black 100%);
        }

        .title {
            position: absolute;
            left: 200px;
            bottom: 160px;
            width: 665px;
        }

        .bar {
            position: absolute;
            left: 205px;
            bottom: 120px;
            width: 220px;
            height: 6px;
            border-radius: 6px;
            background: rgba(255, 255, 255);
        }
    }

    .business-list {
        width: 1200px;
        margin-top: 180px;
        @include flex-center(center, normal, column);

        .business-title {
            width: 100%;
            margin: 100px 0 60px 0;

            img {
                height: 64px;
            }
        }

        .business-content {
            width: 1156px;
            flex-wrap: wrap;
            @include flex-center(center, space-between);

            .business-item {
                position: relative;
                width: 562px;
                margin: 14px 0;
                cursor: pointer;
                transition: all 0.2s ease;
                @include flex-center();

                &:hover {
                    filter: brightness(1.2);
                }

                .item-mask {
                    position: absolute;
                    top: 0;
                    width: 100%;
                    height: 240px;
                    background: rgba(0, 0, 0, 0.4);
                    pointer-events: none;
                }

                >img {
                    position: absolute;
                    top: 120px;
                    left: 60px;
                    height: 84px;
                    pointer-events: none;
                }
            }
        }
    }
}

@include setPhoneContent {
    .business-wrapper {
        margin-bottom: 240px;

        .business-banner {
            .mask {
                height: 420px;
            }

            .title {
                position: absolute;
                left: 200px;
                bottom: 100px;
                width: 1100px;
            }

            .bar {
                left: 205px;
                bottom: 40px;
                width: 400px;
                height: 10px;
                border-radius: 10px;
            }
        }

        .business-list {
            width: 1440px;
            margin-top: 180px;

            .business-title {
                margin: 160px 0 100px 0;

                img {
                    height: 184px;
                }
            }

            .business-content {
                width: 1420px;

                .business-item {
                    position: relative;
                    width: 100%;
                    margin: 28px 0;

                    &:hover {
                        filter: brightness(1.2);
                    }

                    .item-mask {
                        position: absolute;
                        width: 100%;
                        height: 600px;
                    }

                    >img {
                        position: absolute;
                        top: 300px;
                        left: 146px;
                        height: 214px;
                        pointer-events: none;
                    }
                }
            }
        }
    }
}
</style>