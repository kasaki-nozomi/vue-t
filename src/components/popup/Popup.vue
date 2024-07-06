<template>
    <div class="popup">
        <Transition name="popup-background" mode="out-in">
            <div v-if="popupShow" class="popup-background" @click.stop="closePopup"></div>
        </Transition>
        <Transition :name="`popup-content-${type}`" mode="out-in">
            <div v-if="popupShow" :class="['popup-content', type.split('-')[0]]" @click.stop>
                <div class="popup-header">
                    <div class="popup-title">
                        <div class="popup-title-text">
                            <AutoFontSize :text="t(popupLang[current])"><p>{{ t(popupLang[current]) }}</p></AutoFontSize>
                        </div>
                    </div>
                    <button class="popup-close" @click="closePopup">Close</button>
                </div>
                <div class="popup-body">
                    <div class="popup-list">
                        <Rule v-if="current === 'rule'"></Rule>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import Rule from '@/components/popup/popups/Rule.vue'

import { ref, getCurrentInstance } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore, useUserStore } from '@/store'

const { proxy } = getCurrentInstance()
const { t } = useI18n()

const { type } = defineProps({ type: { type: String, default: 'center-move' } })

const store = useStore()
const userStore = useUserStore()

const current = ref(null)
const popupShow = ref(false)
const popupLang = {
    rule: 'event_004',
}

function closePopup() {
    popupShow.value = false
}
proxy.bus.on('close-popup', closePopup)
proxy.bus.on('open-popup', (popup) => {
    if (popup !== 'rule' && popup !== 'share') {
        current.value = userStore.login ? popup : 'login'
    } else {
        current.value = popup
    }
    popupShow.value = true
})
</script>

<style lang="scss" scoped>
.popup {
    width: 100%;
    height: 100%;
    @include flex-center();

    .popup-background {
        z-index: 100;
        position: fixed;
        top: 0;
        width: 100vw;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.75);
    }

    .popup-content {
        z-index: 100;
        position: fixed;
        border-radius: 38px;
        @include flex-center(center, normal, column);

        &.center {
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            width: 660px;
            height: max-content;
            margin: auto;
        }

        &.bottom {
            width: 750px;
            bottom: 0;
        }

        .popup-header {
            position: relative;
            width: 100%;
            background: white;
            @include flex-center();

            .popup-title {
                width: 554px;
                margin-top: 40px;
                @include flex-center();

                .popup-title-text {
                    max-width: 265px;
                    font-size: 44px;

                    p {
                        color: black;
                    }
                }
            }

            .popup-close {
                position: absolute;
                top: 2px;
                right: 16px;
                width: 68px;
                height: 68px;
                color: black;
            }
        }

        .popup-body {
            width: 100%;
            background: white;
            @include flex-center();

            .popup-list {
                width: 100%;
                max-height: 64vh;
                margin-top: 10px;
                margin-left: 10px;
                padding-right: 10px;
                border-radius: 20px;
                overflow-x: hidden;
                overflow-y: auto;
                @include scroll-bar($width: 10px, $color: rgba(0, 0, 0, 0.25));
            }
        }
    }
}

.popup-background-enter-active,
.popup-background-leave-active,
.popup-content-center-scale-enter-active,
.popup-content-center-scale-leave-active,
.popup-content-center-move-enter-active,
.popup-content-center-move-leave-active,
.popup-content-bottom-enter-active,
.popup-content-bottom-leave-active {
    transition: all 0.4s ease;
}

.popup-background-enter-from,
.popup-background-leave-to {
    opacity: 0;
}

.popup-content-center-scale-enter-from,
.popup-content-center-scale-leave-to {
    opacity: 0;
    transform: scale(0.5);
}

.popup-content-center-move-enter-from,
.popup-content-center-move-leave-to {
    opacity: 0;
    transform: translateY(25%);
}

.popup-content-bottom-enter-from,
.popup-content-bottom-leave-to {
    opacity: 0;
    transform: translate(0, 80%);
}
</style>
