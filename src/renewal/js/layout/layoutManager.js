import Layout from "./model/Layout";
import Observer from "../utils/Observer";

const layoutObserver = new Observer();

/**
 * Layout Manager(Layout을 관리한다)
 * 단 하나만 존재
 */
const layoutManager = {
    frameLayout: null, //Layout이 위치할 body dom

    /*
        1. Init frame (frame은 Layout들이 위치할 공간이다.)
        2. Body는 초기 frame이 위치할 DOM이다.
        3. Option은 초기 frame의 생성 option이다.
        
        * frameLayout은 click이 불가하다.
    */
    initFrameLayout(option, body) {
        layoutObserver.register('setNewLayout', this.setNewLayout, layoutManager);

        this.frameLayout = new Layout(option, body, layoutObserver);

        this.frameLayout.dom.removeEventListener('click');
        this.frameLayout.dom.removeEventListener('mouseover');
        this.frameLayout.dom.removeEventListener('mouseout');
        this.frameLayout.dom.removeEventListener('dragstart');

        body.appendChild(this.frameLayout.dom);
    },
};

export default layoutManager;