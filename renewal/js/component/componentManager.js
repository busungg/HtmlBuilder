import componentUtilsManager from '../componentUtils/componentUtilsManager';

import Component from './model/Component';
import Utils from '../utils/utils';
import {
  blockObserver
} from '../observer/observerManager';
/**
 * Component Manager(Component을 관리한다)
 */
const componentManager = {
  frame: null, // Iframe
  frameComponent: null, // Layout이 위치할 body dom

  init(option, body) {
    this.frame = Utils.builder(option);
    body.appendChild(this.frame);

    this.initFrameComponent(this.frame);
  },

  /*
      1. Init frame (frame은 Layout들이 위치할 공간이다.)
      2. Body는 초기 frame이 위치할 DOM이다.
      3. Option은 초기 frame의 생성 option이다.

      * frameLayout은 click이 불가하다.
  */
  initFrameComponent(iframe) {
    const iframeWindow = (iframe.contentWindow || iframe.contentDocument);
    const iframeDocument = iframeWindow ? iframeWindow.document : null;

    const transferProto = iframeWindow.DataTransfer.prototype;
    transferProto.transferElement = undefined;
    transferProto.setTransferElement = function (element) {
      transferProto.transferElement = element;
    };

    transferProto.getTransferElement = function () {
      return transferProto.transferElement;
    };

    transferProto.transferOrder = undefined;
    transferProto.setTransferOrder = function (element) {
      transferProto.transferOrder = element;
    };

    transferProto.getTransferOrder = function () {
      return transferProto.transferOrder;
    };

    transferProto.transferOption = undefined;
    transferProto.setTransferOption = function (option) {
      transferProto.transferOption = option;
    };

    transferProto.getTransferOption = function () {
      return transferProto.transferOption;
    };

    blockObserver.register('setTransferOption', transferProto
      .setTransferOption, this.iframe);

    // <link rel="stylesheet" type="text/css" href="./css/html_builder.css">
    /**
     * css 추후 수정
     */
    const headElement = iframeDocument.head;
    const linkTag = document.createElement('link');
    linkTag.setAttribute('rel', 'stylesheet');
    linkTag.setAttribute('type', 'text/css');
    linkTag.setAttribute('href', './css/html_builder.css');
    headElement.appendChild(linkTag);

    const htmlElement = iframeDocument.body.parentElement;
    htmlElement.removeChild(iframeDocument.body);

    const option = {
      element: 'body',
      canHaveChild: true
    };

    // 자기 자신이 frame 이다.
    this.frameComponent = new Component(option, null, true);
    htmlElement.appendChild(this.frameComponent.dom);

    componentUtilsManager.init();
    componentUtilsManager.render(this.frameComponent.dom);

    console.log(this.frameComponent);
  }
};

export default componentManager;
