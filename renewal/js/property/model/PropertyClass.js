import CSS from '../config/css';
import Property from './Property';

class PropertyClass extends Property {
  addEvent() {
    const event = () => {
      const targetComponent = this.targetComponent;

      if (targetComponent) {
        const inputDom = this.dom.querySelector('[set-type=input]');
        const valueDom = this.dom.querySelector('[set-type=value]');

        if (inputDom.value !== '') {
          var option = document.createElement('option');
          option.setAttribute('value', inputDom.value);
          option.appendChild(document.createTextNode(inputDom.value));
          valueDom.appendChild(option);

          targetComponent.classList.add(inputDom.value);
        }
      }
    };

    return event;
  };

  removeEvent() {
    const event = () => {
      const targetComponent = this.targetComponent;

      if (targetComponent) {
        const valueDom = this.dom.querySelector('[set-type=value]');

        for (let i = 0; i < valueDom.options.length; i++) {
          if (valueDom.options[i].selected == true) {
            targetComponent.classList.remove(valueDom.options[i].value);
            valueDom.removeChild(valueDom.options[i]);
            i--;
          }
        }
      }
    };

    return event;
  };

  update(target, prop) {
    this.targetComponent = target;

    if (!target) {
      return;
    }

    const valueDom = this.dom.querySelector('[set-type=value]');
    if (prop.class.length == 0) {
      while (valueDom.options.length != 0) {
        valueDom.options[0].remove();
      }
    } else {
      while (valueDom.options.length != 0) {
        valueDom.options[0].remove();
      }

      var option;
      for (var i = 0, len = prop.class.length; i < len; i++) {
        if (prop.class[i].indexOf('hb_selectable') === -1 && prop.class[i].indexOf('hb_selected') === -1) {
          option = document.createElement('option');
          option.setAttribute('value', prop.class[i]);
          option.appendChild(document.createTextNode(prop.class[i]));

          valueDom.appendChild(option);
        }
      }
    }
  };

  render() {
    return super.render({
      element: 'div',
      attrs: {
        class: CSS.prop_body_div
      },
      child: [{ //div for title
        element: 'div',
        attrs: {
          class: CSS.prop_body_title_div
        },
        child: [{
          element: 'label',
          attrs: {
            class: CSS.prop_body_title_label
          },
          text: this.title
        }]
      },

      { //div for property set
        element: 'div',
        attrs: {
          class: CSS.prop_body_set_div
        },
        child: [{
          element: 'input',
          attrs: {
            type: 'text',
            class: CSS.prop_body_set_text,
            'set-type': 'input'
          }
        },
        {
          element: 'button',
          attrs: {
            class: CSS.prop_body_set_btn,
            title: 'Add class',
          },
          text: 'Add class',
          event: [{
            type: 'click',
            func: this.addEvent()
          }]
        },
        {
          element: 'button',
          attrs: {
            class: CSS.prop_body_set_btn,
            title: 'Delete class',
          },
          text: 'Delete class',
          event: [{
            type: 'click',
            func: this.removeEvent()
          }]
        },
        {
          element: 'select',
          attrs: {
            class: CSS.prop_body_set_multi_select,
            multiple: true,
            'set-type': 'value'
          }
        }
        ]
      }
      ]
    });
  }
};

export default PropertyClass;
