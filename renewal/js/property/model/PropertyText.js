import CSS from '../config/css';
import Property from './Property';

class PropertyText extends Property {
  event() {
    const event = (evt) => {
      const targetComponent = this.targetComponent;

      if (targetComponent) {
        const eventDom = evt.target;

        if (eventDom.value) {
          if (this.prop.attr_type === 'style') {
            targetComponent.style[this.prop.name] = eventDom.value;
          } else {
            targetComponent.setAttribute(this.prop.name, eventDom.value);
          }
        } else {
          if (this.prop.attr_type === 'style') {
            targetComponent.style[this.prop.name] = null;
          } else {
            targetComponent.removeAttribute(this.prop.name);
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

    var propContent;
    if (this.prop.attr_type === 'style') {
      propContent = prop.style[this.prop.name];
    } else {
      propContent = prop[this.prop.name];
    }

    const valueDom = this.dom.querySelector('[set-type=value]');

    if (!propContent) { //init property view
      valueDom.value = '';
    } else {
      valueDom.value = propContent;
    }
  };

  render() {
    return super.render({
      element: 'div',
      attrs: {
        class: CSS.prop_body_div
      },
      child: [
        { //div for title
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
              ['set-type']: 'value',
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
}

export default PropertyText;
