import css from './css/componentUtil.css';

import Utils from '../utils/utils';
import configs from './config/config';

import { componentUtilsObserver } from '../observer/observerManager';

import ComponentUtilCopy from './model/ComponentUtilCopy';
import ComponentUtilDelete from './model/ComponentUtilDelete';

const ComponentUtilType = {
  ComponentUtilCopy,
  ComponentUtilDelete
};

const componentUtilsManager = {
  utils: [],

  init() {
    configs.forEach((config) => {
      const util = new ComponentUtilType[config.class](config);
      this.utils.push(util);

      componentUtilsObserver.register('update', util.update, util);
    });
  },

  update(target) {
    if (target) {
      const { component } = target;
      const { pos } = component;
      this.dom.style.left = `${pos.x}px`;
      this.dom.style.top = `${pos.y}px`;
    } else {
      this.dom.style.left = '-100px';
      this.dom.style.top = '-100px';
    }
  },

  renderUtils(parent) {
    this.utils.forEach((util) => {
      parent.appendChild(util.render());
    });
  },

  render(parentBody, parentHead) {
    this.dom = Utils.builder({
      element: 'div',
      attrs: {
        style: `position: absolute; left: ${-100}px; top: ${-100}px;`,
        class: 'hb_component-util__menu',
        'data-include': 'N'
      }
    });

    this.renderUtils(this.dom);
    parentBody.appendChild(this.dom);

    const style = Utils.builder({
      element: 'style',
      text: css,
      attrs: {
        'data-include': 'N'
      }
    });
    parentHead.appendChild(style);
  }
};

componentUtilsObserver.register(
  'update',
  componentUtilsManager.update,
  componentUtilsManager
);

export default componentUtilsManager;
