const CSS = require('../config/css');
const Property = require('./property');

class PropertyTextAppend extends Property {
    event(e) {
        if (this.selected) {
            var selected = this.selected.dom;
            var eventDom = e.target;

            if (eventDom.value) {
                if (selected.firstChild) {
                    if (selected.firstChild.nodeType != Node.TEXT_NODE) {
                        selected.insertBefore(document.createTextNode(eventDom.value), selected.firstChild);
                    } else {
                        selected.firstChild.textContent = eventDom.value;
                    }
                } else {
                    selected.insertBefore(document.createTextNode(eventDom.value), selected.firstChild);
                }
            }

            if (this.callback && typeof this.callback === 'function') {
                this.callback();
            }
        }
    };

    update(prop) {
        var valueDom = this.dom.querySelector('[hb_set_type=value]');

        if(prop.text) {
            valueDom.value = prop.text;
        } else {
            valueDom.value = '';
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
            child: [{ //div for title
                element: 'div',
                attr: {
                    class: CSS.prop_body_title_div
                },
                child: [{
                    element: 'label',
                    attr: {
                        class: CSS.prop_body_title_label
                    },
                    text: prop.title
                }]
            },

            { //div for property set
                element: 'div',
                attr: {
                    class: CSS.prop_body_set_div
                },
                child: [{
                    element: 'input',
                    attr: {
                        type: 'text',
                        class: CSS.prop_body_set_text,
                        hb_set_type: 'value',
                        hb_set_prop_name: prop.name
                    },
                    event: [{
                        type: 'change',
                        func: eventDetect
                    }]
                }]
            }
            ]
        };
    };
};

module.exports = PropertyTextAppend;