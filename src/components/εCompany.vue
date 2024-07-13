<template>
    <div id="company" class="company">
        <img :src="logo" />
        <div class="company-origin">空鸟文化2023年我们成立了鵼视觉工作室</div>
        <div class="company-desc">我们团队秉承“ 开阔视野，引领潮流 ”的理念，我们相信，视觉的力量能够为文化行业带来更多的可能性，因此我们不断努力开拓新的领域，拓展更广阔的视野，致力于打造能引领潮流且有尖叫度的视觉IP。</div>
        <div class="company-states">
            <div class="state">
                <div class="state-title">合作公司</div>
                <div class="state-desc" @mouseenter="moreinfo = 'co'" @mouseleave="moreinfo = null">20</div>
                <Transition name="moreinfo" mode="out-in"><div class="state-more" v-show="moreinfo === 'co'" v-html="cooperates"></div></Transition>
            </div>
            <div class="divide"></div>
            <div class="state">
                <div class="state-title">历史奖项</div>
                <div class="state-desc" @mouseenter="moreinfo = 'hs'" @mouseleave="moreinfo = null">20</div>
                <Transition name="moreinfo" mode="out-in"><div class="state-more" v-show="moreinfo === 'hs'" v-html="rewards"></div></Transition>
            </div>
            <div class="divide"></div>
            <div class="state">
                <div class="state-title">成员数量</div>
                <div class="state-desc" @mouseenter="moreinfo = null" @mouseleave="moreinfo = null">15</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const logo = new URL('@/assets/images/company/logoo.png', import.meta.url).href

const moreinfo = ref(null)

const cooperates = 
`
我们的业务领域涵盖IP创作，游戏研发，概念设计和数字艺术等方面，拥有一支充满创意和执行力的专业团队。<br>
我们团队曾为众多知名合作方提供过设计服务，包括但不限于：腾讯，网易，GGAC，七点GAME，畅游，吉比特，lofter，万维猫动画等。
`

const rewards = 
`
《大野》获：全球数字艺术大赛奇点奖 最佳影视开发奖<br>
《山海劫》获第五届全球游戏美术大赛GGAC 专业场景组 银奖<br>
《山海变》入选全国美协首届数字艺术大展<br>
《山海变》入选首届中国数字艺术大展EDCC特展<br>
《熵—第二次大爆炸之后》获第四届全球游戏美术大赛GGAC 2D组 优秀奖<br>
《界冕》获第五届全球游戏美术大赛GGAC 专业组 特等奖<br>
《回溯》获第四届全球游戏美术大赛GGAC 专业组 银奖<br>
《长昼将尽》获：全球数字艺术大赛奇点奖 最佳影视开发奖
`
</script>

<style lang="scss" scoped>
.company {
    position: relative;
    width: 100%;
    min-height: calc(100vh - 100PX);
    @include flex-center(center, center, column);

    img {
        width: 350px;
    }

    .company-origin {
        width: 720px;
        line-height: 40px;
        margin-top: 72px;
        font-size: 22px;
        text-align: center;
        color: rgba(255, 255, 255, 0.75);
    }

    .company-desc {
        width: 720px;
        line-height: 42px;
        margin-top: 32px;
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        color: rgba(255, 255, 255, 0.65);
    }

    .company-states {
        height: 160px;
        margin-top: 120px;
        gap: 220px;
        @include flex-center();

        .state {
            position: relative;
            flex: 1;
            @include flex-center(center, normal, column);

            .state-title {
                font-size: 22px;
                font-weight: 600;
                text-align: center;
                color: white;
                @include flex-center();
            }

            .state-desc {
                position: relative;
                margin-top: 16px;
                font-size: 72px;
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
                width: 800px;
                line-height: 32px;
                padding: 24px;
                font-size: 22px;
                border-radius: 10px;
                color: white;
                background: rgb(100, 100, 100);

                &::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 0;
                    top: -14px;
                    left: 50%;
                    transform: translateX(-50%);
                    border-left: 18px solid transparent;
                    border-right: 18px solid transparent;
                    border-bottom: 16px solid rgb(100, 100, 100);
                }
            }
        }

        .divide {
            width: 1px;
            height: 65%;
            margin-top: 10px;
            background: rgb(255, 255, 255, 0.25);
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
</style>