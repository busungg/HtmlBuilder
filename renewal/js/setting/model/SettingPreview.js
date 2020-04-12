import Setting from './Setting';

class SettingPreview extends Setting {
  event() {
    const evt = () => {
      const { document } = this.target.contentWindow;
      const { documentElement } = document;

      const previewWindow = window.open('', 'Preview', 'width=800,height=800');
      const previewDocumentElement = previewWindow.document.documentElement;

      previewDocumentElement.innerHTML = documentElement.innerHTML;

      /*
        preview_window =

        var head = document.getElementsByTagName('HEAD')[0];
        var copy_head = head.cloneNode(true).children;
        var preview_head = preview_window.document.getElementsByTagName('HEAD')[0];
        var preview_body = preview_window.document.getElementsByTagName('BODY')[0];

        var removeArray = [];
        for (var i = 0, len = copy_head.length; i < len; i++) {
            try {
                if (copy_head[i].getAttribute('attr-type') === 'html_builder') {
                    removeArray.push(copy_head[i]);
                }
            } catch (err) {
                removeArray.push(copy_head[i]);
            }
        }

        while (removeArray.length > 0) {
            removeArray[removeArray.length - 1].remove();
            removeArray.splice(removeArray.length - 1, 1);
        }

        while (copy_head.length > 0) {
            preview_head.appendChild(copy_head[0]);
        }

        preview_body.innerHTML = utils.exportHtml(mainManager.config.ids[0]);

      */
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

export default SettingPreview;
