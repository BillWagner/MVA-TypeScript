/// <reference path="label.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-resource.d.ts" />

module LabelApplication {
    import Rest = LabelApplication.Rest;
    import ngr = ng.resource;

    // create an interface for the resource type because I like to use 
    // create instead of save for new objects:
    interface ILabelResourceClass extends ngr.IResourceClass<ngr.IResource<Rest.Label>> {
        create(label: Rest.Label);
    }



    LabelEditor.editorModule.factory('labelDataService', ["$resource",
        (r) => {
            return new LabelDataService(r);
        }]);

    export class LabelDataService {
        private resource: ILabelResourceClass;

        constructor($resource: ngr.IResourceService) {
            this.resource = <ILabelResourceClass><any> $resource(
                "api/Labels/:id",
                { id: "@id" },
                {
                    get: { method: "GET" },
                    save: { method: "PUT" },
                    create: { method: "POST" },
                    query: { method: "GET", isArray: true },
                    delete: { method: "DELETE" }
                });
        }

        public retrieveAllLabels() {
            return this.resource.query();
        }

        public updateLabel(label: Rest.Label) {
            this.resource.save({ id: label.Id }, label);
        }

        public createLabel(message: string, color: string) {
            return this.resource.create({
                Id: 0,
                Color: color,
                Text: message
            });
        }

    }
}
