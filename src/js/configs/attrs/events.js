/**
    Default Attributes events
**/
const ATTRS_ID = require('./default_id');
const UTILS = require('../../utils/utils');

let selected = null;

/*

  U.updateLayout(U.contentLayout); //꼭 필요

  var addEvent = function(e) {
        var id = e.target.getAttribute(O.HB_ATTR_ID);
        var input = U.getElementByAttribute(U.getQueryOption(O.HB_ATTR_ID, id, O.HB_ATTR_TYPE, O.HB_ATTR_TYPE_OPTION.text));

        if(input.value != '') {
          var target = U.getElementByAttribute(U.getQueryOption(O.HB_LAYOUT_ID, U.selectedLayout.id));
          var select = U.getElementByAttribute(U.getQueryOption(O.HB_ATTR_ID, id, O.HB_ATTR_TYPE, O.HB_ATTR_TYPE_OPTION.select));

          var option = U.builder({
            element: 'option',
            attr: {
              value: input.value
            },
            text: input.value
          });
          select.appendChild(option);

          target.classList.add(input.value);
        }

        U.updateLayout(U.contentLayout);
      };

      var deleteEvent = function(e) {
      var target = U.getElementByAttribute(U.getQueryOption(O.HB_LAYOUT_ID, U.selectedLayout.id));
      var id = e.target.getAttribute(O.HB_ATTR_ID);
      var select = U.getElementByAttribute(U.getQueryOption(O.HB_ATTR_ID, id, O.HB_ATTR_TYPE, O.HB_ATTR_TYPE_OPTION.select));

      for(var i = 0; i < select.options.length; i++) {
          if(select.options[i].selected == true) {
              target.classList.remove(select.options[i].value);
              select.removeChild(select.options[i]);
              i--;
          }
      }

      U.updateLayout(U.contentLayout);
    };

text,
text_unit,
select,
color

event 종류별로 만든다. 같은것들은 같게 사용
*/

const getTargetInfo = function (target) {
  var info = {};

  info.attr_name = target.getAttribute(ATTRS_ID.ATTR_NAME);
  info.attr_type = target.getAttribute(ATTRS_ID.ATTR_TYPE);
  info.target_value = target.value;
};

const EVENTS = {
  change_attr: {
    type: 'change',
    func: function (e) {
      if (selected) {
        var targetInfo = getTargetInfo(e.target);

        selected.setAttribute(targetInfo.attr_name, info.target_value);
      }
    }
  },

  change_value: {
    type: 'change',
    func: function (e) {
      var targetInfo = getTargetInfo(e.target);

      if (selected.nodeName == 'INPUT' || selected.nodeName == 'TEXTAREA') {
        selected.value = targetInfo.target_value;
      } else {
        selected.setAttribute('value', targetInfo.target_value);
      }
    }
  },

  add_text_element: {
    type: 'change',
    func: function (e) {
      if (selected) {
        var targetInfo = getTargetInfo(e.target);

        if (selected.firstChild) {
          if (selected.firstChild.nodeType != Node.TEXT_NODE) {
            selected.insertBefore(document.createTextNode(targetInfo.target_value), selected.firstChild);
          } else {
            selected.firstChild.textContent = targetInfo.target_value;
          }
        } else {
          selected.insertBefore(document.createTextNode(targetInfo.target_value), selected.firstChild);
        }
      }
    }
  },

  change_style_textunit: {
    type: 'change',
    func: function (e) {
      if (selected) {
        var targetInfo = getTargetInfo(e.target);

        valueElement = UTILS.getElementByAttribute(
          UTILS.getQueryOption(ATTRS_ID.ATTR_NAME, targetInfo.attr_name,
            ATTRS_ID.ATTR_SET_TYPE, ATTRS_ID.ATTR_SET_OPTION.text)
        );
        unitElement = UTILS.getElementByAttribute(UTILS.getQueryOption(ATTRS_ID.ATTR_NAME, targetInfo.attr_name,
          ATTRS_ID.ATTR_SET_TYPE, ATTRS_ID.ATTR_SET_OPTION.units));

        var style = null;
        if (valueElement) {
          if (valueElement.value != null && valueElement.value != '') {
            style = valueElement.value;
            if (unitElement) {
              value += unitElement.value;
            }
          }
        }
        selected.style[targetInfo.attr_name] = style;
      }
    }
  },

  change_select: {
    type: 'change',
    func: function (e) {
      if (selected) {
        var targetInfo = getTargetInfo(e.target);

        selected.style[targetInfo.attr_name] = targetInfo.target_value;
      }
    }
  },

  change_color: {
    type: 'change',
    func: function (e) {
      var targetInfo = getTargetInfo(e.target);

      selected.style[targetInfo.attr_name] = targetInfo.target_value;
    }
  },

  click_style2class_save: {
    type: 'click',
    func: function (e) {
        
    }
  },

  click_multi_select_add: {
    type: 'click',
    func: function (e) {

    }
  },

  click_multi_select_delete: {
    type: 'click',
    func: function (e) {

    }
  }

};

module.exports = {
  selected: selected,
  EVENTS: EVENTS
};