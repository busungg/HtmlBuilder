const utils = require('../utils/utils');
const CSS = require('./config/css');

/**
    Attributes View Manager
**/
var settingManager = {
  config: require('./config/config'),

  model: {
    propertyClass: require('./model/propertyClass')
  },

  selected: {
    element: null
  },

  callback: {
    func: null
  },

  init: function () {
    var configs = settingManager.config.configs;
    var _config = null, _configChild;
    for (var i = 0, len = configs.length; i < len; i++) {
      _config = configs[i];
      _config.model = propertyManager.newModel(_config.model_name);
      _config.model.property = _config.prop;
      _config.model.selected = propertyManager.selected;
      _config.model.callback = propertyManager.callback;
    }
  },

  newModel: function (name) {
    return new propertyManager.model[name]();
  },

  /**
   * set selected element for events
   * @param {Layout} selected 
   */
  setSeleted: function (element) {
    propertyManager.selected.element = element;
  },

  getSelected: function () {
    return propertyManager.selected;
  },

  /**
   * set callback function
   * @param {function} func 
   */
  setCallback: function (func) {
    propertyManager.callback.func = func;
  },


  updateProp: function (prop) {
    if (propertyManager.selected) {
      var configs = propertyManager.config.configs;
      var _config = null, _configChild;
      for (var i = 0, len = configs.length; i < len; i++) {
        _config = configs[i];

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

  /**
   * init setting view
   * @param {Element} parent 
   */
  render: function (parent) {
    
  }
};

module.exports = propertyManager;