/*
    1. block 종류
    - Basic
    1) Div
    2) P
    
    - Forms
    1) Input(Text)
    2) Input(Number)
    3) Text Area
    4) Link
    5) Image
    6) Select
    7) Button
    8) Label
    9) Checkbox
    10) Radio
*/
module.exports = [
    {
        title: 'Div',
        element: 'div',
        attrs: {
            class: ['block_half', 'block_border-basic', 'block_padding-10px', 'block_margin-10px']  
        },
        icon: 'hb_btn-div'
    },
    {
        title: 'P',
        element: 'p',
        attrs: {
            class: ['block_border-basic']  
        },
        text: 'P element text',
        icon: 'hb_btn-p'
    },
    {
        title: 'Input (Text)',
        element: 'input',
        attrs: {
        type: 'text',
            class: ['block_border-basic', 'form-control']
        },
        icon: 'hb_btn-input'
    },
    {
        title: 'Input (Number)',
        element: 'input',
        attrs: {
        type: 'number',
            class: ['block_border-basic', 'form-control']  
        },
        icon: 'hb_btn-input'
    },
    {
        title: 'Text Area',
        element: 'textarea',
        attrs: {
            class: ['block_border-basic', 'form-control']  
        },
        icon: 'hb_btn-text-area'
    },
    {
        title: 'Link',
        element: 'a',
        attrs: {
            class: ['block_border-basic'],
            target: '_blank'
        },
        text: 'A element text',
        icon: 'hb_btn-link'
    },
    {
        title: 'Image',
        element: 'img',
        attrs: {
            class: ['block_half', 'block_border-basic', 'img-thumbnail']  
        },
        icon: 'hb_btn-img'
    },
    {
        title: 'Select',
        element: 'select',
        attrs: {
            class: ['block_select_half_25px', 'block_border-basic']  
        },
        icon: 'hb_btn-select'
    },
    {
        title: 'Button',
        element: 'button',
        attrs: {
            class: ['block_border-basic', 'btn', 'btn-primary']  
        },
        text: 'Button element text',
        icon: 'hb_btn-button'
    },
    {
        title: 'Label',
        element: 'label',
        attrs: {
            class: ['block_border-basic']  
        },
        text: 'Label element text',
        icon: 'hb_btn-label'
    },
    {
        title: 'Checkbox',
        element: 'input',
        attrs: {
        type: 'checkbox',
            class: ['block_border-basic'],
            style: 'width:15px; height:15px;'
        },
        icon: 'hb_btn-check-box'
    },
    {
        title: 'Radio',
        element: 'input',
        attrs: {
        type: 'radio',
            class: ['block_border-basic'],  
            style: 'width:15px; height:15px;'
        },
        icon: 'hb_btn-radio'
    }
];