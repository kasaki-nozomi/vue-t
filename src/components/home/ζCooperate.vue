<template>
    <div id="cooperate" class="cooperate">
        <Transition name="cooperate" mode="out-in">
            <div class="cooperate-list" v-if="cooperateShow">
                <div class="cooperate-title">合作企业 - Cooperative enterprise</div>
                <img :src="store.phone ? cooperate_m : cooperate" />
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { getCurrentInstance, ref } from 'vue'
import { useStore } from '@/store'

const { proxy } = getCurrentInstance()

const store = useStore()

const cooperateShow = ref(true)
const cooperate = new URL('@/assets/images/home/cooperate/banner.png', import.meta.url).href
const cooperate_m = new URL('@/assets/images/home/cooperate/banner-m.png', import.meta.url).href

proxy.bus.on('cooperate-show', () => cooperateShow.value = true)
</script>

<style lang="scss" scoped>
.cooperate {
    position: relative;
    width: 1200px;
    padding: 200px 0 400px 0;
    @include flex-center(center, center, column);

    .cooperate-list {
        flex-wrap: wrap;
        gap: 55px;
        @include flex-center(center, normal, column);

        .cooperate-title {
            font-size: 22px;
            color: rgba(255, 255, 255, 0.75);
        }

        >img {
            width: 980px;
            margin-top: 36px;
        }

        .cooperate-item {
            img {
                margin: 10px 0;
                width: 160px;
            }
        }
    }
}

@include setPhoneContent {
    .cooperate {
        padding: 500px 0;

        .cooperate-list {
            gap: 180px;

            .cooperate-title {
                font-size: 62px;
            }

            >img {
                width: 1300px;
                margin-top: 80px;
            }

            .cooperate-item {
                img {
                    width: 500px;
                }
            }
        }
    }
}

.cooperate-enter-active,
.cooperate-leave-active {
    transition: all 0.8s ease;
}

.cooperate-enter-from,
.cooperate-leave-to {
    opacity: 0;
    transform: translateY(60%);
}
</style>