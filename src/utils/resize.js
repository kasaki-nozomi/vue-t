import { useStore } from '@/store'

const setRem = () => {
    const width = window.innerWidth
    const height = window.innerHeight

    const documentElement = document.documentElement
    const htmlFontSize = width / height > 9 / 16
        ? (height * 9 / 16) / 750
        : (width) / 750
    if (documentElement && documentElement.style) {
        documentElement.style.fontSize = htmlFontSize + 'px'
    }
}
setRem()

const resize = () => {
    useStore().setResize()
    setRem()
}
window.addEventListener('resize', resize)
