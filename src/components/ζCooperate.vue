<template>
    <div class="cooperate">
        <div class="cooperate-title">Cooperative Company</div>
        <div class="cooperate-list">
            <div class="cooperate-item" v-for="cooperate of cooperates">
                <img :src="cooperate" />
            </div>
        </div>
    </div>
</template>

<script setup>
const cooperates = [
    new URL('@/assets/images/cooperate/tencent.png', import.meta.url).href,
    new URL('@/assets/images/cooperate/netease.png', import.meta.url).href,
    new URL('@/assets/images/cooperate/7game.png', import.meta.url).href,
    new URL('@/assets/images/cooperate/wanweimao.png', import.meta.url).href,
    new URL('@/assets/images/cooperate/ggac.png', import.meta.url).href,
    new URL('@/assets/images/cooperate/changyou.png', import.meta.url).href,
    new URL('@/assets/images/cooperate/lofter.png', import.meta.url).href,
    new URL('@/assets/images/cooperate/diezhi.png', import.meta.url).href,
    new URL('@/assets/images/cooperate/gbits.png', import.meta.url).href,
    new URL('@/assets/images/cooperate/ggacp.png', import.meta.url).href,
]
</script>

<style lang="scss" scoped>
.cooperate {
    width: 100%;
    margin-top: 100PX;
    @include flex-center(center, normal, column);

    .cooperate-title {
        font-size: 40PX;
        color: white;
    }

    .cooperate-list {
        width: 80%;
        margin: 80PX 0 100PX 0;
        flex-wrap: wrap;
        gap: 50PX;
        @include flex-center();

        .cooperate-item {
            img {
                width: 140PX;
            }
        }
    }
}
</style>