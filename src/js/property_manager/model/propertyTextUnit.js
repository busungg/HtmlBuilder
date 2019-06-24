const CSS = require('../config/css');
const Property = require('./property');

class PropertyTextUnit extends Property {
  set property(prop) {
    this.prop = {};

    this.prop.name = prop.name;
    this.prop.title = prop.title;
    this.prop.attr_type = prop.attr_type;
    this.prop.category = prop.category;
    this.prop.units = prop.units;
  };

  get property() {
    return this.prop;
  };

  event(e) {
    if (this.selected) {
      var eventDom = e.target;
      var valueDom, unitDom;
      if (eventDom.getAttribute('hb_set_type') === 'value') {
        valueDom = eventDom;
        unitDom = eventDom.nextSibling;
      } else {
        valueDom = eventDom.previousSibling;
        unitDom = eventDom;
      }

      var value;
      if (valueDom.value != null && valueDom.value != '') {
        value = valueDom.value + unitDom.value;
        this.selected.style[this.property.name] = value;
      } else {
        this.selected.style[this.property.name] = null;
      }

      if (this.callback && typeof this.callback === 'function') {
        this.callback();
      }
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
          element: 'input',
          attr: {
            type: 'text',
            class: CSS.prop_body_set_text,
            hb_set_type: 'value',
            hb_set_prop_name: prop.name
          },
          event: [{
            type: 'change',
            func: eventDetect
          }]
        },
        {
          element: 'select',
          attr: {
            class: CSS.prop_body_set_select,
            hb_set_type: 'unit',
            hb_set_prop_name: prop.name
          },
          child: [],
          event: [{
            type: 'change',
            func: eventDetect
          }]
        }
        ]
      }
      ]
    };

    var _select = _render.child[1].child[1];
    for (var i = 0, len = prop.units.length; i < len; i++) {
      _select.child.push({
        element: 'option',
        attr: {
          value: prop.units[i]
        },
        text: prop.units[i]
      });
    }

    return _render;
  };
};

module.exports = PropertyTextUnit;