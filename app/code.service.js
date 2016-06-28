System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CodeService;
    return {
        setters:[],
        execute: function() {
            CodeService = (function () {
                function CodeService() {
                }
                CodeService.prototype.getCourse = function () {
                    return ["JS", "html", "css"];
                };
                return CodeService;
            }());
            exports_1("CodeService", CodeService);
        }
    }
});
//# sourceMappingURL=code.service.js.map