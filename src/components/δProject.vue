<template>
    <div class="projects">
        <div></div>
        <div id="projects" class="projects-list">
            <div v-for="project in projects">
                <Project :project="project"></Project>
            </div>
        </div>
    </div>
</template>

<script setup>
import Project from '@/components/project/Project.vue'
import { projects } from '@/utils/projects'
</script>

<style lang="scss" scoped>
.projects {
    width: 100%;
}
</style>