<template>
    <div class="worldview">
        <div class="worldview-content">
            <div v-if="worldview.length > 1" class="left button" @click="goLeft">
                <img :src="left" />
            </div>
            <div class="worldview-info" :class="`info-${current}`">
                <img :src="info" />
            </div>
            <div class="worldview-list">
                <div v-for="(item, index) in worldview" :key="item.id">
                    <Transition :name="direction" mode="out-in">
                        <div class="worldview-item" v-show="current === index">
                            <div class="image-list">
                                <img :src="item.image" />
                            </div>
                            <div class="info">
                                <div v-if="item.title" class="title">
                                    <div>{{ item.title }}</div>
                                    <div>{{ item.title_en }}</div>
                                </div>
                                <div v-if="item.description" class="description">
                                    <div>{{ item.description }}</div>
                                    <div>{{ item.description_en }}</div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
            <div v-if="worldview.length > 1 "class="right button" @click="goRight">
                <img :src="right" />
            </div>
        </div>
        <div v-if="worldview.length > 1" class="worldview-aside">
            <div class="aside-list">
                <div v-for="(item, index) in worldview" :key="item.id" @click="goIndex(index)">
                    <img v-show="current === index && item.icon" :src="item.icon" />
                    <div v-show="current !== index" class="point">
                        <div></div>
                    </div>
                    <div class="line" v-show="index !== worldview.length - 1">
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
import { left, right, info } from '@/resource/game'

import { ref } from 'vue'

const current = ref(0)

const direction = ref('left')

function goLeft() {
    direction.value = 'left'
    current.value = (current.value - 1) < 0 ? worldview.length - 1 : (current.value - 1)
}

function goRight() {
    direction.value = 'right'
    current.value = (current.value + 1) % worldview.length
}

function goIndex(index) {
    if (index === current.value) return
    direction.value = index > current.value ? 'right' : 'left'
    current.value = index
}

const worldview = [
    {
        id: 1,
        title: '',
        title_en: '',
        icon: new URL('@/assets/images/game/02-worldview/list/01-icon.png', import.meta.url).href,
        popup: new URL('@/assets/images/game/02-worldview/list/01-popup.png', import.meta.url).href,
        image: new URL('@/assets/images/game/02-worldview/list/01.png', import.meta.url).href,
        description: '',
        description_en: ''
    },
    {
        id: 2,
        title: '',
        title_en: '',
        icon: new URL('@/assets/images/game/02-worldview/list/02-icon.png', import.meta.url).href,
        popup: new URL('@/assets/images/game/02-worldview/list/02-popup.png', import.meta.url).href,
        image: new URL('@/assets/images/game/02-worldview/list/02.png', import.meta.url).href,  
        description: '',
        description_en: ''
    },
    {
        id: 3,
        title: '',
        title_en: '',
        icon: new URL('@/assets/images/game/02-worldview/list/03-icon.png', import.meta.url).href,
        popup: new URL('@/assets/images/game/02-worldview/list/03-popup.png', import.meta.url).href,
        image: new URL('@/assets/images/game/02-worldview/list/03.png', import.meta.url).href,
        description: '',
        description_en: ''
    },
    {
        id: 4,
        title: '',
        title_en: '',
        icon: new URL('@/assets/images/game/02-worldview/list/04-icon.png', import.meta.url).href,
        popup: new URL('@/assets/images/game/02-worldview/list/04-popup.png', import.meta.url).href,
        image: new URL('@/assets/images/game/02-worldview/list/04.png', import.meta.url).href,  
        description: '',
        description_en: ''
    },
    {
        id: 5,
        title: '',
        title_en: '',
        icon: new URL('@/assets/images/game/02-worldview/list/05-icon.png', import.meta.url).href,
        popup: new URL('@/assets/images/game/02-worldview/list/05-popup.png', import.meta.url).href,
        image: new URL('@/assets/images/game/02-worldview/list/05.png', import.meta.url).href,  
        description: '',
        description_en: ''
    },
    {
        id: 6,
        title: '',
        title_en: '',
        icon: new URL('@/assets/images/game/02-worldview/list/06-icon.png', import.meta.url).href,
        popup: new URL('@/assets/images/game/02-worldview/list/06-popup.png', import.meta.url).href,
        image: new URL('@/assets/images/game/02-worldview/list/06.png', import.meta.url).href,  
        description: '',
        description_en: ''
    }
]
</script>

<style lang="scss" scoped>
.worldview {
    position: relative;
    width: auto-value(1440);
    @include flex-center();

    .worldview-content {
        position: relative;
        @include flex-center();

        .left {
            margin-right: auto-value(80);

            img {
                width: auto-value(40);
            }
        }

        .right {
            margin-left: auto-value(80);

            img {
                width: auto-value(40);
            }
        }

        .worldview-info {
            position: absolute;
            right: auto-value(0);
            bottom: auto-value(0);
            transition: all 0.4s ease;
            cursor: pointer;

            img {
                width: auto-value(250);
            }

            &:hover {
                transform: scale(1.1);
            }

            &.info-0 {
                right: auto-value(200);
                bottom: auto-value(280);
            }


            &.info-1 {
                right: auto-value(100);
                bottom: auto-value(320);
            }

            &.info-2 {
                right: auto-value(440);
                bottom: auto-value(160);
            }

            &.info-3 {
                right: auto-value(160);
                bottom: auto-value(250);
            }

            &.info-4 {
                right: auto-value(260);
                bottom: auto-value(220);
            }

            &.info-5 {
                right: auto-value(180);
                bottom: auto-value(260);
            }
        }

        .worldview-list {
            position: relative;
            width: auto-value(1000);
            height: auto-value(1000);
            pointer-events: none;
            @include flex-center();

            >div {
                position: absolute;
                height: 100%;
                @include flex-center();
            }

            .worldview-item {
                .image-list {
                    position: relative;
                    @include flex-center();

                    img {
                        width: auto-value(1020);
                    }
                }

                .info {
                    @include flex-center(center, center, column);

                    .title {
                        margin-bottom: auto-value(15);
                        @include flex-center();

                        div {
                            max-width: auto-value(800);
                            font-size: auto-value(18);
                            margin: 0 auto-value(12);
                        }
                    }

                    .description {
                        @include flex-center(center, center, column);

                        div {
                            max-width: auto-value(900);
                            margin: auto-value(5) 0;
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

    .worldview-aside {
        position: absolute;
        right: 0;

        .aside-list {
            @include flex-center(center, center, column);

            >div {
                img {
                    width: auto-value(100);
                    margin: auto-value(-10) 0;
                    cursor: pointer;
                }

                .point {
                    position: relative;
                    width: auto-value(18);
                    height: auto-value(18);
                    margin: auto-value(20) 0;
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
                        height: auto-value(60);
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
.right-enter-active  {
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