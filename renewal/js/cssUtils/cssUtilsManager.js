import htmlBuilderCss from './css/html_builder.css';
import defaultCss from './css/default.css';

import Utils from '../utils/utils';

const cssUtilsManager = {
  render(parent) {
    let style = Utils.builder({
      element: 'style',
      text: htmlBuilderCss,
      attrs: {
        'data-include': 'N'
      }
    });
    parent.appendChild(style);

    style = Utils.builder({
      element: 'style',
      text: defaultCss,
      attrs: {
        'data-include': 'Y'
      }
    });
    parent.appendChild(style);
  }
};

export default cssUtilsManager;
