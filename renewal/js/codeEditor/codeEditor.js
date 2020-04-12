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

    const popup = {
      element: 'div',
      attrs: {
        class: 'hb_setting__popup'
      },
      child: []
    };

    const popupDiv = document.createElement('div');
    popupDiv.setAttribute('class', 'hb_setting__popup');

    const titleDiv = document.createElement('div');
    titleDiv.setAttribute('class', 'hb_setting__popup__title');
    titleDiv.appendChild(document.createTextNode(title));

    const buttonCancel = document.createElement('button');
    buttonCancel.setAttribute('class', 'hb_setting-popup__button--close');
    buttonCancel.addEventListener('click', () => {
      popupDiv.remove();
    });
    titleDiv.appendChild(buttonCancel);

    const codeDiv = document.createElement('div');
    codeDiv.setAttribute('class', 'hb_setting-popup__code');

    const htmlDiv = document.createElement('div');
    htmlDiv.setAttribute('class', 'hb_setting-popup__code__editor-wrap');
    const htmlEditor = document.createElement('div');
    htmlEditor.setAttribute('class', 'hb_setting-popup__code__editor');
    htmlDiv.appendChild(htmlEditor);

    const cssDiv = document.createElement('div');
    cssDiv.setAttribute('class', 'hb_setting-popup__code__editor-wrap');
    const cssEditor = document.createElement('div');
    cssEditor.setAttribute('class', 'hb_setting-popup__code__editor');
    cssDiv.appendChild(cssEditor);

    codeDiv.appendChild(htmlDiv);
    codeDiv.appendChild(cssDiv);

    popupDiv.appendChild(titleDiv);
    popupDiv.appendChild(codeDiv);

    document.body.appendChild(popupDiv);

    const codMirrorOption = {
      lineNumbers: true,
      // lineWrapping: true,
      matchBrackets: true,
      mode: 'htmlmixed',
      theme: 'ayu-mirage'
    };

    codMirrorOption.value = html;
    const htmlCode = CodeMirror(htmlEditor, codMirrorOption);

    codMirrorOption.value = css;
    const cssCode = CodeMirror(cssEditor, codMirrorOption);

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
