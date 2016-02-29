System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FakeProductService;
    return {
        setters:[],
        execute: function() {
            FakeProductService = (function () {
                function FakeProductService() {
                    this._products = [
                        { id: 1, name: 'Product 1', description: 'Description 1' },
                        { id: 2, name: 'Product 2', description: 'Description 2' }
                    ];
                }
                FakeProductService.prototype.getAll = function () {
                    return this._products;
                };
                return FakeProductService;
            }());
            exports_1("FakeProductService", FakeProductService);
        }
    }
});
//# sourceMappingURL=fake.product.service.js.map