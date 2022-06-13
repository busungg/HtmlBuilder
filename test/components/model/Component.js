import chai from 'chai';
import Component from '../../../src/components/model/Component';

const assert = chai.assert;
const expect = chai.expect;
chai.should();

describe('Component', () => {
  let component;
  before(() => {
    component = new Component();
    console.log(component);
    component.set('value', '1');
    component.set('name', 'component');
  });

  describe('attribute', function () {
    it('should return value "1"', function () {
      assert.equal(component.value, '1');
    });

    it('should return name', function () {
      assert.equal(component.name, 'component');
    });
  });
});
