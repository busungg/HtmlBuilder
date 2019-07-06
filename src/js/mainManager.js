const utils = require('./utils/utils');
const blockManager = require('./block_manager/blockManager');
const funcManager = require('./function_manager/funcManager');
const layoutManager = require('./layout_manager/layoutManager');
const propertyManager = require('./property_manager/propertyManager');
const settingManager = require('./setting_manager/settingManager');

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

            //layout events
            mainManager.initLayoutEvents();

            //selected ui function
            funcManager.init();
            funcManager.render(document.body);
            mainManager.initFuncEvents();

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
                class: 'hb_content hb_border-basic'
                //class: 'hb_content hb_full hb_border-basic'
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
                style: ('width:' + mainManager.config.width[1] + ';height:' + mainManager.config.height[1] + '; float:right; margin-right:15px;'),
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
            };

            var _nav = {
                element: 'div',
                attr: {
                    class: 'hb_nav',
                    id: '#main-nav'
                },
                child: [{
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
                    class: 'hb_nav_content'
                },
                child: []
            };
            var content = utils.builder(_content);
            container.appendChild(content);

            var _block = {
                element: 'div',
                attr: {
                    class: 'hb_nav_content-blocks'
                }
            };
            mainManager.nav.block = utils.builder(_block);
            content.appendChild(mainManager.nav.block);

            var _prop = {
                element: 'div',
                attr: {
                    class: 'hb_nav_content-prop',
                    style: 'display:none;'
                },
                child: [{
                        element: 'div',
                        attr: {
                            class: 'hb_nav_content-prop',
                            style: 'display:none;'
                        }
                    },
                    {
                        element: 'div',
                        attr: {
                            class: 'hb_nav_content-prop',
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
                    class: 'hb_nav_content-prop',
                    style: 'display:none;'
                }
            };
            mainManager.nav.setting = utils.builder(_setting);
            content.appendChild(mainManager.nav.setting);

        } catch (err) {
            console.log(err.message);
        }
    },

    initMenuNavContent: function () {
        //Block
        blockManager.init();
        blockManager.render(mainManager.nav.block);
        mainManager.initBlockEvents();

        //Prop
        propertyManager.init();
        propertyManager.render(mainManager.nav.prop.children[0]);
        mainManager.initPropertyEvents();

        //Setting
        settingManager.init();
        settingManager.render(mainManager.nav.setting);
    },

    initBlockEvents: function () {
        var blockEvents = {
            mousedown: function (e) {
                if (layoutManager.selectedLayout) {
                    layoutManager.selectDom({
                        target: layoutManager.selectedLayout.dom
                    });
                    mainManager.setFunctionBlock();
                }
            },
            drag: function (e, option) {
                layoutManager.moveLayout(e, option);
            },
            dragend: function (e) {
                layoutManager.setNewLayout(e);
            }
        }

        blockManager.setEvent(blockEvents);
    },

    initPropertyEvents: function() {
        var callbackFunc = function() {
            layoutManager.updateLayout(layoutManager.contentLayout);
            layoutManager.updateLayoutProp();
            mainManager.setFunctionBlock();
        };
        
        propertyManager.setCallback(callbackFunc);
    },

    initSettingEvents: function() {
        //좀 아닌듯

        var settingEvents = {
            btn_resolution_phone: function(e) {

            },

            btn_resolution_tablet: function(e) {

            },

            btn_resolution_browser: function(e) {

            },

            import_html: function(e) {

            },

            import_html: function(e) {

            },

            import_html: function(e) {

            },

            import_html: function(e) {

            }
        }
    },

    initLayoutEvents: function () {
        var layoutEvents = {
            mouseover: function (e) {
                layoutManager.selectableLayout(e);
                e.stopPropagation();
            },
            mouseout: function (e) {
                layoutManager.selectableLayout(e);
                e.stopPropagation();
            },
            mousedown: function (e) {
                var chk = layoutManager.selectDom(e);
                mainManager.setFunctionBlock();
                mainManager.draggableMenuBlock(!chk);

                propertyManager.setSeleted(layoutManager.selectedLayout);
                if(chk) {
                    propertyManager.updateProp(layoutManager.getLayoutProp());
                }

                if (e.target.tagName === 'SELECT') { //for select box drag
                    e.target.disabled = true;
                }

                e.stopPropagation();
            },
            pointerup: function (e) {
                if (e.target.tagName === 'SELECT') { //for select box drag
                    e.target.disabled = false;
                }

                e.stopPropagation();
            },
            drag: function (e) {
                layoutManager.moveLayout(e);
                e.stopPropagation();
            },
            dragend: function (e) {
                if (e.target.tagName === 'SELECT') { //for select box drag
                    e.target.disabled = false;
                }

                layoutManager.setLayout();
                mainManager.setFunctionBlock();
                mainManager.draggableMenuBlock(true);

                e.stopPropagation();
            }
        };

        layoutManager.setEvent(layoutEvents);
    },

    initFuncEvents: function() {
        var funcEvents = {
            delete: function(e){
                layoutManager.deleteDom();
                layoutManager.updateLayout(layoutManager.contentLayout);
                mainManager.setFunctionBlock();
                mainManager.draggableMenuBlock(true);
                //U.showBlockAttr(false);
            },

            copy: function(e){
                layoutManager.copyDom(layoutManager.selectedLayout.info.parentLayoutId, layoutManager.selectedLayout.info.layoutId);
                layoutManager.updateLayout(layoutManager.contentLayout);
                mainManager.setFunctionBlock();
                mainManager.draggableMenuBlock(true);
                //U.showBlockAttr(false);
            }
        }

        funcManager.setEvent(funcEvents);
    },

    setFunctionBlock: function () {
        try {
            if (layoutManager.selectedLayout) {
                var body = layoutManager.contentLayout.dom;
                var x = (layoutManager.selectedLayout.pos.x - body.scrollLeft);
                var y = (layoutManager.selectedLayout.pos.y - body.scrollTop) - 21;

                funcManager.setPos(x, y);

                if (!body.attachedScroll) {
                    body.attachedScroll = true;
                    body.addEventListener('scroll', function (e) {
                        if (layoutManager.selectedLayout) {
                            var x = (layoutManager.selectedLayout.pos.x - e.target.scrollLeft);
                            var y = (layoutManager.selectedLayout.pos.y - e.target.scrollTop) - 21;

                            funcManager.setPos(x, y);
                        }
                    });
                }
            } else {
                funcManager.setPos(0, -100);
            }
        } catch (err) {
            console.log(err.message);
        }
    },

    draggableMenuBlock: function (chk) {
        try {
            var blocks = document.getElementsByClassName('hb_btn-block');
            for (var i = 0, len = blocks.length; i < len; i++) {
                blocks[i].setAttribute('draggable', chk);
            }

            if (!chk) {
                mainManager.nav.block.style.display = 'none';
                mainManager.nav.prop.style.display = 'block';
                mainManager.nav.setting.style.display = 'none';
            } else {
                mainManager.nav.block.style.display = 'block';
                mainManager.nav.prop.style.display = 'none';
                mainManager.nav.setting.style.display = 'none';
            }

            if(layoutManager.selectedLayout) {
                mainManager.nav.prop.children[0].style.display = 'block';
                mainManager.nav.prop.children[1].style.display = 'none';
            } else {
                mainManager.nav.prop.children[0].style.display = 'none';
                mainManager.nav.prop.children[1].style.display = 'block';
            }
        } catch (err) {
            console.log(err.message);
        }
    }
};

module.exports = mainManager;