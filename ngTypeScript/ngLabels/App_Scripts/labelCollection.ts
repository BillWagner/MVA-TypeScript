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

        public update(label: LabelApplication.Rest.Label) {
            this.service.updateLabel(label);
        }

        public addColor() {
            var item: LabelApplication.Rest.Label =
                {
                    Id: 6,
                    Text: this.$scope.labelMessage,
                    Color: this.$scope.colorValue
                }
        }

    }
    LabelEditor
        .editorModule
        .controller("labelCollection", ["$scope", "labelDataService", LabelCollection]);
}
