const config = require('../config/config');

class Block {
    constructor() {
        this._title = null;
        this._icon = null;
        this._option = null;

        /*
            {
                mousedown: null,
                drag: null,
                dragend: null
            }
        */
        this._event = null;
        this._dom = null;
    };

    set title(_title) {
        this._title = _title;
    };

    get title() {
        return this._title;
    };

    set icon(_icon) {
        this._icon = _icon;
    };

    get icon() {
        return this._icon;
    };

    set option(_option) {
        this._option = _option;
    };

    get option() {
        return this._option;
    };

    set dom(_dom) {
        this._dom = _dom;
    }

    get dom() {
        return this._dom;
    }

    setEvent(_event) {
        this._event = _event;
    };

    eventDetect(e) {
        var _config;
        for (var i = 0, len = config.configs.length; i < len; i++) {
            _config = config.configs[i];
            if (_config.model.dom === e.target) {
                _config.model.event(e);
            }
        }
    };

    event(e, option) {
        if (this._event) {
            this._event[e.type](e, this._option);
        }
    }

    render() {
        var title = this._title;
        var icon = this._icon;

        var _render = {
            element: 'div',
            attr: {
                class: 'hb_btn-block hb_cursor-move',
                draggable: true
            },
            child: [{
                    element: 'div',
                    attr: {
                        class: 'hb_img ' + icon
                    }
                },
                {
                    element: 'div',
                    attr: {
                        class: 'hb_lbl'
                    },
                    text: title
                }
            ],
            event: [{
                    type: 'mousedown',
                    func: this.eventDetect
                },
                {
                    type: 'drag',
                    func: this.eventDetect
                },
                {
                    type: 'dragend',
                    func: this.eventDetect
                }
            ]
        }

        return _render;
    };

};

module.exports = Block;