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
    name: 'table',
    title: 'Table'
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
 * @title Property View에서 보여질 제목
 * @category Category
 * @class 사용되는 Class
 * @prop {
 *  name: HTML에서 사용되는 Property의 이름
 *  attr_type: Style인지 Attribute 인지 구분
 * }
 */

const configs = [
  //For attributes
  {
    title: 'Id',
    category: 'common',
    class: 'PropertyText',
    prop: {
      name: 'id',
      attr_type: 'attr'
    }
  },

  {
    title: 'Name',
    category: 'common',
    class: 'PropertyText',
    prop: {
      name: 'name',
      attr_type: 'attr'
    }
  },

  {
    title: 'Title',
    category: 'common',
    class: 'PropertyText',
    prop: {
      name: 'title',
      attr_type: 'attr'
    }
  },

  {
    title: 'Text',
    category: 'common',
    class: 'PropertyTextAppend',
    prop: {
      name: 'text',
      attr_type: 'attr'
    }
  },

  {
    title: 'Value',
    category: 'common',
    class: 'PropertyText',
    prop: {
      name: 'value',
      attr_type: 'attr'
    }
  },

  {
    title: 'Src',
    category: 'src',
    class: 'PropertyText',
    prop: {
      name: 'src',
      attr_type: 'attr'
    }
  },

  {
    title: 'Href',
    category: 'href',
    class: 'PropertyText',
    prop: {
      name: 'href',
      attr_type: 'attr'
    }    
  },

  {
    title: 'Table',
    category: 'table',
    class: 'PropertyTable',
    prop: {
      name: 'table',
      attr_type: 'attr'      
    }    
  },

  {
    title: 'Class',
    category: 'common',
    class: 'PropertyClass',
    prop: {
      name: 'class',
      attr_type: 'attr'
    }
  },

  {
    title: 'Option',
    category: 'common',
    class: 'PropertyOption',
    prop: {
      name: 'option',
      attr_type: 'attr'
    }
  },

  {
    title: 'Style to CSS',
    category: 'style2css',
    class: 'PropertyStyle2Save',
    prop: {
      name: 'style2css',
      attr_type: 'style2css'
    }
  },

  // For styles
  //Display
  {
    title: 'Display',
    category: 'position',
    class: 'PropertySelect',
    prop: {
      name: 'display',
      attr_type: 'style',
      options: ['', 'block', 'inline', 'inline-block', 'none']
    }
  },

  //Position
  {
    title: 'Position',
    category: 'position',
    class: 'PropertySelect',
    prop: {
      name: 'position',
      attr_type: 'style',
      options: ['', 'static', 'relative', 'absolute']
    }
  },

  {
    title: 'Left',
    category: 'position',
    class: 'PropertyTextUnit',
    prop: {
      name: 'left',
      attr_type: 'style',
      units: ['px', '%', 'cm', 'mm', 'in']
    }
  },

  {
    title: 'Right',
    category: 'position',
    class: 'PropertyTextUnit',
    prop: {
      name: 'right',
      attr_type: 'style',
      units: ['px', '%', 'cm', 'mm', 'in']
    }
  },

  {
    title: 'Top',
    category: 'position',
    class: 'PropertyTextUnit',
    prop: {
      name: 'top',
      attr_type: 'style',
      units: ['px', '%', 'cm', 'mm', 'in']
    }
  },

  {
    title: 'Bottom',
    category: 'position',
    class: 'PropertyTextUnit',
    prop: {
      name: 'bottom',
      attr_type: 'style',
      units: ['px', '%', 'cm', 'mm', 'in']
    }
  },

  //Float
  {
    title: 'Float',
    category: 'position',
    class: 'PropertyText',
    prop: {
      name: 'float',
      attr_type: 'style'      
    }
  },

  //Width, Height
  {
    title: 'Width',
    category: 'size',
    class: 'PropertyTextUnit',
    prop: {
      name: 'width',
      attr_type: 'style',
      units: ['%', 'px', 'auto', 'cm', 'mm', 'in'],
      
    }
  },

  {
    title: 'Height',
    category: 'size',
    class: 'PropertyTextUnit',
    prop: {
      name: 'height',
      attr_type: 'style',
      units: ['%', 'px', 'auto', 'cm', 'mm', 'in']
    }
  },

  //Margin
  {
    title: 'Margin',
    category: 'size',
    class: 'PropertyTextUnit',
    prop: {
      name: 'margin',
      attr_type: 'style',
      units: ['px', 'cm', 'mm', 'in'],
    },    
    child: [{
      title: 'Margin Top',
      class: 'PropertyTextUnit',
      prop: {
          name: 'margin-top',
          attr_type: 'style',
          units: ['px', 'cm', 'mm', 'in']
        }
      },

      {
        title: 'Margin bottom',
        class: 'PropertyTextUnit',  
        prop: {
          name: 'margin-bottom',
          attr_type: 'style',
          units: ['px', 'cm', 'mm', 'in']
        }
      },

      {
        title: 'Margin Left',
        class: 'PropertyTextUnit',
        prop: {
          name: 'margin-left',
          attr_type: 'style',
          units: ['px', 'cm', 'mm', 'in']
        }
      },

      {
        title: 'Margin Right',
        class: 'PropertyTextUnit',
        prop: {
          name: 'margin-right',
          attr_type: 'style',
          units: ['px', 'cm', 'mm', 'in']
        }
      }
    ]
  },

  //Padding
  {
    title: 'Padding',
    category: 'size',
    class: 'PropertyTextUnit',
    prop: {
      name: 'padding',
      attr_type: 'style',
      units: ['px', 'cm', 'mm', 'in']
    },
    
    child: [{
      title: 'Padding Top',
      class: 'PropertyTextUnit',  
      prop: {
          name: 'padding-top',
          attr_type: 'style',
          units: ['px', 'cm', 'mm', 'in']
        }
      },

      {
        title: 'Padding Bottom',
        class: 'PropertyTextUnit',
        prop: {
          name: 'padding-bottom',
          attr_type: 'style',
          units: ['px', 'cm', 'mm', 'in']
        }
      },

      {
        title: 'Padding Left',
        class: 'PropertyTextUnit',
        prop: {
          name: 'padding-left',
          attr_type: 'style',
          units: ['px', 'cm', 'mm', 'in']
        }
      },

      {
        title: 'Padding Right',
        class: 'PropertyTextUnit',
        prop: {
          name: 'padding-right',
          attr_type: 'style',
          units: ['px', 'cm', 'mm', 'in']
        }
      }
    ]
  },

  //Font
  {
    title: 'Font size',
    category: 'font',
    class: 'PropertyTextUnit',
    prop: {
      name: 'font-size',
      attr_type: 'style',
      units: ['px', 'cm', 'mm', 'in']
    }
  },

  {
    title: 'Color',
    category: 'font',
    class: 'PropertyColor',
    prop: {
      name: 'color',
      attr_type: 'style'
    }
  },

  {
    title: 'Font weight',
    category: 'font',
    class: 'PropertySelect',
    prop: {
      name: 'font-weight',
      attr_type: 'style',
      options: ['', 'normal', 'bold', 'bolder', 'lighter', 'initial', 'inherit']
    }
  },

  //Border
  {
    title: 'Border width',
    category: 'border',
    class: 'PropertyTextUnit',
    prop: {
      name: 'border-width',
      attr_type: 'style',
      units: ['px', 'cm', 'mm', 'in']
    },
    child: [{
      title: 'Border left width',  
      class: 'PropertyTextUnit',
      prop: {
          name: 'border-left-width',
          attr_type: 'style',
          units: ['px', 'cm', 'mm', 'in']
        }
      },

      {
        title: 'Border right width',
        class: 'PropertyTextUnit',
        prop: {
          name: 'border-right-width',
          attr_type: 'style',
          units: ['px', 'cm', 'mm', 'in']
        }
      },

      {
        title: 'Border top width',
        class: 'PropertyTextUnit',
        prop: {
          name: 'border-top-width',
          attr_type: 'style',
          units: ['px', 'cm', 'mm', 'in']
        }
      },

      {
        title: 'Border bottom width',
        class: 'PropertyTextUnit',
        prop: {
          name: 'border-bottom-width',
          attr_type: 'style',
          units: ['px', 'cm', 'mm', 'in']
        }
      }
    ]
  },

  {
    title: 'Border color',
    category: 'border',
    class: 'PropertyColor',
    prop: {
      name: 'border-color',
      attr_type: 'style'
    },
    
    child: [{
      title: 'Border left color',
      class: 'PropertyColor',
        prop: {
          name: 'border-left-color',
                    attr_type: 'style'
        }
      },

      {
        title: 'Border right color',
        class: 'PropertyColor',
        prop: {
          name: 'border-right-color',
          attr_type: 'style'
        }
      },

      {
        title: 'Border top color',
        class: 'PropertyColor',
        prop: {
          name: 'border-top-color',
          attr_type: 'style'
        }
      },

      {
        title: 'Border bottom color',
        class: 'PropertyColor',
        prop: {
          name: 'border-bottom-color',
          attr_type: 'style'
        }
      }
    ]
  },

  {
    title: 'Border style',
    category: 'border',
    class: 'PropertySelect',
    prop: {
      name: 'border-style',
      attr_type: 'style',
      options: ['', 'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial', 'inherit']
    },
    
    child: [{
      title: 'Border left style',  
      class: 'PropertySelect',
      prop: {
          name: 'border-left-style',
          attr_type: 'style',
          options: ['', 'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial', 'inherit']
        }
      },

      {
        title: 'Border right style',
        class: 'PropertySelect',
        prop: {
          name: 'border-right-style',
          attr_type: 'style',
          options: ['', 'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial', 'inherit']
        }
      },

      {
        title: 'Border top style',
        class: 'PropertySelect',
        prop: {
          name: 'border-top-style',
          attr_type: 'style',
          options: ['', 'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial', 'inherit']
        }
      },

      {
        title: 'Border bottom style',
        class: 'PropertySelect',
        prop: {
          name: 'border-bottom-style',
          attr_type: 'style',
          options: ['', 'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial', 'inherit']
        }
      }
    ]
  },

  //Background
  {
    title: 'Background',
    category: 'background',
    class: 'PropertyText',
    prop: {
      name: 'background',
      attr_type: 'style'
    }
  },

  {
    title: 'Background color',
    category: 'background',
    class: 'PropertyColor',
    prop: {
      name: 'background-color',
      attr_type: 'style'
    }
  },

  //Background Image
  {
    title: 'Background image',
    category: 'background',
    class: 'PropertyText',
    prop: {
      name: 'background-image',
      attr_type: 'style'
    }
  },

  {
    title: 'Background repeat',
    category: 'background',
    class: 'PropertySelect',
    prop: {
      name: 'background-repeat',
      attr_type: 'style',
      options: ['', 'repeat', 'repeat-x', 'repeat-y', 'no-repeat']      
    }
    
  },

  {
    title: 'Background size',
    category: 'background',
    class: 'PropertySelect',
    prop: {
      name: 'background-size',
      attr_type: 'style',
      options: ['', 'auto', 'cover', 'contain']
    }
  }
];

module.exports = {
  category: category,
  configs: configs
};