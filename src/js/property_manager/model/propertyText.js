const CSS = require('../config/css');

var propertyText = {
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
      if (propertyText.selected) {
        var eventDom = e.target;

        if (eventDom.value) {
          propertyText.selected.setAttribute(propertyText.prop.name, eventDom.value);
        } else {
          propertyText.selected.removeAttribute(propertyText.prop.name);
        }

        if (propertyText.callback && typeof propertyText.callback === 'function') {
          propertyText.callback();
        }
      }
    }
  },

  render: function () {
    //render에서 object를 만들어서 추가하는것이 어떨까?
    //render된 부모를 받는걸로 하자

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
              hb_set_type: 'value'
            },
            event: [event]
          }]
        }
      ]
    };
  },

  update : function() {

  }
};

module.exports = propertyText;

/**
 * 이 정도 해주려면 그냥 htmlbuilder로 생성하게 하는게 좋겠다.
 *

  결과물
  <div - for category>
    <div - title for category>
      title
    </div>

    <div - attr>
      <div - title for attr></div>
      <div - attr setting></div>

      <div - child list>
        <div - title for child category></div>
        <div - child attr>
          <div - title for child attr></div>
          <div - child attr setting></div>
        </div>
      </div>
    <div>

  </div>
**/