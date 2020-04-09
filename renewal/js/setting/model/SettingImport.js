import Setting from './Setting';

class SettingImport extends Setting {
  event() {
    const evt = () => {

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
              class: 'hb_setting__btn'
            },
            html: this.title
          }]
        }
      ]
    });
  }
}

export default SettingImport;
