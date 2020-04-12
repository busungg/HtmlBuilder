import './css/setting.css';

import { category, configs } from './config/config';

import Utils from '../utils/utils';

import SettingExport from './model/SettingExport';
import SEttingImport from './model/SettingImport';
import SettingPreview from './model/SettingPreview';
import SettingResolution from './model/SettingResolution';

const SettingType = {
  SettingExport,
  SEttingImport,
  SettingPreview,
  SettingResolution
};

const settingManager = {
  settings: [],

  init(target) {
    configs.forEach((config) => {
      const setting = new SettingType[config.class](config, target);
      this.settings.push(setting);
    });
  },

  /**
   * category, sub category toggle event
   * @param {event} e
   */
  eventToggle(e) {
    const { target } = e;
    target.classList.toggle('hide');

    const content = target.parentElement.nextElementSibling;

    if (content.classList.contains('hide')) {
      content.style['max-height'] = content.dataset.scrollHeight;
    } else {
      content.style['max-height'] = null;
    }
    content.classList.toggle('hide');
  },

  /**
   * set category element
   * @param {Element} parent
   */
  renderCategory(parent) {
    category.forEach((categoryItem) => {
      const _category = {
        element: 'section',
        attrs: {
          class: 'hb_setting-section',
          'data-type': 'setting-content'
        },
        child: [
          {
            element: 'div',
            attrs: {
              class: 'hb_setting-section__title'
            },
            child: [
              {
                element: 'button',
                attrs: {
                  class: 'hb_nav-icon'
                },
                event: [
                  {
                    type: 'click',
                    func: this.eventToggle
                  }
                ]
              },
              {
                element: 'label',
                attrs: {
                  class: 'hb_setting-section__title__label'
                },
                html: categoryItem.title
              }
            ]
          },
          {
            element: 'div',
            attrs: {
              class: 'hb_setting-section__content'
            }
          }
        ]
      };

      const dom = Utils.builder(_category);
      parent.appendChild(dom);
      this.renderCategoryContent(categoryItem.name, dom.children[1]);

      dom.children[1].style['max-height'] = `${dom.children[1].scrollHeight}px`;
      dom.children[1].setAttribute(
        'data-scroll-height',
        `${dom.children[1].scrollHeight}px`
      );
    });
  },

  /**
   *
   * @param {string} category
   * @param {Dom Element} categoryDom
   */
  renderCategoryContent(categoryTitle, categoryDom) {
    this.settings.forEach((setting) => {
      if (setting.category === categoryTitle) {
        categoryDom.appendChild(setting.render());
      }
    });
  },

  render(parent) {
    this.renderCategory(parent);
  }
};

export default settingManager;
