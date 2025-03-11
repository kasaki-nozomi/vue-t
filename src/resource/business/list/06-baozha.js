const content = import.meta.glob('@/assets/images/business/list/06-baozha/content/**/*.{jpg,png,jpeg,gif,webp}', {
    eager: true,
    import: 'default'
})

export default {
    content: Object.keys(content),
    scroll: []
}