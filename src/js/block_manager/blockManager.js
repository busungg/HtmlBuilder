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
    for (var i = 0, len = configs.length; i < len; i++) {
      _config = configs[i];
      _config.model.event = event;
    }
  },

  /**
   * render block element
   * @param {Element} parent 
   */
  render: function (parent) {
    blockManager.init();

    var configs = blockManager.config;
    var _config = null;
    for (var i = 0, len = configs.length; i < len; i++) {
      _config = configs[i];

      var dom = utils.builder(_config.model.render());
      parent.appendChild(dom);
    }
  }
};

module.exports = {
  render: blockManager.render,
  config: blockManager.config
};

/*
{
  type: 'mousedown',
  func: function(e) {
    if(U.selectedLayout) {
      U.selectBlock({
        target: U.selectedLayout.getBlock()
      });
      U.setFunctionBlock();
    }
  }
},
{
  type: 'drag',
  func: function(e) {
    U.moveBlock(e);
  }
},
{
  type: 'dragend',
  func: function(e) {
    U.setBlock();
  }
}
*/