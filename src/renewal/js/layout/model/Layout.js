import Utils from '../../utils/utils';

//단일 Dom처럼 사용하기 위해 생성한 Class
class Layout {
    constructor(option, frame, observer) {
        /*
            1. option은 변경되면 안되기 때문에 closuer를 이용하여 private 접근자를 사용한다.
            2. Object.assign 메소드 사용 시 내부 객체는 shallow copy가 되므로 JSON 객체를 사용한다.
        */
        const _option = JSON.parse(JSON.stringify(option));
        this.getOption = () => {
            return _option;
        };

        //Dom Class
        this.getFrame = () => {
            return frame;
        }

        this.dom = Utils.builder(option);
        this.dom.layout = this;
        this.canHaveChild = true; //option.canHaveChild; 임시

        this.observer = observer;

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
            evt.stopPropagation();
        };

        /*
            1. for drag over -> drag하는 대상이 존재 할때 mousemove 대신 사용
        */
        const dragOver = (evt) => {
            evt.preventDefault();
            evt.stopPropagation();

            const clientX = evt.clientX + this.getFrame().scrollLeft;
            const clientY = evt.clientY + this.getFrame().scrollTop;

            /*
                dataTransfer의 element와 target이 같을 시 return
                null propagation operatior = ?. if null -> return undefined
            */
            const transferLayout = evt.dataTransfer.getTransferElement()?.layout
            if (transferLayout) { //if not undefined
                if (transferLayout.isContain(clientX, clientY)) {
                    return;
                }
            }

            const target = evt.target;
            if (target.layout.canHaveChild) {
                target.classList.add('hb_border-top-contain');
                if (target.children.length !== 0) {
                    let nearChild = null,
                        minDistance = Infinity,
                        distance = 0;
                    let order = 0,
                        dropOrder = 0;
                    for (let child of target.children) {
                        child.layout.initCss(); //모든 child의 css를 초기화한다.
                        distance = child.layout.distance(clientX, clientY);
                        if (minDistance > distance) {
                            minDistance = distance;
                            nearChild = child;
                            dropOrder = order;
                        }
                        order++;
                    }

                    const dataTransfer = evt.dataTransfer;
                    const nearChildPos = nearChild.layout.pos;
                    if (nearChildPos.y < clientY && (nearChildPos.y + nearChildPos.height) > clientY) {
                        if (nearChildPos.x > clientX) {
                            nearChild.classList.add('hb_border-left-move');
                            dropOrder = ((dropOrder - 1) < 0) ? 0 : dropOrder;
                        } else {
                            nearChild.classList.add('hb_border-right-move');
                            dropOrder += 1;
                        }
                    } else {
                        if (nearChildPos.y > clientY) {
                            nearChild.classList.add('hb_border-top-move');
                            dropOrder = ((dropOrder - 1) < 0) ? 0 : dropOrder;
                        } else {
                            nearChild.classList.add('hb_border-bottom-move');
                            dropOrder += 1;
                        }
                    }

                    dataTransfer.setTransferOrder(dropOrder);
                }
            } else {
                dataTransfer.setTransferOrder(-1);
            }
        };

        /*
            1. for drag leave
        */
        const dragLeave = (evt) => {
            const target = evt.target;
            target.classList.remove('hb_border-top-contain');
            if (target.children.length !== 0) {
                for (let child of target.children) {
                    child.layout.initCss(); //모든 child의 css를 초기화한다.
                }
            }
        }

        /*
             1. for drop
             2. set dragged layout
         */
        const drop = (evt) => {
            /*
                block 을 drop할 시에는 다르게 작동해야 한다.

                If you want to allow a drop, you must prevent the default handling 
                by cancelling both the dragenter and dragover events - From MDN
            */
            event.preventDefault();
            const dropTarget = evt.target;
            if (dropTarget.layout.canHaveChild) {
                const draggedElement = evt.dataTransfer.getTransferElement();
                const draggedOption = evt.dataTransfer.getTransferOption();
                const dropOrder = evt.dataTransfer.getTransferOrder();

                if(draggedElement) { //Null이 아니면 기존 Layout을 이동 시키는 것   
                    draggedElement.parentNode.removeChild(draggedElement);
                } else { //Null이면 Block정보로 새로운 Layout을 생성하는 것
                    draggedElement = (new Layout(draggedOption, this.frame, layoutObserver)).dom;
                }

                if (dropTarget.children.length > 0) {
                    let order = 0,
                        isDropped = false;
                    for (let child of dropTarget.children) {
                        if (order === dropOrder) {
                            dropTarget.insertBefore(draggedElement, child);
                            isDropped = true;
                            break;
                        }
                        order++;
                    }

                    if (!isDropped) {
                        dropTarget.appendChild(draggedElement);
                    }
                } else {
                    dropTarget.appendChild(draggedElement);
                }
            }

            //drop이 모두 잘 끝나게 되면 parent, child의 css를 init해야한다.
            dropTarget.classList.remove('hb_border-top-contain');
            if (dropTarget.children.length !== 0) {
                for (let child of dropTarget.children) {
                    child.layout.initCss(); //모든 child의 css를 초기화한다.
                }
            }

            //selected도 변경되어야 한다.


            evt.dataTransfer.setTransferElement(null);
            evt.dataTransfer.setTransferOption(null);
            evt.stopPropagation();
        };

        this.dom.addEventListener('mouseover', mouseOver);
        this.dom.addEventListener('mouseout', mouseOut);
        this.dom.addEventListener('click', click);
        this.dom.addEventListener('dragstart', dragStart);
        this.dom.addEventListener('dragover', dragOver);
        this.dom.addEventListener('dragleave', dragLeave);
        this.dom.addEventListener('drop', drop);
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
            const property = parentDom.layout.property;
            option.attrs = option.attrs || {};
            property.id && (option.attrs.id = property.id);
            property.name && (option.attrs.name = property.name);
            property.title && (option.attrs.title = property.title);
            property.text && (option.attrs.text = property.text);
            property.value && (option.attrs.value = property.value);
            property.src && (option.attrs.src = property.src);
            property.href && (option.attrs.href = property.href);
            option.attrs.class = property.class.length !== 0 ? property.class : [];
            option.attrs.style = parentDom.style.cssText;

            const frame = parentDom.layout.getFrame();

            const copiedLayout = new Layout(option, frame);
            for (let child of parentDom.children) {
                copiedLayout.dom.appendChild(copyRecursive(child));
            }

            return copiedLayout.dom;
        }

        const copiedLayoutDom = copyRecursive(this.dom);
        return copiedLayoutDom;
    };

    delete() {
        function deleteRecursive(parentDom) {
            /*
                1. 사용이유
                 -  순환참조로 인하여 dom이 삭제되도 layout에서 참조되어 메모리에서
                    삭제되지 않을까봐 layout부터 null로 처리한다.
            */
            for (let child of parentDom.children) {
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