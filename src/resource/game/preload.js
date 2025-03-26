import GameList from '@/resource/game'
import Mechanics from '@/resource/game/mechanics'
import Worldview from '@/resource/game/worldview'
import Character from '@/resource/game/character'

const images = [
    ...GameList.map(item => item.cover),
    ...Mechanics.map(item => item.icon),
    ...Worldview.map(item => item.icon),
    ...Worldview.map(item => item.popup),
    ...Character.map(item => item.popup)
]

const loadImage = (src) => {
    if (!src) return Promise.resolve()
    return new Promise((resolve, reject) => {
        const link = document.createElement('link')
        link.as = 'image'
        link.rel = 'preload'
        link.href = src
        document.head.appendChild(link)

        link.onload = resolve
        link.onerror = reject
        setTimeout(reject, 20000)
    })
}

const loadImages = async () => {
    while (images.length) {
        try {
            await loadImage(images.shift())
        } catch (error) {
            console.error(error)
        }
    }
}

Promise.all(Array.from({ length: 2 }, loadImages))
