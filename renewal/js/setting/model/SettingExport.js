// test용
import codeEditor from '../../codeEditor/codeEditor';

import Setting from './Setting';

class SettingExport extends Setting {
  event() {
    const evt = () => {
      codeEditor.render('', '');
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
            html: this.title,
            event: [
              {
                type: 'click',
                func: this.event()
              }
            ]
          }]
        }
      ]
    });
  }
}

export default SettingExport;
