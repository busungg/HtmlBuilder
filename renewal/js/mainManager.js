import Utils from './utils/utils';
import blockManager from './block/blockManager';
import componentManager from './component/componentManager';
import propertyManager from './property/propertyManager';
import { propObserver } from './observer/observerManager';

/**
 * Polyfill
 */
(
  function (global) {
    const g = global || this;

    //DataTransfer Polyfill for HtmlBuilder

    //이동할 Element
    g.DataTransfer.prototype.transferElement = undefined;
    g.DataTransfer.prototype.setTransferElement = function (element) {
      element

      g.DataTransfer.prototype.transferElement = element;
    };

    g.DataTransfer.prototype.getTransferElement = function () {
      return g.DataTransfer.prototype.transferElement;
    };

    //위치하는 순서
    g.DataTransfer.prototype.transferOrder = undefined;
    g.DataTransfer.prototype.setTransferOrder = function (element) {
      g.DataTransfer.prototype.transferOrder = element;
    };

    g.DataTransfer.prototype.getTransferOrder = function () {
      return g.DataTransfer.prototype.transferOrder;
    };

    //새로 생성될 Layout의 Option
    g.DataTransfer.prototype.transferOption = undefined;
    g.DataTransfer.prototype.setTransferOption = function (option) {
      g.DataTransfer.prototype.transferOption = option;
    };

    g.DataTransfer.prototype.getTransferOption = function () {
      return g.DataTransfer.prototype.transferOption;
    };

  }
)(global);


/**
 * set main view and manages all manager
 */
const mainManager = {
  config: null,
  nav: {
    block: null,
    prop: null,
    setting: null
  },

  init: function (config) {
    var defaults = {
      container: '#hb_container', //전체 화면
      ids: ['!content', '!menu'],
      width: ['80%', '18%'],
      height: ['100%', '100%'],
      css: '#hb_css',
      css_type: 'plain',
      css_path_prefix: './'
    };

    var c = config || {};
    for (var name in defaults) {
      if (!(name in c)) {
        c[name] = defaults[name];
      }
    }

    mainManager.config = c;

    try {
      //container
      var container = document.getElementById(c.container);

      //content
      mainManager.initFrame(container);

      //menu
      mainManager.initMenu(container);
    } catch (err) {
      console.log(err.message);
    } finally {
      return;
    }
  },

  initFrame: function (container) {
    //iframe을 설정한다.
    //iframe의 body를 가 frame이 된다.

    const config = mainManager.config;
    const iframeOption = {
      element: 'iframe',
      attrs: {
        id: config.ids[0],
        style: ('width:' + config.width[0] + ';height:' + config.height[
          0] + '; float:left;'),
        class: 'hb_content hb_border-basic',
        allowfullscreen: true
      }
    };

    componentManager.init(iframeOption, container);
  },

  initMenu: function (container) {
    const menu = Utils.builder({
      element: 'div',
      attrs: {
        id: mainManager.config.ids[1],
        style: ('width:' + mainManager.config.width[1] + ';height:' +
          mainManager.config.height[1] +
          '; float:right; margin-right:15px;'),
        class: 'hb_main-menu hb_border-basic'
      }
    });
    container.appendChild(menu);

    mainManager.initMenuNav(menu);
    mainManager.initMenuNavContent();
  },

  initMenuNav: function (container) {
    try {
      var click = function (e) {
        var content = document.getElementById('#main-content');
        var children = content.children;

        for (var i = 0; i < children.length; i++) {
          children[i].style.display = 'none';
        }

        var showDom = mainManager.nav[e.target.value];
        showDom.style.display = 'block';

        if (e.target.value === 'prop') {
          propObserver.notify('initScrollHeight');
        }
      };

      var _nav = {
        element: 'div',
        attrs: {
          class: 'hb_nav',
          id: '#main-nav'
        },
        child: [{
          element: 'button',
          attrs: {
            class: 'hb_btn-nav hb_btn-nav-block',
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
            class: 'hb_btn-nav hb_btn-nav-attr',
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
            class: 'hb_btn-nav hb_btn-nav-setting',
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

      container.appendChild(Utils.builder(_nav));

      var _content = {
        element: 'div',
        attrs: {
          id: '#main-content',
          class: 'hb_nav_content'
        },
        child: []
      };
      var content = Utils.builder(_content);
      container.appendChild(content);

      var _block = {
        element: 'div',
        attrs: {
          class: 'hb_nav_content-blocks'
        }
      };
      mainManager.nav.block = Utils.builder(_block);
      content.appendChild(mainManager.nav.block);

      var _prop = {
        element: 'div',
        attrs: {
          class: 'hb_nav_content-prop',
          style: 'display:none;'
        },
        child: [{
          element: 'div',
          attrs: {
            class: 'hb_nav_content-prop',
            style: 'display:block;'
          }
        },
        {
          element: 'div',
          attrs: {
            class: 'hb_nav_content-prop',
            style: 'display:none;'
          },
          text: 'There is no selected Block\nPlease select at least 1 block'
        }
        ]
      };
      mainManager.nav.prop = Utils.builder(_prop);
      content.appendChild(mainManager.nav.prop);

      var _setting = {
        element: 'div',
        attrs: {
          class: 'hb_nav_content-prop',
          style: 'display:none;'
        }
      };
      mainManager.nav.setting = Utils.builder(_setting);
      content.appendChild(mainManager.nav.setting);

    } catch (err) {
      console.log(err.message);
    }
  },

  initMenuNavContent: function () {
    //Block
    blockManager.init();
    blockManager.render(mainManager.nav.block);

    //Prop
    propertyManager.init();
    propertyManager.render(mainManager.nav.prop.children[0]);

    /*
    //Setting
    settingManager.init();
    settingManager.render(mainManager.nav.setting);
    mainManager.initSettingEvents();
    */
  }
};

export default mainManager;
