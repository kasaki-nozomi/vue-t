module.exports = ({}) => {
    return {
        plugins: {
            autoprefixer: {},
            'postcss-px-to-viewport-8-plugin': {
                unitToConvert: 'px',
                viewportWidth: 1920,
                unitPrecision: 5,
                propList: ['*'],
                viewportUnit: 'vw',
                fontViewportUnit: 'vw',
                selectorBlackList: ['.ignore', '.hairlines'],
                minPixelValue: 1,
                mediaQuery: true,
                exclude: /node_modules/i
            }
            // 'postcss-pxtorem': {
            //     rootValue: 75,
            //     unitPrecision: 5,
            //     propList: ['*'],
            //     exclude: /node_modules/i
            // }
        }
    }
}
