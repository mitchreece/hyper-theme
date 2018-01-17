const { colors } = require('@mitchreece/theme-variables')

exports.css = [
    require('./tabs'),
    require('./header')
].join('')

exports.overrides = {
    borderColor: 'transparent',
    backgroundColor: colors.primary,
    foregroundColor: colors.fontLight,
    cursorColor: colors.secondary,
}