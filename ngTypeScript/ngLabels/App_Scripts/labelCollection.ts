/// <reference path="../scripts/typings/angularjs/angular-resource.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="labeleditor.ts" />

module LabelApplication {

    export class LabelCollection {
        constructor(
            private $scope: ng.IScope,
            private service: LabelDataService) {
            service.setUpdateHandler((r) => this.sequence = r);
        }

        sequence: Array<LabelApplication.Rest.Label>;

        public update(label: LabelApplication.Rest.Label) {
            this.service.updateLabel(label);
        }

        public addColor() {
            this.service.createLabel(this._labelMessage, this._colorValue);
            this._colorValue = "#FFFFFF";
            this._labelMessage = "";
        }

        public deleteLabel(id: number) {
            this.service.deleteLabel(id);
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
