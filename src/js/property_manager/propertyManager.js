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
    var _config = null;
    for (var i = 0, len = configs.length; i < len; i++) {
      _config = configs[i];
      _config.model = propertyManager.newModel(configs[i].model_name);
      _config.model.setProperty(_config.prop);
      _config.model.setSelected(propertyManager.selected);
    }

    // setSelected 관리 여기서 하기 -> propertyManager.selected를 넘기면 하나로 관리가 가능하다
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
              class: CSS.category_body_title_div,
              style: 'width: 150px; background-color: #9fa8b7; border-top: 1px solid #495267; font-size:8px; cursor:pointer;'
            },
            child: [
              {
                element: 'label',
                attr: {
                  name: category[i].name
                },
                html: category[i].title + ' \u25B2'
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
    
    var dom;
    for(var i=0, len = configs.length; i < len; i++) {
      if(configs[i].prop.category === category) {
        dom = utils.builder(configs[i].model.render());
        configs[i].model.setDom(dom);
        categoryDom.appendChild(dom);
      }
    }
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
 * var toggleEvent = function(e) {
  var target;

  if(e.target.nodeName == 'LABEL') {
    target = e.target.parentNode;
  } else {
    target = e.target;
  }

  if(target.innerHTML.indexOf('\u25B2') != -1) {
    target.innerHTML = target.innerHTML.replace('\u25B2', '\u25BC');
  } else {
    target.innerHTML = target.innerHTML.replace('\u25BC', '\u25B2');
  }

  var sibling = target.nextSibling;

  while(sibling) {
    if(sibling.style.display == 'none') {
      sibling.style.display = 'block';
    } else {
      sibling.style.display = 'none';
    }

    sibling = sibling.nextSibling;
  }
};

 *
 */

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