/**
    Attributes View Manager
**/

const ATTRS_CONFIGS = require('./configs');
const ATTRS_ID = require('./default_id');
const ATTRS_EVENTS = require('./events');

/**
 * set selected element for events
 * @param {Layout} selected 
 */
const setSeleted = function(selected) {
  ATTRS_EVENTS.selected = selected;
};

/**
 * set category element
 * @param {Element} parent 
 */
const setCategory = function(parent) {

}

/**
 * set category content element
 * @param {Element} category 
 */
const setCategoryContent = function(category) {

}

/**
 * init attribute view
 * @param {Element} parent 
 */
const iniTView = function(parent) {

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