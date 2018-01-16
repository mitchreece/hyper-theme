const { colors } = require('./vars/')

module.exports = `
    .tab_tab {
        transition: opacity .2s ease-in;
        opacity: .5;
    }

    .tab_tab:hover {
        transition: opacity .3s ease-in-out;
        opacity: 1;
    }

    .tab_active,
    .tabs_title
    {
        transition: opacity .2s ease-in;
        opacity: .8;
        color: ${ colors.secondary };
    }

    .tab_active .tab_icon,
    .tab_active:hover,
    .tab_icon:hover .tab_icon
    {
        color: ${ colors.secondary };
    }
`