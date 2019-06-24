const CSS = require('../config/css');
const Property = require('./property');

class PropertyStyle2Save extends Property {
  event(e) {
    if (this.selected) {
      var eventDom = e.target.previousSibling;

      //U.style2Css 수정 필요 -- selected를 인식하지 못하는 상태
      /*
      if(U.style2Css(eventDom.value)) {
        propertyStyle2Save.selected.setAttribute('style', '');
        var classText = propertyStyle2Save.selected.getAttribute('class');
        propertyStyle2Save.selected.setAttribute('class', classText + ' ' + value);
      }
      */

      if (this.callback && typeof this.callback === 'function') {
        this.callback();
      }
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