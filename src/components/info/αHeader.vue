<template>
    <div class="header">
        <div class="header-logo button" @click="router.push({ path: '/' })">
            <img class="logo" :src="logo" />
            <img class="name" :src="name" />
        </div>
    </div>
</template>

<script setup>
import { getCurrentInstance, nextTick, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'

const { proxy } = getCurrentInstance()
const { t } = useI18n()

const router = useRouter()
const store = useStore()

const logo = new URL('@/assets/images/company/logo.png', import.meta.url).href
const name = new URL('@/assets/images/company/name.png', import.meta.url).href
</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100PX;
    padding: 0 100px;
    @include flex-center(center, flex-start);

    .header-logo {
        cursor: pointer;
        gap: 20PX;
        @include flex-center();

        img {
            height: 44PX;
            margin: 28PX 0;
        }
    }
}

@include setPadContent {
    .header {
        height: 86PX;
        padding: 0 86px;

        .header-logo {
            img {
                height: 40PX;
                margin: 0;
            }
        }
    }
}


@include setPhoneContent {
    .header {
        min-width: 300PX;
        height: 72PX;
        padding: 0 20PX;

        .header-logo {
            img {
                height: 36PX;
                margin: 0;
            }
        }
    }
}
</style>
