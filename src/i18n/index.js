import { createI18n } from 'vue-i18n'
import lang from '@/i18n/lang'

const i18n = createI18n({
    locale: 'en',
    legacy: false,
    fallbackLocale: 'en',
    messages: lang.config
})

export default i18n
