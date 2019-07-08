const utils = require('../utils/utils');

var cssManager = {
    cssId: null,
    config: require('./config/config'),

    init: function (id) {
        cssManager.cssId = id;

        var head = document.getElementsByTagName('head')[0];

        var defaultCss = document.createElement('style');
        defaultCss.setAttribute('id', cssManager.cssId);
        defaultCss.setAttribute('type', 'text/css');

        head.appendChild(defaultCss);
    },

    render: function () {
        var defaultCss = document.getElementById(cssManager.cssId);
        var configs = cssManager.config;

        for (var i = 0, len = configs.length; i < len; i++) {
            defaultCss.appendChild(document.createTextNode(utils.obj2Css(configs[i]) + '\n\n'));
        }
    }
}

module.exports = cssManager;