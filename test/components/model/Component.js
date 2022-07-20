import chai from 'chai';
import Component from '../../../src/components/model/Component';

const { assert } = chai;
chai.should();

describe('Component', () => {
  let component;
  before(() => {
    component = new Component();
    component.value = '1';
    component.name = 'component';
    component.id = 'c1';
  });

  describe('attributes', () => {
    describe('properties', () => {
      it('should return attributes { value: 1, name: "component"}', () => {
        const expectResult = {
          id: 'c1',
          value: 1,
          name: 'component'
        };

        Object.entries(component.attributes).forEach(([key, value]) => {
          assert.equal(value, expectResult[key]);
        });
      });

      it('should return value "1"', () => {
        assert.equal(component.value, '1');
      });

      it('should return name "component"', () => {
        assert.equal(component.name, 'component');
      });

      it('should return id "c1"', () => {
        assert.equal(component.id, 'c1');
      });
    });

    describe('methods', () => {
      it('should set properties "{id: c2, value: 1, name: c2}"', () => {
        component.set({
          id: 'c2',
          value: 1,
          name: 'c2'
        });

        const expectResult = {
          id: 'c2',
          value: 1,
          name: 'c2'
        };

        Object.entries(component.attributes).forEach(([key, value]) => {
          assert.equal(value, expectResult[key]);
        });
      });
    });
  });

  describe('classList', () => {
    describe('properties', () => {
      it('should return length 1', () => {});

      it(('should return value "test1"', function () {}));
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
