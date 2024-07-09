<template>
    <div class="company">
        <img :src="logo" />
        <div class="company-origin">空鸟文化2023年我们成立了鵼视觉工作室</div>
        <div class="company-desc">我们团队秉承“ 开阔视野，引领潮流 ”的理念，我们相信，视觉的力量能够为文化行业带来更多的可能性，因此我们不断努力开拓新的领域，拓展更广阔的视野，致力于打造能引领潮流且有尖叫度的视觉IP。</div>
        <div class="company-states">
            <div class="state">
                <div class="state-title">Cooperative company</div>
                <div class="state-desc">8</div>
            </div>
            <div class="divide"></div>
            <div class="state">
                <div class="state-title">History Awards</div>
                <div class="state-desc">8</div>
            </div>
            <div class="divide"></div>
            <div class="state">
                <div class="state-title">Member size</div>
                <div class="state-desc">8</div>
            </div>
        </div>
    </div>
</template>

<script setup>
const logo = new URL('@/assets/images/company/logoo.png', import.meta.url).href
</script>

<style lang="scss" scoped>
.company {
    width: 100%;
    margin-top: 100PX;
    @include flex-center(center, normal, column);

    img {
        width: 600px;
        max-width: 250PX;
    }

    .company-origin {
        max-width: 400PX;
        margin-top: 42PX;
        font-size: 15PX;
        color: rgba(255, 255, 255, 0.7);
    }

    .company-desc {
        max-width: 500PX;
        margin-top: 28PX;
        font-size: 15PX;
        text-align: center;
        color: rgba(255, 255, 255, 0.7);
    }

    .company-states {
        width: 80%;
        margin-top: 52PX;
        @include flex-center();

        .state {
            flex: 1;
            @include flex-center(center, normal, column);

            .state-title {
                color: white;
            }

            .state-desc {
                position: relative;
                font-size: 60PX;
                color: rgba(255, 255, 255, 0.5);

                &::after {
                    content: "+";
                    position: absolute;
                    top: 0;
                    left: 100%;
                    font-size: 20PX;
                }
            }
        }

        .divide {
            width: 1px;
            height: 80%;
            background: rgb(200, 200, 200);
        }
    }
}
</style>