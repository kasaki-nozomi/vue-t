<template>
    <div class="header">
        <div class="header-logo button">
            <img class="logo" :src="logo" />
            <img class="name" :src="name" v-show="!store.phone" />
        </div>
        <div v-if="!store.pad" class="header-tab">
            <button>首页</button>
            <button>历史项目</button>
            <button>公司介绍</button>
            <button>联系我们</button>
        </div>
        <div v-else class="header-tab-button">
            <button @click="">
                <div></div>
                <div></div>
                <div></div>
            </button>
        </div>
    </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from '@/store'

const { proxy } = getCurrentInstance()
const { t } = useI18n()

const store = useStore()

const logo = new URL('@/assets/images/company/logo.png', import.meta.url).href
const name = new URL('@/assets/images/company/name.png', import.meta.url).href
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 180PX;
    padding: 0 100px;
    @include flex-center(center, space-between);

    .header-logo {
        cursor: pointer;
        gap: 20PX;
        @include flex-center();

        img {
            height: 75PX;
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

    .header-tab-button {
        button {
            gap: 6PX;
            @include flex-center(center, normal, column);

            div {
                width: 32PX;
                height: 4PX;
                background: white;
            }
        }
    }
}

@include setPhoneContent {
    .header {
        min-width: 300px;
        height: 100px;
        padding: 0 25px;

        .header-logo {

            img {
                height: 45px;
            }
        }

        .header-tab-button {
            button {
                gap: 5px;

                div {
                    width: 24px;
                    height: 3px;
                    background: white;
                }
            }
        }
    }
}
</style>
