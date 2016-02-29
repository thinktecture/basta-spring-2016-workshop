System.register(['angular2/core', '../../services/product.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, product_service_1;
    var ProductListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            }],
        execute: function() {
            ProductListComponent = (function () {
                function ProductListComponent(_productService) {
                    this._productService = _productService;
                }
                /**
                 *
                 * @returns {undefined}
                 */
                ProductListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._productService.getAll()
                        .subscribe(function (products) { return _this._products = products; });
                };
                ProductListComponent = __decorate([
                    core_1.Component({
                        selector: 'product-list',
                        templateUrl: 'app/components/products/list.html'
                    }), 
                    __metadata('design:paramtypes', [product_service_1.ProductService])
                ], ProductListComponent);
                return ProductListComponent;
            }());
            exports_1("ProductListComponent", ProductListComponent);
        }
    }
});
//# sourceMappingURL=list.js.map