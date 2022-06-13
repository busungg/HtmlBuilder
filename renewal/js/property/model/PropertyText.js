import Property from './Property';

class PropertyText extends Property {
  event() {
    const event = (evt) => {
      const { targetComponent } = this;

      if (targetComponent) {
        const eventDom = evt.target;

        if (eventDom.value) {
          if (this.prop.attr_type === 'style') {
            targetComponent.style[this.prop.name] = eventDom.value;
          } else {
            targetComponent.setAttribute(this.prop.name, eventDom.value);
          }
        } else if (this.prop.attr_type === 'style') {
          targetComponent.style[this.prop.name] = null;
        } else {
          targetComponent.removeAttribute(this.prop.name);
        }
      }
    };

    return event;
  }

  update(target, prop) {
    this.targetComponent = target;

    if (!target) {
      return;
    }

    let propContent;
    if (this.prop.attr_type === 'style') {
      propContent = prop.style[this.prop.name];
    } else {
      propContent = prop[this.prop.name];
    }

    const valueDom = this.dom.querySelector('[set-type=value]');

    if (!propContent) {
      // init property view
      valueDom.value = '';
    } else {
      valueDom.value = propContent;
    }
  }

  render() {
    return super.render({
      element: 'fieldset',
      attrs: {
        class: 'hb_prop__content'
      },
      child: [
        {
          // div for title
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
            'set-type': 'value'
          },
          event: [
            {
              type: 'change',
              func: this.event()
            }
          ]
        }
      ]
    });
  }
}

export default PropertyText;