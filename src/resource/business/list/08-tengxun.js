const content = import.meta.glob('@/assets/images/business/list/08-tengxun/content/**/*.{jpg,png,jpeg,gif,webp}', {
    eager: true,
    import: 'default'
})

export default {
    content: Object.values(content),
    scroll: []
}
