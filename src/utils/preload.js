const preload = [
    new URL('@/assets/images/background.jpg', import.meta.url).href
]

for(let i = 0; i < preload.length; i++) {
    const image = new Image()
    image.src = preload[i]
}