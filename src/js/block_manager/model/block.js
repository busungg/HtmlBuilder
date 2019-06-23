var block = {

    /*
        title: 'radio',
        block.title != this.title 다르다.
    */

    t: null,

    setTitle: function (title) {
        this.title = title;

        this.t = title;
        block.t = title;
    },

    setIcon: function (icon) {
        this.icon = icon;
    },

    setOption: function (option) {
        this.option = option;
    },

    //event 필요
    //block option 을 제공

    render: function () {
        console.log('this.t : ' + this.t);
        console.log('block.t : ' + block.t);
        console.log(block);

        var title = this.title;
        var icon = this.icon;

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

module.exports = block;