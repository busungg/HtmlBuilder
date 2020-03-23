import CSS from '../css/css';
import Property from './Property';

class PropertyTextNode extends Property {
  event() {
    const event = (evt) => {
      const targetComponent = this.targetComponent;

      if (targetComponent) {
        const eventDom = evt.target;

        if (eventDom.value) {
          if (targetComponent.firstChild) {
            if (targetComponent.firstChild.nodeType != Node.TEXT_NODE) {
              targetComponent.insertBefore(document.createTextNode(eventDom.value), targetComponent.firstChild);
            } else {
              targetComponent.firstChild.textContent = eventDom.value;
            }
          } else {
            targetComponent.insertBefore(document.createTextNode(eventDom.value), targetComponent.firstChild);
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
    if (prop.text) {
      valueDom.value = prop.text;
    } else {
      valueDom.value = '';
    }
  };

  render() {
    return super.render({
      element: 'fieldset',
      attrs: {
        class: 'prop-sub-category__body'
      },
      child: [{ //div for title
        element: 'legend',
        attrs: {
          class: 'prop-sub-category__title'
        },
        text: this.title
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
          },
          event: [{
            type: 'change',
            func: this.event()
          }]
        }]
      }
      ]
    });
  };
};

export default PropertyTextNode;
