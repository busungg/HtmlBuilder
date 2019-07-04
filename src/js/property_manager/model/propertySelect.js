const CSS = require('../config/css');
const Property = require('./property');

class PropertySelect extends Property {
  set property(prop) {
    this.prop = {};

    this.prop.name = prop.name;
    this.prop.title = prop.title;
    this.prop.attr_type = prop.attr_type;
    this.prop.category = prop.category;
    this.prop.options = prop.options;
  };

  get property() {
    return this.prop;
  };

  event(e) {
    if (this.selected) {
      var selected = this.selected.dom;
      var eventDom = e.target;

      if (eventDom.value) {
        selected.style[this.property.name] = eventDom.value;
      } else {
        selected.style[this.property.name] = null;
      }

      if (this.callback && typeof this.callback === 'function') {
        this.callback();
      }
    }
  };

  update(prop) {
    var propContent;
    if (this.prop.attr_type === 'style') {
      propContent = prop.style[this.prop.name];
    } else {
      propContent = prop[this.prop.name];
    }

    valueDom = this.dom.querySelector('[hb_set_type=value]');

    if (!propContent) { //init property view
      valueDom.value = valueDom.children[0].value;
    } else {
      valueDom.value = propContent;
    }
  };

  render() {
    var prop = this.property;
    var eventDetect = super.eventDetect;

    var _render = {
      element: 'div',
      attr: {
        class: CSS.prop_body_div
      },
      child: [{ //div for title
        element: 'div',
        attr: {
          class: CSS.prop_body_title_div
        },
        child: [{
          element: 'label',
          attr: {
            class: CSS.prop_body_title_label
          },
          text: prop.title
        }]
      },

      { //div for property set
        element: 'div',
        attr: {
          class: CSS.prop_body_set_div
        },
        child: [{
          element: 'select',
          attr: {
            class: CSS.prop_body_set_select,
            hb_set_type: 'value',
            hb_set_prop_name: prop.name
          },
          child: [],
          event: [{
            type: 'change',
            func: eventDetect
          }]
        }]
      }
      ]
    };

    _select = _render.child[1].child[0];
    for (var i = 0, len = prop.options.length; i < len; i++) {
      _select.child.push({
        element: 'option',
        attr: {
          value: prop.options[i]
        },
        text: prop.options[i]
      });
    }

    return _render;
  };
};

module.exports = PropertySelect;