/* eslint-disable no-unused-vars */
import normalizeCss from 'normalize.css';
import mainCss from './css/main.css';

import Utils from './utils/utils';

import blockManager from './block/blockManager';
import componentManager from './component/componentManager';
import propertyManager from './property/propertyManager';

import {
  propObserver
} from './observer/observerManager';

/**
 * set main view and manages all manager
 */
const mainManager = {
  config: null,
  navBtn: null,
  navContent: null,

  init(config) {
    const defaults = {
      container: '#hb_container', // 전체 화면
      ids: ['!content', '!menu'],
      width: ['80%', '18%'],
      height: ['100%', '100%'],
      css: '#hb_css',
      css_type: 'plain',
      css_path_prefix: './'
    };

    const c = config || {};
    // eslint-disable-next-line no-restricted-syntax
    for (const name in defaults) {
      if (!(name in c)) {
        c[name] = defaults[name];
      }
    }

    this.config = c;

    try {
      // container
      const container = document.getElementById(c.container);

      // content
      this.initFrame(container);

      // menu
      this.initMenu(container);
    } catch (err) {
      console.log(err);
    } finally {
      // eslint-disable-next-line no-unsafe-finally
      return;
    }
  },

  initFrame(container) {
    // iframe을 설정하여 Component만을 위한 Viewport를 확보 한다.
    const { config } = mainManager;
    const iframeOption = {
      element: 'iframe',
      attrs: {
        id: config.ids[0],
        style: `width:${config.width[0]}; height:${config.height[0]}; float:left;`,
        class: 'hb_content hb_border-basic',
        allowfullscreen: true
      }
    };

    componentManager.init(iframeOption, container);
  },

  initMenu(container) {
    const menu = Utils.builder({
      element: 'div',
      attrs: {
        id: mainManager.config.ids[1],
        style: `width:${mainManager.config.width[1]}; height:${mainManager.config.height[1]}; float:right; margin-right:15px;`,
        class: 'hb_main-menu hb_border-basic'
      }
    });
    container.appendChild(menu);

    mainManager.initMenuNav(menu);
    mainManager.initMenuNavContent();
  },

  initMenuNav(container) {
    try {
      const click = (e) => {
        const content = document.getElementById('#main-content');
        const { children } = content;

        for (let i = 0; i < children.length; i++) {
          children[i].style.display = 'none';
          children[i].classList.remove('hb_main-nav__btn--active');
        }

        const showDom = this.navContent[e.target.value];
        showDom.style.display = 'block';

        const navContent = document.getElementById('#main-nav');
        // eslint-disable-next-line no-restricted-syntax
        for (const nav of navContent.children) {
          nav.classList.remove('hb_main-nav__btn--active');
        }
        e.target.classList.add('hb_main-nav__btn--active');
      };

      const _navBtn = {
        element: 'div',
        attrs: {
          class: 'hb_main-nav',
          id: '#main-nav'
        },
        child: [
          {
            element: 'button',
            attrs: {
              class: 'hb_main-nav__btn hb_main-nav__btn--block',
              name: '#main-nav',
              value: 'block'
            },
            event: [{
              type: 'click',
              func: click
            }]
          },
          {
            element: 'button',
            attrs: {
              class: 'hb_main-nav__btn hb_main-nav__btn--attr',
              name: '#main-nav',
              value: 'prop'
            },
            event: [{
              type: 'click',
              func: click
            }]
          },
          {
            element: 'button',
            attrs: {
              class: 'hb_main-nav__btn hb_main-nav__btn--setting',
              name: '#main-nav',
              value: 'setting'
            },
            event: [{
              type: 'click',
              func: click
            }]
          }
        ]
      };

      const navBtn = Utils.builder(_navBtn);
      const {
        0: block,
        1: prop,
        2: setting
      } = {
        ...navBtn.children
      };
      this.navBtn = {
        block,
        prop,
        setting
      };
      container.appendChild(navBtn);

      const _navContent = {
        element: 'div',
        attrs: {
          id: '#main-content',
          class: 'hb_main-nav__content'
        },
        child: []
      };
      const navContent = Utils.builder(_navContent);
      container.appendChild(navContent);

      this.navContent = {
        block,
        prop,
        setting
      };

      const _navContentBlock = {
        element: 'div',
        attrs: {
          class: 'hb_main-nav_content--blocks'
        }
      };
      this.navContent.block = Utils.builder(_navContentBlock);
      navContent.appendChild(this.navContent.block);

      const _navContentProp = {
        element: 'div',
        attrs: {
          class: 'hb_main-nav_content--prop'
        }
      };
      this.navContent.prop = Utils.builder(_navContentProp);
      navContent.appendChild(this.navContent.prop);

      const _navContentSetting = {
        element: 'div',
        attrs: {
          class: 'hb_nav_content-prop'
        }
      };
      this.navContent.setting = Utils.builder(_navContentSetting);
      navContent.appendChild(this.navContent.setting);
    } catch (err) {
      console.log(err);
    }
  },

  initMenuNavContent() {
    // Block
    blockManager.init();
    blockManager.render(this.navContent.block);

    // Prop
    propertyManager.init();
    propertyManager.render(this.navContent.prop);
    propObserver.notify('update', null);

    /*
    //Setting
    settingManager.init();
    settingManager.render(mainManager.nav.setting);
    mainManager.initSettingEvents();
    */

    // Navigation 중 Block 화면을 보여주기 위한 Event 호출
    this.navBtn.block.click();
  }
};

propObserver.register('update', function (target) {
  if (target) {
    this.navBtn.prop.click();
  } else {
    this.navBtn.block.click();
  }
}, mainManager);

export default mainManager;
