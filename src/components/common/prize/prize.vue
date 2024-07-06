<template>
    <div class="prize">
        <div class="prize-container" :style="container()">
            <div class="prize-content" :style="content()"></div>
            <div v-show="count" class="prize-black" :style="black()">x{{ count }}</div>
        </div>
    </div>
</template>

<script setup>
import blue   from '@/assets/images/reward/back/blue.png'
import gold   from '@/assets/images/reward/back/gold.png'
import green  from '@/assets/images/reward/back/green.png'
import orange from '@/assets/images/reward/back/orange.png'
import purple from '@/assets/images/reward/back/purple.png'
import red    from '@/assets/images/reward/back/red.png'

const game = import.meta.env.VITE_APP_GAME

const props = defineProps({
    size: { type: Number, default: 100 },
    count: { type: Number, required: true, default: 0 },
    background: { type: Boolean, default: true },
    itemID: { type: String, required: true }
})

const item = {
    KOA: {},
    SS: {},
    GOG: {},
    MC: {},
    ST: {},
    MO: {}
}

function container() {
    return {
        width: `${props.size / 75}rem`,
        height: `${props.size / 75}rem`,
        backgroundImage: `url(${props.background && item[game][props.itemID] ? item[game][props.itemID][1] : null})`,
        backgroundSize: 'cover'
    }
}
function content() {
    return {
        backgroundImage: `url(${item[game][props.itemID] ? item[game][props.itemID][0] : null})`,
        backgroundSize: 'cover'
    }
}
function black() {
    return {
        fontSize: `${(props.size * 0.16) / 75}rem`
    }
}
</script>

<style lang="scss" scoped>
.prize {
    .prize-container {
        position: relative;
        @include flex-center();

        .prize-content {
            width: 88%;
            height: 88%;
        }

        .prize-black {
            position: absolute;
            bottom: 2%;
            width: 96%;
            height: 28%;
            padding-right: 6%;
            font-family: Nunito;
            letter-spacing: 1px;
            color: white;
            background-color: rgba(0, 0, 0, 0.55);
            @include flex-center(center, flex-end);
        }
    }
}
</style>
