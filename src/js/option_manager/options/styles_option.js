/* 
    1. style content
        1. display
        2. positon - top, bottom, left, right
        3. float
        4. width, height
        5. margin - top, bottom, left, right
        6. padding - top, bottom, left, right
        7. font - color, font-weight
        8. border
        10. background 
        11. background image
    
    2. stye category
        1. position
        2. size
        3. font
        4. border
        5. background

    3. events - 어떻게 처리 할까? 해당 이벤트 view 만드는걸 여기에 만들까?
        1. saveEvent
        2. toggle

    4. preset 통일
*/
const category_builder = {


};

const category = [{
        name: 'position',
        title: 'Position'
    },

    {
        name: 'size',
        title: 'Size'
    },

    {
        name: 'font',
        title: 'Font'
    },

    {
        name: 'border',
        title: 'Border'
    },

    {
        name: 'background',
        title: 'Background'
    }
];

const list = [
    //Display
    {
        name: 'display',
        title: 'Display',
        type: 'select',
        options: ['', 'block', 'inline', 'inline-block', 'none'],
        units: [],
        category: 'position'
    },

    //Position
    {
        name: 'position',
        title: 'Position',
        type: 'select',
        options: ['', 'static', 'relative', 'absolute'],
        units: [],
        category: 'position'
    },

    {
        name: 'left',
        title: 'Left',
        type: 'text',
        units: ['px', '%', 'cm', 'mm', 'in'],
        category: 'position'
    },

    {
        name: 'right',
        title: 'Right',
        type: 'text',
        units: ['px', '%', 'cm', 'mm', 'in'],
        category: 'position'
    },

    {
        name: 'top',
        title: 'Top',
        type: 'text',
        units: ['px', '%', 'cm', 'mm', 'in'],
        category: 'position'
    },

    {
        name: 'bottom',
        title: 'Bottom',
        type: 'text',
        units: ['px', '%', 'cm', 'mm', 'in'],
        category: 'position'
    },

    //Float
    {
        name: 'float',
        title: 'Float',
        type: 'text',
        units: [],
        category: 'position'
    },

    //Width, Height
    {
        name: 'width',
        title: 'Width',
        type: 'text',
        units: ['px', '%', 'cm', 'mm', 'in'],
        category: 'size'
    },

    {
        name: 'height',
        title: 'Height',
        type: 'text',
        units: ['px', '%', 'cm', 'mm', 'in'],
        category: 'size'
    },

    //Margin
    {
        name: 'margin',
        title: 'Margin',
        type: 'text',
        units: ['px', 'cm', 'mm', 'in'],
        category: 'size',
        sub_category: [{
                name: 'margin-top',
                title: 'Margin Top',
                type: 'text',
                units: ['px', 'cm', 'mm', 'in'],
                category: 'size'
            },

            {
                name: 'margin-bottom',
                title: 'Margin bottom',
                type: 'text',
                units: ['px', 'cm', 'mm', 'in'],
                category: 'size'
            },

            {
                name: 'margin-left',
                title: 'Margin Left',
                type: 'text',
                units: ['px', 'cm', 'mm', 'in'],
                category: 'size'
            },

            {
                name: 'margin-right',
                title: 'Margin Right',
                type: 'text',
                units: ['px', 'cm', 'mm', 'in'],
                category: 'size'
            }
        ]
    },

    //Padding
    {
        name: 'padding',
        title: 'Padding',
        type: 'text',
        units: ['px', 'cm', 'mm', 'in'],
        category: 'size',
        sub_category: [{
                name: 'padding-top',
                title: 'Padding Top',
                type: 'text',
                units: ['px', 'cm', 'mm', 'in'],
                category: 'size'
            },

            {
                name: 'padding-bottom',
                title: 'Padding Bottom',
                type: 'text',
                units: ['px', 'cm', 'mm', 'in'],
                category: 'size'
            },

            {
                name: 'padding-left',
                title: 'Padding Left',
                type: 'text',
                units: ['px', 'cm', 'mm', 'in'],
                category: 'size'
            },

            {
                name: 'padding-right',
                title: 'Padding Right',
                type: 'text',
                units: ['px', 'cm', 'mm', 'in'],
                category: 'size'
            }
        ]
    },

    //Font
    {
        name: 'color',
        title: 'Color',
        type: 'color',
        units: [],
        category: 'font'
    },

    {
        name: 'font-weight',
        title: 'Font weight',
        type: 'select',
        options: ['', 'normal', 'bold', 'bolder', 'lighter', 'initial', 'inherit'],
        units: [],
        category: 'font'
    },

    //Border
    {
        name: 'border-width',
        title: 'Border width',
        type: 'text',
        units: ['px', 'cm', 'mm', 'in'],
        category: 'border',
        sub_category: [{
                name: 'border-left-width',
                title: 'Border left width',
                type: 'text',
                units: ['px', 'cm', 'mm', 'in'],
                category: 'border'
            },

            {
                name: 'border-right-width',
                title: 'Border right width',
                type: 'text',
                units: ['px', 'cm', 'mm', 'in'],
                category: 'border'
            },

            {
                name: 'border-top-width',
                title: 'Border top width',
                type: 'text',
                units: ['px', 'cm', 'mm', 'in'],
                category: 'border'
            },

            {
                name: 'border-bottom-width',
                title: 'Border bottom width',
                type: 'text',
                units: ['px', 'cm', 'mm', 'in'],
                category: 'border'
            }
        ]
    },

    {
        name: 'border-color',
        title: 'Border color',
        type: 'color',
        units: [],
        category: 'border',
        sub_category: [{
                name: 'border-left-color',
                title: 'Border left color',
                type: 'color',
                units: [],
                category: 'border'
            },

            {
                name: 'border-right-color',
                title: 'Border right color',
                type: 'color',
                units: [],
                category: 'border'
            },

            {
                name: 'border-top-color',
                title: 'Border top color',
                type: 'color',
                units: [],
                category: 'border'
            },

            {
                name: 'border-bottom-color',
                title: 'Border bottom color',
                type: 'color',
                units: [],
                category: 'border'
            }
        ]
    },

    {
        name: 'border-style',
        title: 'Border style',
        type: 'select',
        options: ['', 'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial', 'inherit'],
        units: [],
        category: 'border',
        sub_category: [{
                name: 'border-left-style',
                title: 'Border left style',
                type: 'select',
                options: ['', 'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial', 'inherit'],
                units: [],
                category: 'border'
            },

            {
                name: 'border-right-style',
                title: 'Border right style',
                type: 'select',
                options: ['', 'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial', 'inherit'],
                units: [],
                category: 'border'
            },

            {
                name: 'border-top-style',
                title: 'Border top style',
                type: 'select',
                options: ['', 'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial', 'inherit'],
                units: [],
                category: 'border'
            },

            {
                name: 'border-bottom-style',
                title: 'Border bottom style',
                type: 'select',
                options: ['', 'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial', 'inherit'],
                units: [],
                category: 'border'
            }
        ]
    },

    //Background
    {
        name: 'background',
        title: 'background',
        type: 'text',
        units: [],
        category: 'background'
    },

    {
        name: 'background-color',
        title: 'background-color',
        type: 'color',
        units: [],
        category: 'background'
    },

    //Background Image
    {
        name: 'background-image',
        title: 'background-image',
        type: 'text',
        units: [],
        category: 'background'
    },

    {
        name: 'background-repeat',
        title: 'background-repeat',
        type: 'select',
        options: ['', 'repeat', 'repeat-x', 'repeat-y', 'no-repeat'],
        units: [],
        category: 'background'
    },

    {
        name: 'background-size',
        title: 'background-size',
        type: 'select',
        options: ['', 'auto', 'cover', 'contain'],
        units: [],
        category: 'background'
    }
];

module.exports = {
    category: category,
    list: styles
};