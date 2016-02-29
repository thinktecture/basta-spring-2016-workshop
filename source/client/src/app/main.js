System.register(['angular2/platform/browser', './root', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, root_1, http_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (root_1_1) {
                root_1 = root_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            browser_1.bootstrap(root_1.RootComponent, [http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=main.js.map