<template>
    <div id="info" class="info-wrapper" ref="info">
        <Scroll :scroll="scroll"></Scroll>
        <Content :content="content"></Content>
        <Others :others="others"></Others>
    </div>
</template>

<script setup>
import Scroll from '@/components/info/Scroll.vue'
import Content from '@/components/info/Content.vue'
import Others from '@/components/info/Others.vue'

import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/store'

import Project from '@/utils/project'
import BusinessList from '@/resource/business'
import IPList from '@/resource/ip'

const route = useRoute()
const store = useStore()

const current = route.query.id || Project.ChangYuan2.symbol

const scroll = ref([])
const content = ref([])
const others = ref([])

others.value = [...BusinessList, ...IPList]
    .filter(item => item.symbol !== current)
    .sort(() => Math.random() - 0.5)

async function getList() {
    const project = [...BusinessList, ...IPList].find(item => item.symbol === current)
    if (project) store.setProject(project)
    else store.setProject(IPList[0])

    const list = await store.project.list()
    scroll.value = list.default.scroll
    content.value = list.default.content
}

onMounted(() => {
    getList()
})
</script>

<style lang="scss" scoped>
.info-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0);
    overflow-y: auto;
    @include flex-center(center, normal, column);
}
</style>
