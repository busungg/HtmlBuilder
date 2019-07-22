const utils = require('../utils/utils');

/**
    Attributes View Manager
**/
var blockManager = {
  config: require('./config/config'),

  model: {
    block: require('./model/block')
  },

  selected: null,

  init: function () {
    var configs = blockManager.config.configs;
    var _config = null;
    for (var i = 0, len = configs.length; i < len; i++) {
      _config = configs[i];
      _config.model = blockManager.newModel('block');
      _config.model.title = _config.title;
      _config.model.icon = _config.icon;
      _config.model.option = _config.option;
    }
  },

  newModel: function (name) {
    return new blockManager.model[name];
  },

  setEvent: function (event) {
    var configs = blockManager.config.configs;
    for (var i = 0, len = configs.length; i < len; i++) {
      _config = configs[i];
      _config.model.setEvent(event);
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

    while (sibling) {
      if (sibling.style.display == 'none') {
        sibling.style.display = 'inline-block';
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
    var category = blockManager.config.category;
    var _category, dom;
    for (var i = 0, leni = category.length; i < leni; i++) {
      _category = {
        element: 'div',
        attr: {
          class: 'hb_category_body_div'
        },
        child: [{
          element: 'div',
          attr: {
            class: 'hb_category_body_title_div'
          },
          event: [{
            type: 'click',
            func: blockManager.eventToggle
          }],
          child: [{
            element: 'label',
            attr: {
              name: category[i].name
            },
            html: category[i].title + ' \u25B2',
            event: [{
              type: 'click',
              func: blockManager.eventToggle
            }]
          }]
        }]
      };

      dom = utils.builder(_category);
      blockManager.renderCategoryContent(category[i].name, dom);

      parent.appendChild(dom);
    }
  },

  /**
   * 
   * @param {string} category 
   * @param {Dom Element} categoryDom 
   */
  renderCategoryContent: function (category, categoryDom) {
    var configs = blockManager.config.configs;
    var _config = null,
      dom = null;
    for (var i = 0, len = configs.length; i < len; i++) {
      _config = configs[i];

      if (_config.category === category) {
        dom = utils.builder(_config.model.render());
        _config.model.dom = dom;
        categoryDom.appendChild(dom);
      }
    }
  },

  /**
   * render block element
   * @param {Element} parent 
   */
  render: function (parent) {
    blockManager.renderCategory(parent);

    /*
    var configs = blockManager.config;
    var _config = null;
    for (var i = 0, len = configs.length; i < len; i++) {
      _config = configs[i];

      var dom = utils.builder(_config.model.render());
      _config.model.dom = dom;
      parent.appendChild(dom);
    }
    */
  }
};

module.exports = blockManager;