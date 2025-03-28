<template>
    <div id="honor" class="honor">
        <Transition name="honor" mode="out-in">
            <div class="honor-container" v-if="honorShow">
                <div class="honor-title">团队荣誉 - Team honors</div>
                <div class="honor-list">
                    <div class="honor-item" v-for="honor of honors">
                        <img :src="left" />
                        <div class="honor-content">
                            <div>
                                <AutoFont :text="honor.title"></AutoFont>
                            </div>
                            <div>{{ honor.reward }}</div>
                            <div>{{ honor.reward_en }}</div>
                            <div>{{ honor.contest }}</div>
                        </div>
                        <img :src="right" />
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { getCurrentInstance, ref } from 'vue'

const { proxy } = getCurrentInstance()

const honorShow = ref(true)
const left = new URL('@/assets/images/home/honor/left.svg', import.meta.url).href
const right = new URL('@/assets/images/home/honor/right.svg', import.meta.url).href
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
        reward: '入围',
        reward_en: 'Finalist',
        contest: '全国美协首届数字艺术大展'
    },
    {
        title: '山海变',
        reward: '入选EDCC特展',
        reward_en: 'Selected for EDCC',
        contest: '全国美协首届数字艺术大展'
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
    position: relative;
    padding: 200px 0;
    @include flex-center(center, center, column);

    .honor-container {
        @include flex-center(center, normal, column);

        .honor-title {
            font-size: 22px;
            color: rgba(255, 255, 255, 0.75);
        }

        .honor-list {
            width: 1000px;
            margin-top: 72px;
            flex-wrap: wrap;
            gap: 40px;
            @include flex-center();

            .honor-item {
                @include flex-center(center, space-between);

                img {
                    width: 40px;
                }

                .honor-content {
                    @include flex-center(center, center, column);

                    div {
                        width: 124px;
                        text-align: center;
                        color: white;
                    }

                    div:nth-of-type(1) {
                        line-height: 30px;
                        font-size: 20px;
                        font-weight: bold;
                    }

                    div:nth-of-type(2) {
                        line-height: 22px;
                        margin-top: 4px;
                        font-size: 14px;
                    }

                    div:nth-of-type(3) {
                        line-height: 14px;
                        margin-top: 4px;
                        font-size: 10px;
                    }

                    div:nth-of-type(4) {
                        width: 100px;
                        line-height: 16px;
                        margin-top: 4px;
                        font-size: 10px;
                        color: rgba(255, 255, 255, 0.5);
                    }
                }
            }
        }
    }
}

@include setPhoneContent {
    .honor {
        padding: 500px 0;

        .honor-container {

            .honor-title {
                font-size: 62px;
            }

            .honor-list {
                width: 1600px;
                margin-top: 220px;
                gap: 140px;

                .honor-item {
                    img {
                        width: 116px;
                    }

                    .honor-content {
                        div {
                            width: 333px;
                        }

                        div:nth-of-type(1) {
                            line-height: 90px;
                            font-size: 62px;
                        }

                        div:nth-of-type(2) {
                            line-height: 68px;
                            margin-top: 15px;
                            font-size: 46px;
                        }

                        div:nth-of-type(3) {
                            line-height: 48px;
                            margin-top: 5px;
                            font-size: 32px;
                        }

                        div:nth-of-type(4) {
                            width: 280px;
                            line-height: 48px;
                            margin-top: 15px;
                            font-size: 32px;
                        }
                    }
                }
            }
        }
    }
}

.honor-enter-active,
.honor-leave-active {
    transition: all 0.8s ease;
}

.honor-enter-from,
.honor-leave-to {
    opacity: 0;
    transform: translateY(60%);
}
</style>
