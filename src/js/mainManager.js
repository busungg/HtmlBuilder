const utils = require('./utils/utils');
const blockManager = require('./block_manager/blockManager');
const funcManager = require('./function_manager/funcManager');
const layoutManager = require('./layout_manager/layoutManager');
const propertyManager = require('./property_manager/propertyManager');

/**
 * set main view and manages all manager
 */
var mainManager = {
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
            css: '#hb_css'
        };

        var c = config || {};

        console.log(c);

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
            mainManager.initContent(container);

            //menu
            mainManager.initMenu(container);

            //selected ui function
            funcManager.render(document.body);
        } catch (err) {
            console.log(err.message);
        } finally {
            return;
        }
    },

    initContent: function (container) {
        //content
        var _content = {
            element: 'div',
            attr: {
                id: mainManager.config.ids[0],
                style: ('width:' + mainManager.config.width[0] + ';height:' + mainManager.config.height[0] + '; float:left; overflow: auto;'),
                class: 'hb_content hb_full hb_border-basic'
            }
        };
        var content = utils.builder(_content);
        container.appendChild(content);
        layoutManager.initContentLayout(mainManager.config.ids[0], content.getBoundingClientRect(), content);

        //for content div resize check -- Resize 이벤트 호출은 Window에서만 가능 이부분을 효과 적으로 만들 수 있다면?
        window.setInterval(function () {
            var content = layoutManager.contentLayout.dom;
            var contentRect = content.getBoundingClientRect();
            var width = (content.scrollWidth ? content.scrollWidth : contentRect.width);
            var height = (content.scrollHeight ? content.scrollHeight : contentRect.height);

            if (layoutManager.contentLayout.width != width || layoutManager.contentLayout.height != height) {
                layoutManager.updateLayout(layoutManager.contentLayout);
            }
        }, 1000);
    },

    initMenu: function (container) {
        var menu = utils.builder({
            element: 'div',
            attr: {
                id: mainManager.config.ids[1],
                style: ('width:' + mainManager.config.width[1] + ';height:' + mainManager.config.height[1] + '; float:right;'),
                class: 'hb_main-menu hb_border-basic'
            }
        });
        container.appendChild(menu);

        mainManager.initMenuNav(menu);
        mainManager.initMenuNavContent();

        /*
        H.menuSetting(menu); //manager 생성 필요
        H.cssSetting(); //manager 생성 필요
        */
    },

    initMenuNav: function (container) { //수정 필요
        try {
            var click = function (e) {
                var content = document.getElementById('#main-content');
                var children = content.children;

                for (var i = 0; i < children.length; i++) {
                    children[i].style.display = 'none';
                }

                var showDom = mainManager.nav[e.target.value];
                showDom.style.display = 'block';
            };

            var _nav = {
                element: 'div',
                attr: {
                    class: 'hb_nav',
                    id: '#main-nav'
                },
                child: [
                    {
                        element: 'button',
                        attr: {
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
                        attr: {
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
                        attr: {
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

            container.appendChild(utils.builder(_nav));

            var _content = {
                element: 'div',
                attr: {
                    id: '#main-content',
                    class: 'hb_content'
                },
                child: []
            };
            var content = utils.builder(_content);
            container.appendChild(content);

            var _block = {
                element: 'div',
                attr: {
                    class: 'hb_content-blocks'
                }
            };
            mainManager.nav.block = utils.builder(_block);
            content.appendChild(mainManager.nav.block);

            var _prop = {
                element: 'div',
                attr: {
                    class: 'hb_content-attr',
                    style: 'display:none;'
                },
                child: [
                    {
                        element: 'div',
                        attr: {
                            class: 'hb_content-attr',
                            style: 'display:none;'
                        }
                    },
                    {
                        element: 'div',
                        attr: {
                            class: 'hb_content-attr',
                            style: 'display:block;'
                        },
                        text: 'There is no selected Block\nPlease select at least 1 block'
                    }
                ]
            };
            mainManager.nav.prop = utils.builder(_prop);
            content.appendChild(mainManager.nav.prop);

            var _setting = {
                element: 'div',
                attr: {
                    class: 'hb_content-attr',
                    style: 'display:none;'
                }
            };
            mainManager.nav.setting = utils.builder(_setting);
            content.appendChild(mainManager.nav.setting);

        } catch (err) {
            console.log(err.message);
        }
    },

    initMenuNavContent: function() {
        //Block
        blockManager.init();
        blockManager.render(mainManager.nav.block);

        //Prop
        propertyManager.init();
        propertyManager.render(mainManager.nav.prop.children[1]);
    }
};

module.exports = mainManager;