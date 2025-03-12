const content = import.meta.glob('@/assets/images/business/list/03-tiangong/content/**/*.{jpg,png,jpeg,gif,webp}', {
    eager: true,
    import: 'default'
})

export default {
    content: Object.values(content),
    scroll: []
}