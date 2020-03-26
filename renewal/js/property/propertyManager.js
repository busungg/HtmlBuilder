import Utils from '../utils/utils';
import propertyCss from './css/property.css';

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
**/
const propertyManager = {
  propInfos: [],

  init: function () {
    for (let config of configs) {
      let propInfo = { prop: null, child: null };
      let prop = new PropertyType[config.class](config);
      propObserver.register('update', prop.update, prop);
      propInfo.prop = prop;

      if (config.child) {
        propInfo.child = [];

        for (let childConfig of config.child) {
          let childProp = new PropertyType[childConfig.class](childConfig);
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
  /*
  eventToggle: function (e) {
    let target;

    if (e.target.nodeName == 'LABEL') {
      target = e.target.parentNode;
    } else {
      target = e.target;
    }

    if (target.innerHTML.indexOf('\u25B2') != -1) {
      target.innerHTML = target.innerHTML.replace('\u25B2', '\u25BC');
    } else {
      target.innerHTML = target.innerHTML.replace('\u25BC', '\u25B2');
    }

    let sibling = target.nextSibling;
    let prop_hidden = sibling.getAttribute('prop-hidden');

    while (sibling) {
      if (sibling.style.display == 'none' && !prop_hidden) {
        sibling.style.display = 'block';
      } else {
        sibling.style.display = 'none';
      }

      sibling = sibling.nextSibling;
      if (sibling) {
        prop_hidden = sibling.getAttribute('prop-hidden');
      }
    }
  },
  */

  eventToggle: function (e) {
    let target = e.target;
    target.classList.toggle('hide');

    let content = target.parentElement.nextElementSibling;

    if (content.classList.contains('hide')) {
      content.style['max-height'] = content.scrollHeight + 'px';
    } else {
      content.style['max-height'] = null;
    }
    content.classList.toggle('hide');
  },

  /**
   * set category element
   * @param {Element} parent
   */
  renderCategory: function (parent) {
    var _category, dom;
    for (let i = 0, leni = category.length; i < leni; i++) {
      _category = {
        element: 'section',
        attrs: {
          class: 'hb_prop-section'
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
      propertyManager.renderCategoryContent(category[i].name, dom.children[1]);
      parent.appendChild(dom);
    }
  },

  /**
   *
   * @param {string} category
   * @param {Dom Element} categoryDom
   */
  renderCategoryContent: function (category, categoryDom) {
    for (let propInfo of this.propInfos) {
      if (propInfo.prop.category === category) {
        let propDom = propInfo.prop.render();
        categoryDom.appendChild(propDom);

        //추후 다른 디자인으로 변경한다.
        if (propInfo.child) {
          let childCategoryDom = Utils.builder(
            {
              element: 'div',
              attrs: {
                class: ''
              },
              child: [
                {
                  element: 'div',
                  attrs: {
                    class: ''
                  },
                  html: '\u25B2',
                  event: [{
                    type: 'click',
                    func: this.eventToggle
                  }]
                }]
            }
          );
          propDom.appendChild(childCategoryDom);

          for (let childProp of propInfo.child) {
            childCategoryDom.appendChild(childProp.render());
          }
        }
      }


    }
  },

  //개선 필요
  updateProp(target) {
    if (target) {
      let tagName = target.tagName;

      for (let propInfo of this.propInfos) {
        let prop = propInfo.prop;
        if (prop.prop.name === 'src') {
          if (tagName === 'IMG') {
            prop.dom.parentElement.style['display'] = 'block';
            prop.dom.parentElement.removeAttribute('prop-hidden');
          } else {
            prop.dom.parentElement.style['display'] = 'none';
            prop.dom.parentElement.setAttribute('prop-hidden', true);
          }
        }

        if (prop.prop.name === 'href') {
          if (tagName === 'A') {
            prop.dom.parentElement.style['display'] = 'block';
            prop.dom.parentElement.removeAttribute('prop-hidden');
          } else {
            prop.dom.parentElement.style['display'] = 'none';
            prop.dom.parentElement.setAttribute('prop-hidden', true);
          }
        }

        if (prop.prop.name === 'option') {
          if (tagName === 'SELECT') {
            prop.dom.style['display'] = 'block';
            prop.dom.removeAttribute('prop-hidden');
          } else {
            prop.dom.style['display'] = 'none';
            prop.dom.setAttribute('prop-hidden', true);
          }
        }

        if (prop.prop.name === 'table') {
          if (tagName === 'TABLE') {
            prop.dom.parentElement.style['display'] = 'block';
            prop.dom.parentElement.removeAttribute('prop-hidden');
          } else {
            prop.dom.parentElement.style['display'] = 'none';
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
  render: function (parent) {
    propertyManager.renderCategory(parent);
  }
};

propObserver.register('update', propertyManager.updateProp, propertyManager);

export default propertyManager;
