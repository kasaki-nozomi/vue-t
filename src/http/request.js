import axios from 'axios'
import { useUserStore } from '@/store'
import { randomString } from '@/utils/bilog'

export const Game = import.meta.env.VITE_APP_GAME
export const GameInfo = {
    KOA: { id: 2031,  p1: 0, p2: { init: 0 } },
    SS:  { id: 30001, p1: 0, p2: { init: 0 } },
    GOG: { id: 2064,  p1: 0, p2: { init: 0 } },
    MC:  { id: 2200,  p1: 0, p2: { init: 0 } },
    ST:  { id: 2202,  p1: 0, p2: { init: 0 } },
    MO:  { id: 70001, p1: 0, p2: { init: 0 } }
}[Game]

let browserMark = localStorage.getItem('browserMark') || ''
if (!browserMark) {
    browserMark = randomString()
    localStorage.setItem('browserMark', browserMark)
}

function makeUpCommon(url, params = {}) {
    if (import.meta.env.VITE_USER_NODE_ENV === 'development') {
        Object.assign(params, { gameServerEnv: '' })
    }
    if (url.startsWith('/acc')) {
        return Object.assign(params, {
            game_id: GameInfo.id,
            game_project: `${Game.toLowerCase()}_global`,
            source: 'web',
            country: 'HK',
            currency: 'USD'
        })
    }
    if (url.startsWith('/ame')) {
        if (localStorage.getItem(`${Game.toLowerCase()}-openid`)) {
            Object.assign(params, { openid: localStorage.getItem(`${Game.toLowerCase()}-openid`) })
        } else {
            Object.assign(params, { p3: 'api' })
        }
        return Object.assign(params, {
            p0: 'web',
            p1: GameInfo.p1,
            game: Game.toLowerCase()
        })
    }
    if (url.startsWith('/log')) {
        const userStore = useUserStore()
        return {
            app_id: `${Game.toLowerCase()}.global.prod`,
            appoint_event: 'tree',
            detail: Object.assign({
                browser_id: browserMark,
                fpid: userStore.userInfo.fpid,
                uid: userStore.userInfo.uid
            }, params),
            event_ts: new Date().getTime(),
            fpid: userStore.userInfo.fpid,
            uid: userStore.userInfo.uid
        }
    }
}

function transformUrl(url = '') {
    if (url.startsWith('/acc')) return url.replace('/acc', import.meta.env[`VITE_BASE_ACC_API_${Game}`])
    if (url.startsWith('/ame')) return url.replace('/ame', import.meta.env[`VITE_BASE_AME_API_${Game}`])
    if (url.startsWith('/log')) return url.replace('/log', import.meta.env[`VITE_BASE_LOG_API_${Game}`])
    return url
}

const service = axios.create({ timeout: 20000 })

service.interceptors.request.use(
    (config) => {
        config.url = transformUrl(config.url)
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)
service.interceptors.response.use(
    (response) => {
        if (response.status !== 200) {
            return Promise.reject(response.status)
        }
        return response.data
    },
    (error) => {
        return Promise.reject(error)
    }
)

export const get  = (url, params = {}, header = {}, cancelToken = null) => service({ method: 'GET',  url: url, params: makeUpCommon(url, params), headers: header, cancelToken: cancelToken })
export const post = (url, data = {},   header = {}, cancelToken = null) => service({ method: 'POST', url: url, data:   makeUpCommon(url, data),   headers: header, cancelToken: cancelToken })
