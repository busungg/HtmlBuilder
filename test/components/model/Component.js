import chai from 'chai';
import Component from '../../../src/components/model/Component';

const assert = chai.assert;
const expect = chai.expect;
chai.should();

describe('Component', () => {
  let component;
  before(() => {
    component = new Component();
  });

  describe('attribute', function () {
    it('should return value', function () {
      assert.equal(component.value, -1);
    });

    it('should return name', function () {
      assert.equal(component.name, undefined);
    });
  });
});
