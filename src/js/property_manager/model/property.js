const config = require('../config/config');
const configs = config.configs;

class Proeprty {
  constructor() {
    this.prop = null;
    this.element = null;
    this.selectedElement = null;
    this._callback = null;
  };

  set property(prop) {
    this.prop = {};

    this.prop.name = prop.name;
    this.prop.title = prop.title;
    this.prop.attr_type = prop.attr_type;
    this.prop.category = prop.category;
  };

  get property() {
    return this.prop;
  };

  set dom(element) {
    this.element = element;
  };

  get dom() {
    return this.element;
  };

  set selected(selectedElement) {
    this.selectedElement = selectedElement;
  };

  get selected() {
    return this.selectedElement.element;
  };

  set callback(_callback) {
    this._callback = _callback;
  }

  get callback() {
    return this._callback.func;
  }

  eventDetect(e) {
    var propName = e.target.getAttribute('hb_set_prop_name');

    var _config;
    for(var i = 0, len = configs.length; i < len; i++) {
      _config = configs[i];
      if(_config.prop.name === propName) {
        if(_config.model.event) {
          _config.model.event(e);
        }
        break;
      }
    }
  };

  update() {};

  render() {
    return null;
  };
};

module.exports = Proeprty;