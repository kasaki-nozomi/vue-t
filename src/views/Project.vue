<template>
    <div class="project-container">
        <div v-for="project in projects">
            <Project :project="project"></Project>
        </div>
    </div>
</template>

<script setup>
import Project from '@/components/project/Project.vue'
import { projects } from '@/utils/projects'
</script>

<style lang="scss" scoped>
.project-container {
    width: 100%;
}
</style>