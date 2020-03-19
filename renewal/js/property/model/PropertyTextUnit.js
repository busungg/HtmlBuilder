import CSS from '../config/css';
import Property from './Property';

class PropertyTextUnit extends Property {
  event() {
    const event = (evt) => {
      const targetComponent = this.targetComponent;

      if (targetComponent) {
        const eventDom = evt.target;
        let valueDom, unitDom;
        if (eventDom.getAttribute('set-type') === 'value') {
          valueDom = eventDom;
          unitDom = eventDom.nextSibling;
        } else {
          valueDom = eventDom.previousSibling;
          unitDom = eventDom;
        }

        if (unitDom.value != 'auto') {
          if (valueDom.value !== null && valueDom.value !== '') {
            let value = valueDom.value + unitDom.value;
            if (this.prop.attr_type === 'style') {
              targetComponent.style[this.prop.name] = value;
            } else {
              targetComponent.setAttribute(this.prop.name, value);
            }
          } else {
            if (this.prop.attr_type === 'style') {
              targetComponent.style[this.prop.name] = null;
            } else {
              targetComponent.removeAttribute(this.prop.name);
            }
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
    const unitDom = this.dom.querySelector('[set-type=unit]');

    if (!propContent) { //init property view
      valueDom.value = '';
      unitDom.value = unitDom.children[0].value;
    } else {
      var unit = null;
      for (var i = 0, len = unitDom.children.length; i < len; i++) {
        unit = unitDom.children[i];

        if (propContent.indexOf(unit.value) != -1) {
          valueDom.value = propContent.replace(unit.value, '');
          unitDom.value = unit.value;
          break;
        }
      }
    }
  };

  render() {
    var _render = {
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
            ['set-type']: 'value',
          },
          event: [{
            type: 'change',
            func: this.event()
          }]
        },
        {
          element: 'select',
          attrs: {
            class: CSS.prop_body_set_select,
            ['set-type']: 'unit',
          },
          child: [],
          event: [{
            type: 'change',
            func: this.event()
          }]
        }
        ]
      }
      ]
    };

    const _select = _render.child[1].child[1];
    for (let unit of this.prop.units) {
      _select.child.push({
        element: 'option',
        attrs: {
          value: unit
        },
        text: unit
      });
    }

    return super.render(_render);
  };
};

export default PropertyTextUnit;
