<template>
    <div class="slogan">
        <AutoFontSize><p class="slogan-title">{{ t('title') }}</p></AutoFontSize>
        <p class="slogan-time">{{ store.activityEnd ? t('event_002') : `UTC ${time}` }}</p>
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

const time = {
    KOA: '2024.06.01 - 2024.07.01',
    SS: '2024.06.01 - 2024.07.01',
    GOG: '2024.06.01 - 2024.07.01',
    MC: '2024.06.01 - 2024.07.01',
    ST: '2024.06.01 - 2024.07.01',
    MO: '2024.06.01 - 2024.07.01'
}[game]
</script>

<style lang="scss" scoped>
.slogan {
    margin-top: 40px;
    
    .slogan-title {
        height: 135px;
        line-height: 135px;
        font-size: 95px;
        font-weight: 800;
        text-align: center;
        background: linear-gradient(-30deg, #FFFFFF 0%, #D2D5FF 30%, #9C7DF4 55%, #FF73BF 67%, #FF73BF 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .slogan-time {
        font-size: 28px;
        text-align: center;
        letter-spacing: 1px;
        color: white;
    }
}
</style>
