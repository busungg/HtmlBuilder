var HtmlBuilder =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * propery css id
 */
module.exports = {
  sub_category_toggle_body_div: 'hb_sub_category_toggle_body_div',
  category_body_div: 'hb_category_body_div',
  category_body_title_div: 'hb_category_body_title_div',
  category_body_title_label: 'hb_category_body_title_label',
  prop_body_div: 'hb_prop_body_div',
  prop_body_title_div: 'hb_prop_body_title_div',
  prop_body_title_label: 'hb_prop_body_title_label',
  prop_body_set_div: 'hb_prop_body_set_div',
  prop_body_set_text: 'hb_prop_body_set_text',
  prop_body_set_btn: 'hb_prop_body_set_btn',
  prop_body_set_select: 'hb_prop_body_set_select',
  prop_body_set_multi_select: 'hb_prop_body_set_multi_select',
  prop_body_set_color: 'hb_prop_body_set_color'
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var config = __webpack_require__(4);

var configs = config.configs;

var Proeprty =
/*#__PURE__*/
function () {
  function Proeprty() {
    _classCallCheck(this, Proeprty);

    this.prop = null;
    this.element = null;
    this.selectedElement = null;
    this._callback = null;
  }

  _createClass(Proeprty, [{
    key: "eventDetect",
    value: function eventDetect(e) {
      var propName = e.target.getAttribute('hb_set_prop_name');

      var _config;

      for (var i = 0, len = configs.length; i < len; i++) {
        _config = configs[i];

        if (_config.prop.name === propName) {
          if (_config.model.event) {
            _config.model.event(e);
          }

          break;
        }
      }
    }
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }, {
    key: "property",
    set: function set(prop) {
      this.prop = {};
      this.prop.name = prop.name;
      this.prop.title = prop.title;
      this.prop.attr_type = prop.attr_type;
      this.prop.category = prop.category;
    },
    get: function get() {
      return this.prop;
    }
  }, {
    key: "dom",
    set: function set(element) {
      this.element = element;
    },
    get: function get() {
      return this.element;
    }
  }, {
    key: "selected",
    set: function set(selectedElement) {
      this.selectedElement = selectedElement;
    },
    get: function get() {
      return this.selectedElement.element;
    }
  }, {
    key: "callback",
    set: function set(_callback) {
      this._callback = _callback;
    },
    get: function get() {
      return this._callback.func;
    }
  }]);

  return Proeprty;
}();

;
module.exports = Proeprty;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var utils = {
  builder: function builder(option) {
    try {
      var parent = document.createElement(option.element);

      for (key in option.attr) {
        if (option.attr[key] != null && option.attr[key] != undefined) {
          if (Array.isArray(option.attr[key])) {
            var values = '';

            for (keyArray in option.attr[key]) {
              values += option.attr[key][keyArray] + ' ';
            }

            parent.setAttribute(key, values);
          } else {
            parent.setAttribute(key, option.attr[key]);
          }
        }
      }

      if (option.text) {
        parent.appendChild(document.createTextNode(option.text));
      }

      if (option.html) {
        parent.innerHTML = option.html;
      }

      if (option.event) {
        for (var i = 0, len = option.event.length; i < len; i++) {
          parent.addEventListener(option.event[i].type, option.event[i].func);
        }
      }

      if (option.child) {
        for (var i = 0, len = option.child.length; i < len; i++) {
          parent.appendChild(utils.builder(option.child[i]));
        }
      }

      return parent;
    } catch (err) {
      console.log(err.message);
    }
  },
  getQueryOption: function getQueryOption() {
    var option = {};

    try {
      for (var i = 0, len = arguments.length; i < len; i += 2) {
        option[arguments[i]] = arguments[i + 1];
      }
    } catch (err) {
      console.log(err.message);
    }

    return option;
  },
  getElementByAttribute: function getElementByAttribute(options) {
    var query = '';

    for (var key in options) {
      query += '[' + key + '="' + options[key] + '"]';
    }

    return document.querySelector(query);
  },
  getElementsByAttribute: function getElementsByAttribute(options) {
    var query = '';

    for (var key in options) {
      query += '[' + key + '="' + options[key] + '"]';
    }

    return document.querySelectorAll(query);
  },
  getJustTextContent: function getJustTextContent(element) {
    var copyElement = element.cloneNode(true);

    while (copyElement.firstElementChild) {
      copyElement.removeChild(copyElement.firstElementChild);
    }

    return copyElement.textContent;
  },
  rgb2Hex: function rgb2Hex(rgbStr) {
    var rgb = rgbStr.split('(')[1].split(')')[0].split(',');
    var r, g, b;
    r = parseInt(rgb[0]).toString(16);
    g = parseInt(rgb[1]).toString(16);
    b = parseInt(rgb[2]).toString(16);
    var hex = '#' + (r.length == 2 ? r : '0' + r) + (g.length == 2 ? g : '0' + g) + (b.length == 2 ? b : '0' + b);
    return hex;
  },
  beautifyHtml: function beautifyHtml(parent, tab, tabIdx, html) {
    try {
      if (tabIdx == -1 && parent.children.length == 0) {
        return;
      }

      if (tabIdx != -1) {
        var clone = parent.cloneNode(true);

        while (clone.firstElementChild) {
          clone.removeChild(clone.firstElementChild);
        }

        var tags = clone.outerHTML.replace(/\n/g, '').split('</');
        html.result += '\n' + tab.repeat(tabIdx) + tags[0];
      }

      if (parent.children.length == 0) {
        if (tags.length == 2) {
          html.result += '\n' + tab.repeat(tabIdx) + '</' + tags[1];
        }

        return;
      } else {
        for (var i = 0, len = parent.children.length; i < len; i++) {
          utils.beautifyHtml(parent.children[i], tab, tabIdx + 1, html);
        }

        if (tabIdx != -1) {
          if (tags.length == 2) {
            html.result += '\n' + tab.repeat(tabIdx) + '</' + tags[1];
          }
        }
      }
    } catch (err) {
      console.log(err.message);
    }
  },
  obj2Css: function obj2Css(css) {
    try {
      var cssText = '';
      var tab = ' '.repeat(4);
      cssText += css.title + ' {\n';

      for (attr in css.content) {
        cssText += tab + attr + ': ' + css.content[attr] + ';\n';
      }

      cssText += '}';
      return cssText;
    } catch (err) {
      console.log(err.message);
    }
  }
};
module.exports = utils;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
    1. block 종류
    - Basic
    1) Div
    2) P
    
    - Forms
    1) Input(Text)
    2) Input(Number)
    3) Text Area
    4) Link
    5) Image
    6) Select
    7) Button
    8) Label
    9) Checkbox
    10) Radio
*/
var configs = [{
  title: 'Div',
  option: {
    element: 'div',
    attrs: {
      "class": ['block_half', 'block_border-basic', 'block_padding-10px', 'block_margin-10px']
    }
  },
  icon: 'hb_btn-div'
}, {
  title: 'P',
  option: {
    element: 'p',
    attrs: {
      "class": ['block_border-basic']
    },
    text: 'P element text'
  },
  icon: 'hb_btn-p'
}, {
  title: 'Input (Text)',
  option: {
    element: 'input',
    attrs: {
      type: 'text',
      "class": ['block_border-basic', 'form-control']
    }
  },
  icon: 'hb_btn-input'
}, {
  title: 'Input (Number)',
  option: {
    element: 'input',
    attrs: {
      type: 'number',
      "class": ['block_border-basic', 'form-control']
    }
  },
  icon: 'hb_btn-input'
}, {
  title: 'Text Area',
  option: {
    element: 'textarea',
    attrs: {
      "class": ['block_border-basic', 'form-control']
    }
  },
  icon: 'hb_btn-text-area'
}, {
  title: 'Link',
  option: {
    element: 'a',
    attrs: {
      "class": ['block_border-basic'],
      target: '_blank'
    },
    text: 'A element text'
  },
  icon: 'hb_btn-link'
}, {
  title: 'Image',
  option: {
    element: 'img',
    attrs: {
      "class": ['block_half', 'block_border-basic', 'img-thumbnail']
    }
  },
  icon: 'hb_btn-img'
}, {
  title: 'Select',
  option: {
    element: 'select',
    attrs: {
      "class": ['block_select_half_25px', 'block_border-basic']
    }
  },
  icon: 'hb_btn-select'
}, {
  title: 'Button',
  option: {
    element: 'button',
    attrs: {
      "class": ['block_border-basic', 'btn', 'btn-primary']
    },
    text: 'Button element text'
  },
  icon: 'hb_btn-button'
}, {
  title: 'Label',
  option: {
    element: 'label',
    attrs: {
      "class": ['block_border-basic']
    },
    text: 'Label element text'
  },
  icon: 'hb_btn-label'
}, {
  title: 'Checkbox',
  option: {
    element: 'input',
    attrs: {
      type: 'checkbox',
      "class": ['block_border-basic'],
      style: 'width:15px; height:15px;'
    }
  },
  icon: 'hb_btn-check-box'
}, {
  title: 'Radio',
  option: {
    element: 'input',
    attrs: {
      type: 'radio',
      "class": ['block_border-basic'],
      style: 'width:15px; height:15px;'
    }
  },
  icon: 'hb_btn-radio'
}, {
  title: 'Section',
  option: {
    element: 'section',
    attrs: {
      "class": ['block_border-basic', 'block_half']
    }
  },
  icon: 'hb_btn-radio'
}, {
  title: 'Form',
  option: {
    element: 'form',
    attrs: {
      "class": ['block_border-basic', 'block_half']
    }
  },
  icon: 'hb_btn-radio'
}];
module.exports = configs;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * Default Attr configs
 */
var category = [{
  name: 'common',
  title: 'Common'
}, {
  name: 'src',
  title: 'Src'
}, {
  name: 'href',
  title: 'Href'
}, {
  name: 'style2css',
  title: 'Style to CSS'
}, {
  name: 'position',
  title: 'Position'
}, {
  name: 'size',
  title: 'Size'
}, {
  name: 'font',
  title: 'Font'
}, {
  name: 'border',
  title: 'Border'
}, {
  name: 'background',
  title: 'Background'
}];
var configs = [//For attributes
{
  prop: {
    name: 'id',
    title: 'Id',
    attr_type: 'attr',
    category: 'common'
  },
  model_name: 'propertyText'
}, {
  prop: {
    name: 'name',
    title: 'Name',
    attr_type: 'attr',
    category: 'common'
  },
  model_name: 'propertyText'
}, {
  prop: {
    name: 'title',
    title: 'Title',
    attr_type: 'attr',
    category: 'common'
  },
  model_name: 'propertyText'
}, {
  prop: {
    name: 'text',
    title: 'Text',
    attr_type: 'attr',
    category: 'common'
  },
  model_name: 'propertyTextAppend'
}, {
  prop: {
    name: 'value',
    title: 'Value',
    attr_type: 'attr',
    category: 'common'
  },
  model_name: 'propertyText'
}, {
  prop: {
    name: 'src',
    title: 'Src',
    attr_type: 'attr',
    category: 'src'
  },
  model_name: 'propertyText'
}, {
  prop: {
    name: 'href',
    title: 'Href',
    attr_type: 'attr',
    category: 'href'
  },
  model_name: 'propertyText'
}, {
  prop: {
    name: 'class',
    title: 'Class',
    attr_type: 'attr',
    category: 'common'
  },
  model_name: 'propertyClass'
}, {
  prop: {
    name: 'style2css',
    title: 'Style to CSS',
    attr_type: 'style2css',
    category: 'style2css'
  },
  model_name: 'propertyStyle2Save'
}, // For styles
//Display
{
  prop: {
    name: 'display',
    title: 'Display',
    attr_type: 'style',
    options: ['', 'block', 'inline', 'inline-block', 'none'],
    category: 'position'
  },
  model_name: 'propertySelect'
}, //Position
{
  prop: {
    name: 'position',
    title: 'Position',
    attr_type: 'style',
    options: ['', 'static', 'relative', 'absolute'],
    category: 'position'
  },
  model_name: 'propertySelect'
}, {
  prop: {
    name: 'left',
    title: 'Left',
    attr_type: 'style',
    units: ['px', '%', 'cm', 'mm', 'in'],
    category: 'position'
  },
  model_name: 'propertyTextUnit'
}, {
  prop: {
    name: 'right',
    title: 'Right',
    attr_type: 'style',
    units: ['px', '%', 'cm', 'mm', 'in'],
    category: 'position'
  },
  model_name: 'propertyTextUnit'
}, {
  prop: {
    name: 'top',
    title: 'Top',
    attr_type: 'style',
    units: ['px', '%', 'cm', 'mm', 'in'],
    category: 'position'
  },
  model_name: 'propertyTextUnit'
}, {
  prop: {
    name: 'bottom',
    title: 'Bottom',
    attr_type: 'style',
    units: ['px', '%', 'cm', 'mm', 'in'],
    category: 'position'
  },
  model_name: 'propertyTextUnit'
}, //Float
{
  prop: {
    name: 'float',
    title: 'Float',
    attr_type: 'style',
    category: 'position'
  },
  model_name: 'propertyText'
}, //Width, Height
{
  prop: {
    name: 'width',
    title: 'Width',
    attr_type: 'style',
    units: ['%', 'px', 'auto', 'cm', 'mm', 'in'],
    category: 'size'
  },
  model_name: 'propertyTextUnit'
}, {
  prop: {
    name: 'height',
    title: 'Height',
    attr_type: 'style',
    units: ['%', 'px', 'auto', 'cm', 'mm', 'in'],
    category: 'size'
  },
  model_name: 'propertyTextUnit'
}, //Margin
{
  prop: {
    name: 'margin',
    title: 'Margin',
    attr_type: 'style',
    units: ['px', 'cm', 'mm', 'in'],
    category: 'size'
  },
  model_name: 'propertyTextUnit',
  child: [{
    prop: {
      name: 'margin-top',
      title: 'Margin Top',
      attr_type: 'style',
      units: ['px', 'cm', 'mm', 'in']
    },
    model_name: 'propertyTextUnit'
  }, {
    prop: {
      name: 'margin-bottom',
      title: 'Margin bottom',
      attr_type: 'style',
      units: ['px', 'cm', 'mm', 'in']
    },
    model_name: 'propertyTextUnit'
  }, {
    prop: {
      name: 'margin-left',
      title: 'Margin Left',
      attr_type: 'style',
      units: ['px', 'cm', 'mm', 'in']
    },
    model_name: 'propertyTextUnit'
  }, {
    prop: {
      name: 'margin-right',
      title: 'Margin Right',
      attr_type: 'style',
      units: ['px', 'cm', 'mm', 'in']
    },
    model_name: 'propertyTextUnit'
  }]
}, //Padding
{
  prop: {
    name: 'padding',
    title: 'Padding',
    attr_type: 'style',
    units: ['px', 'cm', 'mm', 'in'],
    category: 'size'
  },
  model_name: 'propertyTextUnit',
  child: [{
    prop: {
      name: 'padding-top',
      title: 'Padding Top',
      attr_type: 'style',
      units: ['px', 'cm', 'mm', 'in']
    },
    model_name: 'propertyTextUnit'
  }, {
    prop: {
      name: 'padding-bottom',
      title: 'Padding Bottom',
      attr_type: 'style',
      units: ['px', 'cm', 'mm', 'in']
    },
    model_name: 'propertyTextUnit'
  }, {
    prop: {
      name: 'padding-left',
      title: 'Padding Left',
      attr_type: 'style',
      units: ['px', 'cm', 'mm', 'in']
    },
    model_name: 'propertyTextUnit'
  }, {
    prop: {
      name: 'padding-right',
      title: 'Padding Right',
      attr_type: 'style',
      units: ['px', 'cm', 'mm', 'in']
    },
    model_name: 'propertyTextUnit'
  }]
}, //Font
{
  prop: {
    name: 'color',
    title: 'Color',
    attr_type: 'style',
    category: 'font'
  },
  model_name: 'propertyColor'
}, {
  prop: {
    name: 'font-weight',
    title: 'Font weight',
    attr_type: 'style',
    options: ['', 'normal', 'bold', 'bolder', 'lighter', 'initial', 'inherit'],
    category: 'font'
  },
  model_name: 'propertySelect'
}, //Border
{
  prop: {
    name: 'border-width',
    title: 'Border width',
    attr_type: 'style',
    units: ['px', 'cm', 'mm', 'in'],
    category: 'border'
  },
  model_name: 'propertyTextUnit',
  child: [{
    prop: {
      name: 'border-left-width',
      title: 'Border left width',
      attr_type: 'style',
      units: ['px', 'cm', 'mm', 'in']
    },
    model_name: 'propertyTextUnit'
  }, {
    prop: {
      name: 'border-right-width',
      title: 'Border right width',
      attr_type: 'style',
      units: ['px', 'cm', 'mm', 'in']
    },
    model_name: 'propertyTextUnit'
  }, {
    prop: {
      name: 'border-top-width',
      title: 'Border top width',
      attr_type: 'style',
      units: ['px', 'cm', 'mm', 'in']
    },
    model_name: 'propertyTextUnit'
  }, {
    prop: {
      name: 'border-bottom-width',
      title: 'Border bottom width',
      attr_type: 'style',
      units: ['px', 'cm', 'mm', 'in']
    },
    model_name: 'propertyTextUnit'
  }]
}, {
  prop: {
    name: 'border-color',
    title: 'Border color',
    attr_type: 'style',
    category: 'border'
  },
  model_name: 'propertyColor',
  child: [{
    prop: {
      name: 'border-left-color',
      title: 'Border left color',
      attr_type: 'style'
    },
    model_name: 'propertyColor'
  }, {
    prop: {
      name: 'border-right-color',
      title: 'Border right color',
      attr_type: 'style'
    },
    model_name: 'propertyColor'
  }, {
    prop: {
      name: 'border-top-color',
      title: 'Border top color',
      attr_type: 'style'
    },
    model_name: 'propertyColor'
  }, {
    prop: {
      name: 'border-bottom-color',
      title: 'Border bottom color',
      attr_type: 'style'
    },
    model_name: 'propertyColor'
  }]
}, {
  prop: {
    name: 'border-style',
    title: 'Border style',
    attr_type: 'style',
    options: ['', 'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial', 'inherit'],
    category: 'border'
  },
  model_name: 'propertySelect',
  child: [{
    prop: {
      name: 'border-left-style',
      title: 'Border left style',
      attr_type: 'style',
      options: ['', 'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial', 'inherit']
    },
    model_name: 'propertySelect'
  }, {
    prop: {
      name: 'border-right-style',
      title: 'Border right style',
      attr_type: 'style',
      options: ['', 'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial', 'inherit']
    },
    model_name: 'propertySelect'
  }, {
    prop: {
      name: 'border-top-style',
      title: 'Border top style',
      attr_type: 'style',
      options: ['', 'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial', 'inherit']
    },
    model_name: 'propertySelect'
  }, {
    prop: {
      name: 'border-bottom-style',
      title: 'Border bottom style',
      attr_type: 'style',
      options: ['', 'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial', 'inherit']
    },
    model_name: 'propertySelect'
  }]
}, //Background
{
  prop: {
    name: 'background',
    title: 'Background',
    attr_type: 'style',
    category: 'background'
  },
  model_name: 'propertyText'
}, {
  prop: {
    name: 'background-color',
    title: 'Background color',
    attr_type: 'style',
    category: 'background'
  },
  model_name: 'propertyColor'
}, //Background Image
{
  prop: {
    name: 'background-image',
    title: 'Background image',
    attr_type: 'style',
    category: 'background'
  },
  model_name: 'propertyText'
}, {
  prop: {
    name: 'background-repeat',
    title: 'Background repeat',
    attr_type: 'style',
    options: ['', 'repeat', 'repeat-x', 'repeat-y', 'no-repeat'],
    category: 'background'
  },
  model_name: 'propertySelect'
}, {
  prop: {
    name: 'background-size',
    title: 'Background size',
    attr_type: 'style',
    options: ['', 'auto', 'cover', 'contain'],
    category: 'background'
  },
  model_name: 'propertySelect'
}];
module.exports = {
  category: category,
  configs: configs
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__(2);

var blockManager = __webpack_require__(6);

var funcManager = __webpack_require__(8);

var layoutManager = __webpack_require__(10);

var propertyManager = __webpack_require__(12);
/**
 * set main view and manages all manager
 */


var mainManager = {
  config: null,
  nav: {
    block: null,
    prop: null,
    setting: null
  },
  init: function init(config) {
    var defaults = {
      container: '#hb_container',
      //전체 화면
      ids: ['!content', '!menu'],
      width: ['80%', '18%'],
      height: ['100%', '100%'],
      css: '#hb_css'
    };
    var c = config || {};

    for (var name in defaults) {
      if (!(name in c)) {
        c[name] = defaults[name];
      }
    }

    mainManager.config = c;

    try {
      //container
      var container = document.getElementById(c.container); //content

      mainManager.initContent(container); //menu

      mainManager.initMenu(container); //layout events

      mainManager.initLayoutEvents(); //selected ui function

      funcManager.init();
      funcManager.render(document.body);
      mainManager.initFuncEvents();
    } catch (err) {
      console.log(err.message);
    } finally {
      return;
    }
  },
  initContent: function initContent(container) {
    //content
    var _content = {
      element: 'div',
      attr: {
        id: mainManager.config.ids[0],
        style: 'width:' + mainManager.config.width[0] + ';height:' + mainManager.config.height[0] + '; float:left; overflow: auto;',
        "class": 'hb_content hb_border-basic' //class: 'hb_content hb_full hb_border-basic'

      }
    };
    var content = utils.builder(_content);
    container.appendChild(content);
    layoutManager.initContentLayout(mainManager.config.ids[0], content.getBoundingClientRect(), content); //for content div resize check -- Resize 이벤트 호출은 Window에서만 가능 이부분을 효과 적으로 만들 수 있다면?

    window.setInterval(function () {
      var content = layoutManager.contentLayout.dom;
      var contentRect = content.getBoundingClientRect();
      var width = content.scrollWidth ? content.scrollWidth : contentRect.width;
      var height = content.scrollHeight ? content.scrollHeight : contentRect.height;

      if (layoutManager.contentLayout.width != width || layoutManager.contentLayout.height != height) {
        layoutManager.updateLayout(layoutManager.contentLayout);
      }
    }, 1000);
  },
  initMenu: function initMenu(container) {
    var menu = utils.builder({
      element: 'div',
      attr: {
        id: mainManager.config.ids[1],
        style: 'width:' + mainManager.config.width[1] + ';height:' + mainManager.config.height[1] + '; float:right; margin-right:15px;',
        "class": 'hb_main-menu hb_border-basic'
      }
    });
    container.appendChild(menu);
    mainManager.initMenuNav(menu);
    mainManager.initMenuNavContent();
    /*
    H.menuSetting(menu); //manager 생성 필요
    H.cssSetting(); //manager 생성 필요
    */
  },
  initMenuNav: function initMenuNav(container) {
    try {
      var click = function click(e) {
        var content = document.getElementById('#main-content');
        var children = content.children;

        for (var i = 0; i < children.length; i++) {
          children[i].style.display = 'none';
        }

        var showDom = mainManager.nav[e.target.value];
        showDom.style.display = 'block';
      };

      var _nav = {
        element: 'div',
        attr: {
          "class": 'hb_nav',
          id: '#main-nav'
        },
        child: [{
          element: 'button',
          attr: {
            "class": 'hb_btn-nav hb_btn-nav-block',
            name: '#main-nav',
            value: 'block'
          },
          event: [{
            type: 'click',
            func: click
          }]
        }, {
          element: 'button',
          attr: {
            "class": 'hb_btn-nav hb_btn-nav-attr',
            name: '#main-nav',
            value: 'prop'
          },
          event: [{
            type: 'click',
            func: click
          }]
        }, {
          element: 'button',
          attr: {
            "class": 'hb_btn-nav hb_btn-nav-setting',
            name: '#main-nav',
            value: 'setting'
          },
          event: [{
            type: 'click',
            func: click
          }]
        }]
      };
      container.appendChild(utils.builder(_nav));
      var _content = {
        element: 'div',
        attr: {
          id: '#main-content',
          "class": 'hb_nav_content'
        },
        child: []
      };
      var content = utils.builder(_content);
      container.appendChild(content);
      var _block = {
        element: 'div',
        attr: {
          "class": 'hb_nav_content-blocks'
        }
      };
      mainManager.nav.block = utils.builder(_block);
      content.appendChild(mainManager.nav.block);
      var _prop = {
        element: 'div',
        attr: {
          "class": 'hb_nav_content-prop',
          style: 'display:none;'
        },
        child: [{
          element: 'div',
          attr: {
            "class": 'hb_nav_content-prop',
            style: 'display:none;'
          }
        }, {
          element: 'div',
          attr: {
            "class": 'hb_nav_content-prop',
            style: 'display:block;'
          },
          text: 'There is no selected Block\nPlease select at least 1 block'
        }]
      };
      mainManager.nav.prop = utils.builder(_prop);
      content.appendChild(mainManager.nav.prop);
      var _setting = {
        element: 'div',
        attr: {
          "class": 'hb_nav_content-prop',
          style: 'display:none;'
        }
      };
      mainManager.nav.setting = utils.builder(_setting);
      content.appendChild(mainManager.nav.setting);
    } catch (err) {
      console.log(err.message);
    }
  },
  initMenuNavContent: function initMenuNavContent() {
    //Block
    blockManager.init();
    blockManager.render(mainManager.nav.block);
    mainManager.initBlockEvents(); //Prop

    propertyManager.init();
    propertyManager.render(mainManager.nav.prop.children[0]);
    mainManager.initPropertyEvents();
  },
  initBlockEvents: function initBlockEvents() {
    var blockEvents = {
      mousedown: function mousedown(e) {
        if (layoutManager.selectedLayout) {
          layoutManager.selectDom({
            target: layoutManager.selectedLayout.dom
          });
          mainManager.setFunctionBlock();
        }
      },
      drag: function drag(e, option) {
        layoutManager.moveLayout(e, option);
      },
      dragend: function dragend(e) {
        layoutManager.setNewLayout(e);
      }
    };
    blockManager.setEvent(blockEvents);
  },
  initLayoutEvents: function initLayoutEvents() {
    var layoutEvents = {
      mouseover: function mouseover(e) {
        layoutManager.selectableLayout(e);
        e.stopPropagation();
      },
      mouseout: function mouseout(e) {
        layoutManager.selectableLayout(e);
        e.stopPropagation();
      },
      mousedown: function mousedown(e) {
        var chk = layoutManager.selectDom(e);
        mainManager.setFunctionBlock();
        mainManager.draggableMenuBlock(!chk);
        propertyManager.setSeleted(layoutManager.selectedLayout);

        if (chk) {
          propertyManager.updateProp(layoutManager.getLayoutProp());
        }

        if (e.target.tagName === 'SELECT') {
          //for select box drag
          e.target.disabled = true;
        }

        e.stopPropagation();
      },
      pointerup: function pointerup(e) {
        if (e.target.tagName === 'SELECT') {
          //for select box drag
          e.target.disabled = false;
        }

        e.stopPropagation();
      },
      drag: function drag(e) {
        layoutManager.moveLayout(e);
        e.stopPropagation();
      },
      dragend: function dragend(e) {
        if (e.target.tagName === 'SELECT') {
          //for select box drag
          e.target.disabled = false;
        }

        layoutManager.setLayout();
        mainManager.setFunctionBlock();
        mainManager.draggableMenuBlock(true);
        e.stopPropagation();
      }
    };
    layoutManager.setEvent(layoutEvents);
  },
  initPropertyEvents: function initPropertyEvents() {
    var callbackFunc = function callbackFunc() {
      layoutManager.updateLayout(layoutManager.contentLayout);
      layoutManager.updateLayoutProp();
      mainManager.setFunctionBlock();
    };

    propertyManager.setCallback(callbackFunc);
  },
  initFuncEvents: function initFuncEvents() {
    var funcEvents = {
      "delete": function _delete(e) {
        layoutManager.deleteDom();
        layoutManager.updateLayout(layoutManager.contentLayout);
        mainManager.setFunctionBlock();
        mainManager.draggableMenuBlock(true); //U.showBlockAttr(false);
      },
      copy: function copy(e) {
        layoutManager.copyDom(layoutManager.selectedLayout.info.parentLayoutId, layoutManager.selectedLayout.info.layoutId);
        layoutManager.updateLayout(layoutManager.contentLayout);
        mainManager.setFunctionBlock();
        mainManager.draggableMenuBlock(true); //U.showBlockAttr(false);
      }
    };
    funcManager.setEvent(funcEvents);
  },
  draggableMenuBlock: function draggableMenuBlock(chk) {
    try {
      var blocks = document.getElementsByClassName('hb_btn-block');

      for (var i = 0, len = blocks.length; i < len; i++) {
        blocks[i].setAttribute('draggable', chk);
      }

      if (!chk) {
        mainManager.nav.block.style.display = 'none';
        mainManager.nav.prop.style.display = 'block';
        mainManager.nav.setting.style.display = 'none';
      } else {
        mainManager.nav.block.style.display = 'block';
        mainManager.nav.prop.style.display = 'none';
        mainManager.nav.setting.style.display = 'none';
      }

      if (layoutManager.selectedLayout) {
        mainManager.nav.prop.children[0].style.display = 'block';
        mainManager.nav.prop.children[1].style.display = 'none';
      } else {
        mainManager.nav.prop.children[0].style.display = 'none';
        mainManager.nav.prop.children[1].style.display = 'block';
      }
    } catch (err) {
      console.log(err.message);
    }
  },
  setFunctionBlock: function setFunctionBlock() {
    try {
      if (layoutManager.selectedLayout) {
        var body = layoutManager.contentLayout.dom;
        var x = layoutManager.selectedLayout.pos.x - body.scrollLeft;
        var y = layoutManager.selectedLayout.pos.y - body.scrollTop - 21;
        funcManager.setPos(x, y);

        if (!body.attachedScroll) {
          body.attachedScroll = true;
          body.addEventListener('scroll', function (e) {
            if (layoutManager.selectedLayout) {
              var x = layoutManager.selectedLayout.pos.x - e.target.scrollLeft;
              var y = layoutManager.selectedLayout.pos.y - e.target.scrollTop - 21;
              funcManager.setPos(x, y);
            }
          });
        }
      } else {
        funcManager.setPos(0, -100);
      }
    } catch (err) {
      console.log(err.message);
    }
  }
};
module.exports = mainManager;
/*
U.setBlockAttr = function() {
    try {
    var attrs = U.getBlockAttr();

    if(attrs) {
        U.showBlockAttr(true);

        U.getElementByAttribute(U.getQueryOption(O.HB_ATTR_ID, 'id', O.HB_ATTR_TYPE, O.HB_ATTR_TYPE_OPTION.text)).value = attrs.id;
        U.getElementByAttribute(U.getQueryOption(O.HB_ATTR_ID, 'name', O.HB_ATTR_TYPE, O.HB_ATTR_TYPE_OPTION.text)).value = attrs.name;
        U.getElementByAttribute(U.getQueryOption(O.HB_ATTR_ID, 'title', O.HB_ATTR_TYPE, O.HB_ATTR_TYPE_OPTION.text)).value = attrs.title;
        U.getElementByAttribute(U.getQueryOption(O.HB_ATTR_ID, 'text', O.HB_ATTR_TYPE, O.HB_ATTR_TYPE_OPTION.text)).value = attrs.text;
        U.getElementByAttribute(U.getQueryOption(O.HB_ATTR_ID, 'value', O.HB_ATTR_TYPE, O.HB_ATTR_TYPE_OPTION.text)).value = attrs.value;

        var srcAttr = U.getElementByAttribute(U.getQueryOption(O.HB_ATTR_ID, 'src', O.HB_ATTR_TYPE, O.HB_ATTR_TYPE_OPTION.text));
        var hrefAttr = U.getElementByAttribute(U.getQueryOption(O.HB_ATTR_ID, 'href', O.HB_ATTR_TYPE, O.HB_ATTR_TYPE_OPTION.text));

        if(attrs.src != undefined) {
        srcAttr.parentElement.parentElement.style.display = 'block';
        srcAttr.value = attrs.src;
        } else {
        srcAttr.parentElement.parentElement.style.display = 'none';
        }

        if(attrs.href != undefined) {
        hrefAttr.parentElement.parentElement.style.display = 'block';
        hrefAttr.value = attrs.href;
        } else {
        hrefAttr.parentElement.parentElement.style.display = 'none';
        }

        var classSelect = U.getElementByAttribute(U.getQueryOption(O.HB_ATTR_ID, 'class', O.HB_ATTR_TYPE, O.HB_ATTR_TYPE_OPTION.select)), i = 0;

        for(i = classSelect.options.length - 1 ; i >= 0 ; i--)
        {
            classSelect.remove(i);
        }

        var option;
        for(i = 0, len = attrs.classList.length; i < len; i++) {
        option = document.createElement('option');
        option.text = attrs.classList[i];
        option.value = attrs.classList[i];
        classSelect.add(option);
        }
    } else {
        U.showBlockAttr(false);
    }
    } catch(err) {
    console.log(err.message);
    }
};

U.setBlockStyle = function() {
    try {
        var styles = U.getBlockStyle(false);

        var name, value, domValue, domUnit;
        // Init Style Html
        O.style.forEach(function(obj) {
            domValue = U.getElementByAttribute(U.getQueryOption(O.HB_STYLE_ID, obj.name, O.HB_STYLE_TYPE, O.HB_STYLE_TYPE_OPTION.text));
            if(!domValue) {
            domValue = U.getElementByAttribute(U.getQueryOption(O.HB_STYLE_ID, obj.name, O.HB_STYLE_TYPE, O.HB_STYLE_TYPE_OPTION.select));
            }

            if(!domValue) {
            domValue = U.getElementByAttribute(U.getQueryOption(O.HB_STYLE_ID, obj.name, O.HB_STYLE_TYPE, O.HB_STYLE_TYPE_OPTION.color));
            }
            domUnit = U.getElementByAttribute(U.getQueryOption(O.HB_STYLE_ID, obj.name, O.HB_STYLE_TYPE, O.HB_STYLE_TYPE_OPTION.units));
            
            if(domValue.nodeName == 'INPUT') {
            domValue.value = '';
            if(domUnit != null) {
                domUnit.value = obj.units[0];
            }
            } else {
            domValue.value = obj.options[0];
            }
        });
        
        for(name in styles) {
            domValue = U.getElementByAttribute(U.getQueryOption(O.HB_STYLE_ID, name, O.HB_STYLE_TYPE, O.HB_STYLE_TYPE_OPTION.text));
            if(!domValue) {
            domValue = U.getElementByAttribute(U.getQueryOption(O.HB_STYLE_ID, name, O.HB_STYLE_TYPE, O.HB_STYLE_TYPE_OPTION.select));
            }

            if(!domValue) {
            domValue = U.getElementByAttribute(U.getQueryOption(O.HB_STYLE_ID, obj.name, O.HB_STYLE_TYPE, O.HB_STYLE_TYPE_OPTION.color));
            }
            domUnit = U.getElementByAttribute(U.getQueryOption(O.HB_STYLE_ID, name, O.HB_STYLE_TYPE, O.HB_STYLE_TYPE_OPTION.units));
            
            if(domValue.nodeName == 'INPUT') {
            if(domUnit != null) {
                for(idx in domUnit.children) {
                if(styles[name].indexOf(domUnit.children[idx].value) != -1) {
                    domValue.value = styles[name].replace(domUnit.children[idx].value, '');
                    domUnit.value = domUnit.children[idx].value;
                    break;
                }
                }
            } else {
                if(domValue.getAttribute('type') == O.HB_STYLE_TYPE_OPTION.color) {
                domValue.value = U.rgb2Hex(styles[name]);
                } else {
                domValue.value = styles[name];  
                }
            }
            } else {
            if(domUnit != null) {
                for(idx in domUnit.children) {
                if(styles[name].indexOf(domUnit.children[idx].value) != -1) {
                    value = styles[name].replace(domUnit.children[idx].value, '');
                    domUnit.value = domUnit.children[idx].value;
                    break;
                }
                }
                domValue.value = value;
            } else {
                domValue.value = styles[name];
            }
            }
        }
    } catch (err) {
        console.log(err.message);
    }
};
*/

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__(2);
/**
    Attributes View Manager
**/


var blockManager = {
  config: __webpack_require__(3),
  model: {
    block: __webpack_require__(7)
  },
  selected: null,
  init: function init() {
    var configs = blockManager.config;
    var _config = null;

    for (var i = 0, len = configs.length; i < len; i++) {
      _config = configs[i];
      _config.model = blockManager.newModel('block');
      _config.model.title = _config.title;
      _config.model.icon = _config.icon;
      _config.model.option = _config.option;
    }
  },
  newModel: function newModel(name) {
    return new blockManager.model[name]();
  },
  setEvent: function setEvent(event) {
    var configs = blockManager.config;

    for (var i = 0, len = configs.length; i < len; i++) {
      _config = configs[i];

      _config.model.setEvent(event);
    }
  },

  /**
   * render block element
   * @param {Element} parent 
   */
  render: function render(parent) {
    var configs = blockManager.config;
    var _config = null;

    for (var i = 0, len = configs.length; i < len; i++) {
      _config = configs[i];
      var dom = utils.builder(_config.model.render());
      _config.model.dom = dom;
      parent.appendChild(dom);
    }
  }
};
module.exports = blockManager;
/*
{
  type: 'mousedown',
  func: function(e) {
    if(U.selectedLayout) {
      U.selectBlock({
        target: U.selectedLayout.getBlock()
      });
      U.setFunctionBlock();
    }
  }
},
{
  type: 'drag',
  func: function(e) {
    U.moveBlock(e);
  }
},
{
  type: 'dragend',
  func: function(e) {
    U.setBlock();
  }
}
*/

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var config = __webpack_require__(3);

var Block =
/*#__PURE__*/
function () {
  function Block() {
    _classCallCheck(this, Block);

    this._title = null;
    this._icon = null;
    this._option = null;
    /*
        {
            mousedown: null,
            drag: null,
            dragend: null
        }
    */

    this._event = null;
    this._dom = null;
  }

  _createClass(Block, [{
    key: "setEvent",
    value: function setEvent(_event) {
      this._event = _event;
    }
  }, {
    key: "eventDetect",
    value: function eventDetect(e) {
      var _config;

      for (var i = 0, len = config.length; i < len; i++) {
        _config = config[i];

        if (_config.model.dom === e.target) {
          _config.model.event(e);
        }
      }
    }
  }, {
    key: "event",
    value: function event(e, option) {
      if (this._event) {
        this._event[e.type](e, this._option);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var title = this._title;
      var icon = this._icon;
      var _render = {
        element: 'div',
        attr: {
          "class": 'hb_btn-block hb_cursor-move',
          draggable: true
        },
        child: [{
          element: 'div',
          attr: {
            "class": 'hb_img ' + icon
          }
        }, {
          element: 'div',
          attr: {
            "class": 'hb_lbl'
          },
          text: title
        }],
        event: [{
          type: 'mousedown',
          func: this.eventDetect
        }, {
          type: 'drag',
          func: this.eventDetect
        }, {
          type: 'dragend',
          func: this.eventDetect
        }]
      };
      return _render;
    }
  }, {
    key: "title",
    set: function set(_title) {
      this._title = _title;
    },
    get: function get() {
      return this._title;
    }
  }, {
    key: "icon",
    set: function set(_icon) {
      this._icon = _icon;
    },
    get: function get() {
      return this._icon;
    }
  }, {
    key: "option",
    set: function set(_option) {
      this._option = _option;
    },
    get: function get() {
      return this._option;
    }
  }, {
    key: "dom",
    set: function set(_dom) {
      this._dom = _dom;
    },
    get: function get() {
      return this._dom;
    }
  }]);

  return Block;
}();

;
module.exports = Block;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__(2);

var Func = __webpack_require__(9);

var funcManager = {
  func: null,
  init: function init() {
    funcManager.func = Func;
  },
  setEvent: function setEvent(event) {
    funcManager.func.setEvent(event);
  },
  setPos: function setPos(x, y) {
    funcManager.func.setPos(x, y);
  },
  render: function render(parent) {
    var funcDom = utils.builder(funcManager.func.render());
    funcManager.func.dom = funcDom;
    parent.appendChild(funcDom);
  }
};
module.exports = funcManager;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var instance; //Singletone

/**
 * manage function tool
 */

var Func =
/*#__PURE__*/
function () {
  function Func() {
    _classCallCheck(this, Func);

    if (instance) {
      return instance;
    }

    this._pos = {
      x: 0,
      y: -100
    };
    this._dom = null;
    this._class = 'hb_func-menu';
    this._event = null;
  }

  _createClass(Func, [{
    key: "setPos",
    value: function setPos(x, y) {
      this._pos.x = x;
      this._pos.y = y;
      this.dom.setAttribute('style', 'position: absolute; left: ' + this._pos.x + 'px; top: ' + this._pos.y + 'px;');
    }
  }, {
    key: "setEvent",
    value: function setEvent(_event) {
      this._event = _event;
    }
  }, {
    key: "eventDetect",
    value: function eventDetect(e) {
      var type = e.target.getAttribute('hb_func_evnt_typ');
      instance.event(e, type);
    }
  }, {
    key: "event",
    value: function event(e, type) {
      if (this._event) {
        this._event[type](e);
      }
    }
    /*
        delete
        {
            type: 'click',
            func: function () {
                U.deleteBlock();
                U.updateLayout(U.contentLayout);
                U.setFunctionBlock();
                U.draggableMenuBlock(true);
                U.showBlockAttr(false);
            }
        }
    */

    /* 
        copy
        {
            type: 'click',
            func: function () {
                U.copyBlock(U.selectedLayout.parentLayoutId, U.selectedLayout.id);
                U.updateLayout(U.contentLayout);
                U.setFunctionBlock();
                U.draggableMenuBlock(true);
                U.showBlockAttr(false);
            }
        }
    */

  }, {
    key: "render",
    value: function render() {
      var _render = {
        element: 'div',
        attr: {
          style: 'position: absolute; left: ' + this._pos.x + 'px; top: ' + this._pos.y + 'px;',
          "class": this._class
        },
        child: [{
          element: 'button',
          attr: {
            "class": 'hb_btn-func hb_btn-delete',
            hb_func_evnt_typ: 'delete'
          },
          event: [{
            type: 'click',
            func: this.eventDetect
          }]
        }, {
          element: 'button',
          attr: {
            "class": 'hb_btn-func hb_btn-copy',
            hb_func_evnt_typ: 'copy'
          },
          event: [{
            type: 'click',
            func: this.eventDetect
          }]
        }]
      };
      return _render;
    }
  }, {
    key: "dom",
    set: function set(_dom) {
      this._dom = _dom;
    },
    get: function get() {
      return this._dom;
    }
  }]);

  return Func;
}();

;
instance = new Func();
module.exports = instance;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var Layout = __webpack_require__(11);

var utils = __webpack_require__(2);
/**
 * Layout Manager(Layout을 관리한다)
 */


var layoutManager = {
  contentLayout: null,
  //all layout
  selectedLayout: null,
  //selected layout
  eventInfo: null,
  //event information
  idIdx: 1,
  //layout id index
  event: null,
  initContentLayout: function initContentLayout(layoutId, contentRect, dom) {
    var contentLayout = layoutManager.contentLayout = new Layout();
    contentLayout.info = {
      layoutId: layoutId,
      parentLayoutId: null,
      elementType: 'div'
    };
    contentLayout.pos = {
      x: contentRect.left,
      y: contentRect.top,
      width: contentRect.width,
      height: contentRect.height
    };
    contentLayout.dom = dom;
  },
  eventDetect: function eventDetect(e) {
    if (layoutManager.event) {
      layoutManager.event[e.type](e);
    }
  },
  setEvent: function setEvent(event) {
    layoutManager.event = event;
  },

  /**
   * Find layout that has same id(id에 해당하는 layout을 return)
   * @param {string} layoutId 
   * @param {Layout} layout 
   */
  selectLayout: function selectLayout(layoutId, layout) {
    try {
      var selectedLayout = null;

      if (layoutId == layout.info.layoutId) {
        return layout;
      } else {
        for (var i = 0, len = layout.child.length; i < len; i++) {
          if (selectedLayout = layoutManager.selectLayout(layoutId, layout.child[i])) {
            return selectedLayout;
          }
        }

        return null;
      }
    } catch (err) {
      console.log(err.message);
    }
  },

  /**
   * Find layout that has same dom
   * @param {element} dom 
   * @param {Layout} layout 
   */
  selectLayoutDom: function selectLayoutDom(dom, layout) {
    try {
      var selectedLayout = null;

      if (dom === layout.dom) {
        return layout;
      } else {
        for (var i = 0, len = layout.child.length; i < len; i++) {
          if (selectedLayout = layoutManager.selectLayoutDom(dom, layout.child[i])) {
            return selectedLayout;
          }
        }

        return null;
      }
    } catch (err) {
      console.log(err.message);
    }
  },

  /**
   * Update layout - Width, Height, X, Y, Etc...
      (
          1. Parent layout 입력 받아서 모든 Child의 layout을 재조정
          2. 기존 작성된 HTML Import 고려 필요
          3. offsetLeft offsetTop은 자기자신의 부모 위치를 시작점으로 정함
              - margin
              - padding
          4. resizing 될때 update 필요
      )
   * @param {Layout} layout 
   */
  updateLayout: function updateLayout(layout) {
    try {
      if (layout) {
        var child = layout.dom;
        var childRect = child.getBoundingClientRect();
        var style = window.getComputedStyle(child); //CSS 속성까지 적용 된다.

        var parentLayout,
            parentStyle,
            posParent = child.parentElement;

        while (posParent) {
          parentStyle = window.getComputedStyle(posParent);

          if (parentStyle.position === 'relative' || parentStyle.position === 'absolute') {
            break;
          }

          posParent = posParent.parentElement;
        }

        if (posParent) {
          parentLayout = layoutManager.selectLayout(posParent.getAttribute('hb_layout_id'), layoutManager.contentLayout);
          layout.pos.x = child.offsetLeft ? child.offsetLeft + parentLayout.pos.x : parentLayout.pos.x;
          layout.pos.y = child.offsetTop ? child.offsetTop + parentLayout.pos.y : parentLayout.pos.y;
          layout.pos.width = child.scrollWidth ? child.scrollWidth : childRect.width;
          layout.pos.height = child.scrollHeight ? child.scrollHeight : childRect.height;
        } else {
          layout.pos.x = child.offsetLeft ? child.offsetLeft : childRect.left;
          layout.pos.y = child.offsetTop ? child.offsetTop : childRect.top;
          layout.pos.width = child.scrollWidth ? child.scrollWidth : childRect.width;
          layout.pos.height = child.scrollHeight ? child.scrollHeight : childRect.height;
        }

        for (var i = 0, len = layout.child.length; i < len; i++) {
          layoutManager.updateLayout(layout.child[i]);
        }
      }
    } catch (err) {
      console.log(err.message);
    }
  },

  /**
   * Add child layout to parent layout (parent layout에 child layout 추가)
   * @param {Layout} parent 
   * @param {Layout} child 
   * @param {number} position 
   */
  addLayout: function addLayout(parent, child, position) {
    var parentLayout, childLayout;

    if (typeof parent === 'string') {
      parentLayout = layoutManager.selectLayout(parent, layoutManager.contentLayout);
    } else {
      parentLayout = parent;
    }

    if (typeof child === 'string') {
      childLayout = layoutManager.selectLayout(child, layoutManager.contentLayout);
    } else {
      childLayout = child;
    }

    childLayout.info.parentLayoutId = parentLayout.info.layoutId;
    parentLayout.child.splice(position, 0, childLayout);
  },

  /**
   * Delete child layout in parent layout
   * @param {string, Layout} parent 
   * @param {string, Layout} child 
   */
  deleteLayout: function deleteLayout(parent, child) {
    var parentLayout, childLayout;

    if (typeof parent === 'string') {
      parentLayout = layoutManager.selectLayout(parent, layoutManager.contentLayout);
    } else {
      parentLayout = parent;
    }

    if (typeof child === 'string') {
      childLayout = layoutManager.selectLayout(child, layoutManager.contentLayout);
    } else {
      childLayout = child;
    }

    for (var i = 0, len = parentLayout.child.length; i < len; i++) {
      if (parentLayout.child[i].info.layoutId == childLayout.info.layoutId) {
        parentLayout.child.splice(i, 1);
        break;
      }
    }
  },

  /**
   * init css
   * @param {Layout} layout 
   */
  initCss: function initCss(layout) {
    try {
      layout.initCss();

      for (var i = 0, len = layout.child.length; i < len; i++) {
        layoutManager.initCss(layout.child[i]);
      }
    } catch (err) {
      console.log(err.message);
    }
  },

  /**
   * Check contain Block
   * 1. block 포함 확인
   * 2. Tree 구조 사용
   *      - parent에 속하지 않을 시 parent의 child 쪽은 확인 필요 없음
   * 3. 중위 순회 
   * @param {number} x 
   * @param {number} y 
   * @param {Layout} layout 
   */
  containBlock: function containBlock(x, y, layout) {
    try {
      if (layoutManager.selectedLayout && layoutManager.selectedLayout.info.layoutId == layout.info.layoutId) {
        return null;
      }

      var containLayout = null;

      if (layout.contain(x, y)) {
        containLayout = layout;

        if (layout.child.length == 0) {
          return containLayout;
        }

        var childLayout = null;

        for (var i = 0, len = layout.child.length; i < len; i++) {
          childLayout = layoutManager.containBlock(x, y, layout.child[i]);

          if (childLayout) {
            containLayout = childLayout;
            break;
          }
        }
      }

      return containLayout;
    } catch (err) {
      console.log(err.message);
    }
  },

  /**
   * move layout
   * @param {event} e 
   */
  moveLayout: function moveLayout(e) {
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    try {
      layoutManager.initCss(layoutManager.contentLayout);

      if (e.clientX == 0 && e.clientY == 0) {
        return;
      }

      var body = layoutManager.contentLayout.dom,
          x = e.clientX + body.scrollLeft,
          y = e.clientY + body.scrollTop,
          parentLayout = layoutManager.containBlock(x, y, layoutManager.contentLayout);

      if (parentLayout) {
        layoutManager.eventInfo = {
          parentLayout: parentLayout,
          selectedLayout: layoutManager.selectedLayout ? layoutManager.selectedLayout : null,
          posIdx: 0,
          layoutOption: option
        };
        var parent = parentLayout.dom;
        parent.classList.add('hb_border-contain');

        if (parentLayout.child.length > 0) {
          var nearLayout,
              layoutPos = 0,
              minDistance = Infinity,
              distance = 0;

          for (var i = 0, len = parentLayout.child.length; i < len; i++) {
            distance = Math.sqrt(Math.pow(x - (parentLayout.child[i].pos.x + parentLayout.child[i].pos.width * 0.5), 2) + Math.pow(y - (parentLayout.child[i].pos.y + parentLayout.child[i].pos.height * 0.5), 2));

            if (minDistance > distance) {
              minDistance = distance;
              nearLayout = parentLayout.child[i];
              layoutPos = i;
            }
          }

          var child = nearLayout.dom;

          if (nearLayout.y < y && nearLayout.pos.y + nearLayout.pos.height > y) {
            if (nearLayout.pos.x > x) {
              child.classList.add('hb_border-left-move');
              layoutManager.eventInfo.posIdx = layoutPos - 1 < 0 ? 0 : layoutPos;
            } else {
              child.classList.add('hb_border-right-move');
              layoutManager.eventInfo.posIdx = layoutPos + 1;
            }
          } else {
            if (nearLayout.pos.y > y) {
              child.classList.add('hb_border-top-move');
              layoutManager.eventInfo.posIdx = layoutPos - 1 < 0 ? 0 : layoutPos;
            } else {
              child.classList.add('hb_border-bottom-move');
              layoutManager.eventInfo.posIdx = layoutPos + 1;
            }
          }
        } else {
          parent.classList.add('hb_border-top-contain');
        }
      } else {
        layoutManager.eventInfo = null;
      }
    } catch (err) {
      console.log(err.message);
    }
  },

  /**
   * set new layout
   * 1. new layout 이동 완료
   * 2. new layout 추가 및 업데이트
   * @param {event} e 
   */
  setNewLayout: function setNewLayout(e) {
    try {
      layoutManager.initCss(layoutManager.contentLayout);

      if (layoutManager.eventInfo) {
        var parentLayout = layoutManager.eventInfo.parentLayout;
        var parent = parentLayout.dom;
        var blockOption = layoutManager.eventInfo.layoutOption;
        var newChildId = blockOption.element + '_' + layoutManager.idIdx;
        var newChildLayout = new Layout();
        newChildLayout.info = {
          layoutId: newChildId,
          parentLayoutId: parentLayout.info.layoutId,
          elementType: blockOption.element
        };
        var _newChild = {
          element: blockOption.element,
          event: [{
            type: 'mouseover',
            func: layoutManager.eventDetect
          }, {
            type: 'mouseout',
            func: layoutManager.eventDetect
          }, {
            type: 'mousedown',
            func: layoutManager.eventDetect
          }, {
            type: 'pointerup',
            func: layoutManager.eventDetect
          }, {
            type: 'drag',
            func: layoutManager.eventDetect
          }, {
            type: 'dragend',
            func: layoutManager.eventDetect
          }]
        };
        _newChild.attr = {};

        for (var attrName in blockOption.attrs) {
          _newChild.attr[attrName] = blockOption.attrs[attrName];
        }

        _newChild.text = blockOption.text ? blockOption.text : null;
        var newChild = utils.builder(_newChild);
        newChildLayout.dom = newChild; //posIdx

        if (parentLayout.child[layoutManager.eventInfo.posIdx]) {
          parent.insertBefore(newChild, parent.children[layoutManager.eventInfo.posIdx]);
        } else {
          parent.appendChild(newChild);
        }

        layoutManager.addLayout(parentLayout, newChildLayout, layoutManager.eventInfo.posIdx);
        layoutManager.idIdx++;
        layoutManager.updateLayout(layoutManager.contentLayout);
      }
    } catch (err) {
      console.log(err.message);
    }
  },

  /**
   * set layout
   * 1. layout 이동 완료
   * 2. layout 업데이트
   * @param {event} e 
   */
  setLayout: function setLayout(e) {
    try {
      layoutManager.initCss(layoutManager.contentLayout);

      if (layoutManager.eventInfo) {
        var eventInfo = layoutManager.eventInfo;
        var parentLayout = eventInfo.parentLayout;
        var parent = parentLayout.dom;
        layoutManager.deleteLayout(eventInfo.selectedLayout.info.parentLayoutId, eventInfo.selectedLayout);
        layoutManager.addLayout(parentLayout, eventInfo.selectedLayout, eventInfo.posIdx);
        var selectedDom = eventInfo.selectedLayout.dom;

        if (parentLayout.child[eventInfo.posIdx]) {
          parent.insertBefore(selectedDom, parent.children[eventInfo.posIdx]);
        } else {
          parent.appendChild(selectedDom);
        }

        selectedDom.classList.remove('hb_selected');
        selectedDom.removeAttribute('draggable');
        layoutManager.selectedLayout = null;
        layoutManager.updateLayout(layoutManager.contentLayout);
      }
    } catch (err) {
      console.log(err.message);
    }
  },

  /**
   * layout selectable
   * @param {event} e 
   */
  selectableLayout: function selectableLayout(e) {
    try {
      if (e.type === 'mouseover') {
        e.target.classList.add('hb_selectable');
      } else if (e.type === 'mouseout') {
        e.target.classList.remove('hb_selectable');
      }
    } catch (err) {
      console.log(err.message);
    }
  },

  /**
   * select dom
   * @param {event} e 
   */
  selectDom: function selectDom(e) {
    try {
      if (layoutManager.selectedLayout) {
        var selectedDom = layoutManager.selectedLayout.dom;
        selectedDom.classList.remove('hb_selected');
        selectedDom.removeAttribute('draggable');

        if (selectedDom === e.target) {
          layoutManager.selectedLayout = null;
          return false;
        } else {
          selectedDom.classList.remove('hb_selectable');
        }
      }

      layoutManager.selectedLayout = layoutManager.selectLayoutDom(e.target, layoutManager.contentLayout);
      e.target.setAttribute('draggable', 'true');
      e.target.classList.add('hb_selected');
      e.target.classList.add('hb_selectable');
      return true;
    } catch (err) {
      console.log(err.message);
    }
  },

  /**
   * delete selected layout dom
   */
  deleteDom: function deleteDom() {
    try {
      if (layoutManager.selectedLayout) {
        layoutManager.deleteLayout(layoutManager.selectedLayout.info.parentLayoutId, layoutManager.selectedLayout);
        layoutManager.selectedLayout.dom.remove();
        layoutManager.selectedLayout = null;
      }
    } catch (err) {
      console.log(err.message);
    }
  },

  /**
   * copy selected layout dom
   * @param {string, Layout} parent 
   * @param {string, Layout} copy 
   */
  copyDom: function copyDom(parent, copy) {
    try {
      var parentLayout, copyLayout;

      if (typeof parent === 'string') {
        parentLayout = layoutManager.selectLayout(parent, layoutManager.contentLayout);
      } else {
        parentLayout = parent;
      }

      if (typeof copy === 'string') {
        copyLayout = layoutManager.selectLayout(copy, layoutManager.contentLayout);
      } else {
        copyLayout = copy;
      }

      if (parentLayout && copyLayout) {
        var copiedLayout = copyLayout.copy();
        copiedLayout.info.layoutId = copiedLayout.info.element + '_' + layoutManager.idIdx;
        layoutManager.idIdx++;
        copiedLayout.child = [];
        copiedLayout.info.parentLayoutId = parentLayout.layoutId;
        layoutManager.addLayout(parentLayout, copiedLayout, parentLayout.child.length);
        var parentDom = parentLayout.dom;
        var originalDom = copyLayout.dom;

        if (originalDom.classList.contains('hb_selected')) {
          layoutManager.selectDom({
            target: originalDom
          });
        }

        if (originalDom.classList.contains('hb_selectable')) {
          originalDom.classList.remove('hb_selectable');
        }

        var _copiedBlock = {
          element: copiedLayout.info.elementType,
          attr: {
            type: originalDom.attributes['type'] ? originalDom.attributes['type'].value : null,
            "class": originalDom.classList.value == '' ? null : originalDom.classList.value,
            style: originalDom.style.cssText == '' ? null : originalDom.style.cssText
          },
          text: utils.getJustTextContent(originalDom),
          event: [{
            type: 'mouseover',
            func: layoutManager.eventDetect
          }, {
            type: 'mouseout',
            func: layoutManager.eventDetect
          }, {
            type: 'mousedown',
            func: layoutManager.eventDetect
          }, {
            type: 'pointerup',
            func: layoutManager.eventDetect
          }, {
            type: 'drag',
            func: layoutManager.eventDetect
          }, {
            type: 'dragend',
            func: layoutManager.eventDetect
          }]
        };
        var copiedBlock = utils.builder(_copiedBlock);
        copiedLayout.dom = copiedBlock;
        parentDom.appendChild(copiedBlock);

        for (var i = 0, len = copyLayout.child.length; i < len; i++) {
          layoutManager.copyDom(copiedLayout, copyLayout.child[i]);
        }
      }
    } catch (err) {
      console.log(err.message);
    }
  },
  getLayoutProp: function getLayoutProp() {
    return layoutManager.selectedLayout.prop;
  },
  updateLayoutProp: function updateLayoutProp() {
    layoutManager.selectedLayout.updateProp(null);
  }
};
module.exports = layoutManager;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var utils = __webpack_require__(2);

var Layout =
/*#__PURE__*/
function () {
  function Layout() {
    _classCallCheck(this, Layout);

    this._info = {
      layoutId: null,
      parentLayoutId: null,
      elementType: null
    };
    this._pos = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    this._child = [];
    this._prop = null;
    this._dom = null;
  }

  _createClass(Layout, [{
    key: "initCss",
    value: function initCss() {
      try {
        var dom = this._dom;

        if (dom) {
          dom.classList.remove('hb_border-contain');
          dom.classList.remove('hb_border-top-contain');
          dom.classList.remove('hb_border-top-move');
          dom.classList.remove('hb_border-bottom-move');
          dom.classList.remove('hb_border-left-move');
          dom.classList.remove('hb_border-right-move');
        }
      } catch (err) {
        console.log(err);
      }
    }
  }, {
    key: "contain",
    value: function contain(x, y) {
      try {
        if (this._info.elementType !== 'div') {
          return false;
        }

        var pos = this._pos;

        if (pos.x <= x && x <= pos.x + pos.width && pos.y <= y && y <= pos.y + pos.height) {
          return true;
        } else {
          return false;
        }
      } catch (err) {
        console.log(err);
      }
    }
  }, {
    key: "copy",
    value: function copy() {
      var copiedLayout = new Layout();
      copiedLayout._info.layoutId = this._info.layoutId;
      copiedLayout._info.parentLayoutId = this._info.parentLayoutId;
      copiedLayout._info.elementType = this._info.elementType;
      copiedLayout._pos.x = this._pos.x;
      copiedLayout._pos.y = this._pos.y;
      copiedLayout._pos.width = this._pos.width;
      copiedLayout._pos.height = this._pos.height;
      copiedLayout._prop.prop = this._prop.prop;
      copiedLayout._prop.style = this._prop.style;
      copiedLayout._prop["class"] = this._prop["class"];
      return copiedLayout;
    }
  }, {
    key: "updateProp",
    value: function updateProp(dom) {
      if (!dom) {
        dom = this.dom;
      }

      try {
        if (!this.prop) {
          this.prop = {};
        }

        var prop = this.prop;
        prop.id = dom.id ? dom.id : null;
        prop.name = dom.getAttribute('name') ? dom.getAttribute('name') : null;
        prop.title = dom.title ? dom.title : null;

        if (dom.firstChild) {
          if (dom.firstChild.nodeType == Node.TEXT_NODE) {
            prop.text = dom.firstChild.textContent;
          } else {
            prop.text = null;
          }
        } else {
          prop.text = null;
        }

        if (dom.nodeName == 'INPUT' || dom.nodeName == 'TEXTAREA') {
          prop.value = dom.value ? dom.value : '';
        } else {
          prop.value = dom.getAttribute('value') ? dom.getAttribute('value') : '';
        }

        if (dom.nodeName == 'IMG') {
          prop.src = dom.getAttribute('src') ? dom.getAttribute('src') : '';
        }

        if (dom.nodeName == 'A') {
          prop.href = dom.getAttribute('href') ? dom.getAttribute('href') : '';
        }

        prop["class"] = [];

        for (var i = 0, len = dom.classList.length; i < len; i++) {
          if (dom.classList[i].indexOf('hb_selectable') == -1 && dom.classList[i].indexOf('hb_selected') == -1) {
            prop["class"].push(dom.classList[i]);
          }
        }

        prop.style = {};
        var domStyle = dom.style; //Group Property padding, margin, border-width, border-color, border-style

        var groupProperty = {};
        groupProperty['padding'] = {
          checkSum: 0,
          value: null,
          group: true
        };
        groupProperty['margin'] = {
          checkSum: 0,
          value: null,
          group: true
        };
        groupProperty['border-width'] = {
          checkSum: 0,
          value: null,
          group: true
        };
        groupProperty['border-color'] = {
          checkSum: 0,
          value: null,
          group: true
        };
        groupProperty['border-style'] = {
          checkSum: 0,
          value: null,
          group: true
        };
        var direction = ['-left', '-right', '-top', '-bottom'];
        var i, len, groupName, propertyName, propertyValue;

        for (i = 0, len = domStyle.length; i < len; i++) {
          propertyName = domStyle.item(i);
          propertyValue = domStyle[propertyName];
          groupName = propertyName.split(/-left|-right|-top|-bottom/);
          groupName = groupName[0] + groupName[1];

          if (groupProperty[groupName]) {
            if (groupProperty[groupName].checkSum == 0) {
              groupProperty[groupName].value = propertyValue;
            } else {
              if (groupProperty[groupName].value != propertyValue) {
                groupProperty[groupName].group = false;
              }
            }

            groupProperty[groupName].checkSum++;
          }

          if (propertyName.indexOf('color') != -1) {
            prop.style[propertyName] = utils.rgb2Hex(propertyValue);
          } else {
            prop.style[propertyName] = propertyValue;
          }
        }

        for (key in groupProperty) {
          if (groupProperty[key].checkSum == 4 && groupProperty[key].group) {
            if (key.indexOf('color') != -1) {
              prop.style[key] = utils.rgb2Hex(groupProperty[key].value);
            } else {
              prop.style[key] = groupProperty[key].value;
            }
            /*group 화 할 시 사용
            groupName = key.split('-');
            for (i = 0, len = direction.length; i < len; i++) {
                propertyName = ((groupName.length > 1) ? (groupName[0] + direction[i] + '-' + groupName[1]) : (groupName[0] + direction[i]));
                prop.style[propertyName] = null;
            }
            */

          }
        }
      } catch (err) {
        console.log(err.message);
      }
    }
  }, {
    key: "info",
    set: function set(_info) {
      this._info = _info;
    },
    get: function get() {
      return this._info;
    }
  }, {
    key: "pos",
    set: function set(_pos) {
      this._pos = _pos;
    },
    get: function get() {
      return this._pos;
    }
  }, {
    key: "child",
    set: function set(_child) {
      this._child = _child;
    },
    get: function get() {
      return this._child;
    }
  }, {
    key: "prop",
    set: function set(_prop) {
      this._prop = _prop;
    },
    get: function get() {
      return this._prop;
    }
  }, {
    key: "dom",
    set: function set(_dom) {
      this._dom = _dom;
      this.updateProp(_dom);
    },
    get: function get() {
      return this._dom;
    }
  }]);

  return Layout;
}();

;
module.exports = Layout;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__(2);

var CSS = __webpack_require__(0);
/**
    Attributes View Manager
**/


var propertyManager = {
  config: __webpack_require__(4),
  model: {
    propertyClass: __webpack_require__(13),
    propertyColor: __webpack_require__(14),
    propertySelect: __webpack_require__(15),
    propertyStyle2Save: __webpack_require__(16),
    propertyText: __webpack_require__(17),
    propertyTextUnit: __webpack_require__(18),
    propertyTextAppend: __webpack_require__(19)
  },
  selected: {
    element: null
  },
  callback: {
    func: null
  },
  init: function init() {
    var configs = propertyManager.config.configs;

    var _config = null,
        _configChild;

    for (var i = 0, len = configs.length; i < len; i++) {
      _config = configs[i];
      _config.model = propertyManager.newModel(_config.model_name);
      _config.model.property = _config.prop;
      _config.model.selected = propertyManager.selected;
      _config.model.callback = propertyManager.callback;

      if (_config.child) {
        for (var c = 0, lenC = _config.child.length; c < lenC; c++) {
          _configChild = _config.child[c];
          _configChild.model = propertyManager.newModel(_configChild.model_name);
          _configChild.model.property = _configChild.prop;
          _configChild.model.selected = propertyManager.selected;
          _configChild.model.callback = propertyManager.callback;
        }
      }
    }
  },
  newModel: function newModel(name) {
    return new propertyManager.model[name]();
  },

  /**
   * set selected element for events
   * @param {Layout} selected 
   */
  setSeleted: function setSeleted(element) {
    propertyManager.selected.element = element;
  },
  getSelected: function getSelected() {
    return propertyManager.selected;
  },

  /**
   * set callback function
   * @param {function} func 
   */
  setCallback: function setCallback(func) {
    propertyManager.callback.func = func;
  },

  /**
   * category, sub category toggle event
   * @param {event} e 
   */
  eventToggle: function eventToggle(e) {
    var target;

    if (e.target.nodeName == 'LABEL') {
      target = e.target.parentNode;
    } else {
      target = e.target;
    }

    if (target.innerHTML.indexOf("\u25B2") != -1) {
      target.innerHTML = target.innerHTML.replace("\u25B2", "\u25BC");
    } else {
      target.innerHTML = target.innerHTML.replace("\u25BC", "\u25B2");
    }

    var sibling = target.nextSibling;

    while (sibling) {
      if (sibling.style.display == 'none') {
        sibling.style.display = 'block';
      } else {
        sibling.style.display = 'none';
      }

      sibling = sibling.nextSibling;
    }
  },

  /**
   * set category element
   * @param {Element} parent 
   */
  renderCategory: function renderCategory(parent) {
    var category = propertyManager.config.category;

    var _category, dom;

    for (var i = 0, leni = category.length; i < leni; i++) {
      _category = {
        element: 'div',
        attr: {
          "class": CSS.category_body_div
        },
        child: [{
          element: 'div',
          attr: {
            "class": CSS.category_body_title_div
          },
          event: [{
            type: 'click',
            func: propertyManager.eventToggle
          }],
          child: [{
            element: 'label',
            attr: {
              name: category[i].name
            },
            html: category[i].title + " \u25B2",
            event: [{
              type: 'click',
              func: propertyManager.eventToggle
            }]
          }]
        }]
      };
      dom = utils.builder(_category);
      propertyManager.renderCategoryContent(category[i].name, dom);
      parent.appendChild(dom);
    }
  },

  /**
   * 
   * @param {string} category 
   * @param {Dom Element} categoryDom 
   */
  renderCategoryContent: function renderCategoryContent(category, categoryDom) {
    var configs = propertyManager.config.configs;
    var dom, domChild, domChildCategory;

    for (var i = 0, len = configs.length; i < len; i++) {
      if (configs[i].prop.category === category) {
        dom = utils.builder(configs[i].model.render());
        configs[i].model.dom = dom;
        categoryDom.appendChild(dom);

        if (configs[i].child) {
          domChildCategory = utils.builder({
            element: 'div',
            attr: {
              "class": CSS.category_body_div
            },
            child: [{
              element: 'div',
              attr: {
                "class": CSS.sub_category_toggle_body_div
              },
              html: "\u25B2",
              event: [{
                type: 'click',
                func: propertyManager.eventToggle
              }]
            }]
          });
          dom.appendChild(domChildCategory);

          for (var c = 0, lenC = configs[i].child.length; c < lenC; c++) {
            domChild = utils.builder(configs[i].child[c].model.render());
            configs[i].child[c].model.dom = domChild;
            domChildCategory.appendChild(domChild);
          }
        }
      }
    }
  },
  updateProp: function updateProp(prop) {
    if (propertyManager.selected) {
      var configs = propertyManager.config.configs;

      var _config = null,
          _configChild;

      for (var i = 0, len = configs.length; i < len; i++) {
        _config = configs[i];

        _config.model.update(prop);

        if (_config.child) {
          for (var c = 0, lenC = _config.child.length; c < lenC; c++) {
            _configChild = _config.child[c];

            _configChild.model.update(prop);
          }
        }
      }
    }
  },

  /**
   * init attribute view
   * @param {Element} parent 
   */
  render: function render(parent) {
    propertyManager.renderCategory(parent);
  }
};
module.exports = propertyManager;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CSS = __webpack_require__(0);

var Property = __webpack_require__(1);

var PropertyClass =
/*#__PURE__*/
function (_Property) {
  _inherits(PropertyClass, _Property);

  function PropertyClass() {
    _classCallCheck(this, PropertyClass);

    return _possibleConstructorReturn(this, _getPrototypeOf(PropertyClass).apply(this, arguments));
  }

  _createClass(PropertyClass, [{
    key: "event",
    value: function event(e) {
      var eventType = e.target.getAttribute('hb_set_event_type');

      if (eventType === 'add') {
        this.addEvent(e);
      } else {
        this.removeEvent(e);
      }
    }
  }, {
    key: "addEvent",
    value: function addEvent(e) {
      if (this.selected) {
        var selected = this.selected.dom;
        var nameDom = this.dom.querySelector('[hb_set_type=name]');
        var valueDom = this.dom.querySelector('[hb_set_type=value]');

        if (nameDom.value != '') {
          var option = document.createElement('option');
          option.setAttribute('value', nameDom.value);
          option.appendChild(document.createTextNode(nameDom.value));
          valueDom.appendChild(option);
          selected.classList.add(nameDom.value);
        }

        if (this.callback && typeof this.callback === 'function') {
          this.callback();
        }
      }
    }
  }, {
    key: "removeEvent",
    value: function removeEvent(e) {
      if (this.selected) {
        var selected = this.selected.dom;
        var valueDom = this.dom.querySelector('[hb_set_type=value]');

        for (var i = 0; i < valueDom.options.length; i++) {
          if (valueDom.options[i].selected == true) {
            selected.classList.remove(valueDom.options[i].value);
            valueDom.removeChild(valueDom.options[i]);
            i--;
          }
        }

        if (this.callback && typeof this.callback === 'function') {
          this.callback();
        }
      }
    }
  }, {
    key: "update",
    value: function update(prop) {
      valueDom = this.dom.querySelector('[hb_set_type=value]');

      if (prop["class"].length == 0) {
        while (valueDom.options.length != 0) {
          valueDom.options[0].remove();
        }
      } else {
        while (valueDom.options.length != 0) {
          valueDom.options[0].remove();
        }

        var option;

        for (var i = 0, len = prop["class"].length; i < len; i++) {
          if (prop["class"][i].indexOf('hb_selectable') == -1 && prop["class"][i].indexOf('hb_selected') == -1) {
            option = document.createElement('option');
            option.setAttribute('value', prop["class"][i]);
            option.appendChild(document.createTextNode(prop["class"][i]));
            valueDom.appendChild(option);
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var prop = this.property;

      var eventDetect = _get(_getPrototypeOf(PropertyClass.prototype), "eventDetect", this);

      return {
        element: 'div',
        attr: {
          "class": CSS.prop_body_div
        },
        child: [{
          //div for title
          element: 'div',
          attr: {
            "class": CSS.prop_body_title_div
          },
          child: [{
            element: 'label',
            attr: {
              "class": CSS.prop_body_title_label
            },
            text: prop.title
          }]
        }, {
          //div for property set
          element: 'div',
          attr: {
            "class": CSS.prop_body_set_div
          },
          child: [{
            element: 'input',
            attr: {
              type: 'text',
              "class": CSS.prop_body_set_text,
              hb_set_type: 'name'
            }
          }, {
            element: 'button',
            attr: {
              "class": CSS.prop_body_set_btn,
              title: 'Add class',
              hb_set_prop_name: prop.name,
              hb_set_event_type: 'add'
            },
            text: 'Add class',
            event: [{
              type: 'click',
              func: eventDetect
            }]
          }, {
            element: 'button',
            attr: {
              "class": CSS.prop_body_set_btn,
              title: 'Delete class',
              hb_set_prop_name: prop.name,
              hb_set_event_type: 'delete'
            },
            text: 'Delete class',
            event: [{
              type: 'click',
              func: eventDetect
            }]
          }, {
            element: 'select',
            attr: {
              "class": CSS.prop_body_set_multi_select,
              multiple: true,
              hb_set_type: 'value'
            }
          }]
        }]
      };
    }
  }]);

  return PropertyClass;
}(Property);

;
module.exports = PropertyClass;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CSS = __webpack_require__(0);

var Property = __webpack_require__(1);

var PropertyColor =
/*#__PURE__*/
function (_Property) {
  _inherits(PropertyColor, _Property);

  function PropertyColor() {
    _classCallCheck(this, PropertyColor);

    return _possibleConstructorReturn(this, _getPrototypeOf(PropertyColor).apply(this, arguments));
  }

  _createClass(PropertyColor, [{
    key: "event",
    value: function event(e) {
      if (this.selected) {
        var selected = this.selected.dom;
        var eventDom = e.target;

        if (eventDom.value) {
          selected.style[this.property.name] = eventDom.value;
        } else {
          selected.style[this.property.name] = null;
        }

        if (this.callback && typeof this.callback === 'function') {
          this.callback();
        }
      }
    }
  }, {
    key: "update",
    value: function update(prop) {
      var propContent;

      if (this.prop.attr_type === 'style') {
        propContent = prop.style[this.prop.name];
      } else {
        propContent = prop[this.prop.name];
      }

      valueDom = this.dom.querySelector('[hb_set_type=value]');

      if (!propContent) {
        //init property view
        valueDom.value = '#000000';
      } else {
        valueDom.value = propContent;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var prop = this.property;

      var eventDetect = _get(_getPrototypeOf(PropertyColor.prototype), "eventDetect", this);

      return {
        element: 'div',
        attr: {
          "class": CSS.prop_body_div
        },
        child: [{
          //div for title
          element: 'div',
          attr: {
            "class": CSS.prop_body_title_div
          },
          child: [{
            element: 'label',
            attr: {
              "class": CSS.prop_body_title_label
            },
            text: prop.title
          }]
        }, {
          //div for property set
          element: 'div',
          attr: {
            "class": CSS.prop_body_set_div
          },
          child: [{
            element: 'input',
            attr: {
              type: 'color',
              "class": CSS.prop_body_set_color,
              hb_set_type: 'value',
              hb_set_prop_name: prop.name
            },
            event: [{
              type: 'change',
              func: eventDetect
            }]
          }]
        }]
      };
    }
  }]);

  return PropertyColor;
}(Property);

;
module.exports = PropertyColor;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CSS = __webpack_require__(0);

var Property = __webpack_require__(1);

var PropertySelect =
/*#__PURE__*/
function (_Property) {
  _inherits(PropertySelect, _Property);

  function PropertySelect() {
    _classCallCheck(this, PropertySelect);

    return _possibleConstructorReturn(this, _getPrototypeOf(PropertySelect).apply(this, arguments));
  }

  _createClass(PropertySelect, [{
    key: "event",
    value: function event(e) {
      if (this.selected) {
        var selected = this.selected.dom;
        var eventDom = e.target;

        if (eventDom.value) {
          selected.style[this.property.name] = eventDom.value;
        } else {
          selected.style[this.property.name] = null;
        }

        if (this.callback && typeof this.callback === 'function') {
          this.callback();
        }
      }
    }
  }, {
    key: "update",
    value: function update(prop) {
      var propContent;

      if (this.prop.attr_type === 'style') {
        propContent = prop.style[this.prop.name];
      } else {
        propContent = prop[this.prop.name];
      }

      valueDom = this.dom.querySelector('[hb_set_type=value]');

      if (!propContent) {
        //init property view
        valueDom.value = valueDom.children[0].value;
      } else {
        valueDom.value = propContent;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var prop = this.property;

      var eventDetect = _get(_getPrototypeOf(PropertySelect.prototype), "eventDetect", this);

      var _render = {
        element: 'div',
        attr: {
          "class": CSS.prop_body_div
        },
        child: [{
          //div for title
          element: 'div',
          attr: {
            "class": CSS.prop_body_title_div
          },
          child: [{
            element: 'label',
            attr: {
              "class": CSS.prop_body_title_label
            },
            text: prop.title
          }]
        }, {
          //div for property set
          element: 'div',
          attr: {
            "class": CSS.prop_body_set_div
          },
          child: [{
            element: 'select',
            attr: {
              "class": CSS.prop_body_set_select,
              hb_set_type: 'value',
              hb_set_prop_name: prop.name
            },
            child: [],
            event: [{
              type: 'change',
              func: eventDetect
            }]
          }]
        }]
      };
      _select = _render.child[1].child[0];

      for (var i = 0, len = prop.options.length; i < len; i++) {
        _select.child.push({
          element: 'option',
          attr: {
            value: prop.options[i]
          },
          text: prop.options[i]
        });
      }

      return _render;
    }
  }, {
    key: "property",
    set: function set(prop) {
      this.prop = {};
      this.prop.name = prop.name;
      this.prop.title = prop.title;
      this.prop.attr_type = prop.attr_type;
      this.prop.category = prop.category;
      this.prop.options = prop.options;
    },
    get: function get() {
      return this.prop;
    }
  }]);

  return PropertySelect;
}(Property);

;
module.exports = PropertySelect;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CSS = __webpack_require__(0);

var Property = __webpack_require__(1);

var PropertyStyle2Save =
/*#__PURE__*/
function (_Property) {
  _inherits(PropertyStyle2Save, _Property);

  function PropertyStyle2Save() {
    _classCallCheck(this, PropertyStyle2Save);

    return _possibleConstructorReturn(this, _getPrototypeOf(PropertyStyle2Save).apply(this, arguments));
  }

  _createClass(PropertyStyle2Save, [{
    key: "event",
    value: function event(e) {
      if (this.selected) {
        var eventDom = e.target.previousSibling; //U.style2Css 수정 필요 -- selected를 인식하지 못하는 상태

        /*
        if(U.style2Css(eventDom.value)) {
          propertyStyle2Save.selected.setAttribute('style', '');
          var classText = propertyStyle2Save.selected.getAttribute('class');
          propertyStyle2Save.selected.setAttribute('class', classText + ' ' + value);
        }
        */

        if (this.callback && typeof this.callback === 'function') {
          this.callback();
        }
      }
    }
  }, {
    key: "update",
    value: function update(prop) {}
  }, {
    key: "render",
    //no update
    value: function render() {
      var prop = this.property;

      var eventDetect = _get(_getPrototypeOf(PropertyStyle2Save.prototype), "eventDetect", this);

      return {
        element: 'div',
        attr: {
          "class": CSS.prop_body_div
        },
        child: [{
          //div for title
          element: 'div',
          attr: {
            "class": CSS.prop_body_title_div
          },
          child: [{
            element: 'label',
            attr: {
              "class": CSS.prop_body_title_label
            },
            text: prop.title
          }]
        }, {
          //div for property set
          element: 'div',
          attr: {
            "class": CSS.prop_body_set_div
          },
          child: [{
            element: 'input',
            attr: {
              type: 'text',
              "class": CSS.prop_body_set_text,
              hb_set_type: 'value'
            }
          }, {
            element: 'button',
            attr: {
              "class": CSS.prop_body_set_btn,
              hb_set_prop_name: prop.name
            },
            text: 'Save',
            event: [{
              type: 'click',
              func: eventDetect
            }]
          }]
        }]
      };
    }
  }]);

  return PropertyStyle2Save;
}(Property);

;
module.exports = PropertyStyle2Save;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CSS = __webpack_require__(0);

var Property = __webpack_require__(1);

var PropertyText =
/*#__PURE__*/
function (_Property) {
  _inherits(PropertyText, _Property);

  function PropertyText() {
    _classCallCheck(this, PropertyText);

    return _possibleConstructorReturn(this, _getPrototypeOf(PropertyText).apply(this, arguments));
  }

  _createClass(PropertyText, [{
    key: "event",
    value: function event(e) {
      if (this.selected) {
        var selected = this.selected.dom;
        var eventDom = e.target;

        if (eventDom.value) {
          selected.setAttribute(this.property.name, eventDom.value);
        } else {
          selected.removeAttribute(this.property.name);
        }

        if (this.callback && typeof this.callback === 'function') {
          this.callback();
        }
      }
    }
  }, {
    key: "update",
    value: function update(prop) {
      var propContent;

      if (this.prop.attr_type === 'style') {
        propContent = prop.style[this.prop.name];
      } else {
        propContent = prop[this.prop.name];
      }

      valueDom = this.dom.querySelector('[hb_set_type=value]');

      if (!propContent) {
        //init property view
        valueDom.value = '';
      } else {
        valueDom.value = propContent;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var prop = this.property;

      var eventDetect = _get(_getPrototypeOf(PropertyText.prototype), "eventDetect", this);

      return {
        element: 'div',
        attr: {
          "class": CSS.prop_body_div
        },
        child: [{
          //div for title
          element: 'div',
          attr: {
            "class": CSS.prop_body_title_div
          },
          child: [{
            element: 'label',
            attr: {
              "class": CSS.prop_body_title_label
            },
            text: prop.title
          }]
        }, {
          //div for property set
          element: 'div',
          attr: {
            "class": CSS.prop_body_set_div
          },
          child: [{
            element: 'input',
            attr: {
              type: 'text',
              "class": CSS.prop_body_set_text,
              hb_set_type: 'value',
              hb_set_prop_name: prop.name
            },
            event: [{
              type: 'change',
              func: eventDetect
            }]
          }]
        }]
      };
    }
  }]);

  return PropertyText;
}(Property);

module.exports = PropertyText;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CSS = __webpack_require__(0);

var Property = __webpack_require__(1);

var PropertyTextUnit =
/*#__PURE__*/
function (_Property) {
  _inherits(PropertyTextUnit, _Property);

  function PropertyTextUnit() {
    _classCallCheck(this, PropertyTextUnit);

    return _possibleConstructorReturn(this, _getPrototypeOf(PropertyTextUnit).apply(this, arguments));
  }

  _createClass(PropertyTextUnit, [{
    key: "event",
    value: function event(e) {
      if (this.selected) {
        var eventDom = e.target;
        var valueDom, unitDom;

        if (eventDom.getAttribute('hb_set_type') === 'value') {
          valueDom = eventDom;
          unitDom = eventDom.nextSibling;
        } else {
          valueDom = eventDom.previousSibling;
          unitDom = eventDom;
        }

        var value,
            selected = this.selected.dom;

        if (valueDom.value != null && valueDom.value != '') {
          value = valueDom.value + unitDom.value;
          selected.style[this.property.name] = value;
        } else {
          selected.style[this.property.name] = null;
        }

        if (this.callback && typeof this.callback === 'function') {
          this.callback();
        }
      }
    }
  }, {
    key: "update",
    value: function update(prop) {
      var propContent;

      if (this.prop.attr_type === 'style') {
        propContent = prop.style[this.prop.name];
      } else {
        propContent = prop[this.prop.name];
      }

      valueDom = this.dom.querySelector('[hb_set_type=value]');
      unitDom = this.dom.querySelector('[hb_set_type=unit]');

      if (!propContent) {
        //init property view
        valueDom.value = '';
        unitDom.value = unitDom.children[0].value;
      } else {
        var unit = null;

        for (var i = 0, len = unitDom.children.length; i < len; i++) {
          unit = unitDom.children[i];

          if (propContent.indexOf(unit.value) != -1) {
            valueDom.value = propContent.replace(unit.value, '');
            unitDom.value = unit.value;
            break;
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var prop = this.property;

      var eventDetect = _get(_getPrototypeOf(PropertyTextUnit.prototype), "eventDetect", this);

      var _render = {
        element: 'div',
        attr: {
          "class": CSS.prop_body_div
        },
        child: [{
          //div for title
          element: 'div',
          attr: {
            "class": CSS.prop_body_title_div
          },
          child: [{
            element: 'label',
            attr: {
              "class": CSS.prop_body_title_label
            },
            text: prop.title
          }]
        }, {
          //div for property set
          element: 'div',
          attr: {
            "class": CSS.prop_body_set_div
          },
          child: [{
            element: 'input',
            attr: {
              type: 'text',
              "class": CSS.prop_body_set_text,
              hb_set_type: 'value',
              hb_set_prop_name: prop.name
            },
            event: [{
              type: 'change',
              func: eventDetect
            }]
          }, {
            element: 'select',
            attr: {
              "class": CSS.prop_body_set_select,
              hb_set_type: 'unit',
              hb_set_prop_name: prop.name
            },
            child: [],
            event: [{
              type: 'change',
              func: eventDetect
            }]
          }]
        }]
      };
      var _select = _render.child[1].child[1];

      for (var i = 0, len = prop.units.length; i < len; i++) {
        _select.child.push({
          element: 'option',
          attr: {
            value: prop.units[i]
          },
          text: prop.units[i]
        });
      }

      return _render;
    }
  }, {
    key: "property",
    set: function set(prop) {
      this.prop = {};
      this.prop.name = prop.name;
      this.prop.title = prop.title;
      this.prop.attr_type = prop.attr_type;
      this.prop.category = prop.category;
      this.prop.units = prop.units;
    },
    get: function get() {
      return this.prop;
    }
  }]);

  return PropertyTextUnit;
}(Property);

;
module.exports = PropertyTextUnit;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CSS = __webpack_require__(0);

var Property = __webpack_require__(1);

var PropertyTextAppend =
/*#__PURE__*/
function (_Property) {
  _inherits(PropertyTextAppend, _Property);

  function PropertyTextAppend() {
    _classCallCheck(this, PropertyTextAppend);

    return _possibleConstructorReturn(this, _getPrototypeOf(PropertyTextAppend).apply(this, arguments));
  }

  _createClass(PropertyTextAppend, [{
    key: "event",
    value: function event(e) {
      if (this.selected) {
        var selected = this.selected.dom;
        var eventDom = e.target;

        if (eventDom.value) {
          if (selected.firstChild) {
            if (selected.firstChild.nodeType != Node.TEXT_NODE) {
              selected.insertBefore(document.createTextNode(eventDom.value), selected.firstChild);
            } else {
              selected.firstChild.textContent = eventDom.value;
            }
          } else {
            selected.insertBefore(document.createTextNode(eventDom.value), selected.firstChild);
          }
        }

        if (this.callback && typeof this.callback === 'function') {
          this.callback();
        }
      }
    }
  }, {
    key: "update",
    value: function update(prop) {
      var valueDom = this.dom.querySelector('[hb_set_type=value]');

      if (prop.text) {
        valueDom.value = prop.text;
      } else {
        valueDom.value = '';
      }
    }
  }, {
    key: "render",
    value: function render() {
      var prop = this.property;

      var eventDetect = _get(_getPrototypeOf(PropertyTextAppend.prototype), "eventDetect", this);

      return {
        element: 'div',
        attr: {
          "class": CSS.prop_body_div
        },
        child: [{
          //div for title
          element: 'div',
          attr: {
            "class": CSS.prop_body_title_div
          },
          child: [{
            element: 'label',
            attr: {
              "class": CSS.prop_body_title_label
            },
            text: prop.title
          }]
        }, {
          //div for property set
          element: 'div',
          attr: {
            "class": CSS.prop_body_set_div
          },
          child: [{
            element: 'input',
            attr: {
              type: 'text',
              "class": CSS.prop_body_set_text,
              hb_set_type: 'value',
              hb_set_prop_name: prop.name
            },
            event: [{
              type: 'change',
              func: eventDetect
            }]
          }]
        }]
      };
    }
  }]);

  return PropertyTextAppend;
}(Property);

;
module.exports = PropertyTextAppend;

/***/ })
/******/ ]);