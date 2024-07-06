<template>
    <div class="auto-font" :style="{ 'text-align': position }">
        <span ref="innerSpan">
            <slot>{{ text }}</slot>
        </span>
    </div>
</template>

<script setup>
import { getCurrentInstance, nextTick, onMounted, watch } from 'vue'

const { proxy } = getCurrentInstance()
const props = defineProps(['text', 'position'])

watch(
    () => props.text,
    () => {
        nextTick(() => {
            scaleText()
        })
    }
)

function scaleText() {
    const outer = proxy.$el.offsetWidth
    const inner = proxy.$refs.innerSpan?.offsetWidth
    const scale = outer < inner ? outer / inner : 1
    if (proxy.$refs.innerSpan) proxy.$refs.innerSpan.style.transform = `translateX(-${50 * scale}%) scale(${scale})`
    proxy.$el.style.opacity = 1
}

onMounted(() => {
    nextTick(() => {
        scaleText()
    })
})
</script>

<style lang="scss" scoped>
.auto-font {
    width: 100%;
    opacity: 0;
    position: relative;

    span {
        margin-left: 50%;
        display: inline-block;
        white-space: nowrap;
        transform-origin: left center;
    }
}
</style>
