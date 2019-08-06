const CSS = require('../config/css');
const Property = require('./property');

class PropertyTable extends Property {
    event(e) {
        var eventType = e.target.getAttribute('hb_set_event_type');
        var target = e.target;
        var prop = this.property;

        var selected = this.selected.dom;

        if(prop.table) {
            prop.table = {col: null, row: null};
        }

        if (eventType === 'row') {
            prop.table.row = target.value;
        } else {
            prop.table.col = target.value;
        }

        if(prop.table.row != null && prop.table.col != null) {
            //selected
        }
    };

    update(prop) {
        var prop = this.property;
        if(prop.table) {
            prop.table = {col: null, row: null};
        }

    };

    render() {
        var prop = this.property;
        var eventDetect = super.eventDetect;

        return {
            element: 'div',
            attr: {
                class: CSS.prop_body_div
            },
            child: [{
                element: 'div',
                attr: {
                    class: CSS.prop_body_set_div
                },
                child: [{
                        element: 'label',
                        attr: {
                            class: CSS.prop_body_title_label
                        },
                        text: 'Row'
                    },
                    {
                        element: 'input',
                        attr: {
                            type: 'number',
                            class: CSS.prop_body_set_text,
                            hb_set_type: 'row'
                        },
                        event: [{
                            type: 'change',
                            func: eventDetect
                        }]
                    },
                    {
                        element: 'label',
                        attr: {
                            class: CSS.prop_body_title_label
                        },
                        text: 'Column'
                    },
                    {
                        element: 'input',
                        attr: {
                            type: 'number',
                            class: CSS.prop_body_set_text,
                            hb_set_type: 'column'
                        },
                        event: [{
                            type: 'change',
                            func: eventDetect
                        }]
                    }
                ]
            }]
        };
    };
};

module.exports = PropertyTable;