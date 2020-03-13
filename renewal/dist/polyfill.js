(
    function(global) {
        const g = global || this;

        //DataTransfer Polyfill for HtmlBuilder
        
        //이동할 Element
        g.DataTransfer.prototype.transferElement = undefined;
        g.DataTransfer.prototype.setTransferElement = function(element) {
            element

            g.DataTransfer.prototype.transferElement = element;
        };
        
        g.DataTransfer.prototype.getTransferElement = function() {
            return g.DataTransfer.prototype.transferElement;
        };

        //위치하는 순서
        g.DataTransfer.prototype.transferOrder = undefined;
        g.DataTransfer.prototype.setTransferOrder = function(element) {
            g.DataTransfer.prototype.transferOrder = element;
        };
        
        g.DataTransfer.prototype.getTransferOrder = function() {
            return g.DataTransfer.prototype.transferOrder;
        };

        //새로 생성될 Layout의 Option
        g.DataTransfer.prototype.transferOption = undefined;
        g.DataTransfer.prototype.setTransferOption = function(option) {
            g.DataTransfer.prototype.transferOption = option;
        };
        
        g.DataTransfer.prototype.getTransferOption = function() {
            return g.DataTransfer.prototype.transferOption;
        };

    }
)(this);