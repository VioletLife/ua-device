;(function () {
    var _UA = window.UA || {};
    var UA = (function () {
        var self = this;
        var originUA = require("./lib/ua-device");
        self.executeProcess = function (ua) {
            if (ua) {
                return new originUA(ua);
            }
            else {
                return new originUA(navigator.userAgent);
            }
        };
        self.noConflict = function () {
            window.UA = _UA;
            return self;
        };
        return self;
    })();
    window.UA = UA;
})(window);

