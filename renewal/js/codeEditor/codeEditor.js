import './css/codeEditor.css';

import CodeMirror from 'codemirror';

const codeEditor = {
  render(html, css) {

    const div = document.createElement('div');
    div.setAttribute('class', 'hb_setting-popup');

    const divTitle = document.createElement('div');
    divTitle.setAttribute('class', 'hb_setting-popup-titlediv');
    divTitle.appendChild(document.createTextNode(''));

    const buttonCancel = document.createElement('button');
    buttonCancel.setAttribute('class', 'hb_setting-popup-clossbutton');
    buttonCancel.addEventListener('click', () => {
      div.remove();
    });
    divTitle.appendChild(buttonCancel);

    const divText = document.createElement('div');
    divText.setAttribute('class', 'hb_setting-popup-textdiv');

    /*
    const textarea = document.createElement('textarea');
    textarea.setAttribute('class', 'hb_setting-popup-textarea');
    textarea.setAttribute('style', 'resize: none');
    if (text) {
      textarea.value = text;
    }
    divText.appendChild(textarea);
    */

    div.appendChild(divTitle);
    div.appendChild(divText);

    /*
    if (applyFunc) {
      var button_apply = document.createElement('button');
      button_apply.setAttribute('class', 'hb_setting-popup-applybutton');
      button_apply.appendChild(document.createTextNode('Apply'));
      button_apply.addEventListener('click', applyFunc);
      div.appendChild(button_apply);
    }
    */

    document.body.appendChild(div);

    CodeMirror(divText, {
      value: '',
      lineNumbers: true,
      mod: 'htmlmixed'
    });
  }
};

export default codeEditor;
