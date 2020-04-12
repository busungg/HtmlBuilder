const assert = require('assert');
describe('테스트 환경 구축 확인', function () {
  describe('assert 확인', function () {
    it('1을 넘겨야 한다.', function () {
      assert.equal(1, 1);
    });
  });
});
