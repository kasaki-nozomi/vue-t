<template>
    <transition name="loading-wrapper">
        <div class="loading" v-show="loadingStore.loading">
            <div class="loading-sign"></div>
        </div>
    </transition>
</template>

<script setup>
import { useLoadingStore } from '@/store'
const loadingStore = useLoadingStore()
</script>

<style lang="scss">
.loading {
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    transition: opacity 0.2s ease;

    @mixin absolute-center() {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }

    .loading-sign {
        @include absolute-center();
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 5px solid white;
        border-color: rgb(255, 90, 0) transparent rgb(255, 90, 0) transparent;
        animation: turnround 1.2s linear infinite;
    }
}

@keyframes turnround {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.loading-wrapper-enter-from,
.loading-wrapper-leave-to {
    opacity: 0;
}
</style>
