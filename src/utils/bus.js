import mitt from 'mitt'

const mitt_ = mitt()

export const bus = mitt_

export default {
    install: (app) => {
        app.config.globalProperties.bus = mitt_
    }
}
