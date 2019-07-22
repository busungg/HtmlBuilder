const utils = require('../utils/utils');

var cssManager = {
    cssId: null,
    cssContent: {
        bootstrap: [{
                element: 'link',
                src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
                extra: true
            },

            {
                element: 'script',
                src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
                extra: true
            },
            {
                element: 'script',
                src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js',
                extra: true
            },

            {
                element: 'script',
                src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js',
                extra: true
            },
            {
                element: 'link',
                src: 'html_builder.css',
                extra: false
            }
        ],
        plain: [{
            element: 'link',
            src: 'html_builder.css',
            extra: false
        }]
    },
    config: require('./config/config'),

    init: function (id, type, path_prefix) {
        var head = document.getElementsByTagName('head')[0];
        //remove css content
        for (var i = 0; i < head.children.length; i++) {
            if(head.children[i].getAttribute('head_type')) {
                if(head.children[i].getAttribute('head_type') === 'css') {
                    head.removeChild(head.children[i]);
                    i--;
                }
            }
        }

        var cssList = cssManager.cssContent[type];
        for (var idx = 0; idx < cssList.length; idx++) {
            element = document.createElement(cssList[idx].element);
            if (cssList[idx].element === 'link') {
                element.setAttribute('rel', 'stylesheet');
                if(!cssList[idx].extra) {
                    element.setAttribute('href', path_prefix + cssList[idx].src);
                } else {
                    element.setAttribute('href', cssList[idx].src);
                }
                element.setAttribute('head_type', 'css');

                
            } else {
                element.setAttribute('type', 'text/javascript');
                element.setAttribute('src', cssList[idx].src);
                element.setAttribute('head_type', 'css');
            }
            head.appendChild(element);
        }

        cssManager.cssId = id;
        var defaultCss = document.createElement('style');
        defaultCss.setAttribute('id', cssManager.cssId);
        defaultCss.setAttribute('type', 'text/css');
        defaultCss.setAttribute('head_type', 'css');

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