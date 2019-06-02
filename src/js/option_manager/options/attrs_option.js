/**
    Default Attr options

    1. category 추가?
    2. 내부 내용 event, builder 등 사용? -> 맞는듯
    3. preset 통일 - style과 통일한다.

    하나의 class로 생각한다.
    htmlbuilder 사용한다고 생각한다.

    category와 list를 통합 할 수 있는 것이 필요하다.
**/

/**
  Create dom with option (dom을 생성하는 function)
  @param {Object}
    {
      element : document.createElement(element),
      attr : {
        type - document.setAttribute("type", type);
        class - document.setAttribute("class", class);
        id - document.setAttribute("id", id);
        name - document.setAttribute("name", name);
        value: "" 
      },
      text: '',
      html: '',
      event: [{
        type: '',
        func: ''
      }]
      child : []
    }
**/

const category_builder = {

};

const category = [{
    name: 'id',
    title: 'Id'
  },

  {
    name: 'name',
    title: 'Name'
  },

  {
    name: 'title',
    title: 'Title'
  },

  {
    name: 'text',
    title: 'Text'
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
    name: 'class',
    title: 'Class'
  },

  {
    name: 'style2css',
    title: 'Style to CSS'
  }
];

const list_preset = {
  text: {
    element: 'input',
    attr: {
      type: 'text',
      class: ''
    }
  },

  select: {

  }
};

const list_event = {
  change_text: {
    type: 'change',
    func: function (e) {
      //e.target 의 attr 정보로 가져온다.
      //H.layoutID는 어떻게 가져오려고?
    }
  },

  click_add: {

  },

  click_delete: {

  },
}

const list = [{
    element: 'div',
    attr: {
      name: 'id',
      title: 'Id'
    },
    child: []
  },

  {
    name: 'name',
    title: 'Name',
    type: 'text',
    multiple: false,
    list: false
  },

  {
    name: 'title',
    title: 'Title',
    type: 'text',
    multiple: false,
    list: false
  },

  {
    name: 'text',
    title: 'Text',
    type: 'text',
    multiple: false,
    list: false
  },

  {
    name: 'value',
    title: 'Value',
    type: 'text',
    multiple: false,
    list: false
  },

  {
    name: 'src',
    title: 'Src',
    type: 'text',
    multiple: false,
    list: false
  },

  {
    name: 'href',
    title: 'Href',
    type: 'text',
    multiple: false,
    list: false
  },

  {
    name: 'class',
    title: 'Class',
    type: 'text',
    multiple: true,
    list: false,
    button: true
  },

  {
    name: 'style2css',
    title: 'Style to CSS',
    type: 'text',
    multiple: false,
    list: false,
    button: true
  }
];

module.exports = {
  category: category,
  list: attrs
};