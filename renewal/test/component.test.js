require('jsdom-global')();
import Component from '../js/component/model/Component';

// Assertion Styles
import chai from 'chai';
const assert = chai.assert;
const expect = chai.expect;
chai.should();

describe('Component', function () {
  //전체 테스트 할 수 있도록 미리 layout을 만들어 두어야 한다.

  let _option, div;
  before(function () {
    _option = {
      element: 'div',
      attrs: {
        class: ['class1', 'class2']
      },
      canHaveChild: true
    };

    div = new Component(_option, document.body);
  });

  // Debug Test
  describe('Create 테스트(div)', function () {
    it('dom 확인', function () {
      div.dom.nodeName.should.equal('DIV');
    });

    it('class 확인', function () {
      const classList = [...div.dom.classList];
      classList.indexOf('class1').should.not.equal(-1);
      classList.indexOf('class2').should.not.equal(-1);
    });

    it('canHaveChild 확인', function () {
      div.getOption().canHaveChild.should.equal(true);
    });

    it('option 복사 확인', function () {
      const option = div.getOption();
      option.element = 'change_div';

      assert.notEqual(_option.element, option.element);
    });
  });

  describe('Component click event 테스트', function () {
    it('두번 click', function () {
      if (div) {
        div.dom.click();
        div.dom.click();

        assert.equal(div.dom.getAttribute('draggable'), null);
        assert.equal([...div.dom.classList].indexOf('hb_selected'), -1);
      } else {
        console.log(div);
      }
    });

    it('한번 click', function () {
      div.dom.click();

      div.dom.getAttribute('draggable').should.equal('true');
      assert.notEqual([...div.dom.classList].indexOf('hb_selected'), -1);
    });

    it('InitChildCss', function () {
      div.dom.appendChild(document.createElement('div'));

      expect(div.initChildCSS.bind(div)).to.not.throw();
    });
  });
});
