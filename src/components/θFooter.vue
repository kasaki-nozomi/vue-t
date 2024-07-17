<template>
    <div id="footer" class="footer">
        <div class="footer-left">
            <div class="footer-info">
                <div class="footer-info-detail">
                    <div>公司地址</div>
                    <div>浙江省杭州市西湖区留下街道天目山路住538号4050室</div>
                </div>
                <div class="footer-info-detail">
                    <div>电话</div>
                    <div>17673624006</div>
                </div>
                <div class="footer-info-detail">
                    <div>邮箱</div>
                    <div>pengyuhong@kongniaostudio.com</div>
                </div>
                <div class="footer-info-icp" @click="openICP">{{ icp }}</div>
            </div>
        </div>
        <div class="footer-right" >
            <div class="wx-qr" @mouseenter="qrShow = true" @mouseleave="qrShow = false">
                <img class="wx" :src="wx" />
                <img class="qr" v-show="qrShow" :src="qr" />
            </div>
            <div v-for="connect in connects" class="button">
                <a :href="connect.url"></a>
                <img :class="connect.code" :src="connect.icon" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const qrShow = ref(false)

const icp = '浙ICP备2024110347号'
const qr = new URL('@/assets/images/qr-code.png', import.meta.url).href
const wx = new URL('@/assets/images/connect-weixin.svg', import.meta.url).href
const connects = [
    {
        code: 'wb',
        url: 'https://weibo.com/u/7174406359',
        icon: new URL('@/assets/images/connect-weibo.svg', import.meta.url).href,
    },
    {
        code: 'zc',
        url: 'https://www.zcool.com.cn/u/26538302',
        icon: new URL('@/assets/images/connect-zhanku.svg', import.meta.url).href,
    },
    {
        code: 'as',
        url: 'https://www.artstation.com/xiaoguainiao',
        icon: new URL('@/assets/images/connect-artstation.svg', import.meta.url).href,
    },
    {
        code: 'gc',
        url: 'https://www.ggac.com/user/151182',
        icon: new URL('@/assets/images/connect-ggac.svg', import.meta.url).href,
    }
]

function openICP() {
    window.open('https://beian.miit.gov.cn/')
}
</script>

<style lang="scss" scoped>
.footer {
    width: 100%;
    height: 260px;
    flex-shrink: 0;
    @include flex-center();

    .footer-left {
        width: 100%;
        height: 100%;
        flex: 2;
        background: rgb(15, 15, 15);
        @include flex-center(flex-start, center, column);

        .footer-info {
            margin-left: 180px;
            div {
                @include flex-center(center, normal);
            }

            .footer-info-detail {
                div {
                    min-width: 144px;
                    line-height: 36px;
                    margin: 8px 0;
                    font-size: 18px;
                    text-align: justify;
                    color: white;
                }

                div:first-child {
                    font-weight: bold;
                }
            }

            .footer-info-icp {
                margin-top: 15px;
                font-size: 16px;
                color: rgba(255, 255, 255, 0.75);
                cursor: pointer;
            }
        }
    }

    .footer-right {
        height: 100%;
        flex: 1.2;
        background: rgb(25, 25, 25);
        gap: 34px;
        @include flex-center();

        div {
            position: relative;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: rgb(50, 50, 50);
            transition: all 0.25s;
            cursor: pointer;
            @include flex-center();

            &:hover {
                filter: brightness(1.5);
            }

            a {
                position: absolute;
                width: 100%;
                height: 100%;
            }

            .qr {
                position: absolute;
                bottom: 120%;
                width: 250px;
            }

            .wx {
                width: 50px;
            }

            .wb {
                width: 54px;
            }

            .zc {
                width: 54px;
            }

            .as {
                width: 45px;
            }

            .gc {
                width: 32px;
            }
        }
    }
}

@include setPhoneContent {
    .footer {
        height: 1250px;
        flex-direction: column-reverse;

        .footer-left {
            @include flex-center();

            .footer-info {
                margin-top: 10px;
                margin-left: 0;

                .footer-info-detail {
                    div {
                        min-width: 369px;
                        line-height: 90px;
                        margin: 20px 0;
                        font-size: 52px;
                        text-align: justify;
                        color: white;
                    }
                }

                .footer-info-icp {
                    margin-top: 36px;
                    font-size: 48px;
                }
            }
        }

        .footer-right {
            width: 100%;
            flex: 1.4;
            gap: 80px;

            div {
                width: 205px;
                height: 205px;

                .qr {
                    bottom: 120%;
                    width: 500px;
                }

                .wx {
                    width: 120px;
                }

                .wb {
                    width: 130px;
                }

                .zc {
                    width: 130px;
                }

                .as {
                    width: 112px;
                }

                .gc {
                    width: 84px;
                }
            }
        }
    }
}

.connect-enter-active,
.connect-leave-active {
    transition: all 0.4s ease;
}

.connect-enter-from,
.connect-leave-to {
    opacity: 0;
    transform: translateX(-10%);
}
</style>
