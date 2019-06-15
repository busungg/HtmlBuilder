const CSS = require('../config/css');

var propertyClass = {
  setProperty: function (prop) {
    this.prop = {};

    this.prop.name = prop.name;
    this.prop.title = prop.title;
    this.prop.attr_type = prop.attr_type;
    this.prop.category = prop.category;
  },

  setDom: function (dom) {
    this.dom = dom;
  },

  setSelected: function (selected) {
    this.selected = selected;
  },

  callback: function (callback) {
    this.callback = callback;
  },

  event: [{
      type: 'click', //Add Class
      func: function (e) {
        if (propertyClass.selected) {
          nameDom = propertyClass.dom.querySelector('[hb_set_type=name]');
          valueDom = propertyClass.dom.querySelector('[hb_set_type=value]');

          if (nameDom.value != '') {
            var option = document.createElement('option');
            option.setAttribute('value', nameDom.value);
            option.appendChild(document.createTextNode(nameDom.value));
            valueDom.appendChild(option);

            propertyClass.selected.classList.add(input.value);
          }

          if (propertyClass.callback && typeof propertyClass.callback === 'function') {
            propertyClass.callback();
          }
        }
      }
    },
    {
      type: 'click', //Remove Class
      func: function (e) {
        if (propertyClass.selected) {
          valueDom = propertyClass.dom.querySelector('[hb_set_type=value]');

          for (var i = 0; i < valueDom.options.length; i++) {
            if (valueDom.options[i].selected == true) {
              propertyClass.selected.classList.remove(valueDom.options[i].value);
              valueDom.removeChild(valueDom.options[i]);
              i--;
            }
          }

          if (propertyClass.callback && typeof propertyClass.callback === 'function') {
            propertyClass.callback();
          }
        }
      }
    }
  ],

  render: function () {
    var event = this.event;
    var prop = this.prop;

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
              event: [event[0]]
            },
            {
              element: 'button',
              attr: {
                class: CSS.prop_body_set_btn,
                title: 'Delete class'
              },
              text: 'Delete class',
              event: [event[1]]
            },
            {
              element: 'select',
              attr: {
                class: CSS.prop_body_set_select,
                multiple: true,
                hb_set_type: 'value'
              }
            }
          ]
        }
      ]
    };
  },

  update: function (value) {

  }
};

module.exports = propertyClass;