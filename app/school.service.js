System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SchoolService;
    return {
        setters:[],
        execute: function() {
            SchoolService = (function () {
                function SchoolService() {
                }
                SchoolService.prototype.getCourse = function () {
                    return ["Ladd Acres", "Brown", "Century"];
                };
                return SchoolService;
            }());
            exports_1("SchoolService", SchoolService);
        }
    }
});
//# sourceMappingURL=school.service.js.map