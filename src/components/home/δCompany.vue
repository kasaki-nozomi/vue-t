<template>
    <div id="company" class="company">
        <Transition name="company" mode="out-in">
            <div class="company-box" v-if="companyShow">
                <img :src="banner" />
                <div class="company-title">
                    我们是空鸟文化
                </div>
                <div class="company-desc">
                    我们团队秉承“ 开阔视野，引领潮流 ”的理念，我们相信，视觉的力量能够为文化行业带来更多的可能性，因此我们不断努力开拓新的领域，拓展更广阔的视野，致力于打造能引领潮流且有尖叫度的视觉IP
                </div>
                <div class="company-states">
                    <div class="state">
                        <div class="state-bar"></div>
                        <div class="state-count" @mouseenter="moreinfo = 'partnership'" @mouseleave="moreinfo = null">
                            20<span>+</span>
                        </div>
                        <div class="state-title">
                            <div>合作公司</div>
                            <div>Partnership</div>
                        </div>
                        <Transition name="moreinfo" mode="out-in">
                            <div class="state-more one" v-show="moreinfo === 'partnership'" v-html="cooperates"></div>
                        </Transition>
                    </div>
                    <div class="state">
                        <div class="state-bar"></div>
                        <div class="state-count" @mouseenter="moreinfo = 'accolades'" @mouseleave="moreinfo = null">
                            20<span>+</span>
                        </div>
                        <div class="state-title">
                            <div>历史奖项</div>
                            <div>Accolades</div>
                        </div>
                        <Transition name="moreinfo" mode="out-in">
                            <div class="state-more two" v-show="moreinfo === 'accolades'" v-html="rewards"></div>
                        </Transition>
                    </div>
                    <div class="state">
                        <div class="state-bar"></div>
                        <div class="state-count" @mouseenter="moreinfo = 'membership'" @mouseleave="moreinfo = null">
                            40<span>+</span>
                        </div>
                        <div class="state-title">
                            <div>成员数量</div>
                            <div>Membership</div>
                        </div>
                        <Transition name="moreinfo" mode="out-in">
                            <div class="state-more three" v-show="moreinfo === 'membership'" v-html="member"></div>
                        </Transition>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { getCurrentInstance, ref } from 'vue'

const { proxy } = getCurrentInstance()

const moreinfo = ref(null)
const companyShow = ref(true)

const banner = new URL('@/assets/images/home/company/banner.png', import.meta.url).href

const cooperates = `迄今为止，我们已为众多知名合作方提供了卓越的设计服务，赢得了广泛的认可与赞誉。合作企业包括但不限于：腾讯，网易，GGAC，七点GAME，畅游，吉比特，lofter，万维猫等。`
const rewards = `
《界冕》获第五届全球游戏美术大赛GGAC 专业组 特等奖<br>
《大野》获：全球数字艺术大赛奇点奖 最佳影视开发奖<br>
《长昼将尽》获：全球数字艺术大赛奇点奖 最佳影视开发奖<br>
《山海劫》获第五届全球游戏美术大赛GGAC 专业场景组 银奖<br>
《山海变》入选全国美协首届数字艺术大展<br>
《山海变》入选 首届中国数字艺术大展 EDCC特展<br>
《回溯》获第四届全球游戏美术大赛GGAC 专业组 银奖<br>
《熵—第二次大爆炸之后》获 第四届全球游戏美术大赛GGAC 2D组 优秀奖`
const member = `空鸟是一只充满创意和执行力的专业团队，拥有丰富的项目经验和专业技能。擅长的业务领域涵盖IP创作，游戏研发，概念设计等多个方面，团队成员大多来自游戏影视行业。`

proxy.bus.on('company-show', () => companyShow.value = true)
</script>

<style lang="scss" scoped>
.company {
    position: relative;
    width: 100%;
    // min-height: calc(100vh - 100PX);
    padding: 200px 0;
    @include flex-center(center, center, column);

    .company-box {
        @include flex-center(center, center, column);

        img {
            width: 420px;
        }

        .company-title {
            width: 770px;
            line-height: 32px;
            margin-top: 78px;
            font-size: 18px;
            text-align: center;
        }

        .company-desc {
            width: 770px;
            line-height: 32px;
            margin-top: 16px;
            font-size: 16px;
            text-align: center;
            color: rgba(255, 255, 255, 0.75);
        }

        .company-states {
            height: 130px;
            margin-top: 48px;
            gap: 100px;
            @include flex-center();

            .state {
                position: relative;
                flex: 1;
                @include flex-center(center, normal);

                .state-bar {
                    width: 4px;
                    height: 42px;
                    border-radius: 4px;
                    background: rgba(255, 255, 255, 0.25);
                }

                .state-count {
                    position: relative;
                    margin-left: 18px;
                    padding-bottom: 4px;
                    font-size: 46px;
                    font-weight: bold;
                    transition: all 0.25s;
                    cursor: pointer;

                    &:hover {
                        filter: brightness(1.5);
                    }

                    span {
                        position: absolute;
                        top: 0;
                        left: 100%;
                        font-size: 28px;
                        font-weight: bold;
                    }
                }

                .state-title {
                    margin-left: 28px;
                    line-height: 22px;
                    font-size: 15px;
                    text-align: left;
                }

                .state-more {
                    z-index: 10;
                    position: absolute;
                    top: 120%;
                    left: 50%;
                    width: 600px;
                    margin-left: -300px;
                    line-height: 32px;
                    padding: 32px;
                    font-size: 16px;
                    text-align: justify;
                    border-radius: 12px;
                    color: white;
                    background: rgba(255, 255, 255, 0.15);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);

                    &::after {
                        content: '';
                        position: absolute;
                        width: 0;
                        height: 0;
                        bottom: 100%;
                        left: 50%;
                        transform: translateX(-50%);
                        border-left: 18px solid transparent;
                        border-right: 18px solid transparent;
                        border-bottom: 16px solid rgba(255, 255, 255, 0.15);
                        backdrop-filter: blur(10px);
                        -webkit-backdrop-filter: blur(10px);
                    }
                }
            }
        }
    }
}

// @include setPadContent {
//     .company {
//         min-height: calc(100vh - 84PX);
//     }
// }

@include setPhoneContent {
    .company {
        // min-height: calc(100vh - 72PX);
        padding: 750px 0;

        .company-box {
            @include flex-center(center, center, column);

            img {
                width: 960px;
            }

            .company-title {
                width: 1400px;
                line-height: 110px;
                margin-top: 200px;
                font-size: 66px;
                text-align: center;
            }

            .company-desc {
                width: 1400px;
                line-height: 110px;
                margin-top: 86px;
                font-size: 56px;
                text-align: center;
                color: rgba(255, 255, 255, 0.6);
            }

            .company-states {
                height: 130px;
                margin-top: 220px;
                gap: 100px;
                @include flex-center();

                .state {
                    position: relative;
                    flex: 1;
                    @include flex-center(center, normal);

                    .state-bar {
                        width: 8px;
                        height: 90px;
                        border-radius: 8px;
                        background: rgba(255, 255, 255, 0.25);
                    }

                    .state-count {
                        position: relative;
                        margin-left: 28px;
                        padding-bottom: 14px;
                        font-size: 110px;
                        font-weight: bold;
                        transition: all 0.25s;
                        cursor: pointer;

                        &:hover {
                            filter: brightness(1.5);
                        }

                        span {
                            position: absolute;
                            top: 0;
                            left: 100%;
                            font-size: 60px;
                            font-weight: bold;
                        }
                    }

                    .state-title {
                        margin-left: 62px;
                        line-height: 62px;
                        font-size: 40px;
                        text-align: left;
                        color: rgba(255, 255, 255, 0.6);
                    }

                    .state-more {
                        z-index: 10;
                        position: absolute;
                        top: 125%;
                        left: 50%;
                        width: 1460px;
                        line-height: 78px;
                        margin-left: -300px;
                        padding: 60px;
                        font-size: 42px;
                        text-align: justify;
                        border-radius: 24px;
                        color: white;
                        background: rgba(255, 255, 255, 0.15);
                        backdrop-filter: blur(10px);
                        -webkit-backdrop-filter: blur(10px);

                        &::after {
                            content: '';
                            position: absolute;
                            width: 0;
                            height: 0;
                            bottom: 100%;
                            left: 50%;
                            transform: translateX(-50%);
                            border-left: 18px solid transparent;
                            border-right: 18px solid transparent;
                            border-bottom: 16px solid rgba(255, 255, 255, 0.15);
                            backdrop-filter: blur(10px);
                            -webkit-backdrop-filter: blur(10px);
                        }

                        &.one {
                            left: 0;
                            right: auto;
                            margin-left: 0;

                            &::after {
                                content: '';
                                bottom: 100%;
                                left: 120px;
                                border-left: 32px solid transparent;
                                border-right: 32px solid transparent;
                                border-bottom: 28px solid rgba(255, 255, 255, 0.15);
                                backdrop-filter: blur(10px);
                                -webkit-backdrop-filter: blur(10px);
                            }
                        }

                        &.two {
                            left: 50%;
                            right: 0;
                            width: 1500px;
                            margin-left: -750px;

                            &::after {
                                content: '';
                                bottom: 100%;
                                border-left: 32px solid transparent;
                                border-right: 32px solid transparent;
                                border-bottom: 28px solid rgba(255, 255, 255, 0.15);
                                backdrop-filter: blur(10px);
                                -webkit-backdrop-filter: blur(10px);
                            }
                        }

                        &.three {
                            left: auto;
                            right: 0;
                            margin-left: 0;

                            &::after {
                                content: '';
                                bottom: 100%;
                                left: auto;
                                right: 50px;
                                border-left: 32px solid transparent;
                                border-right: 32px solid transparent;
                                border-bottom: 28px solid rgba(255, 255, 255, 0.15);
                                backdrop-filter: blur(10px);
                                -webkit-backdrop-filter: blur(10px);
                            }
                        }
                    }
                }
            }
        }
    }
}


.moreinfo-enter-active,
.moreinfo-leave-active {
    transition: all 0.4s ease;
}

.moreinfo-enter-from,
.moreinfo-leave-to {
    opacity: 0;
    transform: translateY(10%);
}

.company-enter-active,
.company-leave-active {
    transition: all 0.8s ease;
}

.company-enter-from,
.company-leave-to {
    opacity: 0;
    transform: translateY(60%);
}
</style>