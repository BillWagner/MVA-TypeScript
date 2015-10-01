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
            this.sequence = this.service.createLabel(this._labelMessage, this._colorValue);
            this._colorValue = "#FFFFFF";
            this._labelMessage = "";
        }

        private _colorValue: string;

        get newColorValue() {
            return this._colorValue;
        }
        set newColorValue(value: string) {
            this._colorValue = value;
        }

        private _labelMessage: string;
        get newLabelValue() {
            return this._labelMessage;
        }
        set newLabelValue(value: string) {
            this._labelMessage = value;
        }
    }
    LabelEditor
        .editorModule
        .controller("labelCollection", ["$scope", "labelDataService", LabelCollection]);
}
