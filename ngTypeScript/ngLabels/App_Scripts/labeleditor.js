/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
var LabelApplication;
(function (LabelApplication) {
    var LabelEditor = (function () {
        function LabelEditor() {
        }
        LabelEditor.editorModule = angular.module('labelEditor', ['ngResource']);
        return LabelEditor;
    })();
    LabelApplication.LabelEditor = LabelEditor;
})(LabelApplication || (LabelApplication = {}));
//# sourceMappingURL=labeleditor.js.map