import { UAParser } from 'ua-parser-js'

export const getUrlParam = (key) => {
    let query = window.location.search.substring(1)
    let params = query.split('&')
    for (let i = 0; i < params.length; i++) {
        let pair = params[i].replace('=', '$').split('$')
        if (pair[0] == key) return pair[1]
    }
    return null
}

export const getUABrowser = () => {
    const ua = navigator.userAgent
    const parser = UAParser(ua)
    return parser.browser.name
}

export const timeFormat = (seconds) => {
    const days = Math.floor(seconds / (24 * 60 * 60))
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60))
    const minutes = Math.floor((seconds % (60 * 60)) / 60)
    const remainingSeconds = seconds % 60
    const daysStr = days.toString().padStart(2, '0')
    const hoursStr = hours.toString().padStart(2, '0')
    const minutesStr = minutes.toString().padStart(2, '0')
    const secondsStr = remainingSeconds.toString().padStart(2, '0')
    return `${days > 0 ? `${daysStr}d ` : ''}${hoursStr}:${minutesStr}:${secondsStr}`
}
