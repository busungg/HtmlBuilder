import chai from 'chai';
import Component from '../../../src/dom_components/model/Component';

const { assert } = chai;
chai.should();

describe('Component', () => {
  describe('attributes', () => {
    let component;
    before(() => {
      component = new Component();
      component.value = '1';
      component.name = 'component';
      component.id = 'c1';
    });

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
});
