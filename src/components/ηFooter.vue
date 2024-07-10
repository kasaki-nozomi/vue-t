<template>
    <div id="footer" class="footer">
        <div class="footer-left">
            <div class="footer-info">
                <div class="footer-info-detail">
                    <div>公司地址</div>
                    <div>浙江省杭州市上城区南山路218号1B-217</div>
                </div>
                <div class="footer-info-detail">
                    <div>电话</div>
                    <div>1325555987</div>
                </div>
                <div class="footer-info-detail">
                    <div>邮箱</div>
                    <div>ygb@caa.edu.cn</div>
                </div>
            </div>
            <div class="connect-list" v-show="store.pad">
                <div>
                    <wechat @mouseenter="connect = 'wc'" @mouseleave="connect = null"></wechat>
                    <Transition name="connect-m" mode="out-in"><img v-if="connect === 'wc'" :src="wc" /></Transition>
                </div>
                <div>
                    <weibo @mouseenter="connect = 'wb'" @mouseleave="connect = null"></weibo>
                    <Transition name="connect-m" mode="out-in"><img v-if="connect === 'wb'" :src="wb" /></Transition>
                </div>
                <div>
                    <bilibili @mouseenter="connect = 'bl'" @mouseleave="connect = null"></bilibili>
                    <Transition name="connect-m" mode="out-in"><img v-if="connect === 'bl'" :src="bl" /></Transition>
                </div>
            </div>
        </div>
        <div class="footer-right" v-show="!store.pad">
            <div>
                <wechat @mouseenter="connect = 'wc'" @mouseleave="connect = null"></wechat>
                <Transition name="connect" mode="out-in"><img v-if="connect === 'wc'" :src="wc" /></Transition>
            </div>
            <div>
                <weibo @mouseenter="connect = 'wb'" @mouseleave="connect = null"></weibo>
                <Transition name="connect" mode="out-in"><img v-if="connect === 'wb'" :src="wb" /></Transition>
            </div>
            <div>
                <bilibili @mouseenter="connect = 'bl'" @mouseleave="connect = null"></bilibili>
                <Transition name="connect" mode="out-in"><img v-if="connect === 'bl'" :src="bl" /></Transition>
            </div>
        </div>
    </div>
</template>

<script setup>
import wechat from '@/components/svg/wechat.vue'
import weibo from '@/components/svg/weibo.vue'
import bilibili from '@/components/svg/bilibili.vue'

import { getCurrentInstance, ref } from 'vue'
import { useStore } from '@/store'

const store = useStore()

const connect = ref(null)

const wc = new URL('@/assets/images/connect-wechat.png', import.meta.url).href
const wb = new URL('@/assets/images/connect-weibo.png', import.meta.url).href
const bl = new URL('@/assets/images/connect-bilibili.png', import.meta.url).href
</script>

<style lang="scss" scoped>
.footer {
    width: 100%;
    height: 225PX;
    @include flex-center();

    @include setPadContent {
        height: 280PX;
    }

    .footer-left {
        width: 100%;
        height: 100%;
        padding: 0 25PX;
        flex: 2;
        background: rgb(40, 40, 40);
        @include flex-center(center, center, column);

        .footer-info {
            @include flex-center(flex-start, normal, column);

            div {
                @include flex-center(center, normal);
            }

            .footer-info-detail {
                div {
                    min-width: 105PX;
                    margin: 12PX 0;
                    font-size: 20PX;
                    text-align: justify;
                    color: white;
                }

                div:first-child {
                    font-weight: bold;
                }
            }
        }

        .connect-list {
            margin-top: 15PX;
            gap: 20PX;
            @include flex-center();

            &>div {
                position: relative;
                @include flex-center();

                img {
                    position: absolute;
                    bottom: 120%;
                    width: 180PX;
                    height: 180PX;
                }
            }
        }
    }

    .footer-right {
        height: 100%;
        flex: 1.2;
        background: rgb(50, 50, 50);
        gap: 44px;
        @include flex-center();

        div {
            position: relative;
            width: 88PX;
            height: 88PX;
            border-radius: 50%;
            background: rgb(66, 66, 66);
            cursor: pointer;
            transition: all 0.25s;
            @include flex-center();

            &:hover {
                filter: brightness(1.5);
            }

            img {
                width: 200PX;
                height: 200PX;
                position: absolute;
                right: 105%;
                filter: brightness(0.7);
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

.connect-m-enter-active,
.connect-m-leave-active {
    transition: all 0.4s ease;
}

.connect-m-enter-from,
.connect-m-leave-to {
    opacity: 0;
    transform: translateY(10%);
}
</style>
