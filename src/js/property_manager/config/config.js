/**
 * Default Attr configs
 */
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

const configs = [
  //For attributes
  {
    prop: {
      name: 'id',
      title: 'Id',
      attr_type: 'attr',
      category: 'common'
    },
    model_name: 'propertyText'
  },

  {
    prop: {
      name: 'name',
      title: 'Name',
      attr_type: 'attr',
      category: 'common'
    },
    model_name: 'propertyText'
  },

  {
    prop: {
      name: 'title',
      title: 'Title',
      attr_type: 'attr',
      category: 'common'
    },
    model_name: 'propertyText'
  },

  {
    prop: {
      name: 'text',
      title: 'Text',
      attr_type: 'attr',
      category: 'common'
    },
    model_name: 'propertyTextAppend'
  },

  {
    prop: {
      name: 'value',
      title: 'Value',
      attr_type: 'attr',
      category: 'common'
    },
    model_name: 'propertyText'
  },

  {
    prop: {
      name: 'src',
      title: 'Src',
      attr_type: 'attr',
      category: 'src'
    },
    model_name: 'propertyText'
  },

  {
    prop: {
      name: 'href',
      title: 'Href',
      attr_type: 'attr',
      category: 'href'
    },
    model_name: 'propertyText'
  },

  {
    prop: {
      name: 'class',
      title: 'Class',
      attr_type: 'attr',
      category: 'common'
    },
    model_name: 'propertyClass'
  },

  {
    prop: {
      name: 'option',
      title: 'Option',
      attr_type: 'attr',
      category: 'common'
    },
    model_name: 'propertyOption'
  },

  {
    prop: {
      name: 'style2css',
      title: 'Style to CSS',
      attr_type: 'style2css',
      category: 'style2css'
    },
    model_name: 'propertyStyle2Save'
  },

  // For styles
  //Display
  {
    prop: {
      name: 'display',
      title: 'Display',
      attr_type: 'style',
      options: ['', 'block', 'inline', 'inline-block', 'none'],
      category: 'position'
    },
    model_name: 'propertySelect'
  },

  //Position
  {
    prop: {
      name: 'position',
      title: 'Position',
      attr_type: 'style',
      options: ['', 'static', 'relative', 'absolute'],
      category: 'position'
    },
    model_name: 'propertySelect'
  },

  {
    prop: {
      name: 'left',
      title: 'Left',
      attr_type: 'style',
      units: ['px', '%', 'cm', 'mm', 'in'],
      category: 'position'
    },
    model_name: 'propertyTextUnit'
  },

  {
    prop: {
      name: 'right',
      title: 'Right',
      attr_type: 'style',
      units: ['px', '%', 'cm', 'mm', 'in'],
      category: 'position'
    },
    model_name: 'propertyTextUnit'
  },

  {
    prop: {
      name: 'top',
      title: 'Top',
      attr_type: 'style',
      units: ['px', '%', 'cm', 'mm', 'in'],
      category: 'position'
    },
    model_name: 'propertyTextUnit'
  },

  {
    prop: {
      name: 'bottom',
      title: 'Bottom',
      attr_type: 'style',
      units: ['px', '%', 'cm', 'mm', 'in'],
      category: 'position'
    },
    model_name: 'propertyTextUnit'
  },

  //Float
  {
    prop: {
      name: 'float',
      title: 'Float',
      attr_type: 'style',
      category: 'position'
    },
    model_name: 'propertyText'
  },

  //Width, Height
  {
    prop: {
      name: 'width',
      title: 'Width',
      attr_type: 'style',
      units: ['%', 'px', 'auto', 'cm', 'mm', 'in'],
      category: 'size'
    },
    model_name: 'propertyTextUnit'
  },

  {
    prop: {
      name: 'height',
      title: 'Height',
      attr_type: 'style',
      units: ['%', 'px', 'auto', 'cm', 'mm', 'in'],
      category: 'size'
    },
    model_name: 'propertyTextUnit'
  },

  //Margin
  {
    prop: {
      name: 'margin',
      title: 'Margin',
      attr_type: 'style',
      units: ['px', 'cm', 'mm', 'in'],
      category: 'size'
    },
    model_name: 'propertyTextUnit',
    child: [{
        prop: {
          name: 'margin-top',
          title: 'Margin Top',
          attr_type: 'style',
          units: ['px', 'cm', 'mm', 'in']
        },
        model_name: 'propertyTextUnit'
      },

      {
        prop: {
          name: 'margin-bottom',
          title: 'Margin bottom',
          attr_type: 'style',
          units: ['px', 'cm', 'mm', 'in']
        },
        model_name: 'propertyTextUnit'
      },

      {
        prop: {
          name: 'margin-left',
          title: 'Margin Left',
          attr_type: 'style',
          units: ['px', 'cm', 'mm', 'in']
        },
        model_name: 'propertyTextUnit'
      },

      {
        prop: {
          name: 'margin-right',
          title: 'Margin Right',
          attr_type: 'style',
          units: ['px', 'cm', 'mm', 'in']
        },
        model_name: 'propertyTextUnit'
      }
    ]
  },

  //Padding
  {
    prop: {
      name: 'padding',
      title: 'Padding',
      attr_type: 'style',
      units: ['px', 'cm', 'mm', 'in'],
      category: 'size',
    },
    model_name: 'propertyTextUnit',
    child: [{
        prop: {
          name: 'padding-top',
          title: 'Padding Top',
          attr_type: 'style',
          units: ['px', 'cm', 'mm', 'in']
        },
        model_name: 'propertyTextUnit'
      },

      {
        prop: {
          name: 'padding-bottom',
          title: 'Padding Bottom',
          attr_type: 'style',
          units: ['px', 'cm', 'mm', 'in']
        },
        model_name: 'propertyTextUnit'
      },

      {
        prop: {
          name: 'padding-left',
          title: 'Padding Left',
          attr_type: 'style',
          units: ['px', 'cm', 'mm', 'in']
        },
        model_name: 'propertyTextUnit'
      },

      {
        prop: {
          name: 'padding-right',
          title: 'Padding Right',
          attr_type: 'style',
          units: ['px', 'cm', 'mm', 'in']
        },
        model_name: 'propertyTextUnit'
      }
    ]
  },

  //Font
  {
    prop: {
      name: 'font-size',
      title: 'Font size',
      attr_type: 'style',
      units: ['px', 'cm', 'mm', 'in'],
      category: 'font'
    },
    model_name: 'propertyTextUnit'
  },

  {
    prop: {
      name: 'color',
      title: 'Color',
      attr_type: 'style',
      category: 'font'
    },
    model_name: 'propertyColor'
  },

  {
    prop: {
      name: 'font-weight',
      title: 'Font weight',
      attr_type: 'style',
      options: ['', 'normal', 'bold', 'bolder', 'lighter', 'initial', 'inherit'],
      category: 'font'
    },
    model_name: 'propertySelect'
  },

  //Border
  {
    prop: {
      name: 'border-width',
      title: 'Border width',
      attr_type: 'style',
      units: ['px', 'cm', 'mm', 'in'],
      category: 'border'
    },
    model_name: 'propertyTextUnit',
    child: [{
        prop: {
          name: 'border-left-width',
          title: 'Border left width',
          attr_type: 'style',
          units: ['px', 'cm', 'mm', 'in']
        },
        model_name: 'propertyTextUnit'
      },

      {
        prop: {
          name: 'border-right-width',
          title: 'Border right width',
          attr_type: 'style',
          units: ['px', 'cm', 'mm', 'in']
        },
        model_name: 'propertyTextUnit'
      },

      {
        prop: {
          name: 'border-top-width',
          title: 'Border top width',
          attr_type: 'style',
          units: ['px', 'cm', 'mm', 'in']
        },
        model_name: 'propertyTextUnit'
      },

      {
        prop: {
          name: 'border-bottom-width',
          title: 'Border bottom width',
          attr_type: 'style',
          units: ['px', 'cm', 'mm', 'in']
        },
        model_name: 'propertyTextUnit'
      }
    ]
  },

  {
    prop: {
      name: 'border-color',
      title: 'Border color',
      attr_type: 'style',
      category: 'border',
    },
    model_name: 'propertyColor',
    child: [{
        prop: {
          name: 'border-left-color',
          title: 'Border left color',
          attr_type: 'style'
        },
        model_name: 'propertyColor'
      },

      {
        prop: {
          name: 'border-right-color',
          title: 'Border right color',
          attr_type: 'style'
        },
        model_name: 'propertyColor'
      },

      {
        prop: {
          name: 'border-top-color',
          title: 'Border top color',
          attr_type: 'style'
        },
        model_name: 'propertyColor'
      },

      {
        prop: {
          name: 'border-bottom-color',
          title: 'Border bottom color',
          attr_type: 'style'
        },
        model_name: 'propertyColor'
      }
    ]
  },

  {
    prop: {
      name: 'border-style',
      title: 'Border style',
      attr_type: 'style',
      options: ['', 'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial', 'inherit'],
      category: 'border',
    },
    model_name: 'propertySelect',
    child: [{
        prop: {
          name: 'border-left-style',
          title: 'Border left style',
          attr_type: 'style',
          options: ['', 'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial', 'inherit']
        },
        model_name: 'propertySelect'
      },

      {
        prop: {
          name: 'border-right-style',
          title: 'Border right style',
          attr_type: 'style',
          options: ['', 'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial', 'inherit']
        },
        model_name: 'propertySelect'
      },

      {
        prop: {
          name: 'border-top-style',
          title: 'Border top style',
          attr_type: 'style',
          options: ['', 'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial', 'inherit']
        },
        model_name: 'propertySelect'
      },

      {
        prop: {
          name: 'border-bottom-style',
          title: 'Border bottom style',
          attr_type: 'style',
          options: ['', 'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial', 'inherit']
        },
        model_name: 'propertySelect'
      }
    ]
  },

  //Background
  {
    prop: {
      name: 'background',
      title: 'Background',
      attr_type: 'style',
      category: 'background'
    },
    model_name: 'propertyText'
  },

  {
    prop: {
      name: 'background-color',
      title: 'Background color',
      attr_type: 'style',
      category: 'background'
    },
    model_name: 'propertyColor'
  },

  //Background Image
  {
    prop: {
      name: 'background-image',
      title: 'Background image',
      attr_type: 'style',
      category: 'background'
    },
    model_name: 'propertyText'
  },

  {
    prop: {
      name: 'background-repeat',
      title: 'Background repeat',
      attr_type: 'style',
      options: ['', 'repeat', 'repeat-x', 'repeat-y', 'no-repeat'],
      category: 'background'
    },
    model_name: 'propertySelect'
  },

  {
    prop: {
      name: 'background-size',
      title: 'Background size',
      attr_type: 'style',
      options: ['', 'auto', 'cover', 'contain'],
      category: 'background'
    },
    model_name: 'propertySelect'
  }
];

module.exports = {
  category: category,
  configs: configs
};