const configs = require('../config/config');
const CSS = require('../config/css');

class setting {
    constructor() {
        this._prop = null;
        this._dom = null;
        this._event = null;
    };

    set prop(_prop) {
        this._prop = _prop;
    };

    get prop() {
        return this._prop;
    };

    set dom(_dom) {
        this._dom = _dom;
    };

    get dom() {
        return this._dom;
    };

    setEvent(_event) {
        this._event = _event;
    };

    eventDetect(e) {
        var propName = e.target.getAttribute('hb_set_name');

        var _config;
        for (var i = 0, len = configs.length; i < len; i++) {
            _config = configs[i];
            if(_config.title.prop.name === propName) {
                _config.model.event(e);
            }
        }
    };

    event(e) {
        var eventType = e.target.name;
        this._event[eventType]();
    };

    render() {
        var prop = this.prop;
        var eventDetect = this.eventDetect;

        var render = {
            element: 'div',
            attr: {
                class: CSS.setting_div
            },
            child: [{
                    element: 'div',
                    attr: {
                        class: CSS.setting_title_div
                    },
                    child: [{
                        element: prop.title.element,
                        attr: {
                            name: prop.title.prop.name,
                            class: CSS.setting_title_label
                        },
                        text: prop.title.prop.title
                    }]
                },
                {
                    element: 'div',
                    attr: {
                        class: CSS.setting_content_div
                    },
                    child: []
                }
            ]
        };

        var _content = null;
        for (var i = 0, len = prop.content.length; i < len; i++) {
            _content = prop.content[i];

            render.child[1].child.push({
                element: _content.element,
                attr: {
                    name: _content.prop.name,
                    class: _content.prop.class,
                    hb_set_name: _content.prop.hb_set_name
                },
                text: _content.prop.title,
                event: [{
                    type: 'click',
                    func: eventDetect
                }]
            })
        };
        return render;
    };
};

module.exports = setting;