<template>
    <div class="popup" @click="emit('close')">
        <div class="popup-back">
            <img :src="mask" />
            <div class="popup-content" @click.stop>
                <img :src="image" />
                <div class="close" @click="emit('close')"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { current } = defineProps(['image'])
const emit = defineEmits(['close'])

const mask = new URL('@/assets/images/game/02-worldview/mask.svg', import.meta.url).href
</script>

<style lang="scss" scoped>
.popup {
    z-index: 100;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100%;

    .popup-back {
        position: relative;
        width: 100%;
        height: calc(100% + 250rem);
        margin-top: -125rem;
        background: rgba(0, 0, 0, 0.5);
        @include flex-center();

        >img {
            position: absolute;
            width: 850rem;
            margin-bottom: 220rem;
            margin-left: 100rem;
            @include rotate();
        }

        .popup-content {
            position: absolute;

            img {
                width: 650rem;
            }

            .close {
                position: absolute;
                top: 20rem;
                right: 20rem;
                width: 40rem;
                height: 40rem;
                cursor: pointer;
            }
        }
    }
}
</style>