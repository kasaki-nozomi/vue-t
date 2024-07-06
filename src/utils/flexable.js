(function flexible(window, document) {
    let documentElement = document.documentElement
    let dpr = window.devicePixelRatio || 1

    function setBodyFontSize() {
        if (document.body) document.body.style.fontSize = 12 * dpr + 'px'
        else document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
    setBodyFontSize()

    function setRemUnit() {
        if (documentElement.clientWidth < 750) {
            let rem = documentElement.clientWidth / 10
            documentElement.style.fontSize = rem + 'px'
        } else {
            documentElement.style.fontSize = 75 + 'px'
        }
    }
    setRemUnit()

    window.addEventListener('resize', setRemUnit)
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) setRemUnit()
    })

    if (dpr >= 2) {
        let fakeBody = document.createElement('body')
        let testElement = document.createElement('div')
        testElement.style.border = '.5px solid transparent'
        fakeBody.appendChild(testElement)
        documentElement.appendChild(fakeBody)
        if (testElement.offsetHeight === 1) documentElement.classList.add('hairlines')
        documentElement.removeChild(fakeBody)
    }
})(window, document)
