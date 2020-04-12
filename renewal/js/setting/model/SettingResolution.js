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
      element: 'fieldset',
      attrs: {
        class: 'hb_setting__content'
      },
      child: [
        {
          // div for title
          element: 'legend',
          attrs: {
            class: 'hb_setting__title'
          },
          text: this.title
        },
        {
          element: 'button',
          attrs: {
            class: 'hb_setting__button--phone'
          },
          event: [
            {
              type: 'click',
              func: this.phoneEvent()
            }
          ]
        },
        {
          element: 'button',
          attrs: {
            class: 'hb_setting__button--tablet'
          },
          event: [
            {
              type: 'click',
              func: this.tabletEvent()
            }
          ]
        },
        {
          element: 'button',
          attrs: {
            class: 'hb_setting__button--browser'
          },
          event: [
            {
              type: 'click',
              func: this.browserEvent()
            }
          ]
        }
      ]
    });
  }
}

export default SettingResolution;
