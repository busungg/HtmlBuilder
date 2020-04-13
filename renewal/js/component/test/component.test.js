//import Component from '../model/Component';
import Component from '../model/Component';

const assert = require('assert');

describe('Component ', function () {
  describe('create div component', function () {
    const _option = {
      element: 'div',
      attrs: {
        class: [
          'block_half',
          'block_border-basic',
          'block_padding-10px',
          'block_margin-10px'
        ]
      },
      canHaveChild: true
    };
    const div = new Component(_option, document.body);

    it('component dom 확인', function () {
      assert.equal(div.dom.nodeName, 'DIV');
    });

    it('component class 확인', function () {
      const classList = [...div.dom.classList];
      assert.notEqual(classList.indexOf('block_half'), -1);
      assert.notEqual(classList.indexOf('block_border-basic'), -1);
      assert.notEqual(classList.indexOf('block_padding-10px'), -1);
      assert.notEqual(classList.indexOf('block_margin-10px'), -1);
    });

    it('component canHaveChild 확인', function () {
      assert.equal(div.getOption().canHaveChild, true);
    });

    it('option 복사 확인', function () {
      const option = div.getOption();
      option.element = 'change_div';

      assert.notEqual(_option.element, option.element);
    });
  });
});
