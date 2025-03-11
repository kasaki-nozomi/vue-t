const content = import.meta.glob('@/assets/images/ip/list/06-yaomu/content/**/*.{jpg,png,jpeg,gif,webp}', {
    eager: true,
    import: 'default'
})

const scroll = import.meta.glob('@/assets/images/ip/list/06-yaomu/scroll/**/*.{jpg,png,jpeg,gif,webp}', {
    eager: true,
    import: 'default'
})

export default {
    content: Object.keys(content),
    scroll: Object.keys(scroll)
}
