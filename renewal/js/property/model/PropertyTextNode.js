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
        class: 'hb_prop__content'
      },
      child: [
        { //div for title
          element: 'legend',
          attrs: {
            class: 'hb_prop__title'
          },
          text: this.title
        },

        {
          element: 'input',
          attrs: {
            type: 'text',
            class: 'hb_prop__text',
            ['set-type']: 'value'
          },
          event: [{
            type: 'change',
            func: this.event()
          }]
        }
      ]
    });
  };
};

export default PropertyTextNode;
