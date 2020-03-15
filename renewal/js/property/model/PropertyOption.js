const CSS = require('../config/css');
const Property = require('./property');

class PropertyOption extends Property {
    event(e) {
        var eventType = e.target.getAttribute('hb_set_event_type');

        if (eventType === 'add') {
            this.addEvent(e);
        } else {
            this.removeEvent(e);
        }
    };

    addEvent(e) {
        if (this.selected) {
            var selected = this.selected.dom;
            var valueDom = this.dom.querySelector('[hb_set_type=value]');
            var textDom = this.dom.querySelector('[hb_set_type=text]');
            var optionDom = this.dom.querySelector('[hb_set_type=option]');

            if (textDom.value != '') {
                //for option list of property 
                var option = document.createElement('option');
                if (valueDom.value) {
                    option.setAttribute('value', valueDom.value);
                }
                option.appendChild(document.createTextNode(textDom.value));
                optionDom.appendChild(option);

                //for option list of selected
                option = document.createElement('option');
                if (valueDom.value) {
                    option.setAttribute('value', valueDom.value);
                }
                option.appendChild(document.createTextNode(textDom.value));
                selected.appendChild(option);
            }

            if (this.callback && typeof this.callback === 'function') {
                this.callback();
            }
        }
    };

    removeEvent(e) {
        if (this.selected) {
            var selected = this.selected.dom;
            var optionDom = this.dom.querySelector('[hb_set_type=option]');

            for (var i = 0; i < optionDom.options.length; i++) {
                if (optionDom.options[i].selected == true) {
                    selected.removeChild(selected.options[i]);
                    optionDom.removeChild(optionDom.options[i]);
                    i--;
                }
            }

            if (this.callback && typeof this.callback === 'function') {
                this.callback();
            }
        }
    };

    update(prop) {
        optionDom = this.dom.querySelector('[hb_set_type=option]');

        if (prop.option.length == 0) {
            while (optionDom.options.length != 0) {
                optionDom.options[0].remove();
            }
        } else {
            while (optionDom.options.length != 0) {
                optionDom.options[0].remove();
            }

            var option;
            for (var i = 0, len = prop.option.length; i < len; i++) {
                option = document.createElement('option');
                if (prop.option[i].value) {
                    option.setAttribute('value', prop.option[i].value);
                }
                option.appendChild(document.createTextNode(prop.option[i].text));

                optionDom.appendChild(option);
            }
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
                            element: 'label',
                            attr: {
                                class: CSS.prop_body_set_text
                            },
                            text: 'Value'
                        },
                        {
                            element: 'input',
                            attr: {
                                type: 'text',
                                class: CSS.prop_body_set_text,
                                hb_set_type: 'value'
                            }
                        },
                        {
                            element: 'label',
                            attr: {
                                class: CSS.prop_body_set_text
                            },
                            text: 'Text'
                        },
                        {
                            element: 'input',
                            attr: {
                                type: 'text',
                                class: CSS.prop_body_set_text,
                                hb_set_type: 'text'
                            }
                        },
                        {
                            element: 'button',
                            attr: {
                                class: CSS.prop_body_set_btn,
                                title: 'Add option',
                                hb_set_prop_name: prop.name,
                                hb_set_event_type: 'add'
                            },
                            text: 'Add option',
                            event: [{
                                type: 'click',
                                func: eventDetect
                            }]
                        },
                        {
                            element: 'button',
                            attr: {
                                class: CSS.prop_body_set_btn,
                                title: 'Delete option',
                                hb_set_prop_name: prop.name,
                                hb_set_event_type: 'delete'
                            },
                            text: 'Delete option',
                            event: [{
                                type: 'click',
                                func: eventDetect
                            }]
                        },
                        {
                            element: 'select',
                            attr: {
                                class: CSS.prop_body_set_multi_select,
                                multiple: true,
                                hb_set_type: 'option'
                            }
                        }
                    ]
                }
            ]
        };
    };
};

module.exports = PropertyOption;