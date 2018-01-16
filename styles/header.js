const { colors } = require('./vars')

module.exports = `
    .header_header {
        transition: all .8s ease-in-out;
    }

    .header_header:hover {
        transition: all .8s ease-in-out;
        background-color: ${ colors.primaryDark };
    }
`