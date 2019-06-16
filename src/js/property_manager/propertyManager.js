var utils = require('../utils/utils');

/**
    Attributes View Manager
**/
var propertyManager = {
  config: require('./config/config'),

  model: {
    propertyClass: require('./model/propertyClass'),
    propertyColor: require('./model/propertyColor'),
    propertySelect: require('./model/propertySelect'),
    propertyStyle2Save: require('./model/propertyStyle2Save'),
    propertyText: require('./model/propertyText'),
    propertyTextUnit: require('./model/propertyTextUnit')
  },

  selected: null,

  init: function() {
    var configs = propertyManager.config.configs;
    var _config = null;
    for(var i = 0, len = configs.length; i < len; i++) {
      _config = configs[i];
      _config.model = propertyManager.newModel(configs[i].model_name);
      _config.model.setProperty(_config.prop);
      _config.model.setSelected(propertyManager.selected);
    }

    // setSelected 관리 여기서 하기 -> propertyManager.selected를 넘기면 하나로 관리가 가능하다
  },

  newModel: function (name) {
    return Object.create(propertyManager.model[name]);
  },

  /**
   * set selected element for events
   * @param {Layout} selected 
   */
  setSeleted: function (selected) {
    propertyManager.selected = selected;
  },

  /**
   * set category element
   * @param {Element} parent 
   */
  renderCategory: function (parent) {

  },

  /**
   * set category content element
   * @param {Element} category 
   */
  renderCategoryContent: function (category) {
    var configs = propertyManager.config.configs;
    var dom;
    for(var i = 0, len = configs.length; i < len; i++) {
      dom = utils.builder(configs[i].model.render());
      configs[i].model.setDom(dom);
      category.appendChild(dom);
    }
  },

  /**
   * init attribute view
   * @param {Element} parent 
   */
  render: function (parent) {
    propertyManager.init();
    propertyManager.renderCategoryContent(parent);
  }
};

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