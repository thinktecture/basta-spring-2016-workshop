import {bootstrap} from 'angular2/platform/browser';
import {RootComponent} from './root';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';

bootstrap(RootComponent, [HTTP_PROVIDERS]);