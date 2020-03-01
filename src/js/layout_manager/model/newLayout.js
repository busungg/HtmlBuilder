/*
 * 1. 추후 layout.js를 대체
 *  - 디자인 패턴을 변경한다.
 * 2. ES6의 클래스를 사용하여 모듈 패턴을 구축한다.
 */

import Utils from '../../utils/utils';

const Utils = {
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

    rgb2Hex: ()=> {
        return '#fff';
    }
};

class Layout {

    /*
        option
        {
            element: 'h1',
            attrs: {
                class: ['block_border-basic']
            },
            text: 'h1 element text',
            isHave: false
        }
    */
    constructor(option) {
        this.dom = Utils.builder(option);
        //dom도 객체이기 때문에 layout property를 만들어서 자기 자신을 참조하게 한다.
        this.dom.layout = this;

        this.pos = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
        this.canHaveChild = option.isHave;
    }

    isContain(x, y) {
        try {
            if (!this.canHaveChild) {
                return false;
            }

            let pos = this.pos;
            if (pos.x <= x && x <= (pos.x + pos.width) &&
                pos.y <= y && y <= (pos.y + pos.height)) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            console.log(err);
        }
    }

    updateLayout() {
        try {
            //This Layout
            const dom = this.dom
            const pos = this.pos;
            const rect = dom.getBoundingClientRect() //render된 후의 top, left, width, height을 제공;

            //Offset의 기준이 되는 Parent Element
            const offsetParent = dom.offsetParent;

            /*
                1. 시작 위치를 정확하게 파악해야한다.
                2. 시작 위치에서 width와 height값을 통해 Element의 정확한 크기를 알아야 한다.
                3. OffsetLeft 등을 통해 offsetParent에서 얼마나 떨어져 있는지 알 수 있다.

                * padding을 헷갈리지 말자
                * padding이란 element 요소 안에 지정해둔 사이즈만큼 추가하는 것이다.
                * 30px * 30px element가 존재할 시 padding이 20px이면 width = 30 + 20 * 2, height = 30 + 20 * 2; 이다.

            */
            if (offsetParent) {
                pos.x = dom.offsetLeft + (offsetParent.layout ? offsetParent.layout.pos.x : offsetParent.offsetLeft);
                pos.y = dom.offsetTop + (offsetParent.layout ? offsetParent.layout.pos.y : offsetParent.offsetTop);
            } else {
                pos.x = dom.offsetLeft;
                pos.y = dom.offsetTop;
            }

            const isScrollX = (dom.scrollWidth - dom.clientWidth);
            const isScrollY = (dom.scrollHeight - dom.clientHeight);

            //getBoundingClientRect를 사용하는 이유 -> inline 요소의 width, height값을 확인하기 위함
            pos.width = (isScrollX ? dom.scrollWidth : rect.width);
            pos.height = (isScrollY ? dom.scrollHeight : rect.height);

        } catch (err) {
            console.log(err);
        }
    }

    initCss() {
        try {
            const classList = this.dom.classList;
            classList.remove('hb_border-contain');
            classList.remove('hb_border-top-contain');
            classList.remove('hb_border-top-move');
            classList.remove('hb_border-bottom-move');
            classList.remove('hb_border-left-move');
            classList.remove('hb_border-right-move');
        } catch (err) {
            console.log(err);
        }
    }

    get property() {
        const dom = this.dom;

        try {
            const property = {};

            property.id = (dom.id || null);
            property.name = (dom.getAttribute('name') || null);
            property.title = (dom.title || null);

            if (dom.firstChild) {
                if (dom.firstChild.nodeType === Node.TEXT_NODE) {
                    property.text = dom.firstChild.textContent;
                } else {
                    property.text = null;
                }
            } else {
                property.text = null;
            }

            if (dom.nodeName === 'INPUT' || dom.nodeName === 'TEXTAREA') {
                property.value = (dom.value || '');
            } else {
                property.value = (dom.getAttribute('value') || '');
            }

            if (dom.nodeName === 'IMG') {
                property.src = (dom.getAttribute('src') || '');
            }

            if (dom.nodeName === 'A') {
                property.href = (dom.getAttribute('href') || '');
            }

            property.class = [];
            for (let i = 0, len = dom.classList.length; i < len; i++) {
                if (dom.classList[i].indexOf('hb_selectable') === -1 && dom.classList[i].indexOf('hb_selected') === -1) {
                    property.class.push(dom.classList[i]);
                }
            }

            property.option = [];
            if (dom.options) {
                for (let i = 0, len = dom.options.length; i < len; i++) {
                    property.option.push({
                        text: dom.options[i].text,
                        value: dom.options[i].value
                    });
                }
            }

            property.style = {};
            const domStyle = dom.style;

            //Group Property padding, margin, border-width, border-color, border-style
            const groupProperty = {};
            groupProperty['padding'] = {
                checkSum: 0,
                value: null,
                group: true
            };
            groupProperty['margin'] = {
                checkSum: 0,
                value: null,
                group: true
            };
            groupProperty['border-width'] = {
                checkSum: 0,
                value: null,
                group: true
            };
            groupProperty['border-color'] = {
                checkSum: 0,
                value: null,
                group: true
            };
            groupProperty['border-style'] = {
                checkSum: 0,
                value: null,
                group: true
            };

            var direction = ['-left', '-right', '-top', '-bottom'];

            var i, len, groupName, propertyName, propertyValue;
            for (i = 0, len = domStyle.length; i < len; i++) {
                propertyName = domStyle.item(i);
                propertyValue = domStyle[propertyName];

                groupName = propertyName.split(/-left|-right|-top|-bottom/);
                groupName = groupName[0] + groupName[1];

                if (groupProperty[groupName]) {
                    if (groupProperty[groupName].checkSum === 0) {
                        groupProperty[groupName].value = propertyValue;
                    } else {
                        if (groupProperty[groupName].value !== propertyValue) {
                            groupProperty[groupName].group = false;
                        }
                    }

                    groupProperty[groupName].checkSum++;
                }

                if (propertyName.indexOf('color') != -1) {
                    property.style[propertyName] = Utils.rgb2Hex(propertyValue);
                } else {
                    property.style[propertyName] = propertyValue;
                }
            }

            for (key in groupProperty) {
                if (groupProperty[key].checkSum === 4 && groupProperty[key].group) {
                    if (key.indexOf('color') != -1) {
                        property.style[key] = Utils.rgb2Hex(groupProperty[key].value);
                    } else {
                        property.style[key] = groupProperty[key].value;
                    }

                    /*group 화 할 시 사용
                    groupName = key.split('-');
                    for (i = 0, len = direction.length; i < len; i++) {
                        propertyName = ((groupName.length > 1) ? (groupName[0] + direction[i] + '-' + groupName[1]) : (groupName[0] + direction[i]));
                        prop.style[propertyName] = null;
                    }
                    */
                }
            }

            return property;
        } catch (err) {
            console.log(err.message);
        }
    }
}