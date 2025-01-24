const images = [
    
]

const loadImage = (src) => {
    if (!src) return Promise.resolve()
    return new Promise((resolve, reject) => {
        const link = document.createElement('link')
        link.as = 'image'
        link.rel = 'prefetch'
        link.href = src
        document.head.appendChild(link)
        
        link.onload = resolve
        link.onerror = reject
        setTimeout(reject, 5000)
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
