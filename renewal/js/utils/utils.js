/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
const Utils = {
  // eslint-disable-next-line consistent-return
  builder(option) {
    try {
      const parent = document.createElement(option.element);

      if (option.attrs) {
        for (const key of Object.keys(option.attrs)) {
          if (option.attrs[key] !== null && option.attrs[key] !== undefined) {
            if (Array.isArray(option.attrs[key])) {
              let values = '';
              for (const item of option.attrs[key]) {
                values += `${item} `;
              }

              parent.setAttribute(key, values);
            } else {
              parent.setAttribute(key, option.attrs[key]);
            }
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
        for (let i = 0, len = option.event.length; i < len; i++) {
          parent.addEventListener(option.event[i].type, option.event[i].func);
        }
      }

      if (option.child) {
        for (let i = 0, len = option.child.length; i < len; i++) {
          parent.appendChild(Utils.builder(option.child[i]));
        }
      }

      return parent;
    } catch (err) {
      console.log(err);
    }
  },

  getJustTextContent(element) {
    const copyElement = element.cloneNode(true);

    while (copyElement.firstElementChild) {
      copyElement.removeChild(copyElement.firstElementChild);
    }

    return copyElement.textContent;
  },

  rgb2Hex(rgbStr) {
    const rgb = rgbStr.split('(')[1].split(')')[0].split(',');

    let r;
    let g;
    let b;
    r = parseInt(rgb[0], 10).toString(16);
    g = parseInt(rgb[1], 10).toString(16);
    b = parseInt(rgb[2], 10).toString(16);

    // eslint-disable-next-line prefer-template
    const hex =
      '#' +
      (r.length === 2 ? r : '0' + r) +
      (g.length === 2 ? g : '0' + g) +
      (b.length === 2 ? b : '0' + b);
    return hex;
  },

  beautifyHtml(parent, tab, tabIdx, html) {
    try {
      if (tabIdx === -1 && parent.children.length === 0) {
        return;
      }

      let tags;
      if (tabIdx !== -1) {
        const clone = parent.cloneNode(true);
        while (clone.firstElementChild) {
          clone.removeChild(clone.firstElementChild);
        }

        tags = clone.outerHTML.replace(/\n/g, '').split('</');
        html.result += `\n ${tab.repeat(tabIdx)}${tags[0]}`;
      }

      if (parent.children.length === 0) {
        if (tags.length === 2) {
          html.result += `\n${tab.repeat(tabIdx)}</${tags[1]}>`;
        }
        return;
      }

      for (let i = 0, len = parent.children.length; i < len; i++) {
        Utils.beautifyHtml(parent.children[i], tab, tabIdx + 1, html);
      }

      if (tabIdx !== -1) {
        if (tags.length === 2) {
          html.result += `\n${tab.repeat(tabIdx)}</${tags[1]}>`;
        }
      }
    } catch (err) {
      console.log(err);
    }
  },

  changeResolution(id, width, height) {
    try {
      const content = document.getElementById(id);

      if (width) {
        content.style.width = width;
      }

      if (height) {
        content.style.height = height;
      }
    } catch (err) {
      console.log(err);
    }
  },

  // eslint-disable-next-line consistent-return
  exportHtml(id) {
    try {
      let html = {
        result: ''
      };
      let content = document.getElementById(id);
      let tempContent = document.createElement('div');
      tempContent.setAttribute('style', 'position: absolute; x:0; y:-1000;');
      tempContent.innerHTML = content.innerHTML;

      document.body.appendChild(tempContent);
      Utils.beautifyHtml(tempContent, ' '.repeat(4), -1, html);
      document.body.removeChild(tempContent);

      if (html.result === '') {
        return '';
      }

      return html.result;
    } catch (err) {
      console.log(err);
    }
  },

  exportCss(id) {
    try {
      const cssElement = document.getElementById(id);
      const css = cssElement.textContent;

      return css;
    } catch (err) {
      console.log(err);
    }
  },

  /*
  obj2Css(css) {
    try {
      let cssText = '';
      const tab = ' '.repeat(4);

      cssText += `${css.title} {\n`;
      for (attr in css.content) {
        cssText += (tab + attr + ': ' + css.content[attr] + ';\n');
      }
      cssText += '}';

      return cssText;
    } catch (err) {
      console.log(err);
    }
  },
  */

  cssId: null

  /**
   * change style to css object
   * @param {string} name is css Name
   * @param {object} style is for css content
   */
  /*
  style2Css(name, style) {
    try {
      const cssElement = document.getElementById(utils.cssId);

      var cssObj = {
        title: '.' + name,
        content: {}
      };
      for (var attr in style) {
        if (style[attr] != null) {
          cssObj.content[attr] = style[attr];
        }
      }

      cssElement.appendChild(document.createTextNode(Utils.obj2Css(cssObj) + '\n\n'));
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
  */
};

export default Utils;
