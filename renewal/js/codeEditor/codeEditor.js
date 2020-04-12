import './css/codeEditor.css';

import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/ayu-mirage.css';
import CodeMirror from 'codemirror';

import Utils from '../utils/utils';

const codeEditor = {
  render(html, css, isImport = false) {
    let title = 'Import';
    if (!isImport) {
      title = 'Export';
    }

    let popup;
    const _popup = {
      element: 'div',
      attrs: { class: 'hb_setting__popup' },
      child: [
        {
          element: 'div',
          attrs: { class: 'hb_setting__popup__title' },
          html: title,
          child: [
            {
              element: 'button',
              attrs: { class: 'hb_setting-popup__button--close' },
              event: [
                {
                  type: 'click',
                  func: () => {
                    popup.remove();
                  }
                }
              ]
            }
          ]
        },
        {
          element: 'div',
          attrs: {
            class: 'hb_setting-popup__code'
          },
          child: [
            {
              element: 'div',
              attrs: { class: 'hb_setting-popup__code__editor-wrap' },
              child: [
                {
                  element: 'div',
                  attrs: {
                    class: 'hb_setting-popup__code__editor',
                    'data-type': 'html'
                  }
                }
              ]
            },
            {
              element: 'div',
              attrs: { class: 'hb_setting-popup__code__editor-wrap' },
              child: [
                {
                  element: 'div',
                  attrs: {
                    class: 'hb_setting-popup__code__editor',
                    'data-type': 'css'
                  }
                }
              ]
            }
          ]
        }
      ]
    };
    popup = Utils.builder(_popup);
    document.body.appendChild(popup);

    const codeHtmlBody = popup.querySelector('[data-type="html"]');
    const codeCssBody = popup.querySelector('[data-type="css"]');

    const codMirrorOption = {
      lineNumbers: true,
      lineWrapping: true,
      matchBrackets: true,
      mode: 'htmlmixed',
      theme: 'ayu-mirage'
    };

    codMirrorOption.value = html;
    const htmlCode = CodeMirror(codeHtmlBody, codMirrorOption);

    codMirrorOption.value = css;
    const cssCode = CodeMirror(codeCssBody, codMirrorOption);

    htmlCode.setSize('100%', '100%');
    cssCode.setSize('100%', '100%');

    /*
    if (applyFunc) {
      var button_apply = document.createElement('button');
      button_apply.setAttribute('class', 'hb_setting-popup-applybutton');
      button_apply.appendChild(document.createTextNode('Apply'));
      button_apply.addEventListener('click', applyFunc);
      div.appendChild(button_apply);
    }
    */
  }
};

export default codeEditor;
