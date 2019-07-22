const CSS = require('../config/css');
const Property = require('./property');

class PropertyClass extends Property {
  event(e) {
    var eventType = e.target.getAttribute('hb_set_event_type');

    if (eventType === 'add') {
      this.addEvent(e);
    } else {
      this.removeEvent(e);
    }
  };

  addEvent(e) {
    if (this.selected) {
      var selected = this.selected.dom;
      var nameDom = this.dom.querySelector('[hb_set_type=name]');
      var valueDom = this.dom.querySelector('[hb_set_type=value]');

      if (nameDom.value != '') {
        var option = document.createElement('option');
        option.setAttribute('value', nameDom.value);
        option.appendChild(document.createTextNode(nameDom.value));
        valueDom.appendChild(option);

        selected.classList.add(nameDom.value);
      }

      if (this.callback && typeof this.callback === 'function') {
        this.callback();
      }
    }
  };

  removeEvent(e) {
    if (this.selected) {
      var selected = this.selected.dom;
      var valueDom = this.dom.querySelector('[hb_set_type=value]');

      for (var i = 0; i < valueDom.options.length; i++) {
        if (valueDom.options[i].selected == true) {
          selected.classList.remove(valueDom.options[i].value);
          valueDom.removeChild(valueDom.options[i]);
          i--;
        }
      }

      if (this.callback && typeof this.callback === 'function') {
        this.callback();
      }
    }
  };

  update(prop) {
    valueDom = this.dom.querySelector('[hb_set_type=value]');

    if (prop.class.length == 0) {
      while (valueDom.options.length != 0) {
        valueDom.options[0].remove();
      }
    } else {
      while (valueDom.options.length != 0) {
        valueDom.options[0].remove();
      }

      var option;
      for (var i = 0, len = prop.class.length; i < len; i++) {
        if (prop.class[i].indexOf('hb_selectable') == -1 && prop.class[i].indexOf('hb_selected') == -1) {
          option = document.createElement('option');
          option.setAttribute('value', prop.class[i]);
          option.appendChild(document.createTextNode(prop.class[i]));

          valueDom.appendChild(option);
        }
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
                hb_set_type: 'name'
              }
            },
            {
              element: 'button',
              attr: {
                class: CSS.prop_body_set_btn,
                title: 'Add class',
                hb_set_prop_name: prop.name,
                hb_set_event_type: 'add'
              },
              text: 'Add class',
              event: [{
                type: 'click',
                func: eventDetect
              }]
            },
            {
              element: 'button',
              attr: {
                class: CSS.prop_body_set_btn,
                title: 'Delete class',
                hb_set_prop_name: prop.name,
                hb_set_event_type: 'delete'
              },
              text: 'Delete class',
              event: [{
                type: 'click',
                func: eventDetect
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