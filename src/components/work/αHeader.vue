<template>
    <div class="header">
        <div class="header-logo button" @click="router.go(-1)">
            <img class="logo" :src="logo" />
            <img class="name" :src="name" v-show="!store.phone" />
        </div>
    </div>
</template>

<script setup>
import { getCurrentInstance, nextTick, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from '@/store'
import router from '@/router';

const { proxy } = getCurrentInstance()
const { t } = useI18n()

const store = useStore()

const logo = new URL('@/assets/images/company/logo.png', import.meta.url).href
const name = new URL('@/assets/images/company/name.png', import.meta.url).href
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 140PX;
    padding: 0 100px;
    @include flex-center(center, flex-start);

    .header-logo {
        cursor: pointer;
        gap: 20PX;
        @include flex-center();

        img {
            height: 56PX;
            margin: 25PX 0;
        }
    }

    .header-tab {
        gap: 20PX;
        @include flex-center();

        button {
            height: 54PX;
            padding: 0 16PX;
            font-size: 22PX;
            border-radius: 54PX;
            color: rgb(220, 220, 220);
            background: transparent;
            transition: all 0.2s;

            &:hover {
                padding: 0 28PX;
                letter-spacing: 1PX;
                color: white;
                background: rgb(50, 50, 50);
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
                height: 40PX;
                margin: 0;
            }
        }
    }
}
</style>
