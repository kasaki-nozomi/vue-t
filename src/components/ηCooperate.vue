<template>
    <div id="cooperate" class="cooperate">
        <Transition name="cooperate" mode="out-in">
            <div class="cooperate-box" v-if="cooperateShow">
                <div class="cooperate-title"><span>合作公司 / </span>Cooperative companies</div>
                <div class="cooperate-list">
                    <div class="cooperate-item" v-for="cooperate of cooperates">
                        <img :src="cooperate" />
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { getCurrentInstance, ref } from 'vue'

const { proxy } = getCurrentInstance()

const cooperateShow = ref(false)
const cooperates = [
    new URL('@/assets/images/cooperate/tencent.png', import.meta.url).href,
    new URL('@/assets/images/cooperate/netease.svg', import.meta.url).href,
    new URL('@/assets/images/cooperate/7game.png', import.meta.url).href,
    new URL('@/assets/images/cooperate/mao.svg', import.meta.url).href,
    new URL('@/assets/images/cooperate/ggac.svg', import.meta.url).href,
    new URL('@/assets/images/cooperate/changyou.svg', import.meta.url).href,
    new URL('@/assets/images/cooperate/lofter.svg', import.meta.url).href,
    new URL('@/assets/images/cooperate/diezhi.png', import.meta.url).href,
    new URL('@/assets/images/cooperate/gbits.png', import.meta.url).href,
    new URL('@/assets/images/cooperate/ggacp.svg', import.meta.url).href,
]

proxy.bus.on('cooperate-show', () => cooperateShow.value = true)
</script>

<style lang="scss" scoped>
.cooperate {
    position: relative;
    width: 1400px;
    min-height: calc(100vh - 100PX);
    padding: 160px 0;
    @include flex-center(center, center, column);

    .cooperate-title {
        font-size: 36px;
        text-align: center;
        color: white;

        span {
            font-weight: 600;
        }
    }

    .cooperate-list {
        margin-top: 120px;
        flex-wrap: wrap;
        gap: 65px;
        @include flex-center();

        .cooperate-item {
            img {
                width: 180px;
            }
        }
    }
}

@include setPadContent {
    .cooperate {
        min-height: calc(100vh - 86PX);
    }
}

@include setPhoneContent {
    .cooperate {
        min-height: calc(100vh - 72PX);

        .cooperate-title {
            font-size: 72px;
        }

        .cooperate-list {
            margin-top: 200px;
            gap: 180px;

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
    transition: all 0.6s ease;
}

.cooperate-enter-from,
.cooperate-leave-to {
    opacity: 0;
    transform: translateY(20%);
}
</style>