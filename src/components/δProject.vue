<template>
    <div class="projects">
        <div id="projects"></div>
        <div class="projects-list">
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
    padding: 40PX 0;
}
</style>