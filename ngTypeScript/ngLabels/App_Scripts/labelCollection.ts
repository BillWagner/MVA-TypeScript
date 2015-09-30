/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="labeleditor.ts" />

module LabelApplication {

    export class LabelCollection {
        constructor(
            private $scope: ng.IScope) {
        }

    }
    LabelEditor
        .editorModule
        .controller("labelCollection", ["$scope", LabelCollection]);
}
