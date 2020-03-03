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
    },

    rgb2Hex: () => {
        return '#fff';
    }
};

class Layout { //단일 Dom처럼 사용하기 위해 생성한 Class

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
        /*
            option은 변경되면 안되기 때문에 closuer를 이용하여 private 접근자를 사용한다.
        */
        let _option = option;
        this.getOption = () => {
            return _option;
        };

        this.dom = Utils.builder(option);
        //dom도 객체이기 때문에 layout property를 만들어서 자기 자신을 참조하게 한다.
        this.dom.layout = this;
        this.canHaveChild = true; //option.canHaveChild; 임시

        /*
            1. Dom마다 event 생성 이유
                - Memory가 많이 든다 하더라고 어디에서 생성하더라도 단일로 관리 할 수 있도록 event를 각각 생성한다.
            2. 주의 사항
                - method의 this는 현재 scope로 정해지기 때문에 this를 사용할 수 있다.
        */

        /*
            1. 사용 목적
              - select 여부 표시할 때 사용

            2. 주의 사항
              - mouseenter는 event bubbling이 존재하지 않는다.
              - mouseOut은 event bubbling이 존재한다.
              - mouseenter는 child에 영향 받지 않는다.
              - mouseover는 child에 영향 받는다.
         */
        const mouseOver = (evt) => {
            this.dom.classList.add('hb_selectable');
            evt.stopPropagation();
        };

        /*
            1. 사용 목적
              - select 여부 표시할 때 사용
            
            2. 주의 사항  
              - mouseLeave는 event bubbling이 존재하지 않는다.
              - mouseOut은 event bubbling이 존재한다.
              - mouseLeave는 child에 영향 받지 않는다.
              - mouseOut은 child에 영향을 받는다.
        */
        const mouseOut = (evt) => {
            this.dom.classList.remove('hb_selectable');
            evt.stopPropagation();
        };

        /*
            1. for select
        */
        const click = (evt) => {
            //만약 기존에 선택된 것이 있으면 해당 선택된 것은 제외 해야 한다.
            //만약 선택되어 있었다면? 취소 되어야 한다.
            //layout내에 selected를 삭제해야 겠구만

            this.dom.setAttribute('draggable', 'true');
            this.dom.classList.add('hb_selected');

            // 클릭되면 property를 수정할 수 있어야 한다.
            // 결국 callback 함수가 필요하다.
            evt.stopPropagation();
        };

        /*
            1. for dragstart
        */
        const dragStart = (evt) => {
            evt.dataTransfer.setTransferElement(this.dom);
            console.log('dragStart', evt);

            evt.stopPropagation();
        };

        /*
             1. for drag end
             2. set dragged layout
         */
        const dragEnd = (evt) => {
            console.log('dragEnd', evt, evt.dataTransfer.getTransferElement());
            evt.dataTransfer.setTransferElement(null);

            evt.stopPropagation();
        };

        /*
            1. for drag over -> drag하는 대상이 존재 할때 mousemove 대신 사용
        */
        const dragOver = (evt) => {
            evt.stopPropagation();

            //전체 view의 scrollLeft를 더해줘야 한다.
            //const clientX = evt.clientX += scrollLeft
            
            //dragOver 
            /*
                dataTransfer의 element와 target이 같을 시 return
                null propagation operatior = ?. if null -> return undefined
            */
            const transferLayout = evt.dataTransfer.getTransferElement()?.layout
            if(transferLayout) { //if not undefined
                if(transferLayout.isContain(evt.clientX, evt.clientY)) {
                    return false;
                }
            }

            evt.target.classList.add('hb_border-contain');

            //현재 target의 children과의 순서를 표시한다.
            const target =  evt.target;
            if(target.children.length !== 0) {

                //이 부분을 좀 자연스럽게 할 수는 없을까?
                //새로운 event를 바인드 할까?

                let nearChild = null, minDistance = Infinity, distance = 0;
                for(let child of target.children) {
                    distance = child.layout.distance(evt.clientX, evt.clientY);
                    if(minDistance > distance) {
                        minDistance = distance;
                        nearChild = child;
                    }
                }

                const nearChildPos = nearChild.layout.pos;
                if (nearChildPos.y < evt.clientY && (nearChildPos.y + nearChildPos.height) > evt.clientY) {
                    if (nearChildPos.x > evt.clientX) {
                        nearChild.classList.add('hb_border-left-move');
                        //layoutManager.eventInfo.posIdx = ((layoutPos - 1) < 0) ? 0 : layoutPos;
                    } else {
                        nearChild.classList.add('hb_border-right-move');
                        //layoutManager.eventInfo.posIdx = layoutPos + 1;
                    }
                } else {
                    if (nearChildPos.y > evt.clientY) {
                        nearChild.classList.add('hb_border-top-move');
                        //layoutManager.eventInfo.posIdx = ((layoutPos - 1) < 0) ? 0 : layoutPos;
                    } else {
                        nearChild.classList.add('hb_border-bottom-move');
                        //layoutManager.eventInfo.posIdx = layoutPos + 1;
                    }
                }

                //nearChild가 initCss가 되어야 한다.
            }

            //console.log('dragOver', evt);
        };

        /*
            1. for drag leave -> drag하는 대상이 존재 할때 mousemove 대신 사용
        */
        const dragLeave = (evt) => {

            evt.target.classList.remove('hb_border-contain');
            console.log('dragLeave', evt);
        }

        //dragleave
        //drop

        /*
         function drag(ev) {
         ev.dataTransfer.setData("text", ev.target.id);
         }
 
         function drop(ev) {
         ev.preventDefault();
         var data = ev.dataTransfer.getData("text");
         
         console.log(data);
         
         ev.target.appendChild(document.getElementById(data));
         }
        */

        this.dom.addEventListener('mouseover', mouseOver);
        this.dom.addEventListener('mouseout', mouseOut);
        this.dom.addEventListener('click', click);
        this.dom.addEventListener('dragstart', dragStart);
        this.dom.addEventListener('dragend', dragEnd);
        this.dom.addEventListener('dragover', dragOver);
        this.dom.addEventListener('dragleave', dragLeave);
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

    //Layout을 꼭 미리 계산해야 하는가?
    /*Contain은 과연 필요한가? 
      그냥 이벤트 적용하면 되는거잖어 
      bubbling만 피하면 되고
      문제는 appendchild를 하면 안되고 순서를 정해야 한다. 왼쪽 오른쪽 밑에 위에 등 정해야 하는것이 있기때문에
      계산해야하고 보여주기도 해야한다.
    */

    //필요하다
    isContain(x, y) {
        try {
            if (!this.canHaveChild) {
                return false;
            }

            const pos = this.pos;
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

    distance(x, y) {
        const pos = this.pos;
        const distance = Math.sqrt(
            Math.pow(x - (pos.x + pos.width * 0.5), 2) +
            Math.pow(y - (pos.y + pos.height * 0.5), 2)
        );

        return distance;
    }

    get pos() {
        try {
            /*
                1. 사용이유
                    - pos는 필요할때마다 사용한다.
                    - 변경이 있을 시 마다 pos가 update되어야 하기 때문인다.
            */
            const pos = {};
            const dom = this.dom
            const rect = dom.getBoundingClientRect() //render된 후의 top, left, width, height을 제공;

            //Offset의 기준이 되는 Parent Element
            const offsetParent = dom.offsetParent;

            /*
                1. 주의 사항
                    - OffsetLeft 등을 통해 offsetParent에서 얼마나 떨어져 있는지 알 수 있다.
                    - padding이란 element 요소 안에 지정해둔 사이즈만큼 추가하는 것이다.
                    - 30px * 30px element가 존재할 시 padding이 20px이면 width = 30 + 20 * 2, height = 30 + 20 * 2; 이다.
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

            /*
                1. 사용이유
                    - getBoundingClientRect를 사용하는 이유 -> inline 요소의 width, height값을 확인하기 위함
            */
            pos.width = (isScrollX ? dom.scrollWidth : rect.width);
            pos.height = (isScrollY ? dom.scrollHeight : rect.height);

            return pos;
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

                    /*group화 할 시 사용
                    groupName = key.split('-');
                    for (i = 0, len = direction.length; i < len; i++) {
                        propertyName = ((groupName.length > 1) ? (groupName[0] + direction[i] + '-' + groupName[1]) : (groupName[0] + direction[i]));
                        property.style[propertyName] = null;
                    }
                    */
                }
            }

            return property;
        } catch (err) {
            console.log(err.message);
        }
    }

    copy() {
        function copyRecursive(parentDom) {
            const option = parentDom.layout.getOption();
            const copiedLayout = new Layout(option);
            const children = [...parentDom.children];

            for (let child of children) {
                copiedLayout.dom.appendChild(copyRecursive(child));
            }

            return copiedLayout.dom;
        }

        const copiedLayoutDom = copyRecursive(this.dom);
        this.dom.parentNode.appendChild(copiedLayoutDom);
    };

    delete() {
        function deleteRecursive(parentDom) {
            /*
                1. 사용이유
                 -  순환참조로 인하여 dom이 삭제되도 layout에서 참조되어 메모리에서
                    삭제되지 않을까봐 layout부터 null로 처리한다.
            */
            const children = [...parentDom.children];

            for (let child of children) {
                deleteRecursive(child);
            }

            parentDom.layout = null;
        }

        const dom = this.dom;
        const parent = this.dom.parentNode;
        deleteRecursive(dom);
        parent.removeChild(this.dom);
    }
}


const LayoutDiv1 = new Layout({
    element: 'div',
    attr: {
        style: 'width:300px; height:300px; padding:5px; margin:10px; border: 1px solid #dddddd'
    }
});

const LayoutDiv2 = new Layout({
    element: 'div',
    attr: {
        style: 'width:100px; height:100px; padding:5px; margin:10px; border: 1px solid #dddddd'
    }
});

const LayoutDiv3 = new Layout({
    element: 'div',
    attr: {
        style: 'width:100px; height:100px; padding:5px; margin:10px; border: 1px solid #dddddd'
    }
});

const LayoutSpan = new Layout({
    element: 'span',
    text: 'text'
});

document.body.appendChild(LayoutDiv1.dom);
LayoutDiv1.dom.appendChild(LayoutDiv2.dom);
LayoutDiv1.dom.appendChild(LayoutDiv3.dom);
LayoutDiv2.dom.appendChild(LayoutSpan.dom);



/*
try {
    layoutManager.initCss(layoutManager.contentLayout);

    if (e.clientX == 0 && e.clientY == 0) {
        return;
    }

    var body = layoutManager.contentLayout.dom,
        x = e.clientX + body.scrollLeft,
        y = e.clientY + body.scrollTop,
        parentLayout = layoutManager.containBlock(x, y, layoutManager.contentLayout);

    if (parentLayout) {
        layoutManager.eventInfo = {
            parentLayout: parentLayout,
            selectedLayout: (layoutManager.selectedLayout ? layoutManager.selectedLayout : null),
            posIdx: 0,
            layoutOption: option
        };

        var parent = parentLayout.dom;
        parent.classList.add('hb_border-contain');

        if (parentLayout.child.length > 0) {
            var nearLayout, layoutPos = 0,
                minDistance = Infinity,
                distance = 0;
            for (var i = 0, len = parentLayout.child.length; i < len; i++) {
                distance = Math.sqrt(
                    Math.pow(x - (parentLayout.child[i].pos.x + parentLayout.child[i].pos.width * 0.5), 2) +
                    Math.pow(y - (parentLayout.child[i].pos.y + parentLayout.child[i].pos.height * 0.5), 2)
                );

                if (minDistance > distance) {
                    minDistance = distance;
                    nearLayout = parentLayout.child[i];
                    layoutPos = i;
                }
            }

            var child = nearLayout.dom;
            if (nearLayout.pos.y < y && (nearLayout.pos.y + nearLayout.pos.height) > y) {
                if (nearLayout.pos.x > x) {
                    child.classList.add('hb_border-left-move');
                    layoutManager.eventInfo.posIdx = ((layoutPos - 1) < 0) ? 0 : layoutPos;
                } else {
                    child.classList.add('hb_border-right-move');
                    layoutManager.eventInfo.posIdx = layoutPos + 1;
                }
            } else {
                if (nearLayout.pos.y > y) {
                    child.classList.add('hb_border-top-move');
                    layoutManager.eventInfo.posIdx = ((layoutPos - 1) < 0) ? 0 : layoutPos;
                } else {
                    child.classList.add('hb_border-bottom-move');
                    layoutManager.eventInfo.posIdx = layoutPos + 1;
                }
            }
        } else {
            parent.classList.add('hb_border-top-contain');
        }
    } else {
        layoutManager.eventInfo = null;
    }
} catch (err) {
    console.log(err.message);
}
*/