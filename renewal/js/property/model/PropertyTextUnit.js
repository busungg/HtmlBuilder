import Property from './Property';

class PropertyTextUnit extends Property {
  event() {
    const event = (evt) => {
      const { targetComponent } = this;

      if (targetComponent) {
        const eventDom = evt.target;
        let valueDom;
        let unitDom;
        if (eventDom.getAttribute('set-type') === 'value') {
          valueDom = eventDom;
          unitDom = eventDom.nextSibling;
        } else {
          valueDom = eventDom.previousSibling;
          unitDom = eventDom;
        }

        if (unitDom.value != 'auto') {
          if (valueDom.value !== null && valueDom.value !== '') {
            const value = valueDom.value + unitDom.value;
            if (this.prop.attr_type === 'style') {
              targetComponent.style[this.prop.name] = value;
            } else {
              targetComponent.setAttribute(this.prop.name, value);
            }
          } else if (this.prop.attr_type === 'style') {
            targetComponent.style[this.prop.name] = null;
          } else {
            targetComponent.removeAttribute(this.prop.name);
          }
        } else {
          /*
            width, height auto style exception
          */
          if (this.prop.attr_type === 'style') {
            targetComponent.style[this.prop.name] = unitDom.value;
          } else {
            targetComponent.setAttribute(this.prop.name, unitDom.value);
          }
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
    const unitDom = this.dom.querySelector('[set-type=unit]');

    if (!propContent) {
      // init property view
      valueDom.value = '';
      unitDom.value = unitDom.children[0].value;
    } else {
      let unit = null;
      for (let i = 0, len = unitDom.children.length; i < len; i++) {
        unit = unitDom.children[i];

        if (propContent.indexOf(unit.value) != -1) {
          valueDom.value = propContent.replace(unit.value, '');
          unitDom.value = unit.value;
          break;
        }
      }
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
        },

        {
          element: 'select',
          attrs: {
            class: 'hb_prop__unit',
            'set-type': 'unit'
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

    const _select = _render.child[2];
    for (const unit of this.prop.units) {
      _select.child.push({
        element: 'option',
        attrs: {
          value: unit
        },
        text: unit
      });
    }

    return super.render(_render);
  }
}

export default PropertyTextUnit;
