import LoadingComponent from '@/components/common/loading/loading.vue'
import { useLoadingStore } from '@/store'

const Loading = {
    install(app) {
        const loadingStore = useLoadingStore()
        const loading = {
            show: () => loadingStore.loadingShow(),
            hide: () => loadingStore.loadingHide(),
        }
        app.config.globalProperties.loading = loading
        app.component('Loading', LoadingComponent)
    }
}

export default Loading
