(
    function(global) {
        const g = global || this;

        //DataTransfer Polyfill for HtmlBuilder
        g.DataTransfer.prototype.transferElement = undefined;
        
        g.DataTransfer.prototype.setTransferElement = function(element) {
            element

            g.DataTransfer.prototype.transferElement = element;
        };
        
        g.DataTransfer.prototype.getTransferElement = function() {
            return g.DataTransfer.prototype.transferElement;
        };
    }
)(this);