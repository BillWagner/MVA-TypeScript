/// <reference path="../scripts/typings/angularjs/angular-resource.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="labeleditor.ts" />
var LabelApplication;
(function (LabelApplication) {
    var LabelCollection = (function () {
        function LabelCollection($scope, service) {
            var _this = this;
            this.$scope = $scope;
            this.service = service;
            service.setUpdateHandler(function (r) { return _this.sequence = r; });
        }
        LabelCollection.prototype.update = function (label) {
            this.service.updateLabel(label);
        };
        LabelCollection.prototype.addColor = function () {
            this.service.createLabel(this._labelMessage, this._colorValue);
            this._colorValue = "#FFFFFF";
            this._labelMessage = "";
        };
        LabelCollection.prototype.deleteLabel = function (id) {
            this.service.deleteLabel(id);
        };
        Object.defineProperty(LabelCollection.prototype, "newColorValue", {
            get: function () {
                return this._colorValue;
            },
            set: function (value) {
                this._colorValue = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LabelCollection.prototype, "newLabelValue", {
            get: function () {
                return this._labelMessage;
            },
            set: function (value) {
                this._labelMessage = value;
            },
            enumerable: true,
            configurable: true
        });
        return LabelCollection;
    })();
    LabelApplication.LabelCollection = LabelCollection;
    LabelApplication.LabelEditor
        .editorModule
        .controller("labelCollection", ["$scope", "labelDataService", LabelCollection]);
})(LabelApplication || (LabelApplication = {}));
//# sourceMappingURL=labelCollection.js.map