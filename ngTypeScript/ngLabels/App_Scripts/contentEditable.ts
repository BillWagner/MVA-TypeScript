/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="labeleditor.ts" />

module LabelApplication {
    class ContentEditable implements ng.IDirective {
        static factory(): ng.IDirectiveFactory {
            return () => new ContentEditable();
        }
    }
}