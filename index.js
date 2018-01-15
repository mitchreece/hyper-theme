const { colors } = require('./styles/vars')

exports.decorateConfig = (config) => {
    return Object.assign({}, config, {
        borderColor: 'transparent',
        backgroundColor: colors.primary,
        foregroundColor: colors.fontLight,
        cursorColor: colors.secondary,
        css: `
            ${config.css || ''}
        `
    })
}