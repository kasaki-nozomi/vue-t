import useMitt from 'mitt'

const mitt = useMitt()

export const bus = mitt

export default {
    install: (app) => {
        app.config.globalProperties.bus = mitt
    }
}
