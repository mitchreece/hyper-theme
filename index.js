const styles = require('./styles/')

exports.decorateConfig = (config) => {
    return Object.assign({}, config, styles.overrides, {
        css: `
            ${config.css || ''}

            ${ styles.css }
        `
    })
}