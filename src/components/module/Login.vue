<template>
    <Transition name="login" mode="out-in">
        <div v-if="!userStore.login" class="login">
            <div class="login-input">
                <input class="login-input-box" ref="loginInput" v-model="uid" :maxlength="18"
                    :placeholder="t('login_001')" @input="uid = uid.replace(/\D/g, '')"
                    @afterpaste="uid = uid.replace(/\D/g, '')" />
                <button class="login-question" @click.stop="uidShow = true" @mouseenter.stop="uidShow = true"
                    @mouseleave.stop="uidShow = false">
                    <img class="login-uid" :class="{ 'uid-show': uidShow }" :src="uidTip" />
                </button>
            </div>
            <button class="login-button" @click="login">{{ t('login_003') }}</button>
        </div>
        <div v-else class="user">
            <div v-show="userStore.userInfo.icon" class="user-avatar"
                :style="{ backgroundImage: `url(${userStore.userInfo.icon})` }"></div>
            <div class="user-box">
                <div class="user-name">
                    <span>{{ userStore.userInfo.name }}</span>
                    <button class="user-logout" @click="logout">
                        <svg class="user-logout-svg" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                            <path d="M830.4 457.9H193.6c-26.5 0-48-21.5-48-48s21.5-48 48-48h636.8c26.5 0 48 21.5 48 48s-21.5 48-48 48z" fill="#FFFFFF"></path>
                            <path d="M193.6 457.9c-12.3 0-24.6-4.7-33.9-14.1-18.8-18.8-18.8-49.1 0-67.9L339.6 196c18.8-18.8 49.1-18.8 67.9 0s18.8 49.1 0 67.9l-180 180c-9.3 9.4-21.6 14-33.9 14zM830.4 662.1H193.6c-26.5 0-48-21.5-48-48s21.5-48 48-48h636.8c26.5 0 48 21.5 48 48s-21.5 48-48 48z" fill="#FFFFFF"></path>
                            <path d="M650.5 841.9c-12.3 0-24.6-4.7-33.9-14.1-18.8-18.8-18.8-49.2 0-67.9L796.5 580c18.8-18.8 49.1-18.8 67.9 0s18.8 49.2 0 67.9l-180 180c-9.4 9.4-21.6 14-33.9 14z" fill="#FFFFFF"></path>
                        </svg>
                    </button>
                </div>
                <div class="user-info">
                    <span class="level">{{ t('user_001', [userStore.userInfo.level]) }}</span>
                    <span class="sever">{{ t('user_003', [userStore.userInfo.server]) }}</span>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue'
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/store'

const { proxy } = getCurrentInstance()
const { t } = useI18n()

const userStore = useUserStore()

const game = import.meta.env.VITE_APP_GAME
const uidTip = new URL(`/src/assets/images/uid/login-uid-${game.toLowerCase()}.png`, import.meta.url).href

const uid = ref(null)
const uidShow = ref(false)

function login() {
    if (!uid.value) {
        proxy.toast(t('login_002'))
        proxy.$refs.loginInput.select()
        return
    }
    // if (uid.value == userStore.userInfo.uid) {
    //     proxy.toast(t('login_005'))
    //     return
    // }
    proxy.bus.emit('login', { uid: Number(uid.value) })
}

function logout() {
    proxy.bus.emit('logout')
}
</script>

<style lang="scss" scoped>
.login {
    margin-top: 20px;
    @include flex-center(center, space-between);

    .login-input {
        position: relative;
        width: 420px;
        margin-left: 48px;
        @include flex-center(center, space-between);

        .login-input-box {
            width: 420px;
            height: 70px;
            padding-right: 20px;
            font-size: 28px;
            border-radius: 18px;
            color: rgb(250, 255, 235);
            border: 3px solid #baaefb;

            &:focus {
                border: 3px solid red;
            }
        }

        .login-question {
            z-index: 10;
            position: absolute;
            right: 0;
            width: 35px;
            height: 35px;
            margin-right: 16px;
            font-size: 0;
            @include flex-center(normal, center);
            @include background($image: 'uid/login-question.png');

            .login-uid {
                position: absolute;
                top: 42px;
                width: 400px;
                padding: 12px;
                border: 4px solid #FEC840;
                border-radius: 10px;
                background: #550001;
                opacity: 0;
                pointer-events: none;
                transition: all 0.3s;

                &.uid-show {
                    opacity: 1;
                }
            }
        }
    }

    .login-button {
        width: 210px;
        height: 66px;
        margin-right: 50px;
        padding: 0 16px;
        padding-bottom: 2px;
        font-weight: 500;
        font-size: 30px;
        line-height: 40px;
        text-align: center;
        color: #570001bb;
        text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.25);
    }
}

.user {
    margin-top: 20px;
    color: white;
    @include flex-center(center, center);

    .user-avatar {
        width: 110px;
        height: 110px;
        margin-right: 12px;
        border: 3px solid #9e80f5;
        border-radius: 50%;
        overflow: hidden;
        background-size: 100% 100%;
        background-color: rgba($color: white, $alpha: 0.2);
    }

    .user-box {
        @include flex-center(flex-start, center, column);

        .user-name {
            height: 36px;
            margin-left: 2px;
            font-size: 30px;
            font-weight: bold;
            color: white;
            @include flex-center();

            .user-logout {
                width: 60px;
                height: 38px;
                margin-left: 15px;
                border-radius: 38px;
                border: 4px solid #FEC840;
                background: #550001;
                @include flex-center();

                .user-logout-svg {
                    width: 34px;
                    height: 34px;
                }
            }
        }

        .user-info {
            margin-top: 12px;
            margin-left: 3px;
            font-size: 25px;
            color: rgb(190, 190, 190);
            @include flex-center(flex-start, normal);

            .sever {
                margin-left: 16px;
            }
        }
    }
}

.login-enter-active,
.login-leave-active {
    transition: all 0.25s ease;
}

.login-enter-from,
.login-leave-to {
    opacity: 0;
    transform: scale(0.75);
}
</style>
