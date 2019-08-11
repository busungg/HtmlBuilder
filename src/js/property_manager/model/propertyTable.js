const CSS = require('../config/css');
const Property = require('./property');

class PropertyTable extends Property {
    event(e) {
        var selected = this.selected.dom;

        if (selected) {
            var eventType = e.target.getAttribute('hb_set_type');
            var target = e.target;
            var prop = this.property;

            if (!prop.table) {
                prop.table = {
                    col: null,
                    row: null
                };
            }

            if (eventType === 'row') {
                prop.table.row = target.value;
            } else {
                prop.table.col = target.value;
            }

            if (prop.table.row != null && prop.table.col != null) {
                while (selected.firstChild) {
                    selected.removeChild(selected.firstChild);
                }

                var tr, td;
                for (var i = 0; i < prop.table.row; i++) {
                    tr = document.createElement('tr');

                    for (var j = 0; j < prop.table.col; j++) {
                        td = document.createElement('td');
                        tr.appendChild(td);
                    }

                    selected.appendChild(tr);
                }
            }
        }
    };

    update(prop) {
        var prop = this.property;
        if (prop.table) {
            prop.table = {
                col: null,
                row: null
            };
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
                            hb_set_type: 'row',
                            hb_set_prop_name: prop.name
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
                            hb_set_type: 'column',
                            hb_set_prop_name: prop.name
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