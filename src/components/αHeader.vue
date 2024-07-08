<template>
    <div class="header">
        <div class="header-logo button">
            <img class="logo" :src="logo" />
            <img class="name" :src="name" />
        </div>
        <div class="header-tab">
            <button>首页</button>
            <button>历史项目</button>
            <button>公司介绍</button>
            <button>联系我们</button>
        </div>
    </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore, useUserStore } from '@/store'

const { proxy } = getCurrentInstance()
const { t } = useI18n()

const store = useStore()

const logo = new URL('@/assets/images/company/logo.png', import.meta.url).href
const name = new URL('@/assets/images/company/name.png', import.meta.url).href
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 200PX;
    padding: 0 120PX;
    @include flex-center(center, space-between);

    .header-logo {
        cursor: pointer;
        gap: 20PX;
        @include flex-center();

        img {
            height: 80PX;
        }
    }

    .header-tab {
        gap: 20PX;
        @include flex-center();

        button {
            height: 66PX;
            padding: 0 18PX;
            font-size: 28PX;
            border-radius: 66PX;
            color: rgb(200, 200, 200);
            background: transparent;
            transition: all 0.2s;

            &:hover {
                padding: 0 36PX;
                letter-spacing: 1PX;
                color: white;
                background: rgb(80, 80, 80);
            }
        }
    }
}
</style>
