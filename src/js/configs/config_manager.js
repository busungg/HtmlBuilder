const hb = require('./configs/hb');
const css = require('./configs/css');
const blocks = require('./configs/blocks');
const attrs = require('./configs/attrs');
const styles = require('./configs/styles');

const configs = {
    hb: hb,
    css: css,
    blocks: blocks,
    attrs: attrs,
    styles: styles
};

console.log(configs);

module.exports = configs;

