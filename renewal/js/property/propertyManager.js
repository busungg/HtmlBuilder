import Utils from '../utils/utils';
import CSS from './config/css';

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
  propsInfos: [],

  init: function () {
    for(let config of configs) {
      let propInfo = {prop: null, child: null};
      let prop = new PropertyType[config.class](config);
      propObserver.register('update', prop.update, prop);
      propInfo.prop = prop;

      if(config.child) {
        propInfo.child = [];

        for(let childConfig of config.child) {
          let childProp = new PropertyType[childConfig.class](childConfig);
          propObserver.register('update', childProp.update, childProp);
          propInfo.child.push(childProp);
        }
      }
      
      this.propsInfos.push(propInfo);
    }
  },

  
  /**
   * category, sub category toggle event
   * @param {event} e 
   */
  eventToggle: function (e) {
    var target;

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

    var sibling = target.nextSibling;
    var prop_hidden = sibling.getAttribute('prop-hidden');

    while (sibling) {
      if (sibling.style.display == 'none' && !prop_hidden) {
        sibling.style.display = 'block';
      } else {
        sibling.style.display = 'none';
      }

      sibling = sibling.nextSibling;
      if(sibling) {
        prop_hidden = sibling.getAttribute('prop-hidden');
      }
    }
  },

  /**
   * set category element
   * @param {Element} parent 
   */
  renderCategory: function (parent) {
    var _category, dom;
    for (let i = 0, leni = category.length; i < leni; i++) {
      _category = {
        element: 'div',
        attrs: {
          class: CSS.category_body_div
        },
        child: [
          {
            element: 'div',
            attrs: {
              class: CSS.category_body_title_div
            },
            event: [
              {
                type: 'click',
                func: this.eventToggle
              }
            ],
            child: [
              {
                element: 'label',
                attrs: {
                  name: category[i].name
                },
                html: category[i].title + ' \u25B2',
                event: [
                  {
                    type: 'click',
                    func: this.eventToggle
                  }
                ]
              }
            ]
          }
        ]
      };

      dom = Utils.builder(_category);
      propertyManager.renderCategoryContent(category[i].name, dom);
      parent.appendChild(dom);
    }
  },

  /**
   * 
   * @param {string} category 
   * @param {Dom Element} categoryDom
   */
  renderCategoryContent: function (category, categoryDom) {
    for(let propInfo of this.propsInfos) {
      if(propInfo.prop.category === category) {
        let propDom = propInfo.prop.render();
        categoryDom.appendChild(propDom);

        //추후 다른 디자인으로 변경한다.
        if(propInfo.child) {
          let childCategoryDom = Utils.builder(
            {
              element: 'div',
              attrs: {
                class: CSS.category_body_div
              },
              child: [
                {
                  element: 'div',
                  attrs: {
                    class: CSS.sub_category_toggle_body_div
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

          for(let childProp of propInfo.child) {
            childCategoryDom.appendChild(childProp.render());
          }
        }
      }

      
    }
  },

  /*
  updateProp: function (prop) {
    if (propertyManager.selected.element) {
      var domType = propertyManager.selected.element.dom.nodeName;
      var configs = propertyManager.config.configs;
      var _config = null, _configChild;
      for (var i = 0, len = configs.length; i < len; i++) {
        _config = configs[i];

        if(_config.model.prop.name == 'src') {
          if(domType == 'IMG') {
            _config.model.dom.parentElement.style['display'] = 'block';
            _config.model.dom.parentElement.removeAttribute('prop-hidden');
          } else {
            _config.model.dom.parentElement.style['display'] = 'none';
            _config.model.dom.parentElement.setAttribute('prop-hidden', 'true');
          }
        }

        if(_config.model.prop.name == 'href') {
          if(domType == 'A') {
            _config.model.dom.parentElement.style['display'] = 'block';
            _config.model.dom.parentElement.removeAttribute('prop-hidden');
          } else {
            _config.model.dom.parentElement.style['display'] = 'none';
            _config.model.dom.parentElement.setAttribute('prop-hidden', 'true');
          }
        }

        if(_config.model.prop.name == 'option') {
          if(domType == 'SELECT') {
            _config.model.dom.style['display'] = 'block';
            _config.model.dom.removeAttribute('prop-hidden');
          } else {
            _config.model.dom.style['display'] = 'none';
            _config.model.dom.setAttribute('prop-hidden', 'true');
          }
        }

        if(_config.model.prop.name == 'table') {
          if(domType == 'TABLE') {
            _config.model.dom.parentElement.style['display'] = 'block';
            _config.model.dom.parentElement.removeAttribute('prop-hidden');
          } else {
            _config.model.dom.parentElement.style['display'] = 'none';
            _config.model.dom.parentElement.setAttribute('prop-hidden', 'true');
          }
        }

        _config.model.update(prop);

        if (_config.child) {
          for (var c = 0, lenC = _config.child.length; c < lenC; c++) {
            _configChild = _config.child[c];
            _configChild.model.update(prop);
          }
        }
      }
    }
  },
  */

  /**
   * init attribute view
   * @param {Element} parent 
   */
  render: function (parent) {
    propertyManager.renderCategory(parent);
  }
};

export default propertyManager;