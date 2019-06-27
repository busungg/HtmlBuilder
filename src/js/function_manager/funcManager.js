const utils = require('../utils/utils');
const Func = require('./model/func');

var funcManager = {
    func: null,
    
    init: function() {
        funcManager.func = new Func();
    },

    setEvent: function(event) {
        funcManager.func.event = event;
    },

    render: function(parent) {
        var funcDom = utils.builder(funcManager.func.render());
        funcManager.func.dom = funcDom;
        parent.appendChild(funcDom);
    }
};

module.exports = funcManager;