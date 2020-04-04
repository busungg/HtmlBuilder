import Utils from '../utils/utils';
import { category, configs } from './config/config';
import Block from './model/Block';

/**
    Attributes View Manager
*/
const blockManager = {
  blocks: null,

  init() {
    this.blocks = [];
    configs.forEach((config) => {
      const block = new Block(config);
      block.render();
      this.blocks.push(block);
    });
  },

  /**
   * category, sub category toggle event
   * @param {event} e
   */
  eventToggle(e) {
    const { target } = e;
    target.classList.toggle('hide');

    const content = target.parentElement.nextElementSibling;

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
  renderCategory(parent) {
    let _category; let dom;
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
      dom.children[1].setAttribute('data-scroll-height', `${dom.children[1].scrollHeight}px`);
      dom.children[1].style['max-height'] = `${dom.children[1].scrollHeight}px`;
    }
  },

  /**
   *
   * @param {string} category
   * @param {Dom Element} categoryDom
   */
  renderCategoryContent(categoryName, categoryDom) {
    this.blocks.forEach((block) => {
      if (block.category === categoryName) {
        categoryDom.appendChild(block.dom);
      }
    });
  },

  /**
   * render block element
   * @param {Element} parent
   */
  render(parent) {
    blockManager.renderCategory(parent);
  }
};

export default blockManager;
