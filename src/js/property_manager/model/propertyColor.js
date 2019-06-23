const CSS = require('../config/css');
const Property = require('./property');

class PropertyColor extends Property {
  event(e) {
    if (this.selected) {
      var eventDom = e.target;

      if (eventDom.value) {
        this.selected.style[this.property.name] = eventDo.value;
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
    var event = this.event;

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
            hb_set_type: 'value'
          },
          event: [{
            type: 'change',
            func: event
          }]
        }]
      }
      ]
    };
  };
};

module.exports = PropertyColor;