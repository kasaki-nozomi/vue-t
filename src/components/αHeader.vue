<template>
    <div id="header" class="header">
        <div class="header-back"></div>
        <div class="header-logo button" @click="goHome">
            <img class="logo" :src="logo" />
        </div>
        <div v-if="!store.pad" class="header-tab">
            <div class="header-tab-item button" @click="tabClickPC('header')">首页</div>
            <div class="header-tab-item button" @click="tabClickPC('company')">公司介绍</div>
            <div class="header-tab-item button" @click="tabClickPC('footer')">联系我们</div>
            <div class="header-tab-button" :class="{ open: projectShow }" @click="projectShow = !projectShow" @mouseenter="projectShow = true">
                <Transition name="tab-button">
                    <img v-if="projectShow" :src="close" />
                    <img v-else :src="open" />
                </Transition>
            </div>
            <Transition name="project" mode="out-in">
                <div class="header-projects" v-show="projectShow">
                    <Tab />
                </div>
            </Transition> 
        </div>
        <div v-else class="header-tab-mobile">
            <Transition name="tab-group" mode="out-in">
                <div class="header-tab-mobile-group" v-show="tabShow" >
                    <div class="header-tab-mobile-item" v-for="capacity in capacitys" @click.stop="tabClick(capacity.link)">
                        {{ capacity.title_cn }}
                    </div>
                </div>
            </Transition>
            <div class="header-tab-mobile-button" :class="{ open: tabShow }" @click.stop="tabShow = !tabShow">
                <Transition name="tab-button">
                    <img v-if="tabShow" :src="close" />
                    <img v-else :src="open" />
                </Transition>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '@/store'

import Tab from '@/components/header/Tab.vue'
import capacitys from '@/resource/home/capacity'

const route = useRoute()
const router = useRouter()
const store = useStore()

const logo = new URL('@/assets/images/header/logo.png', import.meta.url).href

const close = new URL('@/assets/images/header/close.svg', import.meta.url).href

const open = new URL('@/assets/images/header/open.svg', import.meta.url).href

const tabShow = ref(false)
const projectShow = ref(false)

let elscroll = null
onMounted(() => {
    elscroll = document.getElementsByClassName('el-scrollbar__wrap')[0]
})

function goHome() {
    if (route.name !== 'home') router.push({ path: '/' })
}

function tabClick(link) {
    tabShow.value = false
    router.push(link)
}

function tabClickPC(tab) {
    tabShow.value = false
    if (tab === 'header') return elscroll.scrollTo({ top: 0, behavior: 'smooth' })
    if (route.name !== 'home' && tab === 'company') return router.push({ path: '/', query: { position: 'company' } })
    elscroll.scrollTo({ top: document.getElementById(tab).offsetTop, behavior: 'smooth' })
}

document.documentElement.addEventListener('click', () => {
    projectShow.value = false
    tabShow.value = false
})
</script>

<style lang="scss" scoped>
.header {
    z-index: 20;
    position: fixed;
    top: 0;
    width: 1920px;
    height: 90PX;
    padding: 0 100PX 0 120PX;
    background: black;
    @include flex-center(center, space-between);

    .header-back {
        z-index: 5;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: black;
    }

    .header-logo {
        z-index: 10;
        position: relative;
        cursor: pointer;

        img {
            display: block;
            height: 44PX;
        }
    }

    .header-tab {
        position: relative;
        height: 100%;
        @include flex-center();

        .header-tab-item {
            z-index: 10;
            height: 48PX;
            margin: 0 14PX;
            padding: 0 18PX;
            font-size: 18PX;
            border-radius: 48PX;
            background: transparent;
            color: rgba(255, 255, 255, 0.6);
            transition: all 0.2s;
            cursor: pointer;
            @include flex-center();

            &:hover {
                padding: 0 28PX;
                letter-spacing: 1PX;
                color: white;
                background: rgba(255, 255, 255, 0.1);
            }
        }

        .header-tab-button {
            z-index: 10;
            align-self: start;
            height: 96PX;
            width: 90PX;
            margin-left: 20PX;
            padding-top: 6PX;
            background: rgba(50, 50, 60, 1);
            transition: all 0.2s ease;
            cursor: pointer;
            @include flex-center();

            &.open {
                background: rgba(20, 20, 20, 1);
            }

            img {
                position: absolute;
                width: 42PX;
            }
        }

        .header-projects {
            z-index: 1;
            position: absolute;
            top: 100%;
            right: 0;
            @include flex-center(center, normal, column);
        }
    }
}

@include setPadContent {
    .header {
        height: 72PX;
        padding: 0 82px;

        .header-logo {
            img {
                height: 36PX;
                margin: 0;
            }
        }

        .header-tab-mobile {
            position: relative;
            height: 100%;

            .header-tab-mobile-group {
                position: absolute;
                right: 0;
                top: 100%;
                padding: 6PX 0;
                background: rgba(20, 20, 20, 1);
                @include flex-center(flex-end, normal, column);

                .header-tab-mobile-item {
                    position: relative;
                    width: 150PX;
                    height: 50PX;
                    padding: 0 20PX;
                    font-size: 14PX;
                    color: white;
                    transition: all 0.15s;
                    cursor: pointer;
                    @include flex-center(center, normal);

                    &:hover {
                        background: rgb(40, 40, 40);
                    }
                }
            }

            .header-tab-mobile-button {
                z-index: 10;
                position: absolute;
                top: 0;
                right: 0;
                height: 78PX;
                width: 74PX;
                padding-top: 6PX;
                background: rgba(50, 50, 60, 1);
                transition: all 0.2s ease;
                cursor: pointer;
                @include flex-center();

                &.open {
                    background: rgba(20, 20, 20, 1);
                }

                img {
                    position: absolute;
                    width: 34PX;
                }
            }
        }
    }
}

@include setPhoneContent {
    .header {
        height: 300px;
        padding: 0 140px;

        .header-logo {
            img {
                height: 140px;
            }
        }

        .header-tab-mobile {
            .header-tab-mobile-group {
                right: 0;
                padding: 25px 0;

                .header-tab-mobile-item {
                    width: 580px;
                    height: 222px;
                    padding: 0 120px;
                    font-size: 60px;
                    cursor: pointer;
                }
            }
            
            .header-tab-mobile-button {
                height: 320px;
                width: 290px;
                padding-top: 25px;

                img {
                    width: 140px;
                }
            } 
        }
    }
}

.tab-button-enter-active {
    transition: all 0.4s ease;
    transition-delay: 0.1s;
}
.tab-button-leave-active {
    transition: all 0.4s ease;
}

.tab-button-enter-from,
.tab-button-leave-to  {
    opacity: 0;
    transform: translateY(-80%);
}

.tab-group-enter-active,
.tab-group-leave-active {
    transition: all 0.4s ease;
}

.tab-group-enter-from,
.tab-group-leave-to  {
    opacity: 0;
    transform: translateY(-100%);
}

.project-enter-active,
.project-leave-active {
    transition: all 0.4s ease;
}

.project-enter-from,
.project-leave-to {
    opacity: 0;
    transform: translateY(-50%);
}
</style>
