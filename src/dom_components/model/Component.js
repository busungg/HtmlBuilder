import { Model } from '../../common';
import { cloneDeep } from 'lodash';

export default class Component extends Model {
  constructor() {
    super();
    this._classList = [];
  }

  get value() {
    return this.get('value');
  }

  set value(_value) {
    this.set('value', _value);
  }

  get name() {
    return this.get('name');
  }

  set name(value) {
    this.set('name', value);
  }

  get classList() {}

  set classList(list = []) {
    this._classList.push(class);
  }
}
