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
    var configs = blockManager.config;
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
    var configs = blockManager.config;
    for (var i = 0, len = configs.length; i < len; i++) {
      _config = configs[i];
      _config.model.setEvent(event);
    }
  },

  /**
   * render block element
   * @param {Element} parent 
   */
  render: function (parent) {
    var configs = blockManager.config;
    var _config = null;
    for (var i = 0, len = configs.length; i < len; i++) {
      _config = configs[i];

      var dom = utils.builder(_config.model.render());
      _config.model.dom = dom;
      parent.appendChild(dom);
    }
  }
};

module.exports = blockManager;