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
    {
        name: 'table',
        title: 'Table'
    },
    {
        name: 'extra',
        title: 'Extra'
    }
];

const configs = [
    //section
    {
        title: 'Header',
        component: {
            element: 'header',
            attrs: {
                class: ['block_half', 'block_border-basic', 'block_padding-10px', 'block_margin-10px']
            },
            canHaveChild: true
        },
        icon: 'hb_btn-div',
        category: 'section'
    },
    {
        title: 'Main',
        component: {
            element: 'main',
            attrs: {
                class: ['block_half', 'block_border-basic', 'block_padding-10px', 'block_margin-10px']
            },
            canHaveChild: true
        },
        icon: 'hb_btn-div',
        category: 'section'
    },
    {
        title: 'Footer',
        component: {
            element: 'footer',
            attrs: {
                class: ['block_half', 'block_border-basic', 'block_padding-10px', 'block_margin-10px']
            },
            canHaveChild: true
        },
        icon: 'hb_btn-div',
        category: 'section'
    },
    {
        title: 'Article',
        component: {
            element: 'article',
            attrs: {
                class: ['block_half', 'block_border-basic', 'block_padding-10px', 'block_margin-10px']
            },
            canHaveChild: true
        },
        icon: 'hb_btn-div',
        category: 'section'
    },
    {
        title: 'Section',
        component: {
            element: 'section',
            attrs: {
                class: ['block_half', 'block_border-basic', 'block_padding-10px', 'block_margin-10px']
            },
            canHaveChild: true
        },
        icon: 'hb_btn-div',
        category: 'section'
    },
    {
        title: 'Div',
        component: {
            element: 'div',
            attrs: {
                class: ['block_half', 'block_border-basic', 'block_padding-10px', 'block_margin-10px']
            },
            canHaveChild: true
        },
        icon: 'hb_btn-div',
        category: 'section'
    },

    //title
    {
        title: 'h1',
        component: {
            element: 'h1',
            attrs: {
                class: ['block_border-basic']
            },
            text: 'h1 element text',
            canHaveChild: false
        },
        icon: 'hb_btn-h',
        category: 'title'
    },
    {
        title: 'h2',
        component: {
            element: 'h2',
            attrs: {
                class: ['block_border-basic']
            },
            text: 'h2 element text',
            canHaveChild: false
        },
        icon: 'hb_btn-h',
        category: 'title'
    },
    {
        title: 'h3',
        component: {
            element: 'h3',
            attrs: {
                class: ['block_border-basic']
            },
            text: 'h3 element text',
            canHaveChild: false
        },
        icon: 'hb_btn-h',
        category: 'title'
    },
    {
        title: 'h4',
        component: {
            element: 'h4',
            attrs: {
                class: ['block_border-basic']
            },
            text: 'h4 element text',
            canHaveChild: false
        },
        icon: 'hb_btn-h',
        category: 'title'
    },
    {
        title: 'h5',
        component: {
            element: 'h5',
            attrs: {
                class: ['block_border-basic']
            },
            text: 'h5 element text',
            canHaveChild: false
        },
        icon: 'hb_btn-h',
        category: 'title'
    },
    {
        title: 'h6',
        component: {
            element: 'h6',
            attrs: {
                class: ['block_border-basic']
            },
            text: 'h6 element text',
            canHaveChild: false
        },
        icon: 'hb_btn-h',
        category: 'title'
    },

    //form
    {
        title: 'Form',
        component: {
            element: 'form',
            attrs: {
                class: ['block_half', 'block_border-basic', 'block_padding-10px', 'block_margin-10px'],
                action: 'javascript:void(0);'
            },
            canHaveChild: true
        },
        icon: 'hb_btn-div',
        category: 'form'
    },
    {
        title: 'FieldSet',
        component: {
            element: 'fieldset',
            attrs: {
                class: ['block_half', 'block_border-basic', 'block_padding-10px', 'block_margin-10px']
            },
            canHaveChild: true
        },
        icon: 'hb_btn-div',
        category: 'form'
    },
    {
        title: 'Legend',
        component: {
            element: 'legend',
            attrs: {
                class: ['block_border-basic']
            },
            text: 'Legend element text',
            canHaveChild: false
        },
        icon: 'hb_btn-p',
        category: 'form'
    },
    {
        title: 'Input (Text)',
        component: {
            element: 'input',
            attrs: {
                type: 'text',
                class: ['block_border-basic', 'form-control']
            },
            canHaveChild: false
        },
        icon: 'hb_btn-input',
        category: 'form'
    },
    {
        title: 'Input (Number)',
        component: {
            element: 'input',
            attrs: {
                type: 'number',
                class: ['block_border-basic', 'form-control']
            },
            canHaveChild: false
        },
        icon: 'hb_btn-input',
        category: 'form'
    },
    {
        title: 'Select',
        component: {
            element: 'select',
            attrs: {
                class: ['block_select_half_25px', 'block_border-basic']
            },
            canHaveChild: false
        },
        icon: 'hb_btn-select',
        category: 'form'
    },
    {
        title: 'Button',
        component: {
            element: 'button',
            attrs: {
                class: ['block_border-basic', 'btn', 'btn-primary']
            },
            text: 'Button element text',
            canHaveChild: false
        },
        icon: 'hb_btn-button',
        category: 'form'
    },
    {
        title: 'Checkbox',
        component: {
            element: 'input',
            attrs: {
                type: 'checkbox',
                class: ['block_border-basic'],
                style: 'width:15px; height:15px;'
            },
            canHaveChild: false
        },
        icon: 'hb_btn-check-box',
        category: 'form'
    },
    {
        title: 'Radio',
        component: {
            element: 'input',
            attrs: {
                type: 'radio',
                class: ['block_border-basic'],
                style: 'width:15px; height:15px;'
            },
            canHaveChild: false
        },
        icon: 'hb_btn-radio',
        category: 'form'
    },
    {
        title: 'Label',
        component: {
            element: 'label',
            attrs: {
                class: ['block_border-basic']
            },
            text: 'Label element text',
            canHaveChild: false
        },
        icon: 'hb_btn-label',
        category: 'form'
    },
    {
        title: 'Text Area',
        component: {
            element: 'textarea',
            attrs: {
                class: ['block_border-basic', 'form-control']
            },
            canHaveChild: false
        },
        icon: 'hb_btn-text-area',
        category: 'form'
    },

    //text
    {
        title: 'P',
        component: {
            element: 'p',
            attrs: {
                class: ['block_border-basic']
            },
            text: 'P element text',
            canHaveChild: false
        },
        icon: 'hb_btn-p',
        category: 'text'
    },

    //image
    {
        title: 'Image',
        component: {
            element: 'img',
            attrs: {
                class: ['block_half', 'block_border-basic', 'img-thumbnail'],
                src: '../icon/img_thumbnail.jpg'
            },
            canHaveChild: false
        },
        icon: 'hb_btn-img',
        category: 'image'
    },

    //table
    {
        title: 'Table',
        component: {
            element: 'table',
            attrs: {
                class: ['block_half', 'block_margin-10px', 'table']
            },
            canHaveChild: false
        },
        icon: 'hb_btn-div',
        category: 'table'
    },
    
    //extra
    {
        title: 'Link',
        component: {
            element: 'a',
            attrs: {
                class: ['block_border-basic'],
                target: '_blank'
            },
            text: 'A element text',
            canHaveChild: false
        },
        icon: 'hb_btn-link',
        category: 'extra'
    }
];

export { category, configs };