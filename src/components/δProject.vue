<template>
    <div class="project-container">
        <div v-for="capacity in homeCapacities">
            <Capacity :capacity="capacity"></Capacity>
        </div>
        <div class="divider"></div>
        <div v-for="project in homeProjects">
            <Project :project="project"></Project>
        </div>
    </div>
</template>

<script setup>
import Capacity from '@/components/project/Capacity.vue'
import Project from '@/components/project/Project.vue'

import { homeCapacities, homeProjects } from '@/utils/projects'
</script>

<style lang="scss" scoped>
.project-container {
    width: 100%;

    .divider {
        width: 100%;
        height: 200px;
    }
}
</style>