const content = import.meta.glob('@/assets/images/ip/list/04-shanhaibian/content/**/*.{jpg,png,jpeg,gif,webp}', {
    eager: true,
    import: 'default'
})

const scroll = import.meta.glob('@/assets/images/ip/list/04-shanhaibian/scroll/**/*.{jpg,png,jpeg,gif,webp}', {
    eager: true,
    import: 'default'
})

export default {
    content: Object.values(content),
    scroll: Object.values(scroll)
}
