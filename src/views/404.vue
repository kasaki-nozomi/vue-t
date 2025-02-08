<template>
    <div class="error">404</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.error {
    width: 100%;
    height: calc(100vh - 100PX - 260px);
    font-size: 50PX;
    font-weight: bold;
    letter-spacing: 5PX;
    color: white;
    @include flex-center();
}

@include setPadContent {
    .error {
        height: calc(100vh - 86PX - 260px);
    }
}

@include setPhoneContent {
    .error {
        margin-bottom: 200px;
        font-size: 250px;
        letter-spacing: 20px;
        height: calc(100vh - 72PX - 1250px);
    }
}
</style>
