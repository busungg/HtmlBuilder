import Property from './Property';

class PropertyOption extends Property {
  addEvent(e) {
    const event = () => {
      const { targetComponent } = this;

      if (targetComponent) {
        const valueDom = this.dom.querySelector('[set-type=value]');
        const textDom = this.dom.querySelector('[set-type=text]');
        const selectDom = this.dom.querySelector('[set-type=option]');

        if (textDom.value !== '') {
          // for option list of property
          const optionDom = document.createElement('option');
          if (valueDom.value) {
            optionDom.setAttribute('value', valueDom.value);
          }
          optionDom.appendChild(document.createTextNode(textDom.value));
          selectDom.appendChild(optionDom);
          targetComponent.appendChild(optionDom.cloneNode(true));
        }
      }
    };

    return event;
  }

  removeEvent(e) {
    const event = () => {
      const { targetComponent } = this;

      if (targetComponent) {
        const selectDom = this.dom.querySelector('[set-type=option]');

        for (let i = 0; i < selectDom.options.length; i++) {
          if (selectDom.options[i].selected === true) {
            targetComponent.removeChild(selectDom.options[i]);
            selectDom.removeChild(selectDom.options[i]);
            i--;
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

    const selectDom = this.dom.querySelector('[set-type=option]');
    if (prop.option.length == 0) {
      while (selectDom.options.length != 0) {
        selectDom.options[0].remove();
      }
    } else {
      while (selectDom.options.length != 0) {
        selectDom.options[0].remove();
      }

      let optionDom;
      for (const option of prop.option) {
        optionDom = document.createElement('option');
        if (option.value) {
          optionDom.setAttribute('value', option.value);
        }
        optionDom.appendChild(document.createTextNode(option.text));
        selectDom.appendChild(optionDom);
      }
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
          // div for property set
          element: 'div',
          attrs: {
            class: ''
          },
          child: [
            {
              element: 'label',
              attrs: {
                class: 'hb_prop__sub_title'
              },
              text: 'Value'
            },
            {
              element: 'input',
              attrs: {
                type: 'text',
                class: 'hb_prop__text',
                'set-type': 'value'
              }
            },
            {
              element: 'label',
              attrs: {
                class: 'hb_prop__sub_title'
              },
              text: 'Text'
            },
            {
              element: 'input',
              attrs: {
                type: 'text',
                class: 'hb_prop__text',
                'set-type': 'text'
              }
            },
            {
              element: 'button',
              attrs: {
                class: 'hb_prop__button',
                title: 'Add option'
              },
              text: 'Add option',
              event: [
                {
                  type: 'click',
                  func: this.addEvent()
                }
              ]
            },
            {
              element: 'button',
              attrs: {
                class: 'hb_prop__button',
                title: 'Delete option'
              },
              text: 'Delete option',
              event: [
                {
                  type: 'click',
                  func: this.removeEvent()
                }
              ]
            },
            {
              element: 'select',
              attrs: {
                class: 'hb_prop__multi_select',
                multiple: true,
                'set-type': 'option'
              }
            }
          ]
        }
      ]
    });
  }
}

export default PropertyOption;
