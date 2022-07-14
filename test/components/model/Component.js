import chai from 'chai';
import Component from '../../../src/components/model/Component';

const { assert } = chai;
chai.should();

describe('Component', () => {
  let component;
  before(() => {
    component = new Component();
    component.set('value', '1');
    component.set('name', 'component');
  });

  describe('attributes', () => {
    it('should return attributes { value: 1, name: "component"}', () => {
      const expectResult = {
        value: 1,
        name: 'component'
      };

      Object.entries(component.attributes).forEach(([key, value]) => {
        console.log(key, value);
        assert.equal(value, expectResult[key]);
      });
    });

    it('should return value "1"', () => {
      console.log(component);

      assert.equal(component.value, '1');
    });

    it('should return name "component"', () => {
      assert.equal(component.name, 'component');
    });
  });

  describe('classList', () => {
    describe('properties', () => {
      it('should return length 1', () => {});

      if (('should return value "test1"', function () {}));
    });

    describe('methods', () => {
      it('should return "test1" item()', () => {});

      it('should return ture contains()', () => {});

      it('should add class "test2"', () => {});

      it('should remove class "test2"', () => {});

      it('should replace class "test1" to "replaceTest1"', () => {});

      it('should return keys, keys()', () => {});

      if (('should return values, values()', function () {}));
    });
  });
});
