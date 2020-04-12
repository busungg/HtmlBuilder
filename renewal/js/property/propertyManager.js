import './css/property.css';

import Utils from '../utils/utils';

import { category, configs } from './config/config';

import { propObserver } from '../observer/observerManager';
import PropertyClass from './model/PropertyClass';
import PropertyColor from './model/PropertyColor';
import PropertyOption from './model/PropertyOption';
import PropertySelect from './model/PropertySelect';
import PropertyText from './model/PropertyText';
import PropertyTextNode from './model/PropertyTextNode';
import PropertyTextUnit from './model/PropertyTextUnit';

const PropertyType = {
  PropertyClass,
  PropertyColor,
  PropertyOption,
  PropertySelect,
  PropertyText,
  PropertyTextNode,
  PropertyTextUnit
};

/**
    Attributes View Manager
*/
const propertyManager = {
  propInfos: [],

  init() {
    for (const config of configs) {
      const propInfo = {
        prop: null,
        child: null
      };
      const prop = new PropertyType[config.class](config);
      propObserver.register('update', prop.update, prop);
      propInfo.prop = prop;

      if (config.child) {
        propInfo.child = [];

        for (const childConfig of config.child) {
          const childProp = new PropertyType[childConfig.class](childConfig);
          propObserver.register('update', childProp.update, childProp);
          propInfo.child.push(childProp);
        }
      }

      this.propInfos.push(propInfo);
    }
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
    let _category;
    let dom;
    for (let i = 0, leni = category.length; i < leni; i++) {
      _category = {
        element: 'section',
        attrs: {
          class: 'hb_prop-section',
          'data-type': 'prop-content'
        },
        child: [
          {
            element: 'div',
            attrs: {
              class: 'hb_prop-section__title'
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
                  class: 'hb_prop-section__title__label'
                },
                html: category[i].title
              }
            ]
          },
          {
            element: 'div',
            attrs: {
              class: 'hb_prop-section__content'
            }
          }
        ]
      };

      dom = Utils.builder(_category);
      parent.appendChild(dom);
      propertyManager.renderCategoryContent(category[i].name, dom.children[1]);

      dom.children[1].style['max-height'] = `${dom.children[1].scrollHeight}px`;
      dom.children[1].setAttribute(
        'data-scroll-height',
        `${dom.children[1].scrollHeight}px`
      );
    }
  },

  /**
   *
   * @param {string} category
   * @param {Dom Element} categoryDom
   */
  renderCategoryContent(category, categoryDom) {
    for (const propInfo of this.propInfos) {
      if (propInfo.prop.category === category) {
        const propDom = propInfo.prop.render();
        categoryDom.appendChild(propDom);

        if (propInfo.child) {
          const childCategoryTitleDom = Utils.builder({
            element: 'div',
            attrs: {
              class: 'hb_prop-sub__title'
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
              }
            ]
          });
          propDom.appendChild(childCategoryTitleDom);

          const childCategoryDom = Utils.builder({
            element: 'div',
            attrs: {
              class: 'hb_prop-sub__content'
            }
          });
          propDom.appendChild(childCategoryDom);

          for (const childProp of propInfo.child) {
            childCategoryDom.appendChild(childProp.render());
          }

          childCategoryDom.style[
            'max-height'
          ] = `${childCategoryDom.scrollHeight}px`;
          childCategoryDom.setAttribute(
            'data-scroll-height',
            `${childCategoryDom.scrollHeight}px`
          );
        }
      }
    }
  },

  updateVisible(isVisible) {
    const contents = document.querySelectorAll('[data-type=prop-content]');
    const empty = document.querySelector('[data-type=prop-empty]');

    if (isVisible) {
      for (const content of contents) {
        content.style.display = 'block';
      }
      empty.style.display = 'none';
    } else {
      for (const content of contents) {
        content.style.display = 'none';
      }
      empty.style.display = 'block';
    }
  },

  // 개선 필요
  updateProp(target) {
    this.updateVisible(target);
    // initScrollHeight(target);

    if (target) {
      const { tagName } = target;

      for (const propInfo of this.propInfos) {
        const { prop } = propInfo;
        if (prop.prop.name === 'src') {
          if (tagName === 'IMG') {
            prop.dom.parentElement.style.display = 'block';
            prop.dom.parentElement.removeAttribute('prop-hidden');
          } else {
            prop.dom.parentElement.style.display = 'none';
            prop.dom.parentElement.setAttribute('prop-hidden', true);
          }
        }

        if (prop.prop.name === 'href') {
          if (tagName === 'A') {
            prop.dom.parentElement.style.display = 'block';
            prop.dom.parentElement.removeAttribute('prop-hidden');
          } else {
            prop.dom.parentElement.style.display = 'none';
            prop.dom.parentElement.setAttribute('prop-hidden', true);
          }
        }

        if (prop.prop.name === 'option') {
          if (tagName === 'SELECT') {
            prop.dom.style.display = 'block';
            prop.dom.removeAttribute('prop-hidden');
          } else {
            prop.dom.style.display = 'none';
            prop.dom.setAttribute('prop-hidden', true);
          }
        }

        if (prop.prop.name === 'table') {
          if (tagName === 'TABLE') {
            prop.dom.parentElement.style.display = 'block';
            prop.dom.parentElement.removeAttribute('prop-hidden');
          } else {
            prop.dom.parentElement.style.display = 'none';
            prop.dom.parentElement.setAttribute('prop-hidden', true);
          }
        }
      }
    }
  },

  /**
   * init attribute view
   * @param {Element} parent
   */
  render(parent) {
    parent.appendChild(
      Utils.builder({
        element: 'div',
        attrs: {
          class: 'hb_main-nav_content--prop',
          style: `width:100%; box-sizing:border-box; text-align: center; background-color: #211b23;
                  font-size: 14px; font-weight: bold; color: #b9a5a6; padding: 5px`,
          'data-type': 'prop-empty'
        },
        html:
          'There is no selected Block</br></br>Please select at least 1 block'
      })
    );
    propertyManager.renderCategory(parent);
  }
};

propObserver.register('update', propertyManager.updateProp, propertyManager);

export default propertyManager;
