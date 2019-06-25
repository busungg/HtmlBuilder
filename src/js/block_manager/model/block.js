class Block {
    constructor() {
        this._title = null;
        this._icon = null;
        this._option = null;
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
        this._option;
    };

    get option() {
        return this._option;
    };

    render() {
        var title = this._title;
        var icon = this._icon;

        var _render = {
            element: 'div',
            attr: {
                class: 'hb_btn-block hb_cursor-move',
                draggable: true
            },
            child: [
                {
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
            ]
        }

        return _render;
    }

};

module.exports = Block;