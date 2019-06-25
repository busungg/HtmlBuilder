class Layout {
    constructor() {
        this._info = {
            layoutId: null,
            parentLayoutId: null,
            elementType: null
        };

        this._pos = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };

        this._child = [];
        this._prop = {
            prop: null, //All property not included style, class
            style: null,
            class: null
        };

        this._dom = null;
    };

    set info(_info) {
        this._info = _info;
    };

    get info() {
        return this._info;
    };

    set pos(_pos) {
        this._pos = _pos;
    };

    get pos() {
        return this._pos;
    };

    set child(_child) {
        this._child = _child;
    };

    get child() {
        return this._child;
    };

    set prop(_prop) {
        this._prop = _prop;
    };

    get prop() {
        return this._prop;
    }

    set dom(_dom) {
        this._dom = _dom;
    };

    get dom() {
        return this._dom;
    }

    initCss() {
        try {
            var dom = this._dom;
            if (dom) {
                dom.classList.remove('hb_border-contain');
                dom.classList.remove('hb_border-top-contain');
                dom.classList.remove('hb_border-top-move');
                dom.classList.remove('hb_border-bottom-move');
                dom.classList.remove('hb_border-left-move');
                dom.classList.remove('hb_border-right-move');
            }
        } catch (err) {
            console.log(err);
        }
    };

    contain(x, y) {
        try {
            if (this._info.elementType !== 'div') {
                return false;
            }

            var pos = this._pos;

            if (pos.x <= x && x <= (pos.x + pos.width) &&
                pos.y <= y && y <= (pos.y + pos.height)) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            console.log(err);
        }
    };

    copy() {
        var copiedLayout = new Layout();
        copiedLayout._info.layoutId = this._info.layoutId;
        copiedLayout._info.parentLayoutId = this._info.parentLayoutId;
        copiedLayout._info.elementType = this._info.elementType;

        copiedLayout._pos.x = this._pos.x;
        copiedLayout._pos.y = this._pos.y;
        copiedLayout._pos.width = this._pos.width;
        copiedLayout._pos.height = this._pos.height;

        copiedLayout._prop.prop = this._prop.prop;
        copiedLayout._prop.style = this._prop.style;
        copiedLayout._prop.class = this._prop.class;
        return copiedLayout;
    };
};

module.exports = Layout;