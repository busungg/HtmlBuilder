/**
    Default Attr configs
**/

const category = [{
  name: 'common',
  title: 'Common'
},

{
  name: 'src',
  title: 'Src'
},

{
  name: 'href',
  title: 'Href'
},

{
  name: 'style2css',
  title: 'Style to CSS'
},

{
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

/**
 * type 종류
 * 
 * 1. text
 * 2. text-unit (units 필요)
 *   -> auto는 예외처리
 * 3. text-button
 *   -> save button
 * 4. select (options 필요)
 *   -> option
 * 5. color
 * 6. obj -> builder
 **/

const configs = [
  //For attributes
  {
    name: 'id',
    title: 'Id',
    type: 'text',
    attr_type: 'attr',
    category: 'common'
  },

  {
    name: 'name',
    title: 'Name',
    type: 'text',
    attr_type: 'attr',
    category: 'common'
  },

  {
    name: 'title',
    title: 'Title',
    type: 'text',
    attr_type: 'attr',
    category: 'common'
  },

  {
    name: 'text',
    title: 'Text',
    type: 'text',
    attr_type: 'attr',
    category: 'common'
  },

  {
    name: 'value',
    title: 'Value',
    type: 'text',
    attr_type: 'attr',
    category: 'common'
  },

  {
    name: 'src',
    title: 'Src',
    type: 'text',
    attr_type: 'attr',
    category: 'src'
  },

  {
    name: 'href',
    title: 'Href',
    type: 'text',
    attr_type: 'attr',
    category: 'href'
  },

  {
    name: 'class',
    title: 'Class',
    type: {

    },
    attr_type: 'attr',
    category: 'common'
  },

  {
    name: 'style2css',
    title: 'Style to CSS',
    type: 'text-button',
    attr_type: 'exception',
    category: 'style2css'
  },

  // For styles
  //Display
  {
    name: 'display',
    title: 'Display',
    attr_type: 'style',
    type: 'select',
    options: ['', 'block', 'inline', 'inline-block', 'none'],
    category: 'position'
  },

  //Position
  {
    name: 'position',
    title: 'Position',
    attr_type: 'style',
    type: 'select',
    options: ['', 'static', 'relative', 'absolute'],
    category: 'position'
  },

  {
    name: 'left',
    title: 'Left',
    attr_type: 'style',
    type: 'text-unit',
    units: ['px', '%', 'cm', 'mm', 'in'],
    category: 'position'
  },

  {
    name: 'right',
    title: 'Right',
    attr_type: 'style',
    type: 'text-unit',
    units: ['px', '%', 'cm', 'mm', 'in'],
    category: 'position'
  },

  {
    name: 'top',
    title: 'Top',
    attr_type: 'style',
    type: 'text-unit',
    units: ['px', '%', 'cm', 'mm', 'in'],
    category: 'position'
  },

  {
    name: 'bottom',
    title: 'Bottom',
    attr_type: 'style',
    type: 'text-unit',
    units: ['px', '%', 'cm', 'mm', 'in'],
    category: 'position'
  },

  //Float
  {
    name: 'float',
    title: 'Float',
    attr_type: 'style',
    type: 'text',
    category: 'position'
  },

  //Width, Height
  {
    name: 'width',
    title: 'Width',
    attr_type: 'style',
    type: 'text-unit',
    units: ['%', 'px', 'auto', 'cm', 'mm', 'in'],
    category: 'size'
  },

  {
    name: 'height',
    title: 'Height',
    attr_type: 'style',
    type: 'text-unit',
    units: ['%', 'px', 'auto', 'cm', 'mm', 'in'],
    category: 'size'
  },

  //Margin
  {
    name: 'margin',
    title: 'Margin',
    attr_type: 'style',
    type: 'text-unit',
    units: ['px', 'cm', 'mm', 'in'],
    category: 'size',
    child: [{
      name: 'margin-top',
      title: 'Margin Top',
      attr_type: 'style',
      type: 'text-unit',
      units: ['px', 'cm', 'mm', 'in']
    },

    {
      name: 'margin-bottom',
      title: 'Margin bottom',
      attr_type: 'style',
      type: 'text-unit',
      units: ['px', 'cm', 'mm', 'in']
    },

    {
      name: 'margin-left',
      title: 'Margin Left',
      attr_type: 'style',
      type: 'text-unit',
      units: ['px', 'cm', 'mm', 'in']
    },

    {
      name: 'margin-right',
      title: 'Margin Right',
      attr_type: 'style',
      type: 'text-unit',
      units: ['px', 'cm', 'mm', 'in']
    }
    ]
  },

  //Padding
  {
    name: 'padding',
    title: 'Padding',
    attr_type: 'style',
    type: 'text-unit',
    units: ['px', 'cm', 'mm', 'in'],
    category: 'size',
    child: [{
      name: 'padding-top',
      title: 'Padding Top',
      attr_type: 'style',
      type: 'text-unit',
      units: ['px', 'cm', 'mm', 'in']
    },

    {
      name: 'padding-bottom',
      title: 'Padding Bottom',
      attr_type: 'style',
      type: 'text-unit',
      units: ['px', 'cm', 'mm', 'in']
    },

    {
      name: 'padding-left',
      title: 'Padding Left',
      attr_type: 'style',
      type: 'text-unit',
      units: ['px', 'cm', 'mm', 'in']
    },

    {
      name: 'padding-right',
      title: 'Padding Right',
      attr_type: 'style',
      type: 'text-unit',
      units: ['px', 'cm', 'mm', 'in']
    }
    ]
  },

  //Font
  {
    name: 'color',
    title: 'Color',
    attr_type: 'style',
    type: 'color',
    units: [],
    category: 'font'
  },

  {
    name: 'font-weight',
    title: 'Font weight',
    attr_type: 'style',
    type: 'select',
    options: ['', 'normal', 'bold', 'bolder', 'lighter', 'initial', 'inherit'],
    category: 'font'
  },

  //Border
  {
    name: 'border-width',
    title: 'Border width',
    attr_type: 'style',
    type: 'text-unit',
    units: ['px', 'cm', 'mm', 'in'],
    category: 'border',
    child: [{
      name: 'border-left-width',
      title: 'Border left width',
      attr_type: 'style',
      type: 'text-unit',
      units: ['px', 'cm', 'mm', 'in']
    },

    {
      name: 'border-right-width',
      title: 'Border right width',
      attr_type: 'style',
      type: 'text-unit',
      units: ['px', 'cm', 'mm', 'in']
    },

    {
      name: 'border-top-width',
      title: 'Border top width',
      attr_type: 'style',
      type: 'text-unit',
      units: ['px', 'cm', 'mm', 'in']
    },

    {
      name: 'border-bottom-width',
      title: 'Border bottom width',
      attr_type: 'style',
      type: 'text-unit',
      units: ['px', 'cm', 'mm', 'in']
    }
    ]
  },

  {
    name: 'border-color',
    title: 'Border color',
    attr_type: 'style',
    type: 'color',
    category: 'border',
    child: [{
      name: 'border-left-color',
      title: 'Border left color',
      attr_type: 'style',
      type: 'color'
    },

    {
      name: 'border-right-color',
      title: 'Border right color',
      attr_type: 'style',
      type: 'color'
    },

    {
      name: 'border-top-color',
      title: 'Border top color',
      attr_type: 'style',
      type: 'color'
    },

    {
      name: 'border-bottom-color',
      title: 'Border bottom color',
      attr_type: 'style',
      type: 'color'
    }
    ]
  },

  {
    name: 'border-style',
    title: 'Border style',
    attr_type: 'style',
    type: 'select',
    options: ['', 'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial', 'inherit'],
    category: 'border',
    child: [{
      name: 'border-left-style',
      title: 'Border left style',
      attr_type: 'style',
      type: 'select',
      options: ['', 'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial', 'inherit']
    },

    {
      name: 'border-right-style',
      title: 'Border right style',
      attr_type: 'style',
      type: 'select',
      options: ['', 'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial', 'inherit']
    },

    {
      name: 'border-top-style',
      title: 'Border top style',
      attr_type: 'style',
      type: 'select',
      options: ['', 'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial', 'inherit']
    },

    {
      name: 'border-bottom-style',
      title: 'Border bottom style',
      attr_type: 'style',
      type: 'select',
      options: ['', 'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial', 'inherit']
    }
    ]
  },

  //Background
  {
    name: 'background',
    title: 'Background',
    attr_type: 'style',
    type: 'text',
    category: 'background'
  },

  {
    name: 'background-color',
    title: 'Background color',
    attr_type: 'style',
    type: 'color',
    category: 'background'
  },

  //Background Image
  {
    name: 'background-image',
    title: 'Background image',
    attr_type: 'style',
    type: 'text',
    category: 'background'
  },

  {
    name: 'background-repeat',
    title: 'Background repeat',
    attr_type: 'style',
    type: 'select',
    options: ['', 'repeat', 'repeat-x', 'repeat-y', 'no-repeat'],
    category: 'background'
  },

  {
    name: 'background-size',
    title: 'Background size',
    attr_type: 'style',
    type: 'select',
    options: ['', 'auto', 'cover', 'contain'],
    category: 'background'
  }
];

module.exports = {
  category: category,
  configs: configs
};