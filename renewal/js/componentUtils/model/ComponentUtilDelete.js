import ComponentUtil from './ComponentUtil';

class ComponentUtilDelete extends ComponentUtil {
  event() {
    const evt = () => {
      if (this.targetComponent) {
        const { component } = this.targetComponent;
        component.delete();
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

export default ComponentUtilDelete;
