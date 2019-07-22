//https://developer.mozilla.org/ko/docs/Web/HTML/Element 참고

const category = [{
        name: 'section',
        title: 'Section'
    },
    {
        name: 'title',
        title: 'Title'
    },
    {
        name: 'form',
        title: 'Form'
    },
    {
        name: 'text',
        title: 'Text'
    },
    {
        name: 'image',
        title: 'Image'
    },
    /*
    {
        name: 'table',
        title: 'Table'
    },
    */
    {
        name: 'extra',
        title: 'Extra'
    }
];

const configs = [
    //section
    {
        title: 'Header',
        option: {
            element: 'header',
            attrs: {
                class: ['block_half', 'block_border-basic', 'block_padding-10px', 'block_margin-10px']
            },
            isHave: true
        },
        icon: 'hb_btn-div',
        category: 'section'
    },
    {
        title: 'Main',
        option: {
            element: 'main',
            attrs: {
                class: ['block_half', 'block_border-basic', 'block_padding-10px', 'block_margin-10px']
            },
            isHave: true
        },
        icon: 'hb_btn-div',
        category: 'section'
    },
    {
        title: 'Footer',
        option: {
            element: 'footer',
            attrs: {
                class: ['block_half', 'block_border-basic', 'block_padding-10px', 'block_margin-10px']
            },
            isHave: true
        },
        icon: 'hb_btn-div',
        category: 'section'
    },
    {
        title: 'Article',
        option: {
            element: 'article',
            attrs: {
                class: ['block_half', 'block_border-basic', 'block_padding-10px', 'block_margin-10px']
            },
            isHave: true
        },
        icon: 'hb_btn-div',
        category: 'section'
    },
    {
        title: 'Section',
        option: {
            element: 'section',
            attrs: {
                class: ['block_half', 'block_border-basic', 'block_padding-10px', 'block_margin-10px']
            },
            isHave: true
        },
        icon: 'hb_btn-div',
        category: 'section'
    },
    {
        title: 'Div',
        option: {
            element: 'div',
            attrs: {
                class: ['block_half', 'block_border-basic', 'block_padding-10px', 'block_margin-10px']
            },
            isHave: true
        },
        icon: 'hb_btn-div',
        category: 'section'
    },

    //title
    {
        title: 'h1',
        option: {
            element: 'h1',
            attrs: {
                class: ['block_border-basic']
            },
            text: 'h1 element text',
            isHave: false
        },
        icon: 'hb_btn-h',
        category: 'title'
    },
    {
        title: 'h2',
        option: {
            element: 'h2',
            attrs: {
                class: ['block_border-basic']
            },
            text: 'h2 element text',
            isHave: false
        },
        icon: 'hb_btn-h',
        category: 'title'
    },
    {
        title: 'h3',
        option: {
            element: 'h3',
            attrs: {
                class: ['block_border-basic']
            },
            text: 'h3 element text',
            isHave: false
        },
        icon: 'hb_btn-h',
        category: 'title'
    },
    {
        title: 'h4',
        option: {
            element: 'h4',
            attrs: {
                class: ['block_border-basic']
            },
            text: 'h4 element text',
            isHave: false
        },
        icon: 'hb_btn-h',
        category: 'title'
    },
    {
        title: 'h5',
        option: {
            element: 'h5',
            attrs: {
                class: ['block_border-basic']
            },
            text: 'h5 element text',
            isHave: false
        },
        icon: 'hb_btn-h',
        category: 'title'
    },
    {
        title: 'h6',
        option: {
            element: 'h6',
            attrs: {
                class: ['block_border-basic']
            },
            text: 'h6 element text',
            isHave: false
        },
        icon: 'hb_btn-h',
        category: 'title'
    },

    //form
    {
        title: 'Form',
        option: {
            element: 'form',
            attrs: {
                class: ['block_half', 'block_border-basic', 'block_padding-10px', 'block_margin-10px'],
                action: 'javascript:void(0);'
            },
            isHave: true
        },
        icon: 'hb_btn-div',
        category: 'form'
    },
    {
        title: 'FieldSet',
        option: {
            element: 'fieldset',
            attrs: {
                class: ['block_half', 'block_border-basic', 'block_padding-10px', 'block_margin-10px']
            },
            isHave: true
        },
        icon: 'hb_btn-div',
        category: 'form'
    },
    {
        title: 'Legend',
        option: {
            element: 'legend',
            attrs: {
                class: ['block_border-basic']
            },
            text: 'Legend element text',
            isHave: false
        },
        icon: 'hb_btn-p',
        category: 'form'
    },
    {
        title: 'Input (Text)',
        option: {
            element: 'input',
            attrs: {
                type: 'text',
                class: ['block_border-basic', 'form-control']
            },
            isHave: false
        },
        icon: 'hb_btn-input',
        category: 'form'
    },
    {
        title: 'Input (Number)',
        option: {
            element: 'input',
            attrs: {
                type: 'number',
                class: ['block_border-basic', 'form-control']
            },
            isHave: false
        },
        icon: 'hb_btn-input',
        category: 'form'
    },
    {
        title: 'Select',
        option: {
            element: 'select',
            attrs: {
                class: ['block_select_half_25px', 'block_border-basic']
            },
            isHave: false
        },
        icon: 'hb_btn-select',
        category: 'form'
    },
    {
        title: 'Button',
        option: {
            element: 'button',
            attrs: {
                class: ['block_border-basic', 'btn', 'btn-primary']
            },
            text: 'Button element text',
            isHave: false
        },
        icon: 'hb_btn-button',
        category: 'form'
    },
    {
        title: 'Checkbox',
        option: {
            element: 'input',
            attrs: {
                type: 'checkbox',
                class: ['block_border-basic'],
                style: 'width:15px; height:15px;'
            },
            isHave: false
        },
        icon: 'hb_btn-check-box',
        category: 'form'
    },
    {
        title: 'Radio',
        option: {
            element: 'input',
            attrs: {
                type: 'radio',
                class: ['block_border-basic'],
                style: 'width:15px; height:15px;'
            },
            isHave: false
        },
        icon: 'hb_btn-radio',
        category: 'form'
    },
    {
        title: 'Label',
        option: {
            element: 'label',
            attrs: {
                class: ['block_border-basic']
            },
            text: 'Label element text',
            isHave: false
        },
        icon: 'hb_btn-label',
        category: 'form'
    },
    {
        title: 'Text Area',
        option: {
            element: 'textarea',
            attrs: {
                class: ['block_border-basic', 'form-control']
            },
            isHave: false
        },
        icon: 'hb_btn-text-area',
        category: 'form'
    },

    //text
    {
        title: 'P',
        option: {
            element: 'p',
            attrs: {
                class: ['block_border-basic']
            },
            text: 'P element text',
            isHave: false
        },
        icon: 'hb_btn-p',
        category: 'text'
    },

    //image
    {
        title: 'Image',
        option: {
            element: 'img',
            attrs: {
                class: ['block_half', 'block_border-basic', 'img-thumbnail'],
                src: '../icon/img_thumbnail.jpg'
            },
            isHave: false
        },
        icon: 'hb_btn-img',
        category: 'image'
    },

    //table
    /*
    {
        title: 'Table',
        option: {
            element: 'table',
            attrs: {
                class: ['block_half', 'block_margin-10px', 'table']
            },
            isHave: false
        },
        icon: 'hb_btn-div',
        category: 'table'
    },
    */

    //extra
    {
        title: 'Link',
        option: {
            element: 'a',
            attrs: {
                class: ['block_border-basic'],
                target: '_blank'
            },
            text: 'A element text',
            isHave: false
        },
        icon: 'hb_btn-link',
        category: 'extra'
    }
];

module.exports = {
    category: category,
    configs: configs
};