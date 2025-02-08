<template>
    <div class="capacity" :class="{ reverse: capacity.id % 2 === 0 && !store.phone }">
        <div class="capacity-left" :class="{ 'capacity-leftm': store.pad }" @mouseenter="desc = true" @mouseleave="desc = false" :style="{ backgroundImage: `url(${capacity.image})` }">
            <Transition name="description" mode="out-in">
                <div class="capacity-desc" v-show="desc && !store.phone" @click="goCapacity" v-html="capacity.description"></div>
            </Transition>
        </div>
        <div class="capacity-right" v-if=!store.phone>
            <!-- <img :class="capacity.symbol" :src="capacity.logo" /> -->
            {{ capacity.title }}
        </div>
        <div class="capacity-bottom" v-if=store.phone>
            <!-- <img :class="capacity.symbol" :src="capacity.logo" /> -->
            <div class="capacity-bottom-title">{{ capacity.title }}</div>
            <div class="capacity-bottom-desc" v-html="capacity.description"></div>
            <button @click="goCapacity">查看更多</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'

const router = useRouter()
const store = useStore()

const { capacity } = defineProps({ capacity: { type: Object, required: true } })

const desc = ref(false)

function goCapacity() {
    router.push({ path: capacity.link })
}
</script>

<style lang="scss" scoped>
.capacity {
    width: 100%;
    background: black;
    @include flex-center();

    &.reverse {
        flex-direction: row-reverse;
    }

    .capacity-left {
        position: relative;
        width: 1266px;
        height: 466px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        overflow: hidden;
        transition: all 0.4s;

        .capacity-desc {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            line-height: 40px;
            padding: 0 220px;
            font-size: 18px;
            color: white;
            background: rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            cursor: pointer;
            @include flex-center();
        }
    }

    .capacity-right {
        height: 100%;
        flex: 1;
        color: white;
        @include flex-center(center, center, column);

        .changyuan {
            width: 280px;
        }
    } 
}

@media screen and (min-width: 1920px) {
    .capacity {
        .capacity-left {
            height: 466PX;

            .capacity-desc {
                line-height: 40PX;
                padding: 0 220PX;
                font-size: 16PX;
            }
        }

        .capacity-right {
            .changyuan {
                width: 280PX;
            }
        } 
    }
}

@include setPhoneContent {
    .capacity {
        @include flex-center(center, normal, column);

        .capacity-left {
            width: 1920px;
            height: 720px;
        }

        .capacity-bottom {
            @include flex-center(center, center, column);

            .capacity-bottom-title {
                margin-top: 160px;
                font-size: 66px;
                font-weight: bold;
                color: white;
            }

            .capacity-bottom-desc {
                width: 1280px;
                line-height: 96px;
                font-size: 48px;
                text-align: center;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                line-clamp: 4;
                -webkit-line-clamp: 4;
                text-overflow: ellipsis;
                overflow: hidden;
                color: rgba(255, 255, 255, 0.75);
            }

            img {
                margin-top: 160px;
            }

            .changyuan {
                width: 520px;
            }

            div {
                width: 1280px;
                line-height: 105px;
                margin-top: 100px;
                font-size: 52px;
                color: white;
                text-align: center;
            }

            button {
                height: 130px;
                margin: 160px 0 180px 0;
                padding: 0 80px;
                font-size: 52px;
                border-radius: 130px;
                color: black;
                background: white;
                @include flex-center();
            }
        }
    }
}

.description-enter-active,
.description-leave-active {
    transition: all 0.5s ease;
}
.description-enter-from,
.description-leave-to {
    opacity: 0;
}
</style>