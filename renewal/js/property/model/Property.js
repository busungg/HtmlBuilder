import Utils from '../../utils/utils';

class Proeprty {
  constructor(config) {
    const _config = JSON.parse(JSON.stringify(config));

    this.title = _config.title;
    this.category = _config.category;
    this.prop = _config.prop;
    this.targetComponent;
  }

  render(option) {
    this.dom = Utils.builder(option);
    return this.dom;
  }
}

export default Proeprty;
