const CSS = require('../config/css');
const Property = require('./property');

class PropertyClass extends Property {
  addEvent(e) {
    if (this.selected) {
      nameDom = this.dom.querySelector('[hb_set_type=name]');
      valueDom = this.dom.querySelector('[hb_set_type=value]');

      if (nameDom.value != '') {
        var option = document.createElement('option');
        option.setAttribute('value', nameDom.value);
        option.appendChild(document.createTextNode(nameDom.value));
        valueDom.appendChild(option);

        this.selected.classList.add(input.value);
      }

      if (this.callback && typeof this.callback === 'function') {
        this.callback();
      }
    }
  };

  removeEvent(e) {
    if (this.selected) {
      valueDom = this.dom.querySelector('[hb_set_type=value]');

      for (var i = 0; i < valueDom.options.length; i++) {
        if (valueDom.options[i].selected == true) {
          this.selected.classList.remove(valueDom.options[i].value);
          valueDom.removeChild(valueDom.options[i]);
          i--;
        }
      }

      if (this.callback && typeof this.callback === 'function') {
        this.callback();
      }
    }
  };

  render() {
    var prop = this.property;

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
            hb_set_type: 'name'
          }
        },
        {
          element: 'button',
          attr: {
            class: CSS.prop_body_set_btn,
            title: 'Add class'
          },
          text: 'Add class',
          event: [{
            type: 'click',
            func: this.addEvent
          }]
        },
        {
          element: 'button',
          attr: {
            class: CSS.prop_body_set_btn,
            title: 'Delete class'
          },
          text: 'Delete class',
          event: [{
            type: 'click',
            func: this.removeEvent
          }]
        },
        {
          element: 'select',
          attr: {
            class: CSS.prop_body_set_multi_select,
            multiple: true,
            hb_set_type: 'value'
          }
        }
        ]
      }
      ]
    };
  }
};

module.exports = PropertyClass;