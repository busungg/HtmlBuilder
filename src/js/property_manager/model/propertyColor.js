const CSS = require('../config/css');
const Property = require('./property');

class PropertyColor extends Property {
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
      valueDom.value = '#000000';
    } else {
      valueDom.value = propContent;
    }
  };
  
  render() {
    var prop = this.property;
    var eventDetect = super.eventDetect;

    return {
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
            type: 'color',
            class: CSS.prop_body_set_color,
            hb_set_type: 'value',
            hb_set_prop_name: prop.name
          },
          event: [{
            type: 'change',
            func: eventDetect
          }]
        }]
      }
      ]
    };
  };
};

module.exports = PropertyColor;