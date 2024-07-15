<template>
    <div id="honor" class="honor">
        <Transition name="honor" mode="out-in">
            <div class="horor-box" v-if="honorShow">
                <div class="honor-title"><span>项目荣誉 / </span>Project Honors</div>
                <div class="honor-list">
                    <div class="honor-item" v-for="honor of honors">
                        <img class="olive-left" :src="oliveLeft" />
                        <div class="honor-content">
                            <div><AutoFont :text="honor.title"></AutoFont></div>
                            <div>{{ honor.reward }}</div>
                            <div>{{ honor.reward_en }}</div>
                            <div>{{ honor.contest }}</div>
                        </div>
                        <img class="olive-right" :src="oliveRight" />
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { getCurrentInstance, ref } from 'vue'

const { proxy } = getCurrentInstance()

const honorShow = ref(false)
const oliveLeft = new URL('@/assets/images/olive-left.svg', import.meta.url).href
const oliveRight = new URL('@/assets/images/olive-right.svg', import.meta.url).href
const honors = [
    {
        title: '界冕',
        reward: '专业组特等奖',
        reward_en: 'Professional Group Special Award',
        contest: '第五届全球游戏美术大赛GGAC'
    },
    {
        title: '大野',
        reward: '最佳影视开发奖',
        reward_en: 'Best Film Award',
        contest: '全球数字艺术大赛奇点奖'
    },
    {
        title: '长昼将尽',
        reward: '最佳影视开发奖',
        reward_en: 'Best Film and Television Development Award',
        contest: '全球数字艺术大赛奇点奖'
    },
    {
        title: '山海劫',
        reward: '专业场景银奖',
        reward_en: 'Professional Scene Silver Award',
        contest: '第五届全球游戏美术大赛GGAC'
    },
    {
        title: '山海变',
        reward: '入围奖',
        reward_en: 'Finalist',
        contest: '全国美协首届数字艺术大展'
    },
    {
        title: '山海变',
        reward: '入选EDCC特展',
        reward_en: 'Selected for EDCC',
        contest: '首届中国数字艺术大展'
    },
    {
        title: '回溯',
        reward: '专业组 银奖',
        reward_en: 'Silver Award in Professional Group',
        contest: '第四届全球游戏美术大赛GGAC'
    },
    {
        title: '熵—第二次大爆炸之后',
        reward: '2D组优秀奖',
        reward_en: '2D Group Excellence Award',
        contest: '第四届全球游戏美术大赛GGAC'
    }
]

proxy.bus.on('honor-show', () => honorShow.value = true)
</script>

<style lang="scss" scoped>
.honor {
    width: 1400px;
    min-height: calc(100vh - 100PX);
    padding: 160px 0;
    @include flex-center(center, center, column);

    .honor-box {
        @include flex-center(center, center, column);
    }

    .honor-title {
        font-size: 36px;
        text-align: center;
        color: white;

        span {
            font-weight: 600;
        }
    }

    .honor-list {
        margin-top: 120px;
        flex-wrap: wrap;
        gap: 55px;
        @include flex-center();

        .honor-item {
            width: 265px;
            @include flex-center(center, space-between);
            
            img {
                width: 48px;
            }

            .honor-content {
                @include flex-center(center, center, column);

                div {
                    width: 180px;
                    text-align: center;
                    color: white;
                }

                div:nth-of-type(1) {
                    line-height: 40px;
                    font-size: 26px;
                    font-weight: 600;
                }

                div:nth-of-type(2) {
                    margin-top: 6px;
                    font-size: 20px;
                }

                div:nth-of-type(3) {
                    margin-top: 6px;
                    font-size: 16px;
                }

                div:nth-of-type(4) {
                    margin-top: 6px;
                    font-size: 15px;
                    line-height: 22px;
                    color: rgba(255, 255, 255, 0.7);
                }
            }
        }
    }
}

@include setPadContent {
    .honor {
        min-height: calc(100vh - 86PX);
    }
}

@include setPhoneContent {
    .honor {
        min-height: calc(100vh - 72PX);

        .honor-title {
            font-size: 72px;
        }

        .honor-list {
            margin-top: 215px;
            gap: 140px;

            .honor-item {
                width: 600px;
                
                img {
                    width: 125px;
                }

                .honor-content {
                    div {
                        max-width: calc(600px - 265px);
                    }

                    div:nth-of-type(1) {
                        line-height: 90px;
                        font-size: 62px;
                    }

                    div:nth-of-type(2) {
                        margin-top: 15px;
                        font-size: 46px;
                    }

                    div:nth-of-type(3) {
                        margin-top: 5px;
                        font-size: 34px;
                    }

                    div:nth-of-type(4) {
                        margin-top: 15px;
                        font-size: 34px;
                        line-height: 50px;
                    }
                }
            }
        }
    }
}

.honor-enter-active,
.honor-leave-active {
    transition: all 0.6s ease;
}

.honor-enter-from,
.honor-leave-to {
    opacity: 0;
    transform: translateY(20%);
}
</style>
