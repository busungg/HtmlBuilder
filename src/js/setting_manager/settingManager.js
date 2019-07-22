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
    var _config = null,
      dom;
    for (var i = 0, len = configs.length; i < len; i++) {
      _config = configs[i];
      dom = utils.builder(_config.model.render());
      _config.model.dom = dom;
      parent.appendChild(dom);
    }
  },

  menuSettingPopup: function (section, applyFunc, text) {
    try {
      var close = function (e) {
        div.remove();
      };

      var div = document.createElement('div');
      div.setAttribute('class', 'hb_setting-popup');

      var div_title = document.createElement('div');
      div_title.setAttribute('class', 'hb_setting-popup-titlediv');
      div_title.appendChild(document.createTextNode(section));

      var button_cancel = document.createElement('button');
      button_cancel.setAttribute('class', 'hb_setting-popup-clossbutton');
      button_cancel.addEventListener('click', close);
      div_title.appendChild(button_cancel);

      var div_text = document.createElement('div');
      div_text.setAttribute('class', 'hb_setting-popup-textdiv');

      var textarea = document.createElement('textarea');
      textarea.setAttribute('class', 'hb_setting-popup-textarea');
      textarea.setAttribute('style', 'resize: none');
      if (text) {
        textarea.value = text;
      }
      div_text.appendChild(textarea);

      div.appendChild(div_title);
      div.appendChild(div_text);

      if (applyFunc) {
        var button_apply = document.createElement('button');
        button_apply.setAttribute('class', 'hb_setting-popup-applybutton');
        button_apply.appendChild(document.createTextNode('Apply'));
        button_apply.addEventListener('click', applyFunc);
        div.appendChild(button_apply);
      }

      document.body.appendChild(div);
    } catch (err) {
      console.log(err.message);
    }
  }

};

module.exports = settingManager;