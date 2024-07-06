<template>
    <div class="header">
        <div class="header-top">
            <img :class="['header-logo', game.toLowerCase()]" :src="logo" />
            <button class="header-topup">Top-up Centre</button>
        </div>
        <div class="header-bottom">
            <button class="header-rule" @click="bus.emit('open-popup', 'rule')">{{ t('event_004') }}</button>
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
const userStore = useUserStore()

const game = import.meta.env.VITE_APP_GAME
const logo = import.meta.env[`VITE_LOGO_${game}`]
</script>

<style lang="scss" scoped>
.header {
    .header-top {
        padding: 15px 25px;
        @include flex-center(center, space-between);

        .header-logo {
            width: 220px;
        }

        .header-topup {
            width: 280px;
            height: 58px;
            padding-bottom: 4px;
            border-radius: 58px;
            font-size: 26px;
            font-family: Nunito;
            color: white;
            text-shadow: 0 2px 2px black;
            background: linear-gradient(rgb(255, 40, 25) 0%, rgb(255, 100, 100) 75%, rgb(255, 40, 25) 100%);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
            @include breathe();
            @include flex-center();
        }
    }

    .header-bottom {
        position: relative;

        .header-rule {
            position: absolute;
            right: 0;
            padding: 10px 24px 10px 30px;
            border-radius: 40px 0 0 40px;
            font-size: 18px;
            color: white;
            background: rgba(255, 255, 255, 0.25);
            transform-origin: right center;
        }
    }
}
</style>
