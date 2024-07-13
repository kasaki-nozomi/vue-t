<template>
    <div class="capacity">
        <div class="capacity-box">
            <div class="capacity-bar"></div>
            <div class="capacity-title">
                <div v-html="title"></div>
                <div v-html="title_"></div>
            </div>
            <div class="capacity-list">
                <div class="capacity-item" v-for="capacity of capacitys">
                    <div class="title">{{ capacity.title }}</div>
                    <div class="desc">{{ capacity.desc }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const title = '&nbsp;&nbsp;我们能做些什么？'
const title_ = '<span>KONG</span> VisualStudio & <span>KongNiao</span> Culture'
const capacitys = [
    {
        title: 'IP孵化',
        desc: '空鸟文化一直致力于打造具有现象级影响力的IP。我们的宗旨在于帮助各种娱乐项目实现从零到一的概念落地。在过去几年，我们的工作室成功孵化了多个视觉创意IP，涵盖了古风、科幻等多个领域，为各类企业提供了丰富的创意资源和概念支持。'
    },
    {
        title: '概念设计',
        desc: '概念设计是空鸟文化核心业务，我们专注于项目方的独特需求。凭借专业素养和美术创意，量身打造充满创意的视觉设计，我们将在产品制作的各个阶段，将繁杂的设计巧妙提升至理性思维的高度，为每一个项目注入独特的灵魂。'
    },
    {
        title: '游戏研发',
        desc: '不远的未来我们将打造一款独属于中国的艺术3A游戏。在此之前，我们工作室的业务已全面覆盖游戏研发的数个重要环节，空鸟文化汇聚了来自不同背景、拥有各异技能却同样热爱游戏的精英人士，力求为玩家带来一场难忘且震撼的3A游戏体验。'
    }
]
</script>

<style lang="scss" scoped>
.capacity {
    padding: 200px 0 250px 0;
    @include background($image: 'back-mask-one.png');
    @include flex-center(center, center, column);

    .capacity-box {
        @include flex-center(center, center, column);
    }

    .capacity-bar {
        width: 440px;
        height: 6px;
        align-self: start;
        background: white;
    }

    .capacity-title {
        width: 100%;
        margin-top: 36px;
        font-size: 24px;
        color: white;

        div:first-child {
            font-size: 36px;
            line-height: 72px;
            font-weight: 800;
        }

        :deep(span) {
            font-weight: 800;
        } 
    }

    .capacity-list {
        margin-top: 120px;
        gap: 180px;
        flex-wrap: wrap;
        @include flex-center(flex-start, center);

        .capacity-item {
            width: 388px;
            @include flex-center(flex-start, normal, column);

            .title {
                font-size: 30px;
                font-weight: 800;
                color: white;
            }

            .desc {
                margin-top: 28px;
                font-size: 22px;
                line-height: 42px;
                color: rgba(255, 255, 255, 0.45);
            }
        }
    }
}

@include setPhoneContent {
    .capacity {
        padding: 520px 0 600px 0;
        @include flex-center(center, center, column);

        .capacity-box {
            @include flex-center(center, center, column);
        }

        .capacity-bar {
            width: 1000px;
            height: 12px;
            align-self: center;
        }

        .capacity-title {
            margin-top: 100px;
            font-size: 60px;
            text-align: center;

            div:first-child {
                font-size: 90px;
                line-height: 220px;
            }
        }

        .capacity-list {
            margin-top: 260px;
            gap: 180px;
            @include flex-center(flex-start, center, column);

            .capacity-item {
                width: 1400px;
                @include flex-center(center, normal, column);

                .title {
                    font-size: 78px;
                    text-align: center;
                }

                .desc {
                    margin-top: 84px;
                    font-size: 54px;
                    line-height: 110px;
                    text-align: center;
                }
            }
        }
    }
}
</style>