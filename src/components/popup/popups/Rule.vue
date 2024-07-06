<template>
    <div class="rule">
        <div class="rule-content">
            <p class="rule-section time">{{ t('event_003') }}: <span>UTC {{ time }}</span></p>
            <p class="rule-section first">{{ t('rule_001') }}</p>
            <p class="rule-section">{{ t('rule_002') }}</p>
            <p class="rule-section">{{ t('rule_003') }}</p>
            <p class="rule-section">{{ t('rule_004') }}</p>
            <p class="rule-section section-title">
                <AutoFontSize :text="t('rule_005')"></AutoFontSize>
            </p>
            <p class="rule-section">{{ t('rule_006') }}</p>
            <p class="rule-section">{{ t('rule_007') }}</p>
            <p class="rule-section">{{ t('rule_008') }}</p>
            <p class="rule-section">{{ t('rule_009') }}</p>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

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
.rule {
    width: 100%;
    border-radius: 20px;
    background: white;

    .rule-content {
        max-height: 58vh;
        padding: 28px 48px;
        overflow-y: auto;
        
        .rule-section {
            margin-bottom: 10px;
            line-height: 34px;
            font-size: 24px;
            color: rgb(33, 33, 33);

            &.time {
                line-height: 40px;
                margin-top: 10px;
                font-size: 25px;
                color: rgb(0, 0, 0);
            }

            &.first {
                margin-top: 40px;
            }

            &.section-title {
                line-height: 40px;
                margin-top: 22px;
                margin-bottom: 14px;
                padding: 0 20px;
                font-size: 28px;
            }
            

            span {
                color: rgb(255, 85, 85);
                text-shadow: 2px 2px 2px rgba(100, 100, 100, 0.2);
                white-space: nowrap;
            }
        }
    }
}
</style>
