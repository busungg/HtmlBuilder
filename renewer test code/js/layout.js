/*
  DOM 은 Element Object로 관리 되기 때문에 
  Element 객체의 Prototype으로 관리한다.
  각 Element의 기능으로 관리하는 것을 추천한다.
*/

Element.prototype.layout = {
    id: null,
    pos: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    },
    canHaveChild: null
};

Element.prototype.containElement = function(x, y) {
    try {
        let layout = this.layout;

        if (!layout.canHaveChild) {
            return false;
        }

        let pos = layout.pos;
        if (pos.x <= x && x <= (pos.x + pos.width) &&
            pos.y <= y && y <= (pos.y + pos.height)) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.log(err);
    }
};

Element.prototype.updateLayout = function() {
    try {
        let rect = this.getBoundingClientRect(), layout = this.layout;
        let startParent = this.parentElement, startParentStyle = null, startParentLayout; //parentElement는 부모가 Element가 아닐 시 null을 보낸다.
        //startParentLayout은 position의 기준을 잡아주는 parent Element이다.

        while(startParent) {
            startParentStyle = window.getComputedStyle(startParent);
            if(startParentStyle.position === 'relative' || startParentStyle.position === 'absolute') {
                break;
            }

            startParent = startParent.parentElement;
        }

        if (startParent) {
            startParentLayout = startParent.layout;
            startParentLayout.pos.x = (this.offsetLeft ? (this.offsetLeft + startParentLayout.pos.x) : startParentLayout.pos.x);
            startParentLayout.pos.y = (this.offsetTop ? (this.offsetTop + startParentLayout.pos.y) : startParentLayout.pos.y);
            startParentLayout.pos.width = (this.scrollWidth ? this.scrollWidth : rect.width);
            startParentLayout.pos.height = (this.scrollHeight ? this.scrollHeight : rect.height);
        } else {
            layout.pos.x = (this.offsetLeft ? this.offsetLeft : rect.left);
            layout.pos.y = (this.offsetTop ? this.offsetTop : rect.top);
            layout.pos.width = (this.scrollWidth ? this.scrollWidth : rect.width);
            layout.pos.height = (this.scrollHeight ? this.scrollHeight : rect.height);
        }

    } catch(err) {
        console.log(err);
    }
};

Element.prototype.initCss = function() {
    try {
            var classList = this.classList;
            classList.remove('hb_border-contain');
            classList.remove('hb_border-top-contain');
            classList.remove('hb_border-top-move');
            classList.remove('hb_border-bottom-move');
            classList.remove('hb_border-left-move');
            classList.remove('hb_border-right-move');
    } catch (err) {
        console.log(err);
    }
};


Element.prototype.getProperty = function() {
    console.log(this);
    console.log(this.attributes);

    /*
        정리해서 보내주기
    */

};

Element.prototype.getChildLayout = function() {
    console.log(this.layout);
};



//element.attributes

/*
Element에 prototype을 저장한다.

Element -> Node 
=> Element는 Node를 상속 받는다.
Node -> EventTarget
=> Node는 EventTarget을 상속 받는다.

1. Event 관리 
  1) Event 발생 시 관련된 기능이 많음(Function, Property 등)
  2) Evnet를 분리하고 싶지만 그러기는 쉽지 않기 때문에 MainManager에서 Event를 만들어두고 관리를 하도록 함
    - 해당 문제를 해결할 수 있는 방법이 존재하는가?
    - 문제 이유
      1. Table 생성 후 Property 에서 TR,TD를 생성할 시 Layout을 생성하여 관리하기가 힘들다.
         그 이유는 LayoutManager에서 Layout을 생성하고 관리하는데 
         해당 PropertyTable에서 LayoutManager를 불러오는 것도 아닌것 같고
         Event도 관리해야 하기 때문이다.

2. Model 관리
  1) Layout Model에 Event가 종속된다면 상관 없지만 Event를 위해서는 각 Manager를 Import하여 
     Manager내의 Function을 호출해야 한다.
  
  2) Function UI 기능을 Layout Model의 기능으로 생각한다면 Event 기능을 쉽게 분리 할 수 있다.
   
  3) LayoutManager 기능을 Layout Model로 통합하면 간단하게 끝날 수 있다.
     1. Contain됬을 때 DragEnd가 끝나면 Layout에 넣어준다.
     2. 문제는 Layout의 Find를 계속하여 호출하면 속도가 느려질 수 있다. - 그래서 Manager 방식으로 구현
     3. MouseOver를 통해 pointer가 자기자신에게 종속 되는지 확인이 가능하다.

  * 생성된 Model의 size가 크지만 유지보수 측면에서는 더 좋을 수도 있다.
*/

var tr = document.createElement('tr');
tr.setAttribute('id', '1');
tr.setAttribute('class', '123');
tr.setAttribute('style', 'width: 10px;');

document.body.appendChild(tr);
console.log(tr);