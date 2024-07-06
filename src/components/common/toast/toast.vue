<template>
    <transition name="toast">
        <div class="toast" v-if="visible">
            <div :class="['toast-content', locale]">{{ message }}</div>
        </div>
    </transition>
</template>

<script setup>
import { ref, watch } from 'vue'
import { getUrlParam } from '@/utils/utils'

const game = import.meta.env.VITE_APP_GAME

const locale = getUrlParam('lang') || getUrlParam('l') || localStorage.getItem(`${game.toLowerCase()}-lang`)

const props = defineProps({
    message: { type: String, required: true },
    duration: { type: Number, default: 1660 }
})

const visible = ref(false)
watch(visible, (value) => {
    if (value) {
        setTimeout(() => (visible.value = false), props.duration)
    }
})

defineExpose({ visible })
</script>

<style lang="scss" scoped>
.toast {
    z-index: 999;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 660px;
    padding: 20px 40px;
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.25);
    transform-origin: center top;

    .toast-content {
        line-height: 40px;
        font-size: 24px;
        font-family: Chillroundf, PingFang SC;
        text-align: center;
        word-wrap: break-word;
        color: white;
        @include flex-center();

        &.ru {
            font-family: PingFang SC;
        }
    }
}

.toast-enter-active {
    transition: all 0.4s ease;
}
.toast-leave-active {
    transition: all 0.35s ease;
}
.toast-enter-from {
    opacity: 0;
    transform: translate(-50%, 100%);
}
.toast-leave-to {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.4);
}
</style>
