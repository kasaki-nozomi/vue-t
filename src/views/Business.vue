<template>
    <div class="business-container">
        <div v-for="business in businesses" class="business-box">
            <Business :business="business" />
        </div>
    </div>
</template>

<script setup>
import Business from '@/components/business/Business.vue'

import { businesses } from '@/utils/projects'
</script>

<style lang="scss" scoped>
.business-container {
    width: 100%;
    margin: 200px 0;
    flex-wrap: wrap;
    @include flex-center();

    .business-box {
        width: 40%;
    }
}
</style>