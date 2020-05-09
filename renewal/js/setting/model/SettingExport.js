import Utils from '../../utils/utils';
import codeEditor from '../../codeEditor/codeEditor';
import Setting from './Setting';

class SettingExport extends Setting {
  event() {
    const evt = () => {
      const { document } = this.target.contentWindow;
      const { body, head } = document;

      const tempBody = document.createElement('body');
      const tempHead = document.createElement('head');

      tempBody.innerHTML = body.innerHTML;
      tempHead.innerHTML = head.innerHTML;

      [...tempBody.children]
        .filter((child) => {
          return child.dataset.include === 'N';
        })
        .forEach((child) => {
          child.remove();
        });

      [...tempHead.children]
        .filter((child) => {
          return child.dataset.include === 'N';
        })
        .forEach((child) => {
          child.remove();
        });

      // const html = { result: '' };
      // Utils.beautifyHtml(tempBody, ' ', 4, html);

      codeEditor.render(tempBody.innerHTML, tempHead.innerHTML);
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
            class: 'hb_setting__button'
          },
          html: this.title,
          event: [
            {
              type: 'click',
              func: this.event()
            }
          ]
        }
      ]
    });
  }
}

export default SettingExport;
