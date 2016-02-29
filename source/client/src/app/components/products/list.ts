import {Component, OnInit} from 'angular2/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../models/product';

@Component({
    selector: 'product-list',
    templateUrl: 'app/components/products/list.html'
})
export class ProductListComponent implements OnInit{

    private _products: Product[];

    constructor(private _productService: ProductService){

    }

    /**
     *
     * @returns {undefined}
     */
    public ngOnInit(): any {
        this._productService.getAll()
            .subscribe(
                products => this._products = products
            );
    }

}