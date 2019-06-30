const utils = require('../utils/utils');
const Func = require('./model/func');

var funcManager = {
    func: null,

    init: function () {
        funcManager.func = Func;
    },

    setEvent: function (event) {
        funcManager.func.setEvent(event);
    },

    setPos: function (x, y) {
        funcManager.func.setPos(x, y);
    },

    render: function (parent) {
        var funcDom = utils.builder(funcManager.func.render());
        funcManager.func.dom = funcDom;
        parent.appendChild(funcDom);
    }
};

module.exports = funcManager;