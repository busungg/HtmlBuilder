import Property from './Property';

class PropertySelect extends Property {
  event() {
    const event = (evt) => {
      const { targetComponent } = this;

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
      valueDom.value = valueDom.children[0].value;
    } else {
      valueDom.value = propContent;
    }
  }

  render() {
    const _render = {
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
          element: 'select',
          attrs: {
            class: 'hb_prop__select',
            'set-type': 'value'
          },
          child: [],
          event: [
            {
              type: 'change',
              func: this.event()
            }
          ]
        }
      ]
    };

    const { prop } = this;
    const _select = _render.child[1];
    for (const option of prop.options) {
      _select.child.push({
        element: 'option',
        attrs: {
          value: option
        },
        text: option
      });
    }

    return super.render(_render);
  }
}

export default PropertySelect;
