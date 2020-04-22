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
        class: ['class1', 'class2'],
        style: 'width: 100px; height:100px;'
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

  describe('click event 테스트', function () {
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

    it('click 시 prop 전달', function () {});

    it('두번 click 시 prop 전달', function () {});
  });

  describe('내부 함수 테스트', function () {
    before(function () {
      const _option = {
        element: 'div',
        attrs: {
          class: [
            'hb_border-contain',
            'hb_border-top-contain',
            'hb_border-top-move',
            'hb_border-bottom-move',
            'hb_border-left-move',
            'hb_border-right-move'
          ],
          style: 'width: 50px; height: 50px; margin: 20px;'
        },
        canHaveChild: true
      };

      const div1 = new Component(_option, document.body);

      div.dom.appendChild(document.createElement('div'));
      div.dom.appendChild(div1.dom);
    });

    it('InitChildCss', function () {
      [...div.dom.children].forEach((child) => {
        console.log(`InitChildCss test ${child.getAttribute('class')}`);
      });

      expect(div.initChildCSS.bind(div)).to.not.throw();
      [...div.dom.children].forEach((child) => {
        const classList = [...child.classList];
        classList.indexOf('hb_border-contain').should.equal(-1);
        classList.indexOf('hb_border-top-contain').should.equal(-1);
        classList.indexOf('hb_border-top-move').should.equal(-1);
        classList.indexOf('hb_border-bottom-move').should.equal(-1);
        classList.indexOf('hb_border-left-move').should.equal(-1);
        classList.indexOf('hb_border-right-move').should.equal(-1);
      });
    });

    it('getNearChild', function () {
      expect(function () {
        div.getNearChild.bind(div)(0, 0);
      }).to.not.throw();

      const near = div.getNearChild.bind(div)(60, 80);
      console.log(`getNearChild ${[...div.dom.children]}`);

      expect(near.child.construct).to.deep.equal(
        div.dom.children[1].component.construct
      );
      expect(near.order).to.equal(1);
    });
  });
});
