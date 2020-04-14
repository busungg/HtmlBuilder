import 'jsdom-global/register';
import Component from '../model/Component';
import {
  componentObserver,
  propObserver,
  componentUtilsObserver
} from '../../observer/observerManager';

const assert = require('assert');

describe('Component 테스트', function () {
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

  describe('Component create 테스트(div)', function () {
    it('Component dom 확인', function () {
      assert.equal(div.dom.nodeName, 'DIV');
    });

    it('Component class 확인', function () {
      const classList = [...div.dom.classList];
      assert.notEqual(classList.indexOf('block_half'), -1);
      assert.notEqual(classList.indexOf('block_border-basic'), -1);
      assert.notEqual(classList.indexOf('block_padding-10px'), -1);
      assert.notEqual(classList.indexOf('block_margin-10px'), -1);
    });

    it('Component canHaveChild 확인', function () {
      assert.equal(div.getOption().canHaveChild, true);
    });

    it('Component option 복사 확인', function () {
      const option = div.getOption();
      option.element = 'change_div';

      assert.notEqual(_option.element, option.element);
    });
  });

  describe('Component event 테스트', function () {
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

    describe('Component click event 테스트', function () {
      const context = {
        component(p1) {
          this.c1 = p1;
        },
        prop(p1, p2) {
          this.pP1 = p1;
          this.pP2 = p2;
        }
      };
      componentObserver.register('update', context.component, context);
      propObserver.register('update', context.prop, context);

      it('selected = true 상태에서 click', function () {
        div.selected = true;
        div.dom.click();
        assert.equal(div.dom.getAttribute('draggable'), undefined);
        assert.equal([...div.dom.classList].indexOf('hb_selected'), -1);
        assert.notEqual(context.pP1, null);
        assert.notEqual(context.pP2, null);
        assert.notEqual(context.c1, null);
      });

      it('selected = false 상태에서 click', function () {
        div.selected = false;
        div.dom.click();
        assert.equal(div.dom.getAttribute('draggable'), 'true');
        assert.notEqual([...div.dom.classList].indexOf('hb_selected'), -1);
        assert.equal(context.pP1, null);
        assert.equal(context.c1, null);
      });
    });

    //it('Component Mouseover event 테스트', function () {});
  });
});
