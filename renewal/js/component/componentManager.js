import Component from "./model/Component";
/**
 * Component Manager(Component을 관리한다)
 * 단 하나만 존재
 */
const componentManager = {
    frameComponent: null, //Layout이 위치할 body dom
    /*
        1. Init frame (frame은 Layout들이 위치할 공간이다.)
        2. Body는 초기 frame이 위치할 DOM이다.
        3. Option은 초기 frame의 생성 option이다.
        
        * frameLayout은 click이 불가하다.
    */
    initFrameComponent(option, body) {
        this.frameComponent = new Component(option, body, true);

        /*
        this.frameLayout.dom.removeEventListener('click');
        this.frameLayout.dom.removeEventListener('mouseover');
        this.frameLayout.dom.removeEventListener('mouseout');
        this.frameLayout.dom.removeEventListener('dragstart');
        */

        body.appendChild(this.frameComponent.dom);

        const LayoutDiv1 = new Component({
            element: 'div',
            attrs: {
              style: 'width:300px; height:300px; padding:5px; margin:10px; border: 2px solid #000'
            }
          }, this.frameComponent.dom);
      
          const LayoutDiv2 = new Component({
            element: 'div',
            attrs: {
              style: 'width:100px; height:100px; padding:5px; margin:10px; border: 2px solid #000'
            }
          }, this.frameComponent.dom);
      
          const LayoutDiv3 = new Component({
            element: 'div',
            attrs: {
              style: 'width:100px; height:100px; padding:5px; margin:10px; border: 2px solid #000'
            }
          }, this.frameComponent.dom);
      
          const LayoutSpan = new Component({
            element: 'span',
            text: 'text'
          }, this.frameComponent.dom);
      
          this.frameComponent.dom.appendChild(LayoutDiv1.dom);
          LayoutDiv1.dom.appendChild(LayoutDiv2.dom);
          LayoutDiv1.dom.appendChild(LayoutDiv3.dom);
          LayoutDiv2.dom.appendChild(LayoutSpan.dom);
      
          const LayoutCopyDiv1 = LayoutDiv1.copy();
          this.frameComponent.dom.appendChild(LayoutCopyDiv1);
      
          setTimeout(function () {
            LayoutCopyDiv1.component.delete();
          }, 5000);
    }
};

export default componentManager;