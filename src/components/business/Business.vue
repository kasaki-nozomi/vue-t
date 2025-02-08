<template>
    <div class="business">
        <img :src="business.image" />
        <div>{{ business.title }}</div>
    </div>
</template>

<script setup>
const props = defineProps({ business: { type: Object, required: true } })
</script>

<style lang="scss" scoped>
.business {
    width: 100%;
    color: white;
    @include flex-center(center, normal, column);

    img {
        width: 100%;
    }
}
</style>