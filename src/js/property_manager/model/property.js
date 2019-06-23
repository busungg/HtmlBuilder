class Proeprty {
  constructor() {
    this.prop = null;
    this.dom = null;
    this.selected = null;
    this.callback = null;
  }

  set property(prop) {
    this.prop = {};

    this.prop.name = prop.name;
    this.prop.title = prop.title;
    this.prop.attr_type = prop.attr_type;
    this.prop.category = prop.category;
  }

  get property() {
    return this.prop;
  }

  set dom(dom) {
    this.dom = dom;
  }

  get dom() {
    return this.dom;
  }

  set selected(selected) {
    this.selected = selected;
  }

  get selected() {
    return this.selected;
  }

  update() {}

  render() {
    return null;
  }
};

module.exports = Proeprty;