<template>
    <div class="enviroment">
        <div class="enviroment-content">
            <div v-if="enviroment.length > 1" class="left button" @click="goLeft">
                <img :src="left" />
            </div>
            <div class="enviroment-list">
                <div v-for="(item, index) in enviroment" :key="item.id">
                    <Transition :name="direction" mode="out-in">
                        <div class="enviroment-item" v-show="current === index">
                            <div class="image-list" :class="{ double: item.image.length === 2 }">
                                <img v-for="(image, index) in item.image" :key="index" :src="image" />
                            </div>
                            <div class="info">
                                <div class="title">
                                    <div v-if="item.title">{{ item.title }}</div>
                                    <div v-if="item.title_en">{{ item.title_en }}</div>
                                </div>
                                <div class="description">
                                    <div v-if="item.description" v-html="item.description"></div>
                                    <div v-if="item.description_en" v-html="item.description_en"></div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
            <div v-if="enviroment.length > 1" class="right button" @click="goRight">
                <img :src="right" />
            </div>
        </div>
        <div v-if="enviroment.length > 1" class="enviroment-aside">
            <div class="aside-list">
                <div v-for="(item, index) in enviroment" :key="item.id" @click="goIndex(index)">
                    <div v-show="current === index" class="image">
                        <img :src="item.image[0]" />
                    </div>
                    <div v-show="current !== index" class="point">
                        <div></div>
                    </div>
                    <div class="line" v-show="index !== enviroment.length - 1">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { left, right } from '@/resource/game'

import { ref } from 'vue'

const current = ref(0)

const direction = ref('left')

function goLeft() {
    direction.value = 'left'
    current.value = (current.value - 1) < 0 ? enviroment.length - 1 : (current.value - 1)
}

function goRight() {
    direction.value = 'right'
    current.value = (current.value + 1) % enviroment.length
}

function goIndex(index) {
    if (index === current.value) return
    direction.value = index > current.value ? 'right' : 'left'
    current.value = index
}

const enviroment = [
    {
        id: 1,
        title: '王都：释若耶',
        title_en: '',
        icon: '',
        image: [
            new URL('@/assets/images/game/04-enviroment/list/01.jpg', import.meta.url).href
        ],
        description: '漫长岁月后，地表孕育出新的有机体，继而诞生了新的生命与文明。新生命始在方舟的土壤上生长，也就是所谓的“新人类”。<br>他们依托于信标中心所扎根的大陆生存，建立了政府与组织。然而，鲜有人知晓信标背后隐藏的真实用途，与意识尘汞的危险性。他们依赖意识尘汞运行所带来的能源“镀”，建造了属于自己的文明与王都——释若耶。这也加剧了信标对国度的侵蚀。',
        description_en: ''
    },
    {
        id: 2,
        title: '王都：释若耶',
        title_en: '',
        icon: '',
        image: [
            new URL('@/assets/images/game/04-enviroment/list/02.jpg', import.meta.url).href
        ],
        description: '漫长岁月后，地表孕育出新的有机体，继而诞生了新的生命与文明。新生命始在方舟的土壤上生长，也就是所谓的“新人类”。<br>他们依托于信标中心所扎根的大陆生存，建立了政府与组织。然而，鲜有人知晓信标背后隐藏的真实用途，与意识尘汞的危险性。他们依赖意识尘汞运行所带来的能源“镀”，建造了属于自己的文明与王都——释若耶。这也加剧了信标对国度的侵蚀。',
        description_en: ''
    },
    {
        id: 3,
        title: '王都：释若耶',
        title_en: '',
        icon: '',
        image: [
            new URL('@/assets/images/game/04-enviroment/list/03.jpg', import.meta.url).href
        ],
        description: '漫长岁月后，地表孕育出新的有机体，继而诞生了新的生命与文明。新生命始在方舟的土壤上生长，也就是所谓的“新人类”。<br>他们依托于信标中心所扎根的大陆生存，建立了政府与组织。然而，鲜有人知晓信标背后隐藏的真实用途，与意识尘汞的危险性。他们依赖意识尘汞运行所带来的能源“镀”，建造了属于自己的文明与王都——释若耶。这也加剧了信标对国度的侵蚀。',
        description_en: ''
    },
    {
        id: 4,
        title: '工业区大坝城市“蜉蝣”',
        title_en: '',
        icon: '',
        image: [
            new URL('@/assets/images/game/04-enviroment/list/04.jpg', import.meta.url).href
        ],
        description: '蜉蝣是方舟的最底层——长源国境中最为贫困、环境最为恶劣的地区，充斥着沙漠与尘土，也是长源国家犯人的流放之地，却也是受到侵蚀影响较少的地区。<br>尽管被激活的意识尘汞粒子稀少，侵蚀的减轻使得这里的镀银矿资源也相应匮乏，导致当地经济难以实现突破与发展。',
        description_en: ''
    },
    {
        id: 5,
        title: '工业区大坝城市“蜉蝣”',
        title_en: '',
        icon: '',
        image: [
            new URL('@/assets/images/game/04-enviroment/list/05.jpg', import.meta.url).href
        ],
        description: '蜉蝣是方舟的最底层——长源国境中最为贫困、环境最为恶劣的地区，充斥着沙漠与尘土，也是长源国家犯人的流放之地，却也是受到侵蚀影响较少的地区。<br>尽管被激活的意识尘汞粒子稀少，侵蚀的减轻使得这里的镀银矿资源也相应匮乏，导致当地经济难以实现突破与发展。',
        description_en: ''
    },
    {
        id: 6,
        title: '工业区大坝城市“蜉蝣”',
        title_en: '',
        icon: '',
        image: [
            new URL('@/assets/images/game/04-enviroment/list/06.jpg', import.meta.url).href
        ],
        description: '蜉蝣是方舟的最底层——长源国境中最为贫困、环境最为恶劣的地区，充斥着沙漠与尘土，也是长源国家犯人的流放之地，却也是受到侵蚀影响较少的地区。<br>尽管被激活的意识尘汞粒子稀少，侵蚀的减轻使得这里的镀银矿资源也相应匮乏，导致当地经济难以实现突破与发展。',
        description_en: ''
    },
    {
        id: 7,
        title: '“世界边缘”',
        title_en: '',
        icon: '',
        image: [
            new URL('@/assets/images/game/04-enviroment/list/07.jpg', import.meta.url).href
        ],
        description: '在混沌宙之中，无数的信标算法正悄然撕裂着表面看似宁静的世界。超验深渊仿佛无数膨胀的气球，不断与物质世界发生碰撞。生命体的情绪波动如同催化剂，加速了这些“气球”的碰撞频率，仿佛幽夜逐渐吞噬光明。<br>斥力和引力的聚合和错动，导致意识世界和意识世界的交界处（海绵被侵蚀的超验深渊）元素和能量活跃，容易导致能量不平衡<br>界冕人制造信标算法，并将其安插在物质世界的边缘，进一步加剧了物质世界和意识世界的碰撞，信标算法作为寻找裂缝的标志物。',
        description_en: ''
    },
    {
        id: 8,
        title: '“世界边缘”',
        title_en: '',
        icon: '',
        image: [
            new URL('@/assets/images/game/04-enviroment/list/08.jpg', import.meta.url).href
        ],
        description: '在混沌宙之中，无数的信标算法正悄然撕裂着表面看似宁静的世界。超验深渊仿佛无数膨胀的气球，不断与物质世界发生碰撞。生命体的情绪波动如同催化剂，加速了这些“气球”的碰撞频率，仿佛幽夜逐渐吞噬光明。<br>斥力和引力的聚合和错动，导致意识世界和意识世界的交界处（海绵被侵蚀的超验深渊）元素和能量活跃，容易导致能量不平衡<br>界冕人制造信标算法，并将其安插在物质世界的边缘，进一步加剧了物质世界和意识世界的碰撞，信标算法作为寻找裂缝的标志物。',
        description_en: ''
    },
    {
        id: 9,
        title: '“世界边缘”',
        title_en: '',
        icon: '',
        image: [
            new URL('@/assets/images/game/04-enviroment/list/09.jpg', import.meta.url).href
        ],
        description: '在混沌宙之中，无数的信标算法正悄然撕裂着表面看似宁静的世界。超验深渊仿佛无数膨胀的气球，不断与物质世界发生碰撞。生命体的情绪波动如同催化剂，加速了这些“气球”的碰撞频率，仿佛幽夜逐渐吞噬光明。<br>斥力和引力的聚合和错动，导致意识世界和意识世界的交界处（海绵被侵蚀的超验深渊）元素和能量活跃，容易导致能量不平衡<br>界冕人制造信标算法，并将其安插在物质世界的边缘，进一步加剧了物质世界和意识世界的碰撞，信标算法作为寻找裂缝的标志物。',
        description_en: ''
    }
]
</script>

<style lang="scss" scoped>
.enviroment {
    position: relative;
    width: auto-value(1440);
    @include flex-center();

    .enviroment-content {
        @include flex-center();

        .left {
            z-index: 10;
            position: relative;
            margin-right: auto-value(60);

            img {
                width: auto-value(40);
            }
        }

        .right {
            z-index: 10;
            position: relative;
            margin-left: auto-value(60);

            img {
                width: auto-value(40);
            }
        }

        .enviroment-list {
            position: relative;
            width: auto-value(1000);
            height: auto-value(1000);
            @include flex-center();

            >div {
                position: absolute;
                height: 100%;
                @include flex-center();
            }

            .enviroment-item {
                .image-list {
                    position: relative;
                    @include flex-center();

                    img {
                        width: auto-value(920);
                        border-radius: auto-value(2);
                        border: auto-value(1) solid rgba(255, 255, 255, 0.2);
                    }

                    &.double {
                        height: auto-value(480);

                        img {
                            position: absolute;
                            width: auto-value(720);
                        }

                        img:first-child {
                            transform: translate(-20%, -20%);
                        }

                        img:last-child {
                            transform: translate(20%, 20%);
                        }
                    }
                }

                .info {
                    margin-bottom: auto-value(-60);
                    @include flex-center(center, center, column);

                    .title {
                        @include flex-center();

                        div {
                            max-width: auto-value(800);
                            font-size: auto-value(18);
                            margin: 0 auto-value(12);
                            margin-top: auto-value(36);
                        }
                    }

                    .description {
                        @include flex-center(center, center, column);

                        div {
                            max-width: auto-value(900);
                            margin-top: auto-value(20);
                            line-height: 1.8;
                            font-size: auto-value(14);
                            text-align: center;
                            color: rgba(255, 255, 255, 0.5);
                        }
                    }
                }
            }
        }
    }

    .enviroment-aside {
        position: absolute;
        right: 0;

        .aside-list {
            @include flex-center(center, center, column);

            >div {
                .image {
                    position: relative;
                    margin: auto-value(20) 0;
                    cursor: pointer;
                    @include flex-center();

                    img {
                        width: auto-value(38);
                        height: auto-value(38);
                        border-radius: 50%;
                    }

                    &::after {
                        position: absolute;
                        content: '';
                        width: auto-value(56);
                        height: auto-value(56);
                        border-radius: 50%;
                        border: auto-value(1) solid rgba(255, 255, 255, 0.15);
                    }
                }

                .point {
                    position: relative;
                    width: auto-value(18);
                    height: auto-value(18);
                    margin: auto-value(12) 0;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.2);
                    cursor: pointer;
                    @include flex-center();

                    div {
                        position: absolute;
                        width: 48%;
                        height: 48%;
                        border-radius: 50%;
                        background: rgba(255, 255, 255, 0.8);
                    }
                }

                .line {
                    @include flex-center(center, center, column);

                    div:nth-child(1) {
                        width: auto-value(4);
                        height: auto-value(4);
                        border-radius: auto-value(2);
                        background: rgba(255, 255, 255, 0.2);
                    }

                    div:nth-child(2) {
                        width: auto-value(2);
                        height: auto-value(40);
                        background: rgba(255, 255, 255, 0.15);
                    }

                    div:nth-child(3) {
                        width: auto-value(4);
                        height: auto-value(4);
                        border-radius: auto-value(2);
                        background: rgba(255, 255, 255, 0.2);
                    }
                }
            }
        }
    }
}

.left-enter-active,
.right-enter-active {
    transition: all 0.4s ease;
    transition-delay: 0.32s;
}

.left-leave-active,
.right-leave-active {
    transition: all 0.4s ease;
}

.left-enter-from,
.right-leave-to {
    opacity: 0;
    transform: translateX(auto-value(-60));
}

.left-leave-to,
.right-enter-from {
    opacity: 0;
    transform: translateX(auto-value(60));
}
</style>