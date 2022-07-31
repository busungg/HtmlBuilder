const tmpArray = [];

const validateToken = function (token) {
  var whitespace = /[\u0009\u000A\u000C\u000D\u0020]/;

  if (token === '' || whitespace.test(token)) {
    throw new Error('Token must not be empty or contain whitespace.');
  }
};

const inArray = function (array, value) {
  var i;

  if (tmpArray.indexOf) {
    return tmpArray.indexOf.call(array, value);
  }

  for (i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }

  return -1;
};

export default class TokenList {
  constructor(values = []) {
    if (values) {
      values.forEach((value, idx) => {
        this[idx] = value;
      });
    }
    this.length = values.length;
  }

  add() {
    const tokens = arguments;
    for (let i = 0; i < tokens.length; i++) {
      validateToken(tokens[i]);

      if (!this.contains(tokens[i])) {
        this[this.length] = tokens[i];
        this.length++;
      }
    }
  }

  contains(token) {
    validateToken(token);

    return inArray(this, token) !== -1;
  }

  item(index) {
    return this[index] || null;
  }

  remove() {
    const tokens = arguments;
    var key;

    for (let i = 0; i < tokens.length; i++) {
      validateToken(tokens[i]);

      key = inArray(this, tokens[i]);

      if (key !== -1) {
        console.log(key);
        tmpArray.splice.call(this, [key, 1]);
      }
    }
  }

  toggle(token, force) {
    if (this.contains(token)) {
      if (force) {
        return true;
      }

      this.remove(token);

      return false;
    } else {
      if (force === false) {
        return false;
      }

      this.add(token);

      return true;
    }
  }

  toString() {
    return tmpArray.join.call(this, ' ');
  }
}
