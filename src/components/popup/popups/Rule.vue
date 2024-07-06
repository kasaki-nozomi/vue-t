<template>
    <div class="rule">
        <div class="rule-content">
            <p class="rule-section section-title">
                <AutoFont :text="t('rule')"></AutoFont>
            </p>
            <p class="rule-section">{{ t('rule') }}</p>
            <p class="rule-section">{{ t('rule') }}</p>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
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
        }
    }
}
</style>
