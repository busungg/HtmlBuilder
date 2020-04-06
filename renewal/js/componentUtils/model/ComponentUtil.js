import Utils from '../../utils/utils';

class ComponentUtil {
  constructor(config) {
    const _config = JSON.parse(JSON.stringify(config));

    this.title = _config.title;
    this.icon = _config.icon;
  }

  render(option) {
    this.dom = Utils.builder(option);
    return this.dom;
  }
}

export default ComponentUtil;
