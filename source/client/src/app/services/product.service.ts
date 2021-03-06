import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Product} from '../models/product';

@Injectable()
export class ProductService{
    
    constructor(private _http: Http){
        
    }
    
    public getAll() : Observable<Product[]>
    {
        return this._http.get('http://bastaspring2016.azurewebsites.net/api/products/list')
            .map(response => response.json());
    }
}