import { isArray } from 'lodash';

const validateToken = function (token) {
  var whitespace = /[\u0009\u000A\u000C\u000D\u0020]/;

  if (token === '' || whitespace.test(token)) {
    throw new Error('Token must not be empty or contain whitespace.');
  }
};

export default class TokenList extends Array {
  constructor(tokens = []) {
    super();

    if (tokens && isArray(tokens)) {
      tokens.forEach((value) => {
        this.push(value);
      });
    }
  }

  add() {
    const tokens = arguments;
    for (let i = 0; i < tokens.length; i++) {
      validateToken(tokens[i]);

      if (!this.includes(tokens[i])) {
        this.push(tokens[i]);
      }
    }
  }

  contains(token) {
    validateToken(token);

    return this.includes(token);
  }

  item(index) {
    return this[index] || null;
  }

  remove() {
    const tokens = arguments;
    var key;

    for (let i = 0; i < tokens.length; i++) {
      validateToken(tokens[i]);

      key = this.indexOf(tokens[i]);

      if (key !== -1) {
        this.splice(key, 1);
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
    return this.join(' ');
  }

  replace(oldToken, newToken) {
    if (this.contains(oldToken)) {
      this[this.indexOf(oldToken)] = newToken;
      return true;
    }

    return false;
  }
}
