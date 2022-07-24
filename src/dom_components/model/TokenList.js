class TokenList {
  constructor() {
    this = [];
  }
}

var TokenList = function (ids) {
  'use strict';
  var idsArray = [],
    self = this,
    parse = function (id, functionName, cb) {
      var search = id.toString();
      if (search.split(' ').length > 1) {
        throw new Error(
          "Failed to execute '" +
            functionName +
            "' on 'TokenList': The token provided ('" +
            search +
            "') contains HTML space characters, which are not valid in tokens.');"
        );
      } else {
        cb(search);
      }
    };

  function triggerAttributeChange() {
    if (self.tokenChanged && typeof self.tokenChanged === 'function') {
      self.tokenChanged(idsArray.toString());
    }
  }

  if (ids && typeof ids === 'string') {
    idsArray = ids.split(' ');
  }
  self.item = function (index) {
    return idsArray[index];
  };

  self.contains = function (id) {
    parse(id, 'contains', function (search) {
      return idsArray.indexOf(search) !== -1;
    });
  };

  self.add = function (id) {
    parse(id, 'add', function (search) {
      if (idsArray.indexOf(search) === -1) {
        idsArray.push(search);
      }
      triggerAttributeChange();
    });
  };

  self.remove = function (id) {
    parse(id, 'remove', function (search) {
      idsArray = idsArray.filter(function (item) {
        return item !== id;
      });
      triggerAttributeChange();
    });
  };

  self.toggle = function (id) {
    parse(id, 'toggle', function (search) {
      if (!self.contains(search)) {
        self.add(search);
      } else {
        self.remove(search);
      }
    });
  };

  self.tokenChanged = null;

  self.toString = function () {
    var tokens = '',
      i;
    if (idsArray.length > 0) {
      for (i = 0; i < idsArray.length; i = i + 1) {
        tokens = tokens + idsArray[i] + ' ';
      }
      tokens = tokens.slice(0, tokens.length - 1);
    }
    return tokens;
  };
};
