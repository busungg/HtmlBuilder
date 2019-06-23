class Proeprty {
  constructor() {
    this.prop = null;
    this.element = null;
    this.selectedElement = null;
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

  set dom(element) {
    this.element = element;
  }

  get dom() {
    return this.element;
  }

  set selected(selectedElement) {
    this.selectedElement = selectedElement;
  }

  get selected() {
    return this.selectedElement;
  }

  update() {}

  render() {
    return null;
  }
};

module.exports = Proeprty;