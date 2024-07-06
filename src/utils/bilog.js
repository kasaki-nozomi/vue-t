import qs from 'qs'
import { useUserStore } from '@/store'

export const randomString = (len) => {
    len = len || 18
    const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789'
    const maxPos = chars.length
    let pwd = ''
    for (let i = 0; i < len; i++) pwd = pwd + chars.charAt(Math.floor(Math.random() * maxPos))
    return pwd + new Date().getTime()
}

let browserMark = localStorage.getItem('browserMark') || ''
if (!browserMark) {
    browserMark = randomString()
    localStorage.setItem('browserMark', browserMark)
}

const game = import.meta.env.VITE_APP_GAME
function makeUpCommon(params = {}) {
    const userStore = useUserStore()
    return {
        app_id: `${game.toLowerCase()}.global.prod`,
        appoint_event: `${game.toLowerCase()}_${import.meta.env.VITE_PROJECT_LOG}`,
        detail: Object.assign({
            browser_id: browserMark,
            fpid: userStore.userInfo.fpid,
            uid: userStore.userInfo.uid
        }, params),
        event_ts: Date.now(),
        fpid: userStore.userInfo.fpid,
        uid: userStore.userInfo.uid
    }
}

function log(params) {
    const url = import.meta.env[`VITE_BASE_LOG_API_${import.meta.env.VITE_APP_GAME}`]
    if (navigator.sendBeacon) {
        navigator.sendBeacon(url, JSON.stringify(makeUpCommon(params)))
    } else {
        new Image().src = `${url}?${qs.stringify(makeUpCommon(params), { allowDots: true })}`
    }
}

export function logPageLoadDone() { log({ event: 'load_done' }) }

export function logLoginSuccess() { log({ event: 'login_success' }) }
