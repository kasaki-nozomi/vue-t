import { useUserStore } from '@/store'
import { bus } from '@/utils/bus'
import { toast_ } from '@/components/common/toast/toast'

import i18n from '@/i18n/index.js'

const channelURL = {
    facebook: 'https://www.facebook.com/sharer/sharer.php?m2w&u=',
    line:     'https://social-plugins.line.me/lineit/share?url=',
    whatsapp: 'https://api.whatsapp.com/send?text=',
    twitter:  'https://twitter.com/intent/tweet?url=',
    vk:       'https://vk.com/share.php?url='
}

let currentChannel = null
function share(channel) {
    currentChannel = channel
    // const userStore = useUserStore()
    // if (userStore.login) bus.emit('share-game')
    // else bus.emit('share-success')
    bus.emit('share-success')
}
bus.on('share', (channel) => share(channel))
bus.on('share-success', () => {
    if (!currentChannel) return
    const shareURL = `${import.meta.env[`VITE_OFFICIAL_URL_${import.meta.env.VITE_APP_GAME}`]}/event/${import.meta.env.VITE_PROJECT}${import.meta.env.VITE_NODE_ENV === 'development' ? '/index.html' : ''}`
    if (currentChannel === 'copy') {
        navigator.clipboard.writeText(shareURL)
        toast_(i18n.global.t('share_002'))
        return
    }
    window.location.href = `${channelURL[currentChannel]}${shareURL}`
})
