<template>
    <div class="capacity">
        <div class="capacity-box">
            <div class="capacity-title">
                <img :src="title" />
            </div>
            <div class="capacity-list">
                <div class="capacity-item" v-for="(capacity, index) of capacitys" @click="!store.phone && router.push(capacity.link)" @mouseenter.stop="current = index" @mouseleave.stop="current = null">
                    <Transition name="capacity" mode="out-in">
                        <img v-show="!store.phone && current === index" :src="capacity.background" />
                    </Transition>
                    <div class="capacity-content">
                        <div class="order">{{ capacity.order }}</div>
                        <div class="right">
                            <div class="title" v-html="capacity.title"></div>
                            <div class="desc">{{ capacity.desc }}</div>
                            <div class="more" v-if="store.phone" @click="router.push(capacity.link)">
                                <div>See more</div>
                                <img :src="more" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'
import capacitys from '@/resource/home/capacity'

const router = useRouter()
const store = useStore()

const title = new URL('@/assets/images/home/capacity/title.svg', import.meta.url).href
const more = new URL('@/assets/images/home/capacity/more.svg', import.meta.url).href
const current = ref(null)
</script>

<style lang="scss" scoped>
.capacity {
    width: 1920px;
    padding: 220px 0 200px 0;
    @include background('home/capacity/background.png');

    .capacity-box {
        .capacity-title {
            >img {
                height: 64px;
                margin-left: 220px;
            }
        }

        .capacity-list {
            margin-top: 80px;
            @include flex-center(center, normal, column);

            .capacity-item {
                position: relative;
                width: 100%;
                height: 210px;
                cursor: pointer;
                transition: all 0.4s ease;
                border-top: 1px solid rgba(80, 80, 80, 0.25);
                @include flex-center(center, center);

                &:last-child {
                    border-bottom: 1px solid rgba(80, 80, 80, 0.25);
                }

                &:hover {
                    filter: brightness(1.2);
                }

                >img {
                    position: absolute;
                    width: 1920px;
                }

                .capacity-content {
                    width: 1400px;
                    @include flex-center(center, normal);

                    .order {
                        flex: 2;
                        font-size: 20px;
                        color: rgb(180, 180, 180);
                    }

                    .right {
                        flex: 8;
                        @include flex-center(center, normal);

                        .title {
                            flex: 3;
                            font-size: 26px;
                            font-weight: lighter;
                            line-height: 42px;
                            color: rgba(255, 255, 255, 0.9);
                        }

                        .desc {
                            flex: 5;
                            font-size: 16px;
                            line-height: 32px;
                            color: rgba(255, 255, 255, 0.5);
                        }
                    }
                }
            }
        }
    }
}

@include setPhoneContent {
    .capacity {
        padding: 400px 0 400px 0;

        .capacity-box {
            .capacity-title {
                >img {
                    height: 184px;
                    margin-left: 133px;
                }
            }

            .capacity-list {
                margin-top: 160px;
                gap: 60px;
                @include flex-center(center, center, column);

                .capacity-item {
                    width: 1515px;
                    height: auto;
                    border: none;

                    .capacity-content {
                        width: 100%;
                        margin-top: 50px;
                        @include flex-center(normal, center);

                        .order {
                            flex: 1;
                            font-size: 52px;
                            line-height: 92px;
                        }

                        .right {
                            flex: 3;
                            @include flex-center(normal, normal, column);

                            .title {
                                font-size: 62px;
                                line-height: 92px;
                            }

                            .desc {
                                margin-top: 72px;
                                font-size: 54px;
                                line-height: 110px;
                                text-align: justify;
                            }

                            .more {
                                margin-top: 40px;
                                font-size: 62px;
                                color: rgba(120, 150, 255, 1);
                                @include flex-center(center, normal);

                                >img {
                                    width: 66px;
                                    margin: 14px 0 0 14px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

.capacity-enter-active,
.capacity-leave-active {
    transition: all 0.8s ease;
}

.capacity-enter-from,
.capacity-leave-to {
    opacity: 0;
    transform: translateX(5%);
}
</style>
