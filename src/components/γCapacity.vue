<template>
    <div class="capacity">
        <div class="capacity-title">{{ title }}</div>
        <div class="capacity-list">
            <div class="capacity-item" v-for="capacity of capacitys">
                <div class="title">{{ capacity.title }}</div>
                <div class="desc">{{ capacity.desc }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
const title = 'What can we do'
const capacitys = [
    {
        title: 'IP Concept Design',
        desc: 'In contemporary business strategy, intellectual property (IP) concept design is pivotal. It encompasses the creation and development of unique ideas, inventions, and branding elements that can be legally protected.'
    },
    {
        title: 'Game Development',
        desc: 'Game development is a multifaceted process that transforms a creative vision into an interactive digital experience.'
    },
    {
        title: 'Digital ART',
        desc: 'The game concept design centers on creating a captivating and immersive experience for players. It involves crafting a unique storyline, engaging gameplay mechanics, and distinctive visual aesthetics.'
    },
    {
        title: 'Concept Design',
        desc: 'The game concept design centers on creating a captivating and immersive experience for players. It involves crafting a unique storyline, engaging gameplay mechanics, and distinctive visual aesthetics.'
    }
]
</script>

<style lang="scss" scoped>
.capacity {
    width: 100%;
    max-width: 1000PX;
    height: 100vh;
    min-height: 750PX;
    @include flex-center(center, center, column);

    .capacity-title {
        font-size: 32PX;
        color: white;
    }

    .capacity-list {
        width: 1920px;
        margin-top: 80PX;
        padding: 0 80px;
        gap: 50PX;
        flex-wrap: wrap;
        @include flex-center(flex-start, center);

        .capacity-item {
            width: 240PX;
            @include flex-center(flex-start, normal, column);

            .title {
                font-size: 25PX;
                color: white;
            }

            .desc {
                margin-top: 32PX;
                font-size: 18PX;
                color: rgba(255, 255, 255, 0.45);
            }
        }
    }
}
</style>