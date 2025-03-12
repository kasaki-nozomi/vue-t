<template>
    <div id="footer" class="footer">
        <div class="footer-left">
            <img class="footer-title" :src="title" />
            <div class="footer-social-list">
                <div class="wx-qr" @mouseenter="qrShow = true" @mouseleave="qrShow = false">
                    <img class="icon" :src="wx" />
                    <img class="qr" v-show="qrShow" :src="qr" />
                </div>
                <div v-for="social in socials" class="button">
                    <a :href="social.url"></a>
                    <img class="icon" :src="social.icon" />
                </div>
            </div>
        </div>
        <div class="footer-right">
            <div class="footer-info">
                <div class="footer-info-detail">
                    <div>Address</div>
                    <div>浙江省杭州市西湖区留下街道天目山路住538号4050室</div>
                </div>
                <div class="footer-info-detail">
                    <div>TEL</div>
                    <div>17673624006</div>
                </div>
                <div class="footer-info-detail">
                    <div>E-Mail</div>
                    <div>pyh@kongniaostudio.com</div>
                </div>
                <div class="footer-info-icp" @click="openICP">{{ icp }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const qrShow = ref(false)

const icp = '浙ICP备2024110347号'
const title = new URL('@/assets/images/footer/title.svg', import.meta.url).href
const qr = new URL('@/assets/images/footer/qr-code.png', import.meta.url).href
const wx = new URL('@/assets/images/footer/social/weixin.svg', import.meta.url).href
const socials = [
    {
        code: 'wb',
        url: 'https://weibo.com/u/7174406359',
        icon: new URL('@/assets/images/footer/social/weibo.svg', import.meta.url).href,
    },
    {
        code: 'zc',
        url: 'https://www.zcool.com.cn/u/26538302',
        icon: new URL('@/assets/images/footer/social/zcool.svg', import.meta.url).href,
    },
    {
        code: 'as',
        url: 'https://www.artstation.com/xiaoguainiao',
        icon: new URL('@/assets/images/footer/social/artstation.svg', import.meta.url).href,
    },
    {
        code: 'gc',
        url: 'https://www.ggac.com/user/151182',
        icon: new URL('@/assets/images/footer/social/ggac.svg', import.meta.url).href,
    }
]

function openICP() {
    window.open('https://beian.miit.gov.cn/')
}
</script>

<style lang="scss" scoped>
.footer {
    width: 100%;
    height: 320px;
    flex-shrink: 0;
    @include flex-center();

    .footer-left {
        width: 666px;
        height: 100%;
        padding-left: 180px;
        @include background('footer/background.jpg');
        @include flex-center(normal, center, column);

        .footer-title {
            width: 200px;
        }

        .footer-social-list {
            margin-top: 40px;
            gap: 32px;
            @include flex-center(center, normal);

            div {
                position: relative;
                border-radius: 50%;
                transition: all 0.25s;
                cursor: pointer;
                @include flex-center();

                &:hover {
                    filter: brightness(1.5);
                }

                .icon {
                    width: 32px;
                }

                a {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                }

                .qr {
                    position: absolute;
                    bottom: 120%;
                    width: 200px;
                }
            }
        }
    }

    .footer-right {
        width: 100%;
        height: 100%;
        flex: 1;
        background: rgb(10, 10, 10);
        @include flex-center(flex-start, center, column);

        .footer-info {
            margin-left: 220px;

            div {
                @include flex-center(center, normal);
            }

            .footer-info-detail {
                div {
                    min-width: 144px;
                    line-height: 36px;
                    margin: 8px 0;
                    font-size: 16px;
                    letter-spacing: 1px;
                    text-align: justify;
                    color: rgba(255, 255, 255, 0.6);
                }

                div:first-child {
                    font-weight: bold;
                    color: white;
                }
            }

            .footer-info-icp {
                margin-top: 16px;
                font-size: 16px;
                letter-spacing: 1px;
                cursor: pointer;
                color: rgba(255, 255, 255, 0.5);
            }
        }
    }
}

@include setPhoneContent {
    .footer {
        height: auto;
        flex-direction: column;

        .footer-left {
            width: 100%;
            height: 566px;
            @include background('footer/background-m.jpg');

            .footer-title {
                width: 550px;
            }

            .footer-social-list {
                margin-top: 100px;
                gap: 92px;

                div {
                    .qr {
                        bottom: 140%;
                        width: 400px;
                    }

                    .icon {
                        width: 88px;
                    }
                }
            }
        }

        .footer-right {
            width: 100%;
            height: 750px;
            flex: auto;
            @include flex-center();

            .footer-info {
                margin-left: 0;

                .footer-info-detail {
                    div {
                        min-width: 369px;
                        line-height: 90px;
                        margin: 20px 0;
                        font-size: 45px;
                        text-align: justify;
                    }
                }

                .footer-info-icp {
                    margin-top: 46px;
                    font-size: 48px;
                }
            }
        }
    }
}

.social-enter-active,
.social-leave-active {
    transition: all 0.4s ease;
}

.social-enter-from,
.social-leave-to {
    opacity: 0;
    transform: translateX(-10%);
}
</style>
