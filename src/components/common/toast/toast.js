import { createApp } from 'vue'
import toast from '@/components/common/toast/toast.vue'

let instance = null

const createToast = (options) => {
    const app = createApp(toast, typeof options === 'string' ? { message: options } : {
        message: options.message,
        duration: options.duration,
        theme: options.theme
    })

    instance && (instance.visible = false)
    instance = app.mount(document.createElement('div'))
    instance && (instance.visible = true)

    document.body.appendChild(instance.$el)
}

export default {
    install(app) {
        app.config.globalProperties.toast = (options) => createToast(options)
    }
}
