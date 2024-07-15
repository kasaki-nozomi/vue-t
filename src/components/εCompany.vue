<template>
    <div id="company" class="company">
        <Transition name="company" mode="out-in">
            <div class="company-box" v-if="companyShow">
                <img :src="logo" />
                <div class="company-desc">我们是空鸟文化，一支洋溢着无限创意与卓越执行力的专业团队。我们深信，视觉的力量能够为文化行业开辟更多前所未有的可能性。因此，我们不断探索新的领域，拓宽视野，矢志打造出引领潮流且有视觉尖叫度文化产品和视觉IP。</div>
                <div class="company-states">
                    <div class="state">
                        <div class="state-title">合作公司</div>
                        <div class="state-desc" @mouseenter="moreinfo = 'co'" @mouseleave="moreinfo = null">20</div>
                        <Transition name="moreinfo" mode="out-in"><div class="state-more one" v-show="moreinfo === 'co'" v-html="cooperates"></div></Transition>
                    </div>
                    <div class="divide"></div>
                    <div class="state">
                        <div class="state-title">历史奖项</div>
                        <div class="state-desc" @mouseenter="moreinfo = 'hs'" @mouseleave="moreinfo = null">20</div>
                        <Transition name="moreinfo" mode="out-in"><div class="state-more two" v-show="moreinfo === 'hs'" v-html="rewards"></div></Transition>
                    </div>
                    <div class="divide"></div>
                    <div class="state">
                        <div class="state-title">成员数量</div>
                        <div class="state-desc" @mouseenter="moreinfo = 'mm'" @mouseleave="moreinfo = null">15</div>
                        <Transition name="moreinfo" mode="out-in"><div class="state-more three" v-show="moreinfo === 'mm'" v-html="member"></div></Transition>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { getCurrentInstance, ref } from 'vue'

const { proxy } = getCurrentInstance()

const logo = new URL('@/assets/images/company/logoo.png', import.meta.url).href
const moreinfo = ref(null)
const companyShow = ref(false)
const cooperates = `迄今为止，我们已为众多知名合作方提供了卓越的设计服务，赢得了广泛的认可与赞誉。合作企业包括但不限于：腾讯，网易，GGAC，七点GAME，畅游，吉比特，lofter，万维猫等`
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
    min-height: calc(100vh - 100PX);
    padding: 160px 0;
    @include flex-center(center, center, column);

    .company-box {
        @include flex-center(center, center, column);
    }

    img {
        width: 300px;
    }

    .company-desc {
        width: 700px;
        line-height: 40px;
        margin-top: 52px;
        font-size: 18px;
        text-align: center;
        color: rgba(255, 255, 255, 0.75);
    }

    .company-states {
        height: 140px;
        margin-top: 80px;
        gap: 150px;
        @include flex-center();

        .state {
            position: relative;
            flex: 1;
            @include flex-center(center, normal, column);

            .state-title {
                font-size: 18px;
                font-weight: 600;
                text-align: center;
                color: white;
                @include flex-center();
            }

            .state-desc {
                position: relative;
                margin-top: 16px;
                font-size: 58px;
                color: rgb(180, 180, 180);
                transition: all 0.25s;
                cursor: pointer;

                &:hover {
                    filter: brightness(1.5);
                }

                &::after {
                    content: "+";
                    position: absolute;
                    top: 0;
                    left: 100%;
                    font-size: 40px;
                    font-weight: bold;
                }
            }

            .state-more {
                z-index: 10;
                position: absolute;
                top: 110%;
                width: 680px;
                line-height: 36px;
                padding: 40px;
                font-size: 18px;
                text-align: justify;
                border-radius: 10px;
                color: white;
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);

                &::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 0;
                    top: -16px;
                    left: 50%;
                    transform: translateX(-50%);
                    border-left: 18px solid transparent;
                    border-right: 18px solid transparent;
                    border-bottom: 16px solid rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                }
            }
        }

        .divide {
            width: 2px;
            height: 65%;
            margin-top: 10px;
            background: rgba(255, 255, 255, 0.25);
        }
    }
}

@include setPadContent {
    .company {
        min-height: calc(100vh - 84PX);
    }
}

@include setPhoneContent {
    .company {
        min-height: calc(100vh - 72PX);

        img {
            width: 760px;
        }

        .company-origin {
            width: 1450px;
            line-height: 100px;
            margin-top: 200px;
            font-size: 56px;
        }

        .company-desc {
            width: 1450px;
            line-height: 105px;
            margin-top: 166px;
            font-size: 52px;
        }

        .company-states {
            height: 360px;
            margin-top: 315px;
            gap: 180px;

            .state {
                .state-title {
                    font-size: 56px;
                    font-weight: 600;
                }

                .state-desc {
                    position: relative;
                    margin-top: 60px;
                    font-size: 160px;

                    &::after {
                        content: "+";
                        font-size: 96px;
                    }
                }

                .state-more {
                    top: 110%;
                    width: 1460px;
                    line-height: 78px;
                    padding: 60px;
                    font-size: 42px;
                    border-radius: 20px;

                    &.one {
                        left: 0;
                        right: auto;

                        &::after {
                            content: '';
                            top: -28px;
                            left: 120px;
                            border-left: 32px solid transparent;
                            border-right: 32px solid transparent;
                            border-bottom: 28px solid rgba(255, 255, 255, 0.1);
                            backdrop-filter: blur(10px);
                            -webkit-backdrop-filter: blur(10px);
                        }
                    }

                    &.two {
                        width: 1510px;
                        &::after {
                            content: '';
                            top: -28px;
                            border-left: 32px solid transparent;
                            border-right: 32px solid transparent;
                            border-bottom: 28px solid rgba(255, 255, 255, 0.1);
                            backdrop-filter: blur(10px);
                            -webkit-backdrop-filter: blur(10px);
                        }
                    }

                    &.three {
                        left: auto;
                        right: -10px;

                        &::after {
                            content: '';
                            top: -28px;
                            left: auto;
                            right: 50px;
                            border-left: 32px solid transparent;
                            border-right: 32px solid transparent;
                            border-bottom: 28px solid rgba(255, 255, 255, 0.1);
                            backdrop-filter: blur(10px);
                            -webkit-backdrop-filter: blur(10px);
                        }
                    }
                }
            }

            .divide {
                height: 70%;
                margin-top: 0;
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
    transition: all 0.6s ease;
}

.company-enter-from,
.company-leave-to {
    opacity: 0;
    transform: translateY(20%);
}
</style>