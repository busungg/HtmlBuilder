//import Utils from '../../src/js/utils/utils';


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

            //rect를 사용하는 이유 -> inline 요소의 width, height값을 확인하기 위함

            console.log('client', dom.clientWidth, dom.clientHeight);
            console.log('rect', rect.width, rect.height);

            pos.width = (isScrollX ? dom.scrollWidth : rect.width);
            pos.height = (isScrollY ? dom.scrollHeight : rect.height);

        } catch (err) {
            console.log(err);
        }
    }
}


const LayoutDiv1 = new Layout({
    element: 'div',
    attr: {
        style: 'width:100px; height:100px; padding:20px; margin:20px; border: 1px solid #dddddd'
    }
});

const LayoutDiv2 = new Layout({
    element: 'div',
    attr: {
        style: 'width:30px; height:30px; padding:20px; margin:20px; border: 1px solid #dddddd'
    }
});

const LayoutSpan = new Layout({
    element: 'span',
    text: 'text'
});

document.body.appendChild(LayoutDiv1.dom);
LayoutDiv1.dom.appendChild(LayoutDiv2.dom);
LayoutDiv2.dom.appendChild(LayoutSpan.dom);