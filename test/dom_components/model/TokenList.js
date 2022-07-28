import chai from 'chai';
import TokenList from '../../../src/dom_components/model/TokenList';

const { assert } = chai;
chai.should();

describe('TokenList', () => {
  let tokenList = new TokenList(['test1']);
  /*
  before(() => {
    tokenList = new TokenList(['test1']);
    console.log('========================');
  });
  */

  describe('properties', () => {
    it('should return length 1', () => {
      assert.equal(tokenList.length, 1);
    });

    it('should return value "test1"', () => {
      assert.equal(tokenList.toString(), 'test1');
    });
  });

  describe('methods', () => {
    it('should return "test1" item(0)', () => {
      assert.equal(tokenList.itme(0), 'test1');
    });

    it('should return true contains(test1)', () => {
      assert.equal(tokenList.contains('test1'), 'test1');
    });

    describe('add()', () => {
      tokenList.add('test2', 'test3');

      it('should return item(1) "test2"', () => {
        assert.equal(tokenList.item(1), 'test2');
      });
      it('should return length 2', () => {
        assert.equal(tokenList.length, 2);
      });
      it('should return item(2) "test3"', () => {
        assert.equal(tokenList.item(2), 'test3');
      });
      it('should return length 3', () => {
        assert.equal(tokenList.length, 2);
      });
    });

    describe('remove()', () => {
      tokenList.remove('test1');
      it('should return item(0) "test2"', () => {
        assert.equal(tokenList.item(0), 'test2');
      });
      it('should return length 1', () => {
        assert.equal(tokenList.length, 2);
      });

      tokenList.remove('test1', 'test2');
      it('should item(0) return error', () => {
        assert.equal(tokenList.item(0), 'test2');
      });
      it('should return length 0', () => {
        assert.equal(tokenList.length, 0);
      });
    });

    it('should replace class "test1" to "replaceTest1"', () => {
      tokenList.add('test1');
      tokenList.replace('test1', 'replaceTest1');
      assert.equal(tokenList.item(0), 'replaceTest1');
    });

    it('should return keys, keys()', () => {
      for (let { key, value } of tokenList.keys()) {
        assert.equal(tokenList[key], value);
      }
    });

    if (
      ('should return values, values()',
      function () {
        for (let { key, value } of tokenList.keys()) {
          assert.equal(tokenList[key], value);
        }
      })
    );
  });
});
