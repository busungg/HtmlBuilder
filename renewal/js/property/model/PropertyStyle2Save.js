import CSS from '../config/css';
import Property from './Property';
const Utils = require('../../utils/utils');

//추후에 적용 필요 - Utils도 정리 필요
class PropertyStyle2Save extends Property {
  event(e) {
    const event = (evt) => {
      const targetComponent = this.targetComponent;

      if (targetComponent) {
        const eventDom = evt.target;

        if (eventDom.value != '') {
          if (utils.style2Css(eventDom.value, selected.prop.style)) {
            targetComponent.removeAttribute('style');
            var classText = targetComponent.getAttribute('class');
            targetComponent.setAttribute('class', classText + ' ' + eventDom.value);
            eventDom.value = '';
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
            ['set-type']: 'value'
          }
        },
        {
          element: 'button',
          attrs: {
            class: CSS.prop_body_set_btn
          },
          text: 'Save',
          event: [{
            type: 'click',
            func: this.event()
          }]
        }
        ]
      }
      ]
    });
  };
};

export default PropertyStyle2Save;
