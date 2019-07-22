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

      var value, selected = this.selected.dom;
      if (unitDom.value != 'auto') {
        if (valueDom.value != null && valueDom.value != '') {
          value = valueDom.value + unitDom.value;
          selected.style[this.property.name] = value;
        } else {
          selected.style[this.property.name] = null;
        }
      } else {
        /*
          width, height auto style exception
        */
        
       selected.style[this.property.name] = unitDom.value;
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
    unitDom = this.dom.querySelector('[hb_set_type=unit]');

    if (!propContent) { //init property view
      valueDom.value = '';
      unitDom.value = unitDom.children[0].value;
    } else {
      var unit = null;
      for (var i = 0, len = unitDom.children.length; i < len; i++) {
        unit = unitDom.children[i];

        if (propContent.indexOf(unit.value) != -1) {
          valueDom.value = propContent.replace(unit.value, '');
          unitDom.value = unit.value;
          break;
        }
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