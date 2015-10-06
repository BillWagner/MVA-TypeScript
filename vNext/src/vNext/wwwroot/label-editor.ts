import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'label-editor'
})
@View({
    template: '<h1>Welcome to {{title}}</h1>'
})
export class LabelEditor {
    title: string;

    constructor() {
        this.title = "Label Editor";
    }
}

bootstrap(LabelEditor); 
