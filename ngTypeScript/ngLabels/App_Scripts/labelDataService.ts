/// <reference path="label.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-resource.d.ts" />

module LabelApplication {
    import Rest = LabelApplication.Rest;
    import ngr = ng.resource;

    LabelEditor.editorModule.factory('labelDataService', ["$resource",
        (r) => {
            return new LabelDataService(r);
        }]);

    export class LabelDataService {
        private resource: ngr.IResourceClass<ngr.IResource<Rest.Label>>;

        constructor($resource: ngr.IResourceService) {
            this.resource = $resource(
                "api/Labels/:id",
                { id: "@id" },
                {
                    get: { method: "GET" },
                    save: { method: "PUT" },
                    query: { method: "GET", isArray: true },
                    delete: { method: "DELETE" }
                });
        }
    }
}
