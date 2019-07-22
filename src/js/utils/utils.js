var utils = {
    builder: function (option) {
        try {
            var parent = document.createElement(option.element);

            for (key in option.attr) {
                if (option.attr[key] != null && option.attr[key] != undefined) {

                    if (Array.isArray(option.attr[key])) {
                        var values = '';
                        for (keyArray in option.attr[key]) {
                            values += (option.attr[key][keyArray] + ' ');
                        }

                        parent.setAttribute(key, values);
                    } else {
                        parent.setAttribute(key, option.attr[key]);
                    }
                }
            }

            if (option.text) {
                parent.appendChild(document.createTextNode(option.text));
            }

            if (option.html) {
                parent.innerHTML = option.html;
            }

            if (option.event) {
                for (var i = 0, len = option.event.length; i < len; i++) {
                    parent.addEventListener(option.event[i].type, option.event[i].func);
                }
            }

            if (option.child) {
                for (var i = 0, len = option.child.length; i < len; i++) {
                    parent.appendChild(utils.builder(option.child[i]));
                }
            }

            return parent;
        } catch (err) {
            console.log(err.message);
        }
    },

    getQueryOption: function () {
        var option = {};

        try {
            for (var i = 0, len = arguments.length; i < len; i += 2) {
                option[arguments[i]] = arguments[i + 1];
            }
        } catch (err) {
            console.log(err.message);
        }

        return option;
    },

    getElementByAttribute: function (options) {
        var query = '';
        for (var key in options) {
            query += ('[' + key + '="' + options[key] + '"]');
        }

        return document.querySelector(query);
    },

    getElementsByAttribute: function (options) {
        var query = '';
        for (var key in options) {
            query += ('[' + key + '="' + options[key] + '"]');
        }

        return document.querySelectorAll(query);
    },

    getJustTextContent: function (element) {
        var copyElement = element.cloneNode(true);

        while (copyElement.firstElementChild) {
            copyElement.removeChild(copyElement.firstElementChild);
        }

        return copyElement.textContent;
    },

    rgb2Hex: function (rgbStr) {
        var rgb = rgbStr.split('(')[1].split(')')[0].split(',');

        var r, g, b;
        r = parseInt(rgb[0]).toString(16);
        g = parseInt(rgb[1]).toString(16);
        b = parseInt(rgb[2]).toString(16);

        var hex = '#' + ((r.length == 2) ? r : ('0' + r)) + ((g.length == 2) ? g : ('0' + g)) + ((b.length == 2) ? b : ('0' + b));
        return hex;
    },

    beautifyHtml: function (parent, tab, tabIdx, html) {
        try {
            if (tabIdx == -1 && parent.children.length == 0) {
                return;
            }

            if (tabIdx != -1) {
                var clone = parent.cloneNode(true);
                while (clone.firstElementChild) {
                    clone.removeChild(clone.firstElementChild);
                }

                var tags = clone.outerHTML.replace(/\n/g, '').split('</');
                html.result += ('\n' + tab.repeat(tabIdx) + tags[0]);
            }

            if (parent.children.length == 0) {
                if (tags.length == 2) {
                    html.result += ('\n' + tab.repeat(tabIdx) + '</' + tags[1]);
                }
                return;
            } else {
                for (var i = 0, len = parent.children.length; i < len; i++) {
                    utils.beautifyHtml(parent.children[i], tab, tabIdx + 1, html);
                }

                if (tabIdx != -1) {
                    if (tags.length == 2) {
                        html.result += ('\n' + tab.repeat(tabIdx) + '</' + tags[1]);
                    }
                }
            }
        } catch (err) {
            console.log(err.message);
        }
    },

    changeResolution: function (id, width, height) {
        try {
            var content = document.getElementById(id);

            if (width) {
                content.style.width = width;
            }

            if (height) {
                content.style.height = height;
            }
        } catch (err) {
            console.log(err.message);
        }
    },

    exportHtml: function (id) {
        try {
            var html = {
                result: ''
            };
            var content = document.getElementById(id);
            var tempContent = document.createElement('div');
            tempContent.setAttribute('style', 'position: absolute; x:0; y:-1000;');
            tempContent.innerHTML = content.innerHTML;

            document.body.appendChild(tempContent);
            utils.beautifyHtml(tempContent, ' '.repeat(4), -1, html);
            document.body.removeChild(tempContent);

            if (html.result === '') {
                return '';
            }

            return html.result;
        } catch (err) {
            console.log(err.message);
        }
    },

    exportCss: function (id) {
        try {
            var cssElement = document.getElementById(id);
            var css = cssElement.textContent;

            return css;
        } catch (err) {
            console.log(err.message)
        }
    },

    obj2Css: function (css) {
        try {
            var cssText = '';
            var tab = ' '.repeat(4);

            cssText += (css.title + ' {\n');
            for (attr in css.content) {
                cssText += (tab + attr + ': ' + css.content[attr] + ';\n');
            }
            cssText += '}';

            return cssText;
        } catch (err) {
            console.log(err.message);
        }
    },

    cssId: null,

    /**
     * change style to css object
     * @param {string} name is css Name 
     * @param {object} style is for css content
     */
    style2Css: function (name, style) {
        try {
            var cssElement = document.getElementById(utils.cssId);

            var cssObj = {
                title: '.' + name,
                content: {}
            };
            for (var attr in style) {
                if (style[attr] != null) {
                    cssObj.content[attr] = style[attr];
                }
            }

            cssElement.appendChild(document.createTextNode(utils.obj2Css(cssObj) + '\n\n'));
            return true;
        } catch (err) {
            console.log(err.message);
            return false;
        }
    }
}

module.exports = utils;