const CSS = require('../config/css');

var propertyColor = {
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

  event: {
    type: 'change',
    func: function (e) {
      if (propertyColor.selected) {
        var eventDom = e.target;

        if (eventDom.value) {
          propertyColor.selected.style[propertyColor.prop.name] = eventDo.value;
        } else {
          propertyColor.selected.style[propertyColor.prop.name] = null;
        }

        if (propertyColor.callback && typeof propertyColor.callback === 'function') {
          propertyColor.callback();
        }
      }
    }
  },

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
              type: 'color',
              class: CSS.prop_body_set_color,
              hb_set_type: 'value'
            },
            event: [event]
          }]
        }
      ]
    };
  }
};

module.exports = propertyColor;