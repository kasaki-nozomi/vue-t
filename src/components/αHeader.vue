<template>
    <div id="header" class="header">
        <div class="header-logo button">
            <img class="logo" :src="logo" />
            <img class="name" :src="name" v-show="!store.phone" />
        </div>
        <div v-if="!store.pad" class="header-tab">
            <div class="header-tab-item button" @click="tabClick('header')">首页</div>
            <div class="header-tab-item" @click.stop="projectShow = true" @mouseenter="projectShow = true" @mouseleave="projectShow = false">
                历史项目
                <div class="empty"></div>
                <Transition name="project" mode="out-in">
                    <div class="header-projects" v-show="projectShow">
                        <div v-for="project in projects">
                            <div class="header-projects-item" @click="projectClick(project.symbol)">{{ project.title }}</div>
                        </div>
                    </div>
                </Transition>
            </div>
            <div class="header-tab-item button" @click="tabClick('company')">公司介绍</div>
            <div class="header-tab-item button" @click="tabClick('footer')">联系我们</div>
        </div>
        <div v-else class="header-tab-m">
            <div class="header-tab-button" @click.stop="tabGroupClick">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="header-tab-group">
                <Transition name="tab-a" mode="out-in">
                    <div class="header-tab-item-m" v-show="tabShow" @click="tabClick('header')" @mouseenter="projectShow = false">首页</div>
                </Transition>
                <Transition name="tab-b" mode="out-in">
                    <div class="header-tab-item-m" v-show="tabShow" @click.stop="projectShow = !projectShow" @mouseenter="projectShow = true">历史项目</div>
                </Transition>
                <Transition name="tab-c" mode="out-in">
                    <div class="header-tab-item-m" v-show="tabShow" @click="tabClick('company')" @mouseenter="projectShow = false">公司介绍</div>
                </Transition>
                <Transition name="tab-d" mode="out-in">
                    <div class="header-tab-item-m" v-show="tabShow" @click="tabClick('footer')" @mouseenter="projectShow = false">联系我们</div>
                </Transition>
            </div>
            <Transition name="project-m" mode="out-in">
                <div class="header-projects-m" v-show="projectShow">
                    <div v-for="project in projects">
                        <div class="header-projects-item-m" @click="projectClick(project.symbol)">{{ project.title }}</div>
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script setup>
import { getCurrentInstance, nextTick, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useStore } from '@/store'
import { projects } from '@/utils/projects'

const { proxy } = getCurrentInstance()
const { t } = useI18n()

const router = useRouter()
const store = useStore()

const logo = new URL('@/assets/images/company/logo.png', import.meta.url).href
const name = new URL('@/assets/images/company/name.png', import.meta.url).href

const tabShow = ref(false)
const projectShow = ref(false)

let home = null
let project = null
let company = null
let connect = null

nextTick(() => {
    home = document.getElementById('header')
    project = document.getElementById('projects')
    company = document.getElementById('company')
    connect = document.getElementById('footer')
})

function tabGroupClick() {
    tabShow.value = !tabShow.value
    if (!tabShow.value) projectShow.value = false
}

function tabClick(tab) {
    tabShow.value = false
    projectShow.value = false
    document.getElementById(tab).scrollIntoView({ behavior: "smooth", block: "start" })
}

function projectClick(symbol) {
    tabShow.value = false
    projectShow.value = false
    router.push({ path: '/info', query: { project: symbol } })
    // document.getElementById('projects').children[id - 1].scrollIntoView({ behavior: "smooth", block: "start" })
}

document.documentElement.addEventListener('click', () => {
    tabShow.value = false
    projectShow.value = false
})
</script>

<style lang="scss" scoped>
.header {
    z-index: 10;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100PX;
    padding: 0 100px;
    background: black;
    @include flex-center(center, space-between);

    .header-logo {
        cursor: pointer;
        gap: 20PX;
        @include flex-center();

        img {
            height: 44PX;
            margin: 28PX 0;
        }
    }

    .header-tab {
        gap: 20PX;
        @include flex-center();

        .header-tab-item {
            position: relative;
            height: 48PX;
            padding: 0 16PX;
            font-size: 20PX;
            border-radius: 48PX;
            color: rgba(255, 255, 255, 0.65);
            background: transparent;
            transition: all 0.2s;
            cursor: pointer;
            @include flex-center();

            &:hover {
                color: white;
            }
        }

        >:not(.header-tab-item:nth-child(2)) {
            &:hover {
                padding: 0 24PX;
                letter-spacing: 1PX;
                background: rgb(50, 50, 50);
            }
        }

        .empty {
            position: absolute;
            top: 80%;
            width: 120PX;
            height: 40PX;
        }

        .header-projects {
            z-index: 20;
            position: absolute;
            top: 74PX;
            border-radius: 5PX;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(5PX);
            -webkit-backdrop-filter: blur(5PX);
            transform-origin: top center;
            @include flex-center(center, normal, column);

            .header-projects-item {
                width: 125PX;
                padding: 15PX 0;
                font-size: 16PX;
                color: white;
                cursor: pointer;
                transition: all 0.15s;
                @include flex-center();

                &:hover {
                    background: rgba(0, 0, 0, 0.15);
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
                border-radius: 0 0 5PX 5PX;
                overflow: hidden;
                @include flex-center(flex-end, normal, column);

                .header-tab-item-m {
                    position: relative;
                    width: 120PX;
                    padding: 12PX 24PX;
                    font-size: 18PX;
                    text-align: right;
                    white-space: nowrap;
                    color: white;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(5PX);
                    -webkit-backdrop-filter: blur(5PX);
                    transition: all 0.15s;
                    cursor: pointer;

                    &:hover {
                        background: rgba(0, 0, 0, 0.05);
                    }
                }
            }

            .header-projects-m {
                position: absolute;
                top: 100%;
                right: calc(120PX - 24PX);
                border-radius: 0 0 5PX 5PX;
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(5PX);
                -webkit-backdrop-filter: blur(5PX);
                transform-origin: right 15%;
                @include flex-center(center, normal, column);

                .header-projects-item-m {
                    width: 120PX;
                    padding: 10PX;
                    padding: 12PX 0;
                    font-size: 16PX;
                    color: white;
                    cursor: pointer;
                    @include flex-center();

                    &:hover {
                        background: rgba(0, 0, 0, 0.2);
                    }
                }
            }
        }
    }
}

@include setPhoneContent {
    .header {
        min-width: 300PX;
        height: 72PX;
        padding: 0 20PX;

        .header-logo {
            img {
                height: 36PX;
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
                    width: 106PX;
                    padding: 12PX 20PX;
                    font-size: 16PX;
                }
            }

            .header-projects-m {
                right: calc(106PX - 20PX);
            }
        }
    }
}

.tab-a-enter-active,
.tab-d-leave-active {
    transition: all 0.1s ease;
}

.tab-b-enter-active,
.tab-c-leave-active {
    transition: all 0.2s ease;
}

.tab-c-enter-active,
.tab-b-leave-active {
    transition: all 0.3s ease;
}

.tab-d-enter-active,
.tab-a-leave-active {
    transition: all 0.4s ease;
}

.tab-a-enter-from {
    opacity: 0;
    transform: translateY(-50%);
}

.tab-b-enter-from {
    opacity: 0;
    transform: translateY(-100%);
}

.tab-c-enter-from {
    opacity: 0;
    transform: translateY(-150%);
}

.tab-d-enter-from {
    opacity: 0;
    transform: translateY(-200%);
}

.tab-a-leave-to {
    opacity: 0;
    transform: translateY(-40%);
}

.tab-b-leave-to {
    opacity: 0;
    transform: translateY(-80%);
}

.tab-c-leave-to {
    opacity: 0;
    transform: translateY(-120%);
}

.tab-d-leave-to {
    opacity: 0;
    transform: translateY(-160%);
}

.project-enter-active,
.project-leave-active,
.project-m-enter-active,
.project-m-leave-active {
    transition: all 0.4s ease;
}

.project-enter-from,
.project-leave-to,
.project-m-enter-from,
.project-m-leave-to  {
    opacity: 0;
    transform: scale(0.25);
}
</style>
