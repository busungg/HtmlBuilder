const hb_option = require('./options/hb_option');
const css_option = require('./options/css_option');
const blocks_option = require('./options/blocks_option');
const attrs_option = require('./options/attrs_option');
const styles_option = require('./options/styles_option');

const options = {
    hb: hb_option,
    css: css_option,
    blocks: blocks_option,
    attrs: attrs_option,
    styles: styles_option
};

console.log(options);

module.exports = options;

