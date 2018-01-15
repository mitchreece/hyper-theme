const { colors } = require('./styles/vars')
const cssOverride = require('./styles/')

exports.decorateConfig = (config) => {
    return Object.assign({}, config, {
        borderColor: 'transparent',
        backgroundColor: colors.primary,
        foregroundColor: colors.fontLight,
        cursorColor: colors.secondary,
        css: `
            ${config.css || ''}

            ${ cssOverride }
        `
    })
}