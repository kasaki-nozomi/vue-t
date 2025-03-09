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
                            <div class="title">{{ capacity.title }}</div>
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

const router = useRouter()
const store = useStore()

const title = new URL('@/assets/images/home/capacity/title.svg', import.meta.url).href
const more = new URL('@/assets/images/home/capacity/more.svg', import.meta.url).href
const current = ref(null)

const capacitys = [
    {
        order: 'First',
        title: 'Game Project - 游戏项目',
        desc: '不远的未来我们将打造一款独属于中国的艺术3A游戏。在此之前，我们工作室的业务已全面覆盖游戏研发的数个重要环节，空鸟文化汇聚了来自不同背景、拥有各异技能却同样热爱游戏的精英人士，力求为玩家带来一场难忘且震撼的3A游戏体验',
        background: new URL('@/assets/images/home/capacity/game.png', import.meta.url).href,
        link: '/project'
    },
    {
        order: 'Second',
        title: 'IP Incubation - IP孵化',
        desc: '概念设计是空鸟文化核心业务，我们专注于项目方的独特需求。凭借专业素养和美术创意，量身打造充满创意的视觉设计，我们将在产品制作的各个阶段，将繁杂的设计巧妙提升至理性思维的高度，为每一个项目注入独特的灵魂',
        background: new URL('@/assets/images/home/capacity/ip.png', import.meta.url).href,
        link: '/ip'
    },
    {
        order: 'Third',
        title: 'Strategic Outsourcing - 商业外包',
        desc: '空鸟文化一直致力于打造具有现象级影响力的IP。我们的宗旨在于帮助各种娱乐项目实现从零到一的概念落地。在过去几年，我们的工作室成功孵化了多个视觉创意IP，涵盖了古风、科幻等多个领域，为各类企业提供了丰富的创意资源和概念支持',
        background: new URL('@/assets/images/home/capacity/strategic.png', import.meta.url).href,
        link: '/business'
    }
]
</script>

<style lang="scss" scoped>
.capacity {
    width: 1920px;
    padding: 220px 0 200px 0;

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
                height: 210px;
                cursor: pointer;
                transition: all 0.4s ease;
                @include flex-center(center, normal);

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
                        flex: 1;
                        font-size: 20px;
                        color: rgb(180, 180, 180);
                    }

                    .right {
                        flex: 8;
                        @include flex-center(center, normal);

                        .title {
                            flex: 3;
                            font-size: 26px;
                            font-weight: bold;
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
    transition: all 0.4s ease;
}

.capacity-enter-from,
.capacity-leave-to {
    opacity: 0;
}
</style>
