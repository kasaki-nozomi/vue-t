<template>
    <div class="projects">
        <div id="projects"></div>
        <div class="projects-list">
            <div v-for="(project, index) of projects">
                <Project :id="index" :project="project"></Project>
            </div>
        </div>
    </div>
</template>

<script setup>
import Project from '@/components/project/Project.vue'

const projects = [
    {
        title: '长源',
        introduce: '第五届全球游戏美术大赛GGAC专业组 特等奖',
        image: new URL('@/assets/images/project/changyuan/cover.jpg', import.meta.url).href,
        description: 'In contemporary business strategy, intellectual property (IP) concept design is pivotal. It encompasses the creation and development of unique ideas, inventions, and branding elements that can be legally protected.'
    },
    {
        title: '长昼将尽',
        introduce: '第五届全球游戏美术大赛GGAC专业组 特等奖',
        image: new URL('@/assets/images/project/changzhou/cover.jpg', import.meta.url).href,
        description: 'In contemporary business strategy, intellectual property (IP) concept design is pivotal. It encompasses the creation and development of unique ideas, inventions, and branding elements that can be legally protected.'
    },
    {
        title: '大野',
        introduce: '第五届全球游戏美术大赛GGAC专业组 特等奖',
        image: new URL('@/assets/images/project/daye/cover.jpg', import.meta.url).href,
        description: 'In contemporary business strategy, intellectual property (IP) concept design is pivotal. It encompasses the creation and development of unique ideas, inventions, and branding elements that can be legally protected.'
    },
    {
        title: '山海变',
        introduce: '第五届全球游戏美术大赛GGAC专业组 特等奖',
        image: new URL('@/assets/images/project/shanhai/cover.jpg', import.meta.url).href,
        description: 'In contemporary business strategy, intellectual property (IP) concept design is pivotal. It encompasses the creation and development of unique ideas, inventions, and branding elements that can be legally protected.'
    },
    {
        title: '悟空传',
        introduce: '第五届全球游戏美术大赛GGAC专业组 特等奖',
        image: new URL('@/assets/images/project/wukong/cover.png', import.meta.url).href,
        description: 'In contemporary business strategy, intellectual property (IP) concept design is pivotal. It encompasses the creation and development of unique ideas, inventions, and branding elements that can be legally protected.'
    },
    {
        title: '摇木罗生',
        introduce: '第五届全球游戏美术大赛GGAC专业组 特等奖',
        image: new URL('@/assets/images/project/yaomu/cover.jpg', import.meta.url).href,
        description: 'In contemporary business strategy, intellectual property (IP) concept design is pivotal. It encompasses the creation and development of unique ideas, inventions, and branding elements that can be legally protected.'
    }
]
</script>

<style lang="scss" scoped>
.projects {
    width: 100%;
    padding: 40PX 0;
}
</style>