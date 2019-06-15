const CSS = require('../config/css');

var propertyTextUnit = {
  setProperty: function (prop) {
    this.prop = {};

    this.prop.name = prop.name;
    this.prop.title = prop.title;
    this.prop.attr_type = prop.attr_type;
    this.prop.category = prop.category;
    this.prop.units = prop.units;
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
      if (propertyTextUnit.selected) {
        var eventDom = e.target;
        var valueDom, unitDom;
        if (eventDom.getAttribute('hb_set_type') === 'value') {
          valueDom = eventDom;
          unitDom = eventDom.nextSibling;
        } else {
          valueDom = eventDom.previousSibling;
          unitDom = eventDom;
        }

        var value;
        if (valueDom.value != null && valueDom.value != '') {
          value = valueDom.value + unitDom.value;
          propertyTextUnit.selected.style[propertyTextUnit.prop.name] = value;
        } else {
          propertyTextUnit.selected.style[propertyTextUnit.prop.name] = null;
        }

        if (propertyTextUnit.callback && typeof propertyTextUnit.callback === 'function') {
          propertyTextUnit.callback();
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
              element: 'input',
              attr: {
                type: 'text',
                class: CSS.prop_body_set_text,
                hb_set_type: 'value'
              },
              event: [event]
            },
            {
              element: 'select',
              attr: {
                class: CSS.prop_body_set_select,
                hb_set_type: 'unit'
              },
              child: [],
              event: [event]
            }
          ]
        }
      ]
    };

    var _select = _render.child[1].child[1];
    for (var i = 0, len = prop.units.length; i < len; i++) {
      _select.push({
        element: 'option',
        attr: {
          value: prop.units[i]
        },
        text: prop.units[i]
      });
    }

    return _render;
  }
};

module.exports = propertyTextUnit;