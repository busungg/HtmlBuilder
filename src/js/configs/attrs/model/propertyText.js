/**
    Attributes View Manager
**/

module.exports = {
  setProperty: function(prop) {
    this.prop = {};

    this.prop.name = prop.name;
    this.prop.title = prop.title;
    this.prop.attr_type = prop.attr_type;
    this.prop.category = prop.category;
  },

  //selected가 계속 update되어야 하는데 event가 호출될 시 selected를 변경 할 수 있는가?
  //종속성을 없애기 위해서는 이 모델에서 Selected 된 element를 관리해야 할까?
  //계속 render하는건 조금 리소스를 낭비하는건 아닌가?
  //render 된 UI와 이 model이 계속 연관되어야 하는데 어떻게 해야 하는가?
  //grapesjs는 새롭게 만드니깐 text로 만든거 아닐까? text로 추가하는게 더 빠르니깐
  //vue.js와 같이 render된 element와 model을 연결 시켜주는건 어떨까요? ****
  //이 model을 복사해서 하나씩 가지고 있어야 한다. -> new로 만든다고 생각하자
  //eventlisner에 등록되는 event function이 계속 업데이트되어야 한다.
  setSelected: function(selected) {
    this.selected = selected;
  },

  event: function() {
    var porp = this.prop;
    var selected = this.selected;

    var event = {
      type:'change',
      func: function(e) {
        if (selected) {
          selected.setAttribute(targetInfo.attr_name, info.target_value);
        }

        prop.name
      }
    }

    return event;
  },

  /**
   * child는 생각하지 않는다.
   */
  render: function() {
    var event = this.event;
    var prop = this.prop;
    
    return {
      element: 'div',
      attr: {
        class: ''
      },
      child: [
        { //div for title
          element: 'div',
          attr: {
            class: ''
          },
          child: [
            {
              element: 'label',
              attr: {
                class: ''
              },
              text: prop.title
            }
          ]
        },

        { //div for property set
          element: 'div',
          attr: {
            class: ''
          },
          child: [
            {
              element: 'input',
              attr: {
                type: 'text',
                class: ''
              },
              event: event
            }
          ]
        }

      ]
    }
  }
}


/**
 * 이 정도 해주려면 그냥 htmlbuilder로 생성하게 하는게 좋겠다.
 * 
  
  결과물
  <div - for category>
    <div - title for category>
      title
    </div>

    <div - attr>
      <div - title for attr></div>
      <div - attr setting></div>

      <div - child list>
        <div - title for child category></div>
        <div - child attr>
          <div - title for child attr></div>
          <div - child attr setting></div>
        </div>
      </div>
    <div>

  </div>
**/