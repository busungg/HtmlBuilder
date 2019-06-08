/**
    Default Attributes events
**/
const ATTRS_ID = require('./default_id');

let selected = null;

const EVENTS = {
  change_text: {
    type: 'change',
    func: function (e) {
      var id = e.target.getAttribute(ATTRS_ID.ID);
      var type = e.target.getAttribute(ATTRS_ID.TYPE);
      var attr_type = e.target.getAttribute(ATTRS_ID.ATTR_TYPE);

      //if text-unit then hb will check unit information too.
      if(selected) {

      }
    }
  },

  change_unit: {
    type: 'change',
    func: function(e) {
      
    }
  },

  change_select: {
    type: 'change',
    func: function(e) {

    }
  },

  click_save: {

  },

  click_add: {

  },

  click_delete: {

  },
};

module.exports = {
  selected: selected,
  events: events
};