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
      block.render();
      blocks.push(block);
    });
  },

  /**
   * category, sub category toggle event
   * @param {event} e
   */
  eventToggle: function (e) {
    let target = e.target;
    target.classList.toggle('hide');

    let content = target.parentElement.nextElementSibling;

    if (content.classList.contains('hide')) {
      content.style['max-height'] = content.dataset.scrollHeight;
    } else {
      content.style['max-height'] = null;
    }
    content.classList.toggle('hide');
  },

  /**
   * set category element
   * @param {Element} parent
   */
  renderCategory: function (parent) {
    let _category, dom;
    for (let i = 0, len = category.length; i < len; i++) {
      _category = {
        element: 'section',
        attrs: {
          class: 'hb_block-section'
        },
        child: [
          {
            element: 'div',
            attrs: {
              class: 'hb_block-section__title'
            },
            child: [
              {
                element: 'button',
                attrs: {
                  class: 'hb_block-nav-icon'
                },
                event: [
                  {
                    type: 'click',
                    func: this.eventToggle
                  }
                ]
              },
              {
                element: 'label',
                attrs: {
                  class: 'hb_block-section__title__label'
                },
                html: category[i].title
              }]
          },
          {
            element: 'div',
            attrs: {
              class: 'hb_block-section__content'
            }
          }
        ]
      };

      dom = Utils.builder(_category);
      parent.appendChild(dom);
      blockManager.renderCategoryContent(category[i].name, dom.children[1]);
      dom.children[1].setAttribute('data-scroll-height', dom.children[1].scrollHeight + 'px');
      dom.children[1].style['max-height'] = dom.children[1].scrollHeight + 'px';
    }
  },

  /**
   *
   * @param {string} category
   * @param {Dom Element} categoryDom
   */
  renderCategoryContent: function (category, categoryDom) {
    this.blocks.forEach(block => {
      if (block.category === category) {
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
