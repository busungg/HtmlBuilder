import CSS from '../css/css';
import Property from './Property';

class PropertySelect extends Property {
  event() {
    const event = (evt) => {
      const targetComponent = this.targetComponent;

      if (targetComponent) {
        const eventDom = evt.target;

        if (eventDom.value) {
          targetComponent.style[this.prop.name] = eventDom.value;
        } else {
          targetComponent.style[this.prop.name] = null;
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

    let propContent;
    if (this.prop.attr_type === 'style') {
      propContent = prop.style[this.prop.name];
    } else {
      propContent = prop[this.prop.name];
    }

    const valueDom = this.dom.querySelector('[set-type=value]');
    if (!propContent) { //init property view
      valueDom.value = valueDom.children[0].value;
    } else {
      valueDom.value = propContent;
    }
  };

  render() {
    const _render = {
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
          element: 'select',
          attrs: {
            class: CSS.prop_body_set_select,
            ['set-type']: 'value',
          },
          child: [],
          event: [{
            type: 'change',
            func: this.event()
          }]
        }]
      }
      ]
    };

    const prop = this.prop;
    const _select = _render.child[1].child[0];
    for (let option of prop.options) {
      _select.child.push({
        element: 'option',
        attrs: {
          value: option
        },
        text: option
      });
    }

    return super.render(_render);
  };
};

export default PropertySelect;
