/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'next-app'
})
@View({
    template: '<h1>Introducting {{ phrase }}</h1>'
})
// Component controller
class MyAppComponent {
    phrase: string;

    constructor() {
        this.phrase = 'Angular 2.0 and TypeScript';
    }
}
