/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="labeleditor.ts" />

module LabelApplication {

    export class LabelCollection {
        constructor(
            private $scope: ng.IScope) {
        }

        sequence = [
            {
                "Id": 0,
                "Text": "All Good",
                "Color": "#0F0"
            }, {
                "Id": 1,
                "Text": "Warning",
                "Color": "#FF0"
            }, {
                "Id": 2,
                "Text": "Error",
                "Color": "#F00"
            }, {
                "Id": 3,
                "Text": "Unkown",
                "Color": "#00F"
            }, {
                "Id": 4,
                "Text": "Deferred",
                "Color": "#AAA"
            }, {
                "Id": 5,
                "Text": "Never",
                "Color": "#FFF"
            }, {
                "Id": 6,
                "Text": "Super Urgent",
                "Color": "#0FF"
            }, {
                "Id": 7,
                "Text": "Need more Information",
                "Color": "#F0F"
            }];
    }
    LabelEditor
        .editorModule
        .controller("labelCollection", ["$scope", LabelCollection]);
}
