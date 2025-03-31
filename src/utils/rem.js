export default (function (window, document) {
    function setRem() {
        const documentElement = document.documentElement
        const htmlFontSize = Math.min(documentElement.clientWidth / 750, 1)

        if (documentElement && documentElement.style) {
            documentElement.style.fontSize = htmlFontSize + 'px'
        }
    }
    setRem()

    window.addEventListener('resize', setRem)
    window.addEventListener('pageshow', function (event) {
        if (event.persisted) setRem()
    })
})(window, document)

export const px2rem = (px) => `${(px / 750).toFixed(4)}rem`
