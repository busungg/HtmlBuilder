const utils = require('../utils/utils');

/**
    Settings View Manager
**/
var settingManager = {
  configs: require('./config/config'),

  model: {
    settingClass: require('./model/setting')
  },

  init: function () {
    var configs = settingManager.configs;
    var _config = null;
    for (var i = 0, len = configs.length; i < len; i++) {
      _config = configs[i];
      _config.model = settingManager.newModel('settingClass');
      _config.model.prop = _config;
    }
  },

  newModel: function (name) {
    return new settingManager.model[name]();
  },

  /**
   * set event
   * @param {object} event 
   */
  setEvent: function (event) {
    var configs = settingManager.configs;
    var _config = null;
    for (var i = 0, len = configs.length; i < len; i++) {
      _config = configs[i];
      _config.model.setEvent(event);
    }
  },

  /**
   * init setting view
   * @param {Element} parent 
   */
  render: function (parent) {
    var configs = settingManager.configs;
    var _config = null, dom;
    for (var i = 0, len = configs.length; i < len; i++) {
      _config = configs[i];
      dom = utils.builder(_config.model.render());
      _config.model.dom = dom;
      parent.appendChild(dom);
    }
  }
};

module.exports = settingManager;