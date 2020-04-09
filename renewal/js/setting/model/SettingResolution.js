import Setting from './Setting';

class SettingResolution extends Setting {
  constructor(config, target) {
    super(config, target);
    this.originWidth = target.style.width;
  }

  phoneEvent() {
    const evt = () => {
      this.target.style.width = '320px';
    };

    return evt;
  }

  tabletEvent() {
    const evt = () => {
      this.target.style.width = '768px';
    };

    return evt;
  }

  browserEvent() {
    const evt = () => {
      this.target.style.width = this.originWidth;
    };

    return evt;
  }

  render() {
    return super.render({
      element: 'div',
      attrs: {
        class: 'hb_setting__body'
      },
      child: [
        {
          element: 'div',
          attrs: {
            class: 'hb_setting__body-title'
          },
          child: [{
            element: 'label',
            attrs: {
              class: 'hb_setting__body-title__label'
            },
            text: this.title
          }]
        },
        {
          element: 'div',
          attrs: {
            class: 'hb_setting__body-content'
          },
          child: [{
            element: 'button',
            attrs: {
              class: 'hb_setting__btn-phone'
            },
            event: [{
              type: 'click',
              func: this.phoneEvent()
            }]
          },
          {
            element: 'button',
            attrs: {
              class: 'hb_setting__btn-tablet'
            },
            event: [{
              type: 'click',
              func: this.tabletEvent()
            }]
          },
          {
            element: 'button',
            attrs: {
              class: 'hb_setting__btn-browser'
            },
            event: [{
              type: 'click',
              func: this.browserEvent()
            }]
          }]
        }
      ]
    });
  }
}

export default SettingResolution;
