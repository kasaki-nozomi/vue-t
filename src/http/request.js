import axios from 'axios'

function makeUpCommon(url, params = {}) {
    if (url.startsWith('')) return Object.assign(params, { })
    return Object.assign(params, { })
}

function transformUrl(url = '') {
    if (url.startsWith('')) return url.replace('', ``)
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

export const get = (url, query = {}, header = {}, cancelToken = null) => service({ method: 'GET', url: url, query: makeUpCommon(url, query), headers: header, cancelToken: cancelToken })
export const post = (url, data = {}, header = {}, cancelToken = null) => service({ method: 'POST', url: url, data: makeUpCommon(url, data), headers: header, cancelToken: cancelToken })
