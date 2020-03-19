import {
  componentObserver
} from '../../observer/observerManager';

class Block {
  constructor(config) {
    this.title = config.title;
    this.icon = config.icon;
    this.component = config.component; //복사 필요
    this.category = config.category;
  };

  set dom(dom) {
    this._dom = dom;

    const mouseDown = (evt) => {
      componentObserver.notify('deSelect');
    };

    const dragStart = (evt) => {
      evt.dataTransfer.setTransferOption(this.component);
    };

    this._dom.addEventListener('mousedown', mouseDown);
    this._dom.addEventListener('dragstart', dragStart);
  }

  get dom() {
    return this._dom;
  }

  render() {
    const _render = {
      element: 'div',
      attrs: {
        class: 'hb_btn-block hb_cursor-move',
        draggable: true
      },
      child: [{
        element: 'div',
        attrs: {
          class: 'hb_img ' + this.icon
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
    }

    return _render;
  };

};

export default Block;
