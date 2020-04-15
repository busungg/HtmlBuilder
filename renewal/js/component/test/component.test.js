// Test Class
import componentManager from '../componentManager';
import Component from '../model/Component';
import {
  componentObserver,
  propObserver,
  componentUtilsObserver
} from '../../observer/observerManager';

// Assertion Styles
const assert = require('assert');
const should = require('chai').should();

describe('Component', function () {
  // Debug Test
  describe('Debug Test', function () {
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
  });

  // Run Test
  describe('Run Test', function () {
    let div = null;
    before(function () {
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
      div = new Component(_option, componentManager.frameComponent.dom);
    });

    describe('Component click event 테스트', function () {
      it('selected = true 상태에서 click', function () {
        if (div) {
          div.selected = true;
          div.dom.click();

          // js-dom내에서 이벤트 호출 시 this 값을 강제로 Element로 변경
          // event를 적용할 수 있도록 수정 필요
          div.dom.getAttribute('draggable').should.equal(undefined);

          //assert.equal(div.dom.getAttribute('draggable'), undefined);
          //assert.equal([...div.dom.classList].indexOf('hb_selected'), -1);
          //assert.notEqual(context.pP1, null);
          //assert.notEqual(context.pP2, null);
          //assert.notEqual(context.c1, null);
        } else {
        }
      });

      it('selected = false 상태에서 click', function () {
        div.selected = false;
        div.dom.click();

        div.dom.getAttribute('draggable').should.equal('true');

        //assert.equal(div.dom.getAttribute('draggable'), 'true');
        //assert.notEqual([...div.dom.classList].indexOf('hb_selected'), -1);
        //assert.equal(context.pP1, null);
        //assert.equal(context.c1, null);
      });
    });

    //it('Component Mouseover event 테스트', function () {});
  });
});
