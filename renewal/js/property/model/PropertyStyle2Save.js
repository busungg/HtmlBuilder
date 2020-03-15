const CSS = require('../config/css');
const Property = require('./property');
const utils = require('../../utils/utils');

class PropertyStyle2Save extends Property {
  event(e) {
    if (this.selected) {
      var selected = this.selected;
      var eventDom = e.target.previousSibling;

      if (eventDom.value != '') {
        if (utils.style2Css(eventDom.value, selected.prop.style)) {
          selected.dom.removeAttribute('style');
          var classText = selected.dom.getAttribute('class');
          selected.dom.setAttribute('class', classText + ' ' + eventDom.value);
          eventDom.value = '';
        }
      }

      if (this.callback && typeof this.callback === 'function') {
        this.callback();
      }
    }
  };

  update(prop) { }; //no update

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
            type: 'text',
            class: CSS.prop_body_set_text,
            hb_set_type: 'value'
          }
        },
        {
          element: 'button',
          attr: {
            class: CSS.prop_body_set_btn,
            hb_set_prop_name: prop.name
          },
          text: 'Save',
          event: [{
            type: 'click',
            func: eventDetect
          }]
        }
        ]
      }
      ]
    };
  };
};

module.exports = PropertyStyle2Save;