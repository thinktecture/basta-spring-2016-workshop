import {Component, provide} from 'angular2/core';
import {ProductService} from './services/product.service';
import {FakeProductService} from './services/fake.product.service';
import {ProductListComponent} from './components/products/list';

@Component({
    selector: 'root-app',
    templateUrl: 'app/root.html',
    directives: [ProductListComponent],
    providers: [
        provide(ProductService, {useClass: ProductService})
    ]
})
export class RootComponent{
    
}