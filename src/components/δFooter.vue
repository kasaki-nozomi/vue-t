<template>
    <div class="footer">
        <button class="top-up" @click="openStore({ utmCampaign: '' })">
            Top-up Centre
            <div class="discount">
                <div>{{ discount[0] }}<span>{{ discount[1] }}</span></div>
            </div>
        </button>
    </div>
</template>

<script setup>
import { openStore } from '@/utils/utils'
const game = import.meta.env.VITE_APP_GAME

const discount = {
    KOA: ['1ST PAY 20% OFF', ''],
    SS: ['5', '% OFF'],
    GOG: ['5~10', '% OFF'],
    MC: ['5~10', '% OFF'],
    ST: ['5', '% Bouns'],
    MO: ['5', '% OFF']
}[game]
</script>

<style lang="scss" scoped>
.footer {
    z-index: 10;
    position: fixed;
    bottom: 20px;
    width: 750px;
    @include breathe();
    @include flex-center();

    .top-up {
        position: relative;
        width: 600px;
        height: 80px;
        padding-bottom: 5px;
        border-radius: 80px;
        font-size: 42px;
        font-family: Nunito;
        color: white;
        text-shadow: 0 2px 2px black;
        background: linear-gradient(rgb(255, 40, 25) 0%, rgb(255, 100, 100) 75%, rgb(255, 40, 25) 100%);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        @include flex-center();

        .discount {
            position: absolute;
            top: -12px;
            right: 0;
            padding: 2px 20px;
            border-radius: 6px;
            transform: skew(-18deg);
            color: rgb(160, 65, 0);
            text-shadow: none;
            background: linear-gradient(90deg, rgb(250, 215, 25) 0%, rgb(250, 245, 80) 100%);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);

            div {
                font-size: 20px;
                font-family: Nunito-Bold;

                span {
                    font-size: 16px;
                    font-family: Nunito-Bold;
                }
            }
        }
    }
}
</style>
