<template>
    <div class="ip-wrapper">
        <div class="ip-banner">
            <img class="banner" :src="banner" />
            <div class="mask"></div>
            <img class="title" :src="title" />
            <div class="bar"></div>
        </div>
        <div class="ip-list">
            <div class="ip-title">
                <img :src="project" />
            </div>
            <div class="ip-content">
                <div class="ip-item" v-for="ip of IPList">
                    <IP :ip="ip" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import IP from '@/components/ip/IP.vue'
import IPList from '@/resource/ip'

const banner = new URL('@/assets/images/ip/banner.jpg', import.meta.url).href
const title = new URL('@/assets/images/ip/banner.svg', import.meta.url).href
const project = new URL('@/assets/images/project.svg', import.meta.url).href
</script>

<style lang="scss" scoped>
.ip-wrapper {
    width: 100%;
    margin-bottom: 200px;
    @include flex-center(center, normal, column);

    .ip-banner {
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
            bottom: 180px;
            width: 550px;
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

    .ip-list {
        width: 1200px;
        @include flex-center(center, normal, column);

        .ip-title {
            width: 100%;
            margin: 80px 0 50px 0;

            img {
                height: 64px;
            }
        }

        .ip-content {
            width: 1156px;
            flex-wrap: wrap;
            @include flex-center(center, space-between);

            .ip-item {
                position: relative;
                width: 562px;
                margin: 14px 0;
                cursor: pointer;
                transition: all 0.2s ease;
                @include flex-center();

                &:hover {
                    filter: brightness(1.2);
                }
            }
        }
    }


}

@include setPhoneContent {
    .ip-wrapper {
        margin-bottom: 240px;

        .ip-banner {
            .mask {
                height: 420px;
            }

            .title {
                position: absolute;
                left: 200px;
                bottom: 100px;
                width: 750px;
            }

            .bar {
                left: 205px;
                bottom: 40px;
                width: 400px;
                height: 10px;
                border-radius: 10px;
            }
        }

        .ip-list {
            width: 1440px;
            margin-top: 180px;

            .ip-title {
                margin: 160px 0 100px 0;

                img {
                    height: 184px;
                }
            }

            .ip-content {
                width: 1420px;

                .ip-item {
                    position: relative;
                    width: 100%;
                    margin: 28px 0;

                    &:hover {
                        filter: brightness(1.2);
                    }
                }
            }
        }
    }
}
</style>