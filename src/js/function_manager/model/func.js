class Func {
    constructor() {
        this._pos = {
            x: 0,
            y: -100
        }
        this._dom = null;
        this._class = 'hb_func-menu';
        this._event = {
            eventDelete: null,
            eventCopy: null
        }
    };

    set dom(_dom) {
        this._dom = _dom;
    };

    get dom() {
        return this._dom;
    };

    set event(_event) {
        this._event = _event;
    };

    setPos(x, y) {
        this._pos.x = x;
        this._pos.y = y;

        this.dom.setAttribute('style', 'position: absolute; left: ' + this._pos.x + 'px; top: ' + this._pos.y + 'px;');
    };

    eventDetect(e) {
        switch (e.target.getAttribute('hb_func_evnt_typ')) {
            case 'delete':
                this._event.eventDelete(e);
                break;

            case 'copy':
                this._event.eventCopy(e);
                break;
        }
    };

    /*
        delete
        {
            type: 'click',
            func: function () {
                U.deleteBlock();
                U.updateLayout(U.contentLayout);
                U.setFunctionBlock();
                U.draggableMenuBlock(true);
                U.showBlockAttr(false);
            }
        }
    */

    /* 
        copy
        {
            type: 'click',
            func: function () {
                U.copyBlock(U.selectedLayout.parentLayoutId, U.selectedLayout.id);
                U.updateLayout(U.contentLayout);
                U.setFunctionBlock();
                U.draggableMenuBlock(true);
                U.showBlockAttr(false);
            }
        }
    */

    render() {
        var _render = {
            element: 'div',
            attr: {
                style: 'position: absolute; left: ' + this._pos.x + 'px; top: ' + this._pos.y + 'px;',
                class: this._class
            },
            child: [
                {
                    element: 'button',
                    attr: {
                        class: 'hb_btn-func hb_btn-delete',
                        hb_func_evnt_typ: 'delete'
                    },
                    event: [
                        {
                            type: 'click',
                            func: this.eventDetect
                        }
                    ]
                },
                {
                    element: 'button',
                    attr: {
                        class: 'hb_btn-func hb_btn-copy',
                        hb_func_evnt_typ: 'copy'
                    },
                    event: [
                        {
                            type: 'click',
                            func: this.eventDetect
                        }
                    ]
                }
            ]
        };
        return _render;
    }
};

module.exports = Func;