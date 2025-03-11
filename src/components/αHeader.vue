<template>
    <div id="header" class="header">
        <div class="header-logo button" @click="goHome">
            <img class="logo" :src="logo" />
        </div>
        <div v-if="!store.pad" class="header-tab">
            <div class="header-tab-item button" @click="tabClick('header')"><div class="text"><div class="inner">首页</div></div></div>
            <div class="header-tab-item" @click.stop="projectShow = true" @mouseenter.stop="projectShow = true" @mouseleave.stop="projectShow = false">
                <div class="text"><div class="inner">历史项目</div></div>
                <Transition name="project" mode="out-in">
                    <div class="header-projects" v-show="projectShow">
                        <!-- <div v-for="project in projects">
                            <div class="header-projects-item" @click.stop="projectClick(project.symbol)">{{ project.title }}</div>
                        </div> -->
                    </div>
                </Transition> 
            </div>
            <div class="header-tab-item button" @click="tabClick('company')"><div class="text"><div class="inner">公司介绍</div></div></div>
            <div class="header-tab-item button" @click="tabClick('footer')"><div class="text"><div class="inner">联系我们</div></div></div>
        </div>
        <div v-else class="header-tab-m">
            <div class="header-tab-button" @click.stop="tabGroupClick">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Transition name="tab-group" mode="out-in">
                <div class="header-tab-group" v-show="tabShow" >
                    <div class="header-tab-item-m" @click="tabClick('header')" @mouseenter="projectShow = false">首页</div>
                    <div class="header-tab-item-m" @click.stop="projectShow = true" @mouseenter="projectShow = true">历史项目</div>
                    <div class="header-tab-item-m" @click="tabClick('company')" @mouseenter="projectShow = false">公司介绍</div>
                    <div class="header-tab-item-m" @click="tabClick('footer')" @mouseenter="projectShow = false">联系我们</div>
                </div>
            </Transition>
            <Transition name="project-m" mode="out-in">
                <div class="header-projects-m" v-show="projectShow">
                    <!-- <div v-for="project in projects">
                        <div class="header-projects-item-m" @click="projectClick(project.symbol)">{{ project.title }}</div>
                    </div> -->
                </div>
            </Transition>
        </div>
    </div>
</template>

<script setup>
import { nextTick, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '@/store'
// import { projects } from '@/utils/projects'

const route = useRoute()
const router = useRouter()
const store = useStore()

const logo = new URL('@/assets/images/header/logo.png', import.meta.url).href

const tabShow = ref(false)
const projectShow = ref(false)

let elscroll = null
onMounted(() => {
    elscroll = document.getElementsByClassName('el-scrollbar__wrap')[0]
})

function goHome() {
    if (route.name !== 'home') router.push({ path: '/' })
}

function tabGroupClick() {
    tabShow.value = !tabShow.value
    if (!tabShow.value) projectShow.value = false
}

function tabClick(tab) {
    if (tab === 'header') {
        elscroll.scrollTo({ top: 0, behavior: 'smooth' })
        return
    }
    if (route.name !== 'home' && tab === 'company') {
        router.push({ path: '/', query: { position: 'company' } })
        return
    }
    tabShow.value = false
    projectShow.value = false
    elscroll.scrollTo({ top: document.getElementById(tab).offsetTop, behavior: 'smooth' })
}

function projectClick(symbol) {
    tabShow.value = false
    projectShow.value = false
    router.push({ path: '/info', query: { project: symbol } })
}

document.documentElement.addEventListener('click', () => {
    tabShow.value = false
    projectShow.value = false
})
</script>

<style lang="scss" scoped>
.header {
    z-index: 20;
    position: fixed;
    top: 0;
    width: 1920px;
    height: 100PX;
    padding: 0 100px;
    background: black;
    @include flex-center(center, space-between);

    .header-logo {
        cursor: pointer;

        img {
            height: 44PX;
        }
    }

    .header-tab {
        position: relative;
        height: 100%;
        @include flex-center();

        .header-tab-item {
            position: relative;
            height: 100%;
            font-size: 20PX;
            color: rgba(255, 255, 255, 0.8);
            background: black;
            cursor: pointer;
            @include flex-center();

            .text {
                z-index: 20;
                position: relative;
                height: 100%;
                padding: 0 10PX;
                background: black;
                @include flex-center();

                .inner {
                    height: 48PX;
                    padding: 0 16PX;
                    border-radius: 48PX;
                    color: rgba(255, 255, 255, 0.8);
                    background: transparent;
                    transition: all 0.2s;
                    cursor: pointer;
                    @include flex-center();

                    &:hover {
                        color: white;
                    }
                }
            }
        }

        >:not(.header-tab-item:nth-child(2)) {
            .text {
                .inner {
                    &:hover {
                        padding: 0 26PX;
                        letter-spacing: 1PX;
                        background: rgb(50, 50, 50);
                    }
                }
            }
        }

        .header-projects {
            z-index: 10;
            position: absolute;
            top: 100%;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(5PX);
            -webkit-backdrop-filter: blur(5PX);
            transform-origin: top center;
            @include flex-center(center, normal, column);

            .header-projects-item {
                width: 145PX;
                padding: 15PX 0;
                font-size: 16PX;
                color: white;
                cursor: pointer;
                transition: all 0.15s;
                @include flex-center();

                &:hover {
                    background: rgba(0, 0, 0, 0.5);
                }
            }
        }
    }
}

@include setPadContent {
    .header {
        height: 86PX;
        padding: 0 86px;

        .header-logo {
            gap: 15PX;

            img {
                height: 40PX;
                margin: 0;
            }
        }

        .header-tab-m {
            position: relative;
            height: 100%;
            @include flex-center();

            .header-tab-button {
                gap: 6PX;
                cursor: pointer;
                @include flex-center(center, normal, column);

                div {
                    width: 26PX;
                    height: 3PX;
                    background: white;
                }
            }

            .header-tab-group {
                z-index: 10;
                position: absolute;
                right: -24PX;
                top: 100%;
                overflow: hidden;
                transform-origin: 65% top;
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(5PX);
                -webkit-backdrop-filter: blur(5PX);
                @include flex-center(flex-end, normal, column);

                .header-tab-item-m {
                    position: relative;
                    width: 120PX;
                    padding: 12PX 24PX;
                    font-size: 18PX;
                    text-align: right;
                    white-space: nowrap;
                    color: white;
                    transition: all 0.15s;
                    cursor: pointer;

                    &:hover {
                        background: rgba(0, 0, 0, 0.5);
                    }
                }
            }

            .header-projects-m {
                position: absolute;
                top: 100%;
                right: calc(120PX - 24PX);
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(5PX);
                -webkit-backdrop-filter: blur(5PX);
                transform-origin: right 15%;
                @include flex-center(center, normal, column);

                .header-projects-item-m {
                    width: 130PX;
                    padding: 10PX;
                    padding: 12PX 0;
                    font-size: 15PX;
                    color: white;
                    cursor: pointer;
                    @include flex-center();

                    &:hover {
                        background: rgba(0, 0, 0, 0.5);
                    }
                }
            }
        }
    }
}

@include setPhoneContent {
    .header {
        height: 72PX;
        padding: 0 100px;

        .header-logo {
            gap: 8PX;

            img {
                height: 28PX;
            }
        }

        .header-tab-m {
            .header-tab-button {
                gap: 5PX;

                div {
                    width: 22PX;
                    height: 3PX;
                    background: white;
                }
            }

            .header-tab-group {
                right: -20PX;

                .header-tab-item-m {
                    width: 100PX;
                    padding: 12PX 20PX;
                    font-size: 15PX;
                }
            }

            .header-projects-m {
                right: calc(100PX - 20PX);
            }
        }
    }
}

.tab-group-enter-active,
.tab-group-leave-active {
    transition: all 0.28s ease;
}

.tab-group-enter-from,
.tab-group-leave-to  {
    opacity: 0;
    transform: scale(0.5);
}

.project-enter-active,
.project-leave-active,
.project-m-enter-active,
.project-m-leave-active {
    transition: all 0.28s ease;
}

.project-enter-from,
.project-leave-to {
    opacity: 0;
    transform: translateY(-50%);
}

.project-m-enter-from,
.project-m-leave-to  {
    opacity: 0;
    transform: translateX(50%);
}
</style>
