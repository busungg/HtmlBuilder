import Utils from '../../utils/utils';

class Setting {
  constructor(config, target) {
    const _config = JSON.parse(JSON.stringify(config));

    this.title = _config.title;
    this.category = _config.category;
    this.target = target;
  }

  render(option) {
    this.dom = Utils.builder(option);
    return this.dom;
  }
}

export default Setting;
