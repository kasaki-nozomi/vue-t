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
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100%;

    .popup-back {
        position: relative;
        width: 100%;
        height: calc(100% + auto-value(250));
        margin-top: auto-value(-250 / 2);
        background: rgba(0, 0, 0, 0.5);
        @include flex-center();

        >img {
            position: absolute;
            width: auto-value(950);
            @include rotate();
        }

        .popup-content {
            position: absolute;

            img {
                width: auto-value(888);
            }

            .close {
                position: absolute;
                top: auto-value(28);
                right: auto-value(38);
                width: auto-value(50);
                height: auto-value(50);
                cursor: pointer;
            }
        }
    }
}
</style>