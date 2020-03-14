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
        body.appendChild(this.frameComponent.dom);
    }
};

export default componentManager;