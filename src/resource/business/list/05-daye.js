const content = import.meta.glob('@/assets/images/business/list/05-daye/content/**/*.{jpg,png,jpeg,gif,webp}', {
    eager: true,
    import: 'default'
})

export default {
    content: Object.values(content),
    scroll: []
}
