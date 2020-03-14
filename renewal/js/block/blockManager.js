import Utils from '../utils/utils';
import { category, configs } from './config/config';
import Block from './model/Block';

/**
    Attributes View Manager
**/
const blockManager = {
  blocks: null,

  init() {
    const blocks = this.blocks = [];
    configs.forEach(config => {
      let block = new Block(config);
      block.dom = Utils.builder(block.render());
      blocks.push(block);
    });
  },

  /**
   * category, sub category toggle event
   * @param {event} e 
   */
  eventToggle: function (e) {
    var target;

    if (e.target.nodeName == 'LABEL') {
      target = e.target.parentNode;
    } else {
      target = e.target;
    }

    if (target.innerHTML.indexOf('\u25B2') != -1) {
      target.innerHTML = target.innerHTML.replace('\u25B2', '\u25BC');
    } else {
      target.innerHTML = target.innerHTML.replace('\u25BC', '\u25B2');
    }

    var sibling = target.nextSibling;

    while (sibling) {
      if (sibling.style.display == 'none') {
        sibling.style.display = 'inline-block';
      } else {
        sibling.style.display = 'none';
      }

      sibling = sibling.nextSibling;
    }
  },

  /**
   * set category element
   * @param {Element} parent 
   */
  renderCategory: function (parent) {
    let _category, dom;
    for (let i = 0, len = category.length; i < len; i++) {
      _category = {
        element: 'div',
        attrs: {
          class: 'hb_category_body_div'
        },
        child: [{
          element: 'div',
          attrs: {
            class: 'hb_category_body_title_div'
          },
          event: [{
            type: 'click',
            func: blockManager.eventToggle
          }],
          child: [{
            element: 'label',
            attrs: {
              name: category[i].name
            },
            html: category[i].title + ' \u25B2',
            event: [{
              type: 'click',
              func: blockManager.eventToggle
            }]
          }]
        }]
      };

      dom = Utils.builder(_category);
      blockManager.renderCategoryContent(category[i].name, dom);
      
      parent.appendChild(dom);
    }
  },

  /**
   * 
   * @param {string} category 
   * @param {Dom Element} categoryDom 
   */
  renderCategoryContent: function (category, categoryDom) {
    this.blocks.forEach(block => {
      if(block.category === category) {
        categoryDom.appendChild(block.dom);
      }
    });
  },

  /**
   * render block element
   * @param {Element} parent 
   */
  render: function (parent) {
    blockManager.renderCategory(parent);
  }
};

export default blockManager;