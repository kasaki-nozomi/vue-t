const logo = new URL('@/assets/images/game/logo.svg', import.meta.url).href
const left = new URL('@/assets/images/game/left.svg', import.meta.url).href
const right = new URL('@/assets/images/game/right.svg', import.meta.url).href
const info = new URL('@/assets/images/game/info.svg', import.meta.url).href

export {
    logo,
    left,
    right,
    info
}

export default [
    {
        id: 1,
        name: 'HomePage',
        icon: new URL('@/assets/images/game/01-homepage/icon.svg', import.meta.url).href,
        title: new URL('@/assets/images/game/01-homepage/title.svg', import.meta.url).href,
        cover: new URL('@/assets/images/game/01-homepage/cover.jpg', import.meta.url).href,
        coverPhone: new URL('@/assets/images/game/01-homepage/cover-phone.jpg', import.meta.url).href
    },
    {
        id: 2,
        name: 'WorldView',
        icon: new URL('@/assets/images/game/02-worldview/icon.svg', import.meta.url).href,
        title: new URL('@/assets/images/game/02-worldview/title.svg', import.meta.url).href,
        cover: new URL('@/assets/images/game/02-worldview/cover.jpg', import.meta.url).href,
        coverPhone: new URL('@/assets/images/game/02-worldview/cover.jpg', import.meta.url).href
    },
    {
        id: 3,
        name: 'Mechanics',
        icon: new URL('@/assets/images/game/03-mechanics/icon.svg', import.meta.url).href,
        title: new URL('@/assets/images/game/03-mechanics/title.svg', import.meta.url).href,
        cover: new URL('@/assets/images/game/03-mechanics/cover.jpg', import.meta.url).href,
        coverPhone: new URL('@/assets/images/game/03-mechanics/cover.jpg', import.meta.url).href
    },
    {
        id: 4,
        name: 'Enviroment',
        icon: new URL('@/assets/images/game/04-enviroment/icon.svg', import.meta.url).href,
        title: new URL('@/assets/images/game/04-enviroment/title.svg', import.meta.url).href,
        cover: new URL('@/assets/images/game/04-enviroment/cover.jpg', import.meta.url).href,
        coverPhone: new URL('@/assets/images/game/04-enviroment/cover.jpg', import.meta.url).href
    },
    {
        id: 5,
        name: 'Character',
        icon: new URL('@/assets/images/game/05-character/icon.svg', import.meta.url).href,
        title: new URL('@/assets/images/game/05-character/title.svg', import.meta.url).href,
        cover: new URL('@/assets/images/game/05-character/cover.jpg', import.meta.url).href,
        coverPhone: new URL('@/assets/images/game/05-character/cover.jpg', import.meta.url).href
    },
    {
        id: 6,
        name: 'Notice',
        icon: new URL('@/assets/images/game/06-notice/icon.svg', import.meta.url).href,
        title: new URL('@/assets/images/game/06-notice/title.svg', import.meta.url).href,
        cover: new URL('@/assets/images/game/06-notice/cover.jpg', import.meta.url).href,
        coverPhone: new URL('@/assets/images/game/06-notice/cover.jpg', import.meta.url).href
    }
]
