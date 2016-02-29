import {Observable} from 'rxjs/Observable';
import {Product} from '../models/product';
export class FakeProductService {

    private _products: Array<Product> = [
        { id: 1, name: 'Product 1', description: 'Description 1' },
        { id: 2, name: 'Product 2', description: 'Description 2' }
    ]

    public getAll() {
        return this._products;
    }
}