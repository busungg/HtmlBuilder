const CSS = require('../config/css');

var propertySelect = {
  setProperty: function (prop) {
    this.prop = {};

    this.prop.name = prop.name;
    this.prop.title = prop.title;
    this.prop.attr_type = prop.attr_type;
    this.prop.category = prop.category;
    this.prop.options = prop.options;
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
      if (propertySelect.selected) {
        var eventDom = e.target;

        if (eventDom.value) {
          propertySelect.selected.style[propertySelect.prop.name] = eventDom.value;
        } else {
          propertySelect.selected.style[propertySelect.prop.name] = null;
        }

        if (propertySelect.callback && typeof propertySelect.callback === 'function') {
          propertySelect.callback();
        }
      }
    }
  },

  render: function () {
    var event = this.event;
    var prop = this.prop;

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
            element: 'select',
            attr: {
              class: CSS.prop_body_set_select,
              hb_set_type: 'value'
            },
            child: [],
            event: [event]
          }]
        }
      ]
    };

    _select = _render.child[1].child[0];
    for (var i = 0, len = prop.options.length; i < len; i++) {
      _select.push({
        element: 'option',
        attr: {
          value: prop.options[i]
        },
        text: prop.options[i]
      });
    }

    return _render;
  }
};

module.exports = propertySelect;