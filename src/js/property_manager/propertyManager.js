const utils = require('../utils/utils');
const lodash = require('lodash/lang');
const CSS = require('./config/css');

/**
    Attributes View Manager
**/
var propertyManager = {
  config: require('./config/config'),

  model: {
    propertyClass: require('./model/propertyClass'),
    propertyColor: require('./model/propertyColor'),
    propertySelect: require('./model/propertySelect'),
    propertyStyle2Save: require('./model/propertyStyle2Save'),
    propertyText: require('./model/propertyText'),
    propertyTextUnit: require('./model/propertyTextUnit')
  },

  selected: null,

  init: function () {
    var configs = propertyManager.config.configs;
    var _config = null, _configChild;
    for (var i = 0, len = configs.length; i < len; i++) {
      _config = configs[i];
      _config.model = propertyManager.newModel(_config.model_name);
      _config.model.setProperty(_config.prop);
      _config.model.setSelected(propertyManager.selected);

      if (_config.child) {
        for (var c = 0, lenC = _config.child.length; c < lenC; c++) {
          _configChild = _config.child[c];
          _configChild.model = propertyManager.newModel(_configChild.model_name);
          _configChild.model.setProperty(_configChild.prop);
          _configChild.model.setSelected(propertyManager.selected);
        }
      }
    }
  },

  newModel: function (name) {
    return lodash.cloneDeep(propertyManager.model[name]);
  },

  /**
   * set selected element for events
   * @param {Layout} selected 
   */
  setSeleted: function (selected) {
    propertyManager.selected = selected;
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

    while (sibling) {
      if (sibling.style.display == 'none') {
        sibling.style.display = 'block';
      } else {
        sibling.style.display = 'none';
      }

      sibling = sibling.nextSibling;
    }
  },

  /**
   * set category element
   * @param {Element} parent 
   */
  renderCategory: function (parent) {
    var category = propertyManager.config.category;

    var _category, dom;
    for (var i = 0, leni = category.length; i < leni; i++) {
      _category = {
        element: 'div',
        attr: {
          class: CSS.category_body_div
        },
        child: [
          {
            element: 'div',
            attr: {
              class: CSS.category_body_title_div
            },
            event: [
              {
                type: 'click',
                func: propertyManager.eventToggle
              }
            ],
            child: [
              {
                element: 'label',
                attr: {
                  name: category[i].name
                },
                html: category[i].title + ' \u25B2',
                event: [
                  {
                    type: 'click',
                    func: propertyManager.eventToggle
                  }
                ]
              }
            ]
          }
        ]
      };

      dom = utils.builder(_category);
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
    var configs = propertyManager.config.configs;

    var dom, domChild, domChildCategory;
    for (var i = 0, len = configs.length; i < len; i++) {
      if (configs[i].prop.category === category) {
        dom = utils.builder(configs[i].model.render());
        configs[i].model.setDom(dom);
        categoryDom.appendChild(dom);

        if (configs[i].child) {
          domChildCategory = utils.builder(
            {
              element: 'div',
              attr: {
                class: CSS.category_body_div
              },
              child: [
                {
                  element: 'div',
                  attr: {
                    class: CSS.sub_category_toggle_body_div
                  },
                  html: '\u25B2',
                  event: [{
                    type: 'click',
                    func: propertyManager.eventToggle
                  }]
                }]
            }
          );
          dom.appendChild(domChildCategory);

          for (var c = 0, lenC = configs[i].child.length; c < lenC; c++) {
            domChild = utils.builder(configs[i].child[c].model.render());
            configs[i].child[c].model.setDom(domChild);
            domChildCategory.appendChild(domChild);
          }
        }
      }
    }

    //sub category도 만들자
  },

  /**
   * init attribute view
   * @param {Element} parent 
   */
  render: function (parent) {
    propertyManager.init();
    propertyManager.renderCategory(parent);
  }
};

module.exports = {
  render: propertyManager.render
};


/**
 * 이 정도 해주려면 그냥 htmlbuilder로 생성하게 하는게 좋겠다.
 *

  결과물
  <div - for category>
    <div - title for category>
      title
    </div>

    <div - attr>
      <div - title for attr></div>
      <div - attr setting></div>

      <div - child list>
        <div - title for child category></div>
        <div - child attr>
          <div - title for child attr></div>
          <div - child attr setting></div>
        </div>
      </div>
    <div>

  </div>
**/