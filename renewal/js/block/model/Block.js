import '../css/block.css';

import Utils from '../../utils/utils';
import {
  blockObserver,
  componentObserver
} from '../../observer/observerManager';

class Block {
  constructor(config) {
    this.title = config.title;
    this.icon = config.icon;
    this.component = config.component; // 복사 필요
    this.category = config.category;
    this.dom = null;
  }

  render() {
    const _render = {
      element: 'div',
      attrs: {
        class: 'hb_btn-block hb_cursor-move',
        draggable: true
      },
      child: [
        {
          element: 'div',
          attrs: {
            class: `hb_img ${this.icon}`
          }
        },
        {
          element: 'div',
          attrs: {
            class: 'hb_lbl'
          },
          text: this.title
        }
      ]
    };

    this.dom = Utils.builder(_render);
    const mouseDown = (evt) => {
      componentObserver.notify('deSelect');
    };

    const dragStart = (evt) => {
      blockObserver.notify('setTransferOption', this.component);
    };
    this.dom.addEventListener('mousedown', mouseDown);
    this.dom.addEventListener('dragstart', dragStart);

    return this.dom;
  }
}

export default Block;
