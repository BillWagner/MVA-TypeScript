/// <reference path="label.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-resource.d.ts" />
var LabelApplication;
(function (LabelApplication) {
    LabelApplication.LabelEditor.editorModule.factory('labelDataService', ["$resource",
        function (r) {
            return new LabelDataService(r);
        }]);
    var LabelDataService = (function () {
        function LabelDataService($resource) {
            this.resource = $resource("api/Labels/:id", { id: "@id" }, {
                get: { method: "GET" },
                save: { method: "PUT" },
                create: { method: "POST" },
                query: { method: "GET", isArray: true },
                delete: { method: "DELETE" }
            });
            this.retrieveAllLabels();
        }
        LabelDataService.prototype.setUpdateHandler = function (evHandler) {
            this.onUpdate = evHandler;
        };
        LabelDataService.prototype.retrieveAllLabels = function () {
            var _this = this;
            this.resource.query().$promise.then(function (result) {
                _this.currentData = result;
                _this.onUpdate(_this.currentData);
            });
        };
        LabelDataService.prototype.updateLabel = function (label) {
            var _this = this;
            this.resource.save({ id: label.Id }, label, function () { return _this.retrieveAllLabels(); });
        };
        LabelDataService.prototype.createLabel = function (message, color) {
            var _this = this;
            this.resource.create({
                Id: 0,
                Color: color,
                Text: message
            }, function () { return _this.retrieveAllLabels(); });
        };
        LabelDataService.prototype.deleteLabel = function (id) {
            var _this = this;
            this.resource.delete({
                Id: id
            }, function () { return _this.retrieveAllLabels(); });
        };
        return LabelDataService;
    })();
    LabelApplication.LabelDataService = LabelDataService;
})(LabelApplication || (LabelApplication = {}));
//# sourceMappingURL=labelDataService.js.map