<template>
    <div class="business" @click="goProject">
        <img :src="business.image" />
        <div>
            <div class="point"></div>
            <div class="title">{{ business.title }}</div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useStore } from '@/store'

const store = useStore()
const router = useRouter()

const props = defineProps({ business: { type: Object, required: true } })

function goProject() {
    store.setProject(props.business)
    router.push({ path: '/info', query: { id: props.business.symbol } })
}
</script>

<style lang="scss" scoped>
.business {
    width: 100%;

    img {
        width: 100%;
        height: 240px;
        border-radius: 5px;
    }

    >div {
        margin-top: 2px;

        @include flex-center(center, normal);

        .point {
            width: 6px;
            height: 6px;
            margin-right: 10px;
            border-radius: 2px;
            background: rgba(120, 150, 255, 1);
        }

        .title {
            position: relative;
            font-size: 14px;
            letter-spacing: 1px;

            &::after {
                content: '';
                position: absolute;
                left: 0;
                bottom: -6px;
                width: 0;
                height: 1px;
                background-color: rgba(120, 150, 255, 0.8);
                transition: all 0.4s ease;
            }

            &:hover::after {
                width: 100%;
            }
        }
    }
}

@include setPhoneContent {
    .business {
        img {
            height: 600px;
            border-radius: 10px;
        }

        >div {
            margin-top: 8px;

            .point {
                width: 15px;
                height: 15px;
                margin-right: 25px;
                border-radius: 5px;
            }

            .title {
                font-size: 36px;
                letter-spacing: 2px;

                &::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: -6px;
                    width: 0;
                    height: 1px;
                    background-color: rgba(120, 150, 255, 0.8);
                    transition: all 0.4s ease;
                }

                &:hover::after {
                    width: 100%;
                }
            }
        }
    }
}
</style>