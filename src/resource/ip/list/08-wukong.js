const content = import.meta.glob('@/assets/images/ip/list/08-wukong/content/**/*.{jpg,png,jpeg,gif,webp}', {
    eager: true,
    import: 'default'
})

export default {
    content: Object.values(content),
    scroll: []
}
