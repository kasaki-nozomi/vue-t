<template>
    <div class="notice">
        <div class="notice-list">
            <div v-for="(item, index) in noticeList" :key="index">
                <Transition name="notice" mode="out-in">
                    <div class="notice-item" v-show="current === index">
                        <div class="notice-image-list">
                            <img v-for="image in item.images" :src="image" />
                        </div>
                        <div class="notice-info">
                            <div class="notice-title">{{ item.title }}</div>
                            <div class="notice-time">{{ item.time }}</div>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const current = ref(0)

const noticeList = [
    {
        title: '新的周边发售 New peripheral offering',
        content: '',
        time: '2025-02-20',
        images: [
            new URL('@/assets/images/game/06-notice/list/01.png', import.meta.url).href,
        ]
    }
]
</script>

<style lang="scss" scoped>
.notice {
    height: 100%;

    .notice-list {
        position: relative;
        width: auto-value(1000);
        height: 100%;

        >div {
            position: absolute;
            width: 100%;
            height: 100%;
            @include flex-center();
        }

        .notice-item {
            width: 100%;

            .notice-image-list {
                img {
                    width: 100%;
                }
            }

            .notice-info {
                margin-top: auto-value(15);
                font-size: auto-value(18);
                @include flex-center(center, space-between);
            }
        }
    }
}

.notice-enter-active {
    transition: all 0.4s ease;
    transition-delay: 0.32s;
}
.notice-leave-active {
    transition: all 0.4s ease;
}
.notice-enter-from,
.notice-leave-to {
    opacity: 0;
    transform: translateX(auto-value(60));
}
</style>