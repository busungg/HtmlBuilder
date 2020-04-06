import ComponentUtil from './ComponentUtil';

class ComponentUtilCopy extends ComponentUtil {
  event() {
    const evt = () => {
      if (this.targetComponent) {
        const { component } = this.targetComponent;
        const copiedDom = component.copy();
        this.targetComponent.parentElement.appendChild(copiedDom);
      }
    };

    return evt;
  }

  update(target) {
    this.targetComponent = target;
  }

  render() {
    return super.render({
      element: 'button',
      attrs: {
        title: this.title,
        class: `hb_component-util__btn ${this.icon}`
      },
      event: [{
        type: 'click',
        func: this.event()
      }]
    });
  }
}

export default ComponentUtilCopy;
