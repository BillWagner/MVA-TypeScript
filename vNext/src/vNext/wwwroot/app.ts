/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'next-app'
})
@View({
    template: '<h1>Introducing {{ phrase }}</h1>'
})

interface ILabel {
    Id: number,
    Text: string,
    Color: string
}

// Component controller
class MyAppComponent {
    phrase: string;
    sequence: Array<ILabel>;

    constructor() {
        this.phrase = 'Angular 2.0 and TypeScript';
        this.sequence = [
            {
                Id: 0,
                Text: "All Good",
                Color: "#0F0"
            }, {
                Id: 1,
                Text: "Warning",
                Color: "#FF0"
            }, {
                Id: 2,
                Text: "Error",
                Color: "#F00"
            }, {
                Id: 3,
                Text: "Unkown",
                Color: "#00F"
            }, {
                Id: 4,
                Text: "Deferred",
                Color: "#AAA"
            }, {
                Id: 5,
                Text: "Never",
                Color: "#FFF"
            }, {
                Id: 6,
                Text: "Super Urgent",
                Color: "#0FF"
            }, {
                Id: 7,
                Text: "Need more Information",
                Color: "#F0F"
            }];
    }
}
bootstrap(MyAppComponent);
