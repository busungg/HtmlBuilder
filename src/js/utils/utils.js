
//하나의 object로 수정하자
const builder = function (option) {
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
                parent.appendChild(U.builder(option.child[i]));
            }
        }

        return parent;
    } catch (err) {
        console.log(err.message);
    }
};


const getQueryOption = function () {
    var option = {};

    try {
        for (var i = 0, len = arguments.length; i < len; i += 2) {
            option[arguments[i]] = arguments[i + 1];
        }
    } catch (err) {
        console.log(err.message);
    }

    return option;
}

const getElementByAttribute = function (options) {
    var query = '';
    for (var key in options) {
        query += ('[' + key + '="' + options[key] + '"]');
    }

    return document.querySelector(query);
};

const getElementsByAttribute = function (options) {
    //attrName, attrValue
    //'[' + attrName + "='" + attrValue + "']"

    var query = '';
    for (var key in options) {
        query += ('[' + key + '="' + options[key] + '"]');
    }

    return document.querySelectorAll(query);
};

const getJustTextContent = function (element) {
    var copyElement = element.cloneNode(true);

    while (copyElement.firstElementChild) {
        copyElement.removeChild(copyElement.firstElementChild);
    }

    return copyElement.textContent;
};

module.exports = {
    builder: builder,
    getQueryOption: getQueryOption,
    getElementByAttribute: getElementByAttribute,
    getElementsByAttribute: getElementsByAttribute,
    getJustTextContent: getJustTextContent
}