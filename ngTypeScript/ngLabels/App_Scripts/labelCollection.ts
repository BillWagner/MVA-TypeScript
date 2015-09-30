/// <reference path="../scripts/typings/angularjs/angular-resource.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="labeleditor.ts" />

module LabelApplication {

    export class LabelCollection {
        constructor(
            private $scope: ng.IScope,
            private service: LabelDataService) {
            this.sequence = service.retrieveAllLabels();
        }

        sequence: ng.resource.IResourceArray<ng.resource.IResource<LabelApplication.Rest.Label>>;

    }
    LabelEditor
        .editorModule
        .controller("labelCollection", ["$scope", "labelDataService", LabelCollection]);
}
